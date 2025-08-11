<?php

namespace App\Controller\Stock\Transfert;

use App\Entity\PEntite;
use App\Entity\PMagasins;
use App\Entity\PProduits;
use App\Entity\PStatut;
use App\Entity\TMsDemande;
use App\Entity\TMsDemandelg;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;
use App\Repository\PModuleRepository;
use App\Repository\PEntiteRepository;
use App\Repository\PProfessionRepository;
use App\Repository\PMagasinsRepository;
use App\Repository\PProduitsRepository;
use App\Repository\TMsDemandeRepository;
use App\Service\UserOperation;
use App\Service\Mouvement\CommandeService;
use App\Service\Mouvement\DemandeService;
use Symfony\Component\Security\Core\Security;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\HttpFoundation\JsonResponse;

#[Route('/transfert')]
class TransfertController extends AbstractController
{
    /**
     * @var Security
     */
    private $security;
    private $userOperation;
    private $em;
    private $commandeService;

    public function __construct(Security $security,CommandeService $commandeService, UserOperation $userOperation, EntityManagerInterface $em)
    {
       $this->security = $security;
       $this->userOperation = $userOperation;
       $this->em = $em;
       $this->commandeService = $commandeService;
    }

    #[Route('/', name: 'app_gestion_transfert_index')]
    public function index(
        Request $request,
        PEntiteRepository $pEntiteRepository,
        PProfessionRepository $professionRep,
        PModuleRepository $moduleRepository,
        PMagasinsRepository $magasinsRepository,
        TMsDemandeRepository $TMsDemandeRepository,
        PProduitsRepository $produitsRepository,
    ): Response {
        $allModules = $moduleRepository->findBy(array("active"=> true));
        $dossiers = $pEntiteRepository->findBy(array("active"=> true));
        $actions = $this->userOperation->getOperations($this->getUser(), 'app_gestion_transfert_index', $request);
        $professions = $professionRep->findAll();

        if(!$actions){
            return $this->render('errors/403.html.twig');
        }
        $professions = $professionRep->findAll();
        $dossiers = $pEntiteRepository->findBy(['active' => true]);
        $allModules = $moduleRepository->findBy(['active' => true]);


        $magasinsDemandeur = $magasinsRepository->findDemandeurMagasins($this->getUser());
        $magasinsTraitement = $magasinsRepository->findTraitementMagasins($this->getUser());

        $demandes = $TMsDemandeRepository->findAllActifWithActiveLg();
        // dd($demandes);
        $firstMagasinDemandeur = !empty($magasinsDemandeur) ? $magasinsDemandeur[0] : null;
        $products = $produitsRepository->findProductsWithTarificationAndSolde(null, $firstMagasinDemandeur?->getId());
        // dd($demandes);

        return $this->render('stock/GestionTransfert/index.html.twig', [
            'professions' => $professions,
            'dossiers' => $dossiers,
            'allModules' => $allModules,
            'actions' => $actions,
            'magasinsDemandeur' => $magasinsDemandeur,
            'magasinsTraitement' => $magasinsTraitement,
            'demandes' => $demandes,
            'produits' => $products,
        ]);
    }

