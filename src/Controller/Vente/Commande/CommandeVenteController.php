<?php

namespace App\Controller\Vente\Commande;

use App\Entity\PMagasins;
use App\Entity\PProduits;
use App\Entity\TMsCommande;
use App\Entity\TMsCommandelg;
use App\Entity\TMsLivraison;
use App\Entity\TMsLivraisonlg;
use App\Entity\TMsLivraisonobj;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;
use App\Repository\PModuleRepository;
use App\Repository\PEntiteRepository;
use App\Repository\PProfessionRepository;
use App\Repository\PMagasinsRepository;
use App\Repository\PProduitsRepository;
use App\Repository\TMsCommandeRepository;
use Symfony\Component\Security\Core\Security;
use App\Service\UserOperation;
use App\Service\Vente\DemandeService;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\HttpFoundation\JsonResponse;

#[Route('/vente')]
class CommandeVenteController extends AbstractController
{
    private UserOperation $userOperation;
    private $em;
    private $demandeService;

    public function __construct(UserOperation $userOperation,DemandeService $demandeService, EntityManagerInterface $em)
    {
        $this->userOperation = $userOperation;
        $this->em = $em;
        $this->demandeService = $demandeService;
    }

    #[Route('/gestion-commandes', name: 'vente_gestion_commandes_index')]
    public function index(Request $request,PEntiteRepository $pEntiteRepository,PProfessionRepository $professionRep,PModuleRepository $moduleRepository,PMagasinsRepository $magasinsRepository,TMsCommandeRepository $TMsCommandeRepository,PProduitsRepository $produitsRepository,): Response 
    {
        $allModules = $moduleRepository->findBy(array("active"=> true));
        $dossiers = $pEntiteRepository->findBy(array("active"=> true));
        $actions = $this->userOperation->getOperations($this->getUser(), 'vente_gestion_commandes_index', $request);
        $professions = $professionRep->findAll();

        if(!$actions){
            return $this->render('errors/403.html.twig');
        }
        $professions = $professionRep->findAll();
        $dossiers = $pEntiteRepository->findBy(['active' => true]);
        $allModules = $moduleRepository->findBy(['active' => true]);

        $magasinsDemandeur = $magasinsRepository->findDemandeurMagasins($this->getUser());
        $magasinsTraitement = $magasinsRepository->findTraitementMagasins($this->getUser());

        $commandes = $TMsCommandeRepository->findAllActifWithActiveLg();
        $products = $produitsRepository->findProductsWithTarificationAndSolde();

        $infosPatient = [
            ['ipp' => '1', 'nom' => 'achraf admin', 'dossier' => 'D00001'],
            ['ipp' => '10001', 'nom' => 'Ahmed El Mansouri', 'dossier' => 'D10001'],
            ['ipp' => '10002', 'nom' => 'Sara Ben Ali', 'dossier' => 'D10002'],
            ['ipp' => '10003', 'nom' => 'Youssef Karim', 'dossier' => 'D10003'],
        ];
        return $this->render('vente/GestionCommande/index.html.twig', [
            'professions' => $professions,
            'dossiers' => $dossiers,
            'allModules' => $allModules,
            'actions' => $actions,
            'magasinsDemandeur' => $magasinsDemandeur,
            'magasinsTraitement' => $magasinsTraitement,
            'commandes' => $commandes,
            'produits' => $products,
            'infosPatient' => $infosPatient,
        ]);
    }

