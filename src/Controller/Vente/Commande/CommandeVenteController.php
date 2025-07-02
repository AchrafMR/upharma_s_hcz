<?php

namespace App\Controller\Vente\Commande;

use App\Entity\PMagasins;
use App\Entity\PProduits;
use App\Entity\PStatut;
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
use App\Service\stock\StockDynaService;
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
    private StockDynaService $stockDynaService;

    public function __construct(stockDynaService  $stockDynaService ,UserOperation $userOperation,DemandeService $demandeService, EntityManagerInterface $em)
    {
        $this->userOperation = $userOperation;
        $this->em = $em;
        $this->demandeService = $demandeService;
        $this->stockDynaService = $stockDynaService;
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
        // dd($commandes);
        $products = $produitsRepository->findProductsWithTarificationAndSolde();

        $infosPatient = [
            ['ipp' => '1', 'nom' => 'achraf admin', 'dossier' => ['D00001', 'D00002']],
            ['ipp' => '10001', 'nom' => 'Ahmed El Mansouri', 'dossier' => ['D10001']],
            ['ipp' => '10002', 'nom' => 'Sara Ben Ali', 'dossier' => ['D10002', 'D10005', 'D10009']],
            ['ipp' => '10003', 'nom' => 'Youssef Karim', 'dossier' => ['D10003']],
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

    #[Route('/fetch-commandes', name: 'app_fetch_commandes', options: ['expose' => true], methods: ['GET'])]
    public function fetchCommandes(Request $request, EntityManagerInterface $em): JsonResponse
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
            'd.ipp', 'd.nomPatient', 'd.created', 'd.positionActuel'
        ];
        if (!in_array($orderColumn, $allowedOrderFields)) {
            $orderColumn = 'd.id';
        }

        $qb = $em->createQueryBuilder();
        $qb->select('
                d.id AS id,
                d.code AS commande_code,
                d.description,
                dem.designationAccess AS demandeur,
                rec.designationAccess AS recepteur,
                d.ipp AS ipp_patient,
                d.nomPatient,
                SUM(lg.montantTtc) AS total_montant_ttc,
                CASE WHEN d.urgent = true THEN \'Urgent\' ELSE \'Normal\' END AS niveau_urgence,
                d.created AS date_commande,
                d.positionActuel
            ')
            ->from(TMsCommande::class, 'd')
            ->leftJoin('d.tMsCommandelgs', 'lg')
            ->leftJoin('d.demandeur_id', 'dem')
            ->leftJoin('d.recepteur_id', 'rec')
            ->where('d.actif = 1')
            ->andWhere('d.typeCommande = 2')
            ->andWhere('d.pEntite = :entite')
            ->setParameter('entite', $dossier)
            ->groupBy('d.id, d.code, d.description, d.ipp, d.nomPatient, d.created, d.positionActuel, d.urgent, dem.designationAccess, rec.designationAccess');

        if (!empty($search)) {
            $searchLower = strtolower($search);
            $qb->andWhere('
                LOWER(d.code) LIKE :search OR
                LOWER(d.description) LIKE :search OR
                LOWER(d.ipp) LIKE :search OR
                LOWER(d.created) LIKE :search OR
                LOWER(d.nomPatient) LIKE :search OR
                LOWER(d.positionActuel) LIKE :search OR
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
            if ($row['date_commande'] instanceof \DateTimeInterface) {
                $row['date_commande'] = $row['date_commande']->format('Y-m-d H:i:s');
            }
            return $row;
        }, $results);

        $clonedQB = clone $qb;
        $clonedQB->resetDQLPart('select')
            ->resetDQLPart('orderBy')
            ->resetDQLPart('groupBy')
            ->select('COUNT(DISTINCT d.id)');

        $totalRecords = $clonedQB->getQuery()->getSingleScalarResult();

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
            $ligne->setQuantiteServie(0);
            $ligne->setPrixUnitaire($prixUnitaire);
            $ligne->setRemise($remise);
            $ligne->setTva($tva);
            $ligne->setMontantHt($montantHt);
            $ligne->setMontantTtc($montantTtc);
        }

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
            $ligne->setQuantiteServie(0);
            $ligne->setPrixUnitaire($prixUnitaire);
            $ligne->setRemise($remise);
            $ligne->setTva($tva);
            $ligne->setMontantHt($montantHt);
            $ligne->setMontantTtc($montantTtc);
            $ligne->setActif(true);

            $this->em->persist($ligne);
        }

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
    public function saveLivraison(Request $request,EntityManagerInterface $em): JsonResponse
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
        $status = $em->getRepository(PStatut::class)->find(9);
        $position_actuel=$em->getRepository(PStatut::class)->find(21);
        $livraison->setStatus($status);
        $livraison->setStPositionActuel($position_actuel);
        $livraison->setTypeLivraison($commande->getTypeCommande());

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

            // Call the service to insert stock dynamique
            $magasinId = $commande->getDemandeurId()->getId();
            $this->stockDynaService->insertStockDynamique(
                $ligne->getPProduit(),
                $ligne->getPPrUnite(),
                $qtyLivree,
                $magasinId,
                'sortie',
            );

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

        if ($ligneProcessed === 0) {
            return new JsonResponse([
                'status' => 'error',
                'message' => 'Aucune ligne valide n\'a été traitée.'
            ]);
        }

        $isFirstLivraison = $this->em->getRepository(TMsLivraison::class)
            ->count(['tMsCommande' => $commande]) === 0;

        $isCompletelyDeliveredFirstTime = $isFirstLivraison && $allDelivered;
        $livraison->setMultiRecp($isCompletelyDeliveredFirstTime ? 0 : 1);
        
        $allLignesDelivered = true;
        foreach ($commande->getTMsCommandelgs() as $ligne) {
            if ($ligne->getQuantiteReste() > 0) {
                $allLignesDelivered = false;
                break;
            }
        }

        if ($allLignesDelivered) {
            $commande->setPositionActuel('Générée');
            $commande->setUserGenerer($this->getUser());
        }

        $this->em->persist($livraison);
        $this->em->flush();

        return new JsonResponse(['status' => 'success', 'message' => 'Livraison enregistrée avec succès.']);
    }



}