    #[Route('/fetch-demandes', name: 'app_fetch_demandes', options: ['expose' => true], methods: 'GET')]
    public function fetchDemandes(Request $request, EntityManagerInterface $em): JsonResponse
    {
        $dossier = $request->getSession()->get('dossier');

        if (!$dossier || !method_exists($dossier, 'getId')) {
            return new JsonResponse([
                'draw' => (int) $request->query->get('draw'),
                'recordsTotal' => 0,
                'recordsFiltered' => 0,
                'data' => [],
                'actions' => [],
                'error' => 'Dossier invalide'
            ]);
        }

        $draw = (int) $request->query->get('draw');
        $start = (int) $request->query->get('start', 0);
        $length = (int) $request->query->get('length', 10);
        $search = $request->query->all('search')['value'] ?? '';
        $orderColumnIndex = $request->query->all('order')[0]['column'] ?? 0;
        $orderColumn = $request->query->all('columns')[$orderColumnIndex]['name'] ?? 'd.id';
        $orderDir = strtoupper($request->query->all('order')[0]['dir'] ?? 'DESC');

        $allowedOrderFields = [
            'd.id', 'd.code', 'dem.designationAccess', 'rec.designationAccess',
            'd.created', 'status.designation'
        ];
        if (!in_array($orderColumn, $allowedOrderFields)) {
            $orderColumn = 'd.id';
        }

        $qb = $em->createQueryBuilder();
        $qb->select('
                d.id AS id,
                d.code AS demande_code,
                d.description,
                dem.designationAccess AS demandeur,
                rec.designationAccess AS recepteur,
                SUM(lg.montant_ttc) AS total_montant_ttc,
                CASE WHEN d.urgent = true THEN \'Urgent\' ELSE \'Normal\' END AS niveau_urgence,
                d.created AS date_demande,
                status.designation AS cm_status
            ')
            ->from(TMsDemande::class, 'd')
            ->leftJoin('d.tMsDemandelgs', 'lg')
            ->leftJoin('d.demandeur_id', 'dem')
            ->leftJoin('d.recepteur_id', 'rec')
            ->leftJoin('d.status', 'status')
            ->where('d.actif = 1')
            ->andWhere('d.typeDemande = 4  or d.typeDemande = 5')
            ->andWhere('d.pEntite = :entite')
            ->setParameter('entite', $dossier)
            ->groupBy('d.id, d.code, d.description, d.created, status.designation, d.urgent, dem.designationAccess, rec.designationAccess');

        if (!empty($search)) {
            $searchLower = strtolower($search);
            $qb->andWhere('
                LOWER(d.code) LIKE :search OR
                LOWER(d.description) LIKE :search OR
                LOWER(d.created) LIKE :search OR
                LOWER(status.designation) LIKE :search OR
                LOWER(dem.designationAccess) LIKE :search OR
                LOWER(rec.designationAccess) LIKE :search OR
                (:search LIKE \'%urgent%\' AND d.urgent = true) OR
                (:search LIKE \'%normal%\' AND d.urgent = false)
            ')
            ->setParameter('search', "%$searchLower%");
        }

        $qb->orderBy($orderColumn, $orderDir)
        ->setFirstResult($start)
        ->setMaxResults($length);

        $results = $qb->getQuery()->getResult();
        $results = array_map(function ($row) {
            if ($row['date_demande'] instanceof \DateTimeInterface) {
                $row['date_demande'] = $row['date_demande']->format('Y-m-d H:i:s');
            }
            return $row;
        }, $results);

        $clonedQB = clone $qb;
        $clonedQB->resetDQLPart('select')
            ->resetDQLPart('orderBy')
            ->resetDQLPart('groupBy')
            ->select('COUNT(DISTINCT d.id)');

        $totalRecords = $clonedQB->getQuery()->getSingleScalarResult();

        $actions = $this->userOperation->getOperations($this->getUser(), 'app_gestion_transfert_index', $request);
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
            'actions' => $allActions
        ]);
    }
    
    #[Route('/save-demande', name: 'vente_save_demande', methods: ['POST'])]
    public function saveDemande(Request $request, DemandeService $demandeService): Response
    {
        $data = json_decode($request->getContent(), true);

        // dd($data);
        if (!$data || empty($data['lignes'])) {
            return $this->json(['status' => 'error', 'message' => 'Aucune donnée reçue.'], 400);
        }

        $demande = $demandeService->createDemande($data,$request);

        return $this->json([
            'status' => 'success',
            'message' => 'Demande enregistrée avec succès.',
            'demande_id' => $demande->getId()
        ]);
    }

    #[Route('/edit-demande', name: 'vente_edit_demande', methods: ['POST'])]
    public function editDemande(Request $request): JsonResponse
    {
        $data = json_decode($request->getContent(), true);
        if (!$data || empty($data['demande_id'])) {
            return $this->json(['status' => 'error', 'message' => 'Données manquantes.'], 400);
        }
        // dd($data);
        $demande = $this->em->getRepository(TMsDemande::class)->find($data['demande_id']);
        if (!$demande) {
            return $this->json(['status' => 'error', 'message' => 'Demande introuvable.'], 404);
        }

        // Update general info
        $demande->setDescription($data['description'] ?? null);
        $demande->setUrgent(!empty($data['urgent']));

        $demandeur = $this->em->getRepository(PMagasins::class)->find($data['demandeur_id'] ?? null);
        $recepteur = $this->em->getRepository(PMagasins::class)->find($data['recepteur_id'] ?? null);
        $demande->setDemandeurId($demandeur);
        $demande->setRecepteurId($recepteur);
        $user = $this->getUser();
        $demande->setUserUpdated($user);


        // EDITED lignes
        foreach ($data['edited'] ?? [] as $row) {
            $ligne = $this->em->getRepository(TMsDemandelg::class)->find($row['demandelg_id']);
            $produit = $this->em->getRepository(PProduits::class)->find($row['produit_id']);

            if (!$ligne || !$produit) continue;

            $unite = $produit->getPPrUnite();
            $quantite = (float) $row['quantite'];
            $remise = (float) ($row['remise'] ?? 0);
            $tva = (float) ($row['tva'] ?? 0);
            $prixUnitaire = $produit->getPPrTarifications()->first()?->getPrixVentePpv() ?? 0;
            $montantHt = ($prixUnitaire * $quantite) - $remise;
            $montantTtc = $montantHt + ($montantHt * $tva / 100);

            $ligne->setPProduit($produit);
            $ligne->setPPrUnite($unite);
            $ligne->setQuantite($quantite);
            $ligne->setPrixUnitaire($prixUnitaire);
            $ligne->setRemise($remise);
            $ligne->setTva($tva);
            $ligne->setMontantHt($montantHt);
            $ligne->setMontantTtc($montantTtc);
        }

        //  NEW lignes
        foreach ($data['added'] ?? [] as $row) {
            $produit = $this->em->getRepository(PProduits::class)->find($row['produit_id']);
            if (!$produit) continue;

            $unite = $produit->getPPrUnite();
            $quantite = (float) $row['quantite'];
            $remise = (float) ($row['remise'] ?? 0);
            $tva = (float) ($row['tva'] ?? 0);
            $prixUnitaire = $produit->getPPrTarifications()->first()?->getPrixVentePpv() ?? 0;
            $montantHt = ($prixUnitaire * $quantite) - $remise;
            $montantTtc = $montantHt + ($montantHt * $tva / 100);

            $ligne = new TMsDemandelg();
            $ligne->setTmsDemande($demande);
            $ligne->setPProduit($produit);
            $ligne->setPPrUnite($unite);
            $ligne->setQuantite($quantite);
            $ligne->setPrixUnitaire($prixUnitaire);
            $ligne->setRemise($remise);
            $ligne->setTva($tva);
            $ligne->setMontantHt($montantHt);
            $ligne->setMontantTtc($montantTtc);
            $ligne->setActif(true);

            $this->em->persist($ligne);
        }

        //  DELETED lignes
        foreach ($data['deleted'] ?? [] as $row) {
            $ligne = $this->em->getRepository(TMsDemandelg::class)->find($row['demandelg_id']);
            if ($ligne) {
                $ligne->setActif(false);
            }
        }
        $this->em->flush();

        return $this->json([
            'status' => 'success',
            'message' => 'Demande mise à jour avec succès.'
        ]);
    }

    #[Route('/update-position-demande', name: 'update_position', methods: ['POST'])]
    public function updatePosition(Request $request,EntityManagerInterface $em,TMsDemandeRepository $repo,Security $security): JsonResponse 
    {
        $data = json_decode($request->getContent(), true);
        $id = $data['id'] ?? null;
        $position = $data['position'] ?? null;

        if (!$id || !$position) {
            return new JsonResponse(['success' => false, 'message' => 'Données invalides'], 400);
        }

        $demande = $repo->find($id);
        if (!$demande) {
            return new JsonResponse(['success' => false, 'message' => 'Demande introuvable'], 404);
        }

        $user = $security->getUser();
        if (!$user) {
            return new JsonResponse(['success' => false, 'message' => 'Utilisateur non authentifié'], 403);
        }

        $demande->setPositionActuel($position);
        $demande->setPositionActuel($position);
        $positionActuel = $em->getRepository(PStatut::class)->find(16);
        $demande->setStPositionActuel($positionActuel);        
        switch ($position) {
            case 'validée':
                $demande->setUserValider($user);
                $status = $em->getRepository(PStatut::class)->find(12);
                $demande->setStatus($status);
                break;
        }

        $em->flush();

        return new JsonResponse(['success' => true]);
    }

}