    #[Route('/fetch-commandes', name: 'app_fetch_commandes', options: ['expose' => true], methods: 'GET')]
    public function fetchCommandes(Request $request, EntityManagerInterface $em): JsonResponse
    {
        $connection = $em->getConnection();
  
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

        $dossierId = $dossier->getId();
        // dd($dossierId);

        $draw = $request->query->get('draw');
        $start = (int) $request->query->get('start', 0);
        $length = (int) $request->query->get('length', 10);
        $search = $request->query->all('search')['value'] ?? '';
        $orderColumnIndex = (int) $request->query->all('order')[0]['column'] ?? 0;
        $orderDir = strtoupper($request->query->all('order')[0]['dir'] ?? 'DESC');

        $columns = [
            'd.id',
            'd.code',
            'demandeur.designation_access',
            'recepteur.designation_access',
            'd.ipp',
            'd.nom_patient',
            'SUM(lg.montant_ttc)',
            "CASE WHEN d.urgent = 1 THEN 'Urgent' ELSE 'Normal' END",
            'd.created',
            'd.position_actuel',
        ];
        $orderColumn = $columns[$orderColumnIndex] ?? 'd.id';

        $where = " AND d.p_entite_id = ?";
        $params = [$dossierId];

        if (!empty($search)) {
            $where .= " AND (
                d.code LIKE ? OR
                d.ipp LIKE ? OR
                d.position_actuel LIKE ? OR
                d.created LIKE ? OR
                d.nom_patient LIKE ? OR
                demandeur.designation_access LIKE ? OR
                recepteur.designation_access LIKE ?
            )";
            for ($i = 0; $i < 7; $i++) {
                $params[] = '%' . $search . '%';
            }
        }

        // Main data query
        $sql = "
            SELECT 
                d.id AS id,
                d.code AS commande_code,
                d.description,
                demandeur.designation_access AS demandeur,
                recepteur.designation_access AS recepteur,
                d.ipp AS ipp_patient,
                d.nom_patient,
                SUM(lg.montant_ttc) AS total_montant_ttc,
                CASE 
                    WHEN d.urgent = 1 THEN 'Urgent'
                    ELSE 'Normal'
                END AS niveau_urgence,
                d.created AS date_demmande,
                d.position_actuel
            FROM t_ms_commande d
            LEFT JOIN t_ms_commandelg lg ON lg.t_ms_commande_id = d.id AND lg.actif = 1
            LEFT JOIN p_magasins demandeur ON demandeur.id = d.demandeur_id
            LEFT JOIN p_magasins recepteur ON recepteur.id = d.recepteur_id
            WHERE d.actif = 1 AND d.type_commande_id = 2
            $where
            GROUP BY 
                d.id, d.code, d.description, d.ipp, d.nom_patient, d.created, 
                d.position_actuel, d.urgent, 
                demandeur.designation_access, recepteur.designation_access
            ORDER BY $orderColumn $orderDir
            OFFSET $start ROWS FETCH NEXT $length ROWS ONLY
        ";

        $stmt = $connection->prepare($sql);
        $results = $stmt->executeQuery($params)->fetchAllAssociative();

        // Count query (filtered)
        $countSql = "
            SELECT COUNT(DISTINCT d.id) as total
            FROM t_ms_commande d
            LEFT JOIN p_magasins demandeur ON demandeur.id = d.demandeur_id
            LEFT JOIN p_magasins recepteur ON recepteur.id = d.recepteur_id
            WHERE d.actif = 1 AND d.type_commande_id = 2 AND d.p_entite_id = ?
            " . (!empty($search) ? substr($where, strpos($where, 'AND (')) : '')
        ;

        $countStmt = $connection->prepare($countSql);
        $totalRecords = $countStmt->executeQuery($params)->fetchOne();

        // Get user action permissions
        $actions = $this->userOperation->getOperations($this->getUser(), 'vente_gestion_commandes_index', $request);
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

