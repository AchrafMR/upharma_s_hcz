<?php

namespace App\Controller\Mouvement\Demande;

use App\Entity\PEntite;
use App\Entity\PMagasins;
use App\Entity\PProduits;
use App\Entity\PStatut;
use App\Entity\PTypeOprt;
use App\Entity\TMsCommande;
use App\Entity\TMsCommandelg;
use App\Entity\TMsDemande;
use App\Service\UserOperation;
use App\Repository\PModuleRepository;
use App\Repository\PEntiteRepository;
use App\Repository\PMagasinsRepository;
use App\Repository\PPrNiveauProduitsRepository;
use Doctrine\ORM\EntityManagerInterface;
use App\Repository\PProfessionRepository;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Security\Core\Security;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use App\Repository\PProduitsRepository;
use App\Repository\TStStockstaticRepository;
use Symfony\Contracts\HttpClient\HttpClientInterface;
use App\Service\Hosix\HosixHczService;
use App\Service\Mouvement\CommandeService;
use App\Service\Mouvement\DemandeService;
use Symfony\Component\HttpFoundation\JsonResponse;

#[Route('/mouvement')]
class OperationPatientController extends AbstractController
{
    /**
     * @var Security
     */
    private $security;
    private $userOperation;
    private $em;
    private $client;
    private $hosixService;
    private $demandeService;
    

    public function __construct(DemandeService $demandeService ,HosixHczService $hosixService,Security $security, HttpClientInterface $client, UserOperation $userOperation, EntityManagerInterface $em)
    {
        $this->security = $security;
        $this->userOperation = $userOperation;
        $this->em = $em;
        $this->client = $client;
        $this->hosixService = $hosixService;
        $this->demandeService = $demandeService;
    }

    #[Route('/operation-patient', name: 'app_operation_patient_demande')]
    public function index(PPrNiveauProduitsRepository $niveauProduit ,PEntiteRepository $pEntiteRepository,PProduitsRepository $produitsRepository,PProfessionRepository $professionRep,PModuleRepository $moduleRepository,PMagasinsRepository $magasinsRepository,Request $request): Response 
    {
        $allModules = $moduleRepository->findBy(['active' => true]);
        $dossiers = $pEntiteRepository->findBy(['active' => true]);
        $actions = $this->userOperation->getOperations($this->getUser(), 'app_operation_patient_demande', $request);
        $professions = $professionRep->findAll();

        if (!$actions) {
            return $this->render('errors/403.html.twig');
        }
        $magasinSelected = $magasinsRepository->findSelectedMagasin($this->getUser());
        $products = $produitsRepository->findProductsWithTarificationAndSolde(null, $magasinSelected?->getId());
        $categories = $niveauProduit->findCategories();
        $magasinsDemandeur = $magasinsRepository->findDemandeurMagasins($this->getUser());
        $magasinsTraitement = $magasinsRepository->findTraitementMagasins($this->getUser());


        return $this->render('mouvement/OperationPatient/index.html.twig', [
            'professions' => $professions,
            'allModules' => $allModules,
            'dossiers' => $dossiers,
            'actions' => $actions,
            'products' => $products,
            'categories' => $categories,
            'magasinsDemandeur' => $magasinsDemandeur,
            'magasinsTraitement' => $magasinsTraitement,
            'defaultMagasin' => $magasinSelected,
        ]);
    }

    #[Route('/hosix/find-patient/{ipp}', name: 'hosix_find_patient', methods: ['GET'])]
    public function findPatient(string $ipp): JsonResponse
    {

            $fakeData = [
              
                    "ipp" => $ipp,
                    "di" => 256074,
                    "dossier" => "E0749246",
                    "patient" => "HAZDAK TEST",
                    "codeOrg" => "M03088",
                    "organisme" => "CNSS-AMO",
                    "grilleTarif" => "PAYANT09"
               
            ];

            return $this->json($fakeData);
        // $hosixPatients = $this->hosixService->findPatientByIPP($ipp);
        // // dd( $hosixPatients);
        // return $this->json($hosixPatients ?? []);
    }

    #[Route('/articles/search', name: 'article_search', methods: ['GET'])]
    public function searchArticles(Request $request, PProduitsRepository $repo): JsonResponse
    {
        $q = (string) $request->query->get('q', '');
        $emplacementId = (int) $request->query->get('emplacement_id');

        if (mb_strlen($q) < 3 || !$emplacementId) {
            return $this->json([]);
        }

        $rows = $repo->searchByTermAndMagasin($q, $emplacementId, 20);
        return $this->json($rows);
    }
    
