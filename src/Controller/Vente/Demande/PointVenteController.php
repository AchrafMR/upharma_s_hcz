<?php

namespace App\Controller\Vente\Demande;


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
use Symfony\Component\HttpFoundation\JsonResponse;
#[Route('/vente')]
class PointVenteController extends AbstractController
{
    /**
     * @var Security
     */
    private $security;
    private $userOperation;
    private $em;

    public function __construct(Security $security, UserOperation $userOperation, EntityManagerInterface $em)
    {
       $this->security = $security;
       $this->userOperation = $userOperation;
       $this->em = $em;
    }

    #[Route('/point-vente', name: 'app_vente_demande_vente')]
    public function index(PPrNiveauProduitsRepository $niveauProduit ,PEntiteRepository $pEntiteRepository,PProduitsRepository $produitsRepository,PProfessionRepository $professionRep,PModuleRepository $moduleRepository,PMagasinsRepository $magasinsRepository,Request $request): Response 
    {
        $allModules = $moduleRepository->findBy(['active' => true]);
        $dossiers = $pEntiteRepository->findBy(['active' => true]);
        $actions = $this->userOperation->getOperations($this->getUser(), 'app_vente_demande_vente', $request);
        $professions = $professionRep->findAll();

        if (!$actions) {
            return $this->render('errors/403.html.twig');
        }
        $magasinSelected = $magasinsRepository->findSelectedMagasin($this->getUser());
        $products = $produitsRepository->findProductsWithTarificationAndSolde(null, $magasinSelected?->getId());
        $categories = $niveauProduit->findCategories(); 
        $magasinsDemandeur = $magasinsRepository->findDemandeurMagasins($this->getUser());
        $magasinsTraitement = $magasinsRepository->findTraitementMagasins($this->getUser());

        $infosPatient = [
            ['ipp' => '1', 'nom' => 'achraf admin', 'dossier' => ['D00001', 'D00002']],
            ['ipp' => '10001', 'nom' => 'Ahmed El Mansouri', 'dossier' => ['D10001']],
            ['ipp' => '10002', 'nom' => 'Sara Ben Ali', 'dossier' => ['D10002', 'D10005', 'D10009']],
            ['ipp' => '10003', 'nom' => 'Youssef Karim', 'dossier' => ['D10003']],
        ];

        return $this->render('vente/PointVente/index.html.twig', [
            'professions' => $professions,
            'allModules' => $allModules,
            'dossiers' => $dossiers,
            'actions' => $actions,
            'products' => $products,
            'categories' => $categories,
            'magasinsDemandeur' => $magasinsDemandeur,
            'magasinsTraitement' => $magasinsTraitement,
            'defaultMagasin' => $magasinSelected,
            'infosPatient' => $infosPatient,

        ]);
    }

    #[Route('/api/produits/{magasinId}', name: 'api_vente_produits_by_magasin', methods: ['GET'])]
    public function getProductsByMagasin(int $magasinId, PProduitsRepository $repo, PMagasinsRepository $magRepo): JsonResponse
    {
        $magasin = $magRepo->find($magasinId);
        // dd($magasin);
        $products = $repo->findProductsWithTarificationAndSolde(null, $magasinId);
        // dd($products);
        return $this->json($products);
    }
}