    #[Route('/edit-commande', name: 'vente_edit_commande', methods: ['POST'])]
    public function editCommande(Request $request): JsonResponse
    {
        $data = json_decode($request->getContent(), true);
        if (!$data || empty($data['commande_id'])) {
            return $this->json(['status' => 'error', 'message' => 'Données manquantes.'], 400);
        }
        // dd($data);
        $commande = $this->em->getRepository(TMsCommande::class)->find($data['commande_id']);
        if (!$commande) {
            return $this->json(['status' => 'error', 'message' => 'commande introuvable.'], 404);
        }

        // Update general info
        $commande->setDescription($data['description'] ?? null);
        $commande->setNomPatient($data['nom_patient'] ?? null);
        $commande->setDossierPatient($data['dossier_patient'] ?? null);
        $commande->setIpp((int)($data['ipp'] ?? 0));
        $commande->setUrgent(!empty($data['urgent']));

        $demandeur = $this->em->getRepository(PMagasins::class)->find($data['demandeur_id'] ?? null);
        $recepteur = $this->em->getRepository(PMagasins::class)->find($data['recepteur_id'] ?? null);
        $commande->setDemandeurId($demandeur);
        $commande->setRecepteurId($recepteur);
        $user = $this->getUser();
        $commande->setUserUpdated($user);
        // edited lignes
        foreach ($data['edited'] ?? [] as $row) {
            $ligne = $this->em->getRepository(TMsCommandelg::class)->find($row['commandelg_id']);
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
            $ligne->setQuantiteCommandee($quantite);
            $ligne->setQuantiteReste($quantite);
            $ligne->setPrixUnitaire($prixUnitaire);
            $ligne->setRemise($remise);
            $ligne->setTva($tva);
            $ligne->setMontantHt($montantHt);
            $ligne->setMontantTtc($montantTtc);
        }

        //  new lignes
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

            $ligne = new TMsCommandelg();
            $ligne->setTMsCommande($commande);
            $ligne->setPProduit($produit);
            $ligne->setPPrUnite($unite);
            $ligne->setQuantiteCommandee($quantite);
            $ligne->setQuantiteReste($quantite);
            $ligne->setPrixUnitaire($prixUnitaire);
            $ligne->setRemise($remise);
            $ligne->setTva($tva);
            $ligne->setMontantHt($montantHt);
            $ligne->setMontantTtc($montantTtc);
            $ligne->setActif(true);

            $this->em->persist($ligne);
        }

        //  deleted lignes
        foreach ($data['deleted'] ?? [] as $row) {
            $ligne = $this->em->getRepository(TMsCommandelg::class)->find($row['commandelg_id']);
            if ($ligne) {
                $ligne->setActif(false);
            }
        }
        $this->em->flush();