    #[Route('/fetch-stock', name: 'mouvement_fetch-stock', methods: ['POST'])]
    public function fetchStock(Request $request, TStStockstaticRepository $repo): Response
    {
        $data = json_decode($request->getContent(), true);

        if (!$data || empty($data['lignes']) || empty($data['demandeur_id'])) {
            return $this->json([
                'status' => 'error',
                'message' => 'Paramètres invalides.',
            ], 400);
        }

        $demandeurId = (int) $data['demandeur_id'];
        $stocks = [];

        foreach ($data['lignes'] as $ligne) {
            $productId = (int) $ligne['id'];
            $stockRows = $repo->findStockByProductAndEmplacement($productId, $demandeurId);

            if (!empty($stockRows)) {
                $stocks[] = $stockRows[0]; // already contains produit_id and quantity
            }
        }

        return $this->json([
            'status' => 'success',
            'stocks' => $stocks,
        ]);
    }

#[Route('/save-commande', name: 'mouvement_save_commande', methods: ['POST'])]
public function saveDemande(Request $request): Response
{
    $data = json_decode($request->getContent(), true);
    // dd($data);
    if (!$data || empty($data['lignes'])) {
        return $this->json(['status' => 'error', 'message' => 'Aucune donnée reçue.'], 400);
    }

    $typeDemandeId = (int) ($data['type_demande'] ?? 0);
    $typeOperation = (int) ($data['type_operation'] ?? 0); 
    $typeDemande = $this->em->getRepository(PTypeOprt::class)->find($typeDemandeId);

    $commande = new TMsCommande();
    $commande->setCode(null);
    $commande->setDescription($data['description'] ?? null);
    $commande->setNomPatient($data['nom_patient'] ?? null);
    $commande->setDossierPatient($data['di'] ?? null);
    $commande->setIpp(isset($data['ipp']) ? (int)$data['ipp'] : null);
    $commande->setCreated(new \DateTime());


    $commande->setUrgent(!empty($data['urgent']));
    $commande->setActif(true);
    $commande->setPositionActuel('Crée');
    $commande->setTypeCommande($typeDemande);
    $typeDemandeId=(int) ($data['demande_id'] ?? null);
    $typeDemande = $this->em->getRepository(TMsDemande::class)->find($typeDemandeId);
    $commande->setTMsDemande($typeDemande);

    

    // Status & Position
    $status = $this->em->getRepository(PStatut::class)->find(9);
    $positionActuel = $this->em->getRepository(PStatut::class)->find(16);
    $commande->setStatus($status);
    $commande->setStPositionActuel($positionActuel);

    // Entité from session
    $dossierId = $request->getSession()->get('dossier');
    $dossier = $this->em->getRepository(PEntite::class)->find($dossierId);
    $commande->setPEntite($dossier);

    // User
    $user = $this->getUser();
    if ($user) {
        $commande->setUserCreated($user);
    }


    $demandeur = $this->em->getRepository(PMagasins::class)->find($data['demandeur_id'] ?? null);
    $commande->setDemandeurId($demandeur);
    
    $recepteur = $this->em->getRepository(PMagasins::class)->find(9);


    if ($typeOperation === 1) {
        $commande->setRecepteurId($recepteur);
    }else{
        $commande->setRecepteurId($demandeur);
    }


  
    // Recepteur
    

    $this->em->persist($commande);

    foreach ($data['lignes'] as $ligne) {
        $produit = $this->em->getRepository(PProduits::class)->find($ligne['id']);
        if (!$produit) continue;

        $unite = $produit->getPPrUnite();
        $remise = 0.0;
        $tva = 0.0;

        $quantite = abs((float) $ligne['quantity']);
        if (in_array($typeDemandeId, [3, 5])) {
            $quantite *= -1;
        }

        $prixUnitaire = $produit->getPrixVente() ?? 0;
        $montantHt = ($prixUnitaire * $quantite) - $remise;
        $montantTtc = $montantHt + ($montantHt * $tva / 100);

        $commandelg = new TMsCommandelg();
        $commandelg->setTmsCommande($commande);
        $commandelg->setPProduit($produit);
        $commandelg->setPPrUnite($unite);
        $commandelg->setQuantiteCommandee($quantite);
        $commandelg->setQuantiteServie(0);
        $commandelg->setQuantiteReste($quantite);
        $commandelg->setPrixUnitaire($prixUnitaire);
        $commandelg->setRemise($remise);
        $commandelg->setTva($tva);
        $commandelg->setMontantHt($montantHt);
        $commandelg->setMontantTtc($montantTtc);
        $commandelg->setObservation(null);
        $commandelg->setActif(true);

        $commande->addTMsCommandelg($commandelg);
        $this->em->persist($commandelg); 
    }
    $this->em->flush();
    // if ($typeOperation === 1) {
    //     $this->demandeService->createDemandeAlimentationFromCommande($commande);
    // }
    
    return $this->json([
        'status' => 'success',
        'message' => 'Commande enregistrée avec succès.',
        'commande_id' => $commande->getId(),
    ]);
}

}
