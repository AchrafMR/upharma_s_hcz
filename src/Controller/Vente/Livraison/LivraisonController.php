<?php

namespace App\Controller\Vente\Livraison;

use App\Entity\TMsLivraison;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;
use App\Repository\PModuleRepository;
use App\Repository\PEntiteRepository;
use App\Repository\PProfessionRepository;
use App\Repository\PMagasinsRepository;
use App\Repository\PProduitsRepository;
use App\Repository\TMsLivraisonRepository;
use App\Service\UserOperation;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\HttpFoundation\JsonResponse;
use App\Entity\PStatut;
use App\Service\stock\StockDynaService;


#[Route('/vente')]
class LivraisonController extends AbstractController
{
    private UserOperation $userOperation;
    private $em;
    private StockDynaService $stockDynaService;
   

    public function __construct(stockDynaService  $stockDynaService,UserOperation $userOperation, EntityManagerInterface $em)
    {
        $this->userOperation = $userOperation;
        $this->em = $em;
        $this->stockDynaService = $stockDynaService;
       
    }

    #[Route('/gestion-livraisons', name: 'vente_gestion_livrasions_index')]
    public function index(Request $request,PEntiteRepository $pEntiteRepository,PProfessionRepository $professionRep,PModuleRepository $moduleRepository,PMagasinsRepository $magasinsRepository,TMsLivraisonRepository $TMsLivraisonRepository,PProduitsRepository $produitsRepository,): Response 
    {
        $allModules = $moduleRepository->findBy(array("active"=> true));
        $dossiers = $pEntiteRepository->findBy(array("active"=> true));
        $actions = $this->userOperation->getOperations($this->getUser(), 'vente_gestion_livrasions_index', $request);
        $professions = $professionRep->findAll();

        if(!$actions){
            return $this->render('errors/403.html.twig');
        }
        $professions = $professionRep->findAll();
        $dossiers = $pEntiteRepository->findBy(['active' => true]);
        $allModules = $moduleRepository->findBy(['active' => true]);

        $livraisons = $TMsLivraisonRepository->findAllActifWithActive();
        $magasinsDemandeur = $magasinsRepository->findDemandeurMagasins($this->getUser());
        $magasinsTraitement = $magasinsRepository->findTraitementMagasins($this->getUser());


        return $this->render('vente/GestionLivraison/index.html.twig', [
            'professions' => $professions,
            'dossiers' => $dossiers,
            'allModules' => $allModules,
            'actions' => $actions,
            'magasinsDemandeur' => $magasinsDemandeur,
            'magasinsTraitement' => $magasinsTraitement,
            'livraisons' => $livraisons,
        ]);
    }