        return $this->json([
            'status' => 'success',
            'message' => 'Commande mise à jour avec succès.'
        ]);
    }

    #[Route('/update-position-commande', name: 'update_position_commande', methods: ['POST'])]
    public function updatePositionCommande(Request $request,EntityManagerInterface $em,TMsCommandeRepository $repo,Security $security): JsonResponse 
    {
        $data = json_decode($request->getContent(), true);
        $id = $data['id'] ?? null;
        $position = $data['position'] ?? null;

        if (!$id || !$position) {
            return new JsonResponse(['success' => false, 'message' => 'Données invalides'], 400);
        }

        $commande = $repo->find($id);
        if (!$commande) {
            return new JsonResponse(['success' => false, 'message' => 'Demande introuvable'], 404);
        }

        $user = $security->getUser();
        if (!$user) {
            return new JsonResponse(['success' => false, 'message' => 'Utilisateur non authentifié'], 403);
        }

        $commande->setPositionActuel($position);
        switch ($position) {
            case 'validée':
                $commande->setUserValider($user);
                // create demande alimentation if recepteur ≠ demandeur
                $newDemande = $this->demandeService->createDemandeAlimentationFromCommande($commande);
                if ($newDemande) {
                    return new JsonResponse([
                        'success' => true,
                        'message' => 'Commande générée et demande alimentation créée',
                        'demande_id' => $newDemande->getId()
                    ]);
                }
                break;
            case 'Générée':
                $commande->setUserGenerer($user);
                break;

            // case 'Crée': // dévalider
            //     $commande->setUserAnnuler($user);
            //     break;
        }

        $em->flush();

        return new JsonResponse(['success' => true]);
    }

    #[Route('/save-livraison', name: 'vente_save_livraison', methods: ['POST'])]
    public function saveLivraison(Request $request): JsonResponse
    {
        $commandeId = $request->request->get('commande_id');
        $quantites = $request->request->all('quantites');

        if (!$commandeId || empty($quantites)) {
            return new JsonResponse(['status' => 'error', 'message' => 'Données incomplètes.']);
        }

        $commande = $this->em->getRepository(TMsCommande::class)->find($commandeId);
        if (!$commande) {
            return new JsonResponse(['status' => 'error', 'message' => 'Commande introuvable.']);
        }

        $livraison = new TMsLivraison();
        $livraison->setTMsCommande($commande);
        $livraison->setDemandeurId($commande->getDemandeurId());
        $livraison->setRecepteurId($commande->getRecepteurId());
        $livraison->setIpp($commande->getIpp());
        $livraison->setNomPatient($commande->getNomPatient());
        $livraison->setDossierPatient($commande->getDossierPatient());
        $livraison->setPEntite($commande->getPEntite());
        $livraison->setCreated(new \DateTime());
        $livraison->setUrgent($commande->isUrgent());
        $livraison->setDescription($commande->getDescription());
        $livraison->setActif(true);
        $livraison->setPositionActuel('Crée');

        $allDelivered = true;
        $ligneProcessed = 0;

        foreach ($quantites as $ligneId => $qtyLivree) {
            $ligne = $this->em->getRepository(TMsCommandelg::class)->find($ligneId);

            if (!$ligne || $qtyLivree <= 0) {
                continue;
            }

            $ligneProcessed++;
            $qtyLivree = min($qtyLivree, $ligne->getQuantiteReste());
            $newServie = $ligne->getQuantiteServie() + $qtyLivree;
            $newReste = max(0, $ligne->getQuantiteCommandee() - $newServie);

            $livraisonLg = new TMsLivraisonlg();
            $livraisonLg->setTMsLivraison($livraison);
            $livraisonLg->setPProduit($ligne->getPProduit());
            $livraisonLg->setPPrUnite($ligne->getPPrUnite());
            $livraisonLg->setQuantiteLivree($qtyLivree);
            $livraisonLg->setPrixunitaire($ligne->getPrixUnitaire());
            $livraisonLg->setMontantTotal($qtyLivree * $ligne->getPrixUnitaire());
            $livraisonLg->setObservation($ligne->getObservation());
            $livraisonLg->setFlagSynchronisationLocale(false);
            $this->em->persist($livraisonLg);

           for ($i = 0; $i < $qtyLivree; $i++) {
                $livraisonObj = new TMsLivraisonobj();
                $livraisonObj->setTMsLivraisonLg($livraisonLg);
                $livraisonObj->setLot('DEFAULT');
                $livraisonObj->setDatePeremption(null);
                $livraisonObj->setQuantitieLivree(1); 
                $livraisonObj->setPrixTtc($ligne->getPrixUnitaire());
                $livraisonObj->setTotalTtc($ligne->getPrixUnitaire()); // 1 * unit price
                $livraisonObj->setCreated(new \DateTime());
                $livraisonObj->setFlagSynchronisationLocale(false);

                $this->em->persist($livraisonObj);
            }


            $ligne->setQuantiteServie($newServie);
            $ligne->setQuantiteReste($newReste);

            if ($newReste > 0) {
                $allDelivered = false;
            }
        }

        // No valid lignes treated
        if ($ligneProcessed === 0) {
            return new JsonResponse([
                'status' => 'error',
                'message' => 'Aucune ligne valide n\'a été traitée.'
            ]);
        }

        // Is this the first livraison for this commande?
        $isFirstLivraison = $this->em->getRepository(TMsLivraison::class)
            ->count(['tMsCommande' => $commande]) === 0;

        // Set livraison status
        $isCompletelyDeliveredFirstTime = $isFirstLivraison && $allDelivered;
        $livraison->setMultiRecp($isCompletelyDeliveredFirstTime ? 0 : 1);
        

        // Check if ALL lignes in commande are fully delivered
        $allLignesDelivered = true;
        foreach ($commande->getTMsCommandelgs() as $ligne) {
            if ($ligne->getQuantiteReste() > 0) {
                $allLignesDelivered = false;
                break;
            }
        }

        //  If all lignes served → push Générée
        if ($allLignesDelivered) {
            $commande->setPositionActuel('Générée');
            $commande->setUserGenerer($this->getUser());
        }

        $this->em->persist($livraison);
        $this->em->flush();

        return new JsonResponse(['status' => 'success', 'message' => 'Livraison enregistrée avec succès.']);
    }



}