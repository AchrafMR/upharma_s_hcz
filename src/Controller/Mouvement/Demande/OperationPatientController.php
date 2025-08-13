<?php

namespace App\Controller\Mouvement\Demande;


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
use Symfony\Contracts\HttpClient\HttpClientInterface;
use App\Service\Hosix\HosixHczService;
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
    

    public function __construct(HosixHczService $hosixService,Security $security, HttpClientInterface $client, UserOperation $userOperation, EntityManagerInterface $em)
    {
        $this->security = $security;
        $this->userOperation = $userOperation;
        $this->em = $em;
        $this->client = $client;
        $this->hosixService = $hosixService;
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

            // $fakeData = [
              
            //         "ipp" => $ipp,
            //         "di" => 256074,
            //         "dossier" => "E0749246",
            //         "patient" => "HAZDAK TEST",
            //         "codeOrg" => "M03088",
            //         "organisme" => "CNSS-AMO",
            //         "grilleTarif" => "PAYANT09"
               
            // ];

            // return $this->json($fakeData);
        $hosixPatients = $this->hosixService->findPatientByIPP($ipp);
        // dd( $hosixPatients);
        return $this->json($hosixPatients ?? []);
    }

    #[Route('/articles/search', name: 'article_search', methods: ['GET'])]
    public function searchArticles(Request $request, PProduitsRepository $repo): JsonResponse
    {
        $q = (string) $request->query->get('q', '');
        if (mb_strlen($q) < 3) {
            return $this->json([]); 
        }

        $rows = $repo->searchActiveByTerm($q, 20);
        return $this->json($rows);
    }

    #[Route('/fetch-stock', name: 'mouvement_fetch-stock', methods: ['POST'])]
    public function fetchStock(Request $request): Response
    {
        $data = json_decode($request->getContent(), true);
        if (!$data || empty($data['lignes'])) {
            return $this->json(['status' => 'error', 'message' => 'Aucune donnée reçue.'], 400);
        }

        return $this->json([
            'status' => 'success',
            'message' => 'search from stock.'
        ]);
    }


}