    #[Route('/fetch-livraisons', name: 'app_fetch_livraisons', options: ['expose' => true], methods: ['GET'])]
    public function fetchLivraison(Request $request, EntityManagerInterface $em): JsonResponse
    {
        $dossier = $request->getSession()->get('dossier');

        if (!$dossier || !method_exists($dossier, 'getId')) {
            return new JsonResponse([
                'draw' => $request->query->get('draw'),
                'recordsTotal' => 0,
                'recordsFiltered' => 0,
                'data' => [],
                'actions' => [],
                'error' => 'Dossier invalide'
            ]);
        }

        $draw = $request->query->get('draw');
        $start = (int) $request->query->get('start', 0);
        $length = (int) $request->query->get('length', 10);
        $search = $request->query->all('search')['value'] ?? '';
        $orderColumnIndex = $request->query->all('order')[0]['column'] ?? 0;
        $orderColumn = $request->query->all("columns")[$orderColumnIndex]['name'] ?? 'l.id';
        $orderDir = strtoupper($request->query->all('order')[0]['dir'] ?? 'DESC');
        
        $allowedOrderFields = [
            'l.id', 'l.code', 'dem.designationAccess', 'rec.designationAccess',
            'l.ipp', 'l.nom_patient', 'l.created', 'status.designation'
        ];
        if (!in_array($orderColumn, $allowedOrderFields)) {
            $orderColumn = 'l.id';
        }

        $qb = $em->createQueryBuilder();
        $qb->select('
                l.id AS id,
                l.code AS livraison_code,
                l.description AS description,
                dem.designationAccess AS demandeur,
                rec.designationAccess AS recepteur,
                l.ipp AS ipp_patient,
                l.nom_patient,
                SUM(lg.montant_total) AS total_montant_ttc,
                CASE WHEN l.urgent = true THEN \'Urgent\' ELSE \'Normal\' END AS niveau_urgence,
                l.created AS date_livraison,
                status.designation AS lv_status
            ')
            ->from(TMsLivraison::class, 'l')
            ->leftJoin('l.tMsLivraisonlgs', 'lg')
            ->leftJoin('l.demandeur_id', 'dem')
            ->leftJoin('l.recepteur_id', 'rec')
            ->leftJoin('l.status', 'status')
            ->where('l.actif = 1')
            ->andWhere('l.pEntite = :entite')
             ->andWhere('l.typeLivraison = 2')
            ->setParameter('entite', $dossier)
            ->groupBy('l.id, l.code,l.description, l.ipp, l.nom_patient, l.created, status.designation, l.urgent, dem.designationAccess, rec.designationAccess');

        if (!empty($search)) {
            $searchLower = strtolower($search);

            $qb->andWhere('
                LOWER(l.code) LIKE :search OR
                LOWER(l.description) LIKE :search OR
                LOWER(l.ipp) LIKE :search OR
                LOWER(l.created) LIKE :search OR
                LOWER(l.nom_patient) LIKE :search OR
                LOWER(status.designation) LIKE :search OR
                LOWER(dem.designationAccess) LIKE :search OR
                LOWER(rec.designationAccess) LIKE :search OR
                (:search LIKE \'%multiréception%\' AND l.multi_recp = true) OR
                (:search LIKE \'%monoréception%\' AND l.multi_recp = false) OR
                (:search LIKE \'%urgent%\' AND l.urgent = true) OR
                (:search LIKE \'%normal%\' AND l.urgent = false)
            ')
            ->setParameter('search', "%$searchLower%");
        }

        
        if ($orderColumn) {
            $qb->orderBy($orderColumn, $orderDir);
        }

       
        $qb->setFirstResult($start)->setMaxResults($length);
        $results = $qb->getQuery()->getResult();
        $results = array_map(function ($row) {
            if ($row['date_livraison'] instanceof \DateTimeInterface) {
                $row['date_livraison'] = $row['date_livraison']->format('Y-m-d H:i:s');
            }
            return $row;
        }, $results);


        $clonedQB = clone $qb;
        $clonedQB->resetDQLPart('select')
                ->resetDQLPart('orderBy')
                ->resetDQLPart('groupBy')
                ->select('COUNT(DISTINCT l.id)');

        $totalRecords = $clonedQB->getQuery()->getSingleScalarResult();

        $actions = $this->userOperation->getOperations($this->getUser(), 'vente_gestion_livrasions_index', $request);
        $filteredActions = array_filter($actions, fn($action) => !$action->isHorizontal());
        $allActions = array_map(function($action) {
            return [
                'sousModuleId'=> $action->getPSousModule()->getId(),
                'idOp'=> $action->getId(),
                'idName' => $action->getIdName(),
                'nom' => $action->getNom(),
                'className' => $action->getClassName(),
                'icon' => $action->getIcon(),
            ];
        }, $filteredActions);

        return new JsonResponse([
            'draw' => $draw,
            'recordsTotal' => $totalRecords,
            'recordsFiltered' => $totalRecords,
            'data' => $results,
            'actions' => $allActions,
        ]);
    }

#[Route('/update-status', name: 'vente_livraison_update_status', methods: ['POST'])]
public function updateLivraisonStatus(Request $request,EntityManagerInterface $em,): JsonResponse 
{
    $id = $request->request->get('id');
    $action = $request->request->get('action');

    if (!$id || !in_array($action, ['valider', 'generer'])) {
        return new JsonResponse(['status' => 'error', 'message' => 'Données invalides.']);
    }

    $livraison = $em->getRepository(TMsLivraison::class)->find($id);
    $position = $em->getRepository(PStatut::class)->find(21);
    
    try {
        if ($action === 'valider') {
            if ($livraison->getStatus()?->getId() !== 9) {
                return new JsonResponse(['status' => 'error', 'message' => 'Statut invalide pour validation.']);
            }

            $status = $em->getRepository(PStatut::class)->find(12);
            if (!$status) {
                return new JsonResponse(['status' => 'error', 'message' => 'Statut VALIDER non trouvé.']);
            }

            $demandeur = $livraison->getDemandeurId();
            $recepteur = $livraison->getRecepteurId();

            if ($demandeur && $recepteur && $demandeur->getId() !== $recepteur->getId()) {
                foreach ($livraison->getTMsLivraisonlgs() as $ligne) {
                    $this->stockDynaService->insertStockDynamique(
                        $ligne->getPProduit(),
                        $ligne->getPPrUnite(),
                        $ligne->getQuantiteLivree(),
                        $demandeur->getId(),
                        'sortie'
                    );
                }
            }

            $livraison->setStatus($status);
            $livraison->setStPositionActuel($position);
            $livraison->setPositionActuel('validée');
        }

        if ($action === 'generer') {
            $demandeur = $livraison->getDemandeurId();
            $recepteur = $livraison->getRecepteurId();

            if (
                $livraison->getStatus()?->getId() !== 12 ||
                !$demandeur || !$recepteur ||
                $demandeur->getId() !== $recepteur->getId()
            ) {
                return new JsonResponse(['status' => 'error', 'message' => 'Conditions non remplies pour générer.']);
            }

            $status = $em->getRepository(PStatut::class)->find(13);
            if (!$status) {
                return new JsonResponse(['status' => 'error', 'message' => 'Statut GÉNÉRER non trouvé.']);
            }

            $livraison->setStatus($status);
            $livraison->setStPositionActuel($position);
            $livraison->setPositionActuel('générée');
        }

        $livraison->setUpdated(new \DateTime());
        $em->flush();

        return new JsonResponse(['status' => 'success', 'message' => 'Statut mis à jour avec succès.']);
    } catch (\Throwable) {
        return new JsonResponse(['status' => 'error', 'message' => 'Erreur lors de la mise à jour du statut.']);
    }
}

}
