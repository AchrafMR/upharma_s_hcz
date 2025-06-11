<?php

namespace App\Controller\Vente\Demande;


use App\Service\UserOperation;
use App\Repository\PModuleRepository;
use App\Repository\PEntiteRepository;
use App\Repository\PMagasinsRepository;
use Doctrine\ORM\EntityManagerInterface;
use App\Repository\PProfessionRepository;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Security\Core\Security;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use App\Repository\PProduitsRepository;

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
    public function index(PEntiteRepository $pEntiteRepository,PProduitsRepository $produitsRepository,PProfessionRepository $professionRep,PModuleRepository $moduleRepository,PMagasinsRepository $magasinsRepository,Request $request): Response 
    {
        $allModules = $moduleRepository->findBy(['active' => true]);
        $dossiers = $pEntiteRepository->findBy(['active' => true]);
        $actions = $this->userOperation->getOperations($this->getUser(), 'app_vente_demande_vente', $request);
        $professions = $professionRep->findAll();

        if (!$actions) {
            return $this->render('errors/403.html.twig');
        }

        $products = $produitsRepository->findProductsWithTarificationAndSolde();
        $categories = array_unique(array_column($products, 'category'));
        $magasinsDemandeur = $magasinsRepository->findDemandeurMagasins($this->getUser());
        $magasinsTraitement = $magasinsRepository->findTraitementMagasins($this->getUser());
        $magasinSelected = $magasinsRepository->findSelectedMagasin($this->getUser());

        $infosPatient = [
            ['ipp' => '1', 'nom' => 'achraf admin', 'dossier' => 'D00001'],
            ['ipp' => '10001', 'nom' => 'Ahmed El Mansouri', 'dossier' => 'D10001'],
            ['ipp' => '10002', 'nom' => 'Sara Ben Ali', 'dossier' => 'D10002'],
            ['ipp' => '10003', 'nom' => 'Youssef Karim', 'dossier' => 'D10003'],
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

}
