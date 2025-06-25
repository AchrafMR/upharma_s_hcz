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

#[Route('/vente')]
class LivraisonController extends AbstractController
{
    private UserOperation $userOperation;
    private $em;
   

    public function __construct(UserOperation $userOperation, EntityManagerInterface $em)
    {
        $this->userOperation = $userOperation;
        $this->em = $em;
       
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


        $products = $produitsRepository->findProductsWithTarificationAndSolde();


        return $this->render('vente/GestionLivraison/index.html.twig', [
            'professions' => $professions,
            'dossiers' => $dossiers,
            'allModules' => $allModules,
            'actions' => $actions,
            'magasinsDemandeur' => $magasinsDemandeur,
            'magasinsTraitement' => $magasinsTraitement,
            'livraisons' => $livraisons,
            'produits' => $products,
           
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
            'l.ipp', 'l.nom_patient', 'l.created', 'l.position_actuel'
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
                l.position_actuel
            ')
            ->from(TMsLivraison::class, 'l')
            ->leftJoin('l.tMsLivraisonlgs', 'lg')
            ->leftJoin('l.demandeur_id', 'dem')
            ->leftJoin('l.recepteur_id', 'rec')
            ->where('l.actif = 1')
            ->andWhere('l.pEntite = :entite')
            ->setParameter('entite', $dossier)
            ->groupBy('l.id, l.code,l.description, l.ipp, l.nom_patient, l.created, l.position_actuel, l.urgent, dem.designationAccess, rec.designationAccess');

        if (!empty($search)) {
            $searchLower = strtolower($search);

            $qb->andWhere('
                LOWER(l.code) LIKE :search OR
                LOWER(l.description) LIKE :search OR
                LOWER(l.ipp) LIKE :search OR
                LOWER(l.created) LIKE :search OR
                LOWER(l.nom_patient) LIKE :search OR
                LOWER(l.position_actuel) LIKE :search OR
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
}
