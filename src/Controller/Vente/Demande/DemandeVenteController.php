<?php

namespace App\Controller\Vente\Demande;

use App\Entity\PEntite;
use App\Entity\PMagasins;
use App\Entity\PProduits;
use App\Entity\PTypeOprt;
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
use App\Service\Vente\CommandeService;
use App\Service\Vente\DemandeService;
use DateTime;
use Symfony\Component\Security\Core\Security;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\HttpFoundation\JsonResponse;

#[Route('/vente')]
class DemandeVenteController extends AbstractController
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

    #[Route('/gestion-demandes', name: 'vente_gestion_demandes_index')]
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
        $actions = $this->userOperation->getOperations($this->getUser(), 'vente_gestion_demandes_index', $request);
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
        $products = $produitsRepository->findProductsWithTarificationAndSolde();
        // dd($demandes);

        return $this->render('vente/GestionDemande/index.html.twig', [
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
        $connection = $em->getConnection();
        $draw = $request->query->get('draw');
        $start = (int) $request->query->get('start', 0);
        $length = (int) $request->query->get('length', 10);
        $search = $request->query->all('search')['value'] ?? '';
        $orderColumnIndex = (int) $request->query->all('order')[0]['column'] ?? 0;
        $orderDir = strtoupper($request->query->all('order')[0]['dir'] ?? 'DESC');

        // Column mapping
        $columns = [
            'd.id',
            'd.code',
            'demandeur.designation',
            'recepteur.designation',
            'd.ipp',
            'd.nom_patient',
            'SUM(lg.montant_ttc)',
            "CASE WHEN d.urgent = 1 THEN 'Urgent' ELSE 'Normal' END",
            'd.created',
            'd.position_actuel',
        ];

        $orderColumn = $columns[$orderColumnIndex] ?? 'd.id';

        // Search setup
        $where = '';
        $params = [];
        // CASE WHEN d.urgent = 1 THEN 'Urgent' ELSE 'Normal' END LIKE ? OR
        if (!empty($search)) {
            $where = " AND (
            d.code LIKE ? OR
            d.ipp LIKE ? OR
            d.position_actuel LIKE ? OR
            d.created LIKE ? OR
            d.nom_patient LIKE ? OR
            demandeur.designation LIKE ? OR
            recepteur.designation LIKE ?
          )";

            // Positional parameters
            for ($i = 0; $i <7; $i++) {
                $params[] = '%' . $search . '%';
            }
        }

        // Main query
        $sql = "
            SELECT 
                d.id AS id,
                d.code AS demande_code,
                d.description,
                demandeur.designation AS demandeur,
                recepteur.designation AS recepteur,
                d.ipp AS ipp_patient,
                d.nom_patient,
                SUM(lg.montant_ttc) AS total_montant_ttc,
                CASE 
                    WHEN d.urgent = 1 THEN 'Urgent'
                    ELSE 'Normal'
                END AS niveau_urgence,
                d.created AS date_demmande,
                d.position_actuel
            FROM t_ms_Demande d
            LEFT JOIN t_ms_demandelg lg ON lg.t_ms_demande_id = d.id AND lg.actif = 1
            LEFT JOIN pmagasins demandeur ON demandeur.id = d.demandeur_id
            LEFT JOIN pmagasins recepteur ON recepteur.id = d.recepteur_id
            WHERE d.actif = 1 AND d.type_demande_id=2
            $where
            GROUP BY 
                d.id, d.code,d.description, d.ipp, d.nom_patient, d.created, 
                d.position_actuel, d.urgent, 
                demandeur.designation, recepteur.designation
            ORDER BY $orderColumn $orderDir
            OFFSET $start ROWS FETCH NEXT $length ROWS ONLY
        ";

        $stmt = $connection->prepare($sql);
        $results = $stmt->executeQuery($params)->fetchAllAssociative();

        // Count query
        $countSql = "
            SELECT COUNT(DISTINCT d.id) as total
            FROM t_ms_Demande d
            LEFT JOIN pmagasins demandeur ON demandeur.id = d.demandeur_id
            LEFT JOIN pmagasins recepteur ON recepteur.id = d.recepteur_id
            $where
        ";
        $countStmt = $connection->prepare($countSql);
        $totalRecords = $countStmt->executeQuery($params)->fetchOne();

        $actions = $this->userOperation->getOperations($this->getUser(), 'vente_gestion_demandes_index', $request);
        $filteredActions = array_filter($actions, function($action) {
            return (!$action->isHorizontal());
        });
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
        $demande->setNomPatient($data['nom_patient'] ?? null);
        $demande->setDossierPatient($data['dossier_patient'] ?? null);
        $demande->setIpp((int)($data['ipp'] ?? 0));
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
    #[Route('/update-position', name: 'update_position', methods: ['POST'])]
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
        switch ($position) {
            case 'validée':
                $demande->setUserValider($user);
                break;
            case 'Générée':
                $demande->setUserGenerer($user);
                break;
            case 'Crée': // dévalider
                $demande->setUserAnnuler($user);
                break;
        }

        $em->flush();

        return new JsonResponse(['success' => true]);
    }

}
