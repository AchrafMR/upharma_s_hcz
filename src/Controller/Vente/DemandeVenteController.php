<?php

namespace App\Controller\Vente;

use App\Service\UserOperation;
use App\Repository\UserRepository;
use App\Repository\PActionRepository;
use App\Repository\PModuleRepository;
use App\Repository\PEntiteRepository;
use Doctrine\ORM\EntityManagerInterface;
use App\Repository\PProfessionRepository;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Security\Core\Security;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

#[Route('/vente')]
class DemandeVenteController extends AbstractController
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
    public function index(PEntiteRepository $pEntiteRepository , PProfessionRepository $professionRep,PModuleRepository $moduleRepository, UserRepository $userRep , PActionRepository $pActionRep, Request $request): Response
    {
        $allModules = $moduleRepository->findBy(array("active"=> true));
        $dossiers = $pEntiteRepository->findBy(array("active"=> true));
        $actions = $this->userOperation->getOperations($this->getUser(), 'app_vente_demande_vente', $request);
        $professions = $professionRep->findAll();

        if(!$actions){
            return $this->render('errors/403.html.twig');
        }
        
        // Simulating product data for demonstration purposes
        $products = [];

        for ($i = 1; $i <= 19; $i++) {
            $products[] = [
                'id' => $i,
                'name' => 'Product ' . $i,
                'price' => round(15 + $i * 1.5, 2),
                'quantity' => rand(1, 5)
            ];
        }
        $categories = ['Crèmes', 'Vitamines', 'Antibiotiques', 'Antiseptiques', 'Antiparasitaires'];



        return $this->render('vente/PointVente/index.html.twig', [
            'professions' => $professions,
            'allModules' => $allModules,
            'dossiers' => $dossiers,
            'actions' => $actions,
            'products'=>$products,
            'categories'=>$categories,
        ]);
    }
    #[Route('/gestion-vente', name: 'app_vente_gestion_vente')]
    public function gestionVente(
        Request $request,
        PEntiteRepository $pEntiteRepository,
        PProfessionRepository $professionRep,
        PModuleRepository $moduleRepository,
        UserRepository $userRep,
        PActionRepository $pActionRep
    ): Response {
        $actions = $this->userOperation->getOperations($this->getUser(), 'app_vente_gestion_vente', $request);
        
        // if (!$actions) {
        //     return $this->render('errors/403.html.twig');
        // }

        // Fetch data as needed for the view
        $professions = $professionRep->findAll();
        $dossiers = $pEntiteRepository->findBy(['active' => true]);
        $allModules = $moduleRepository->findBy(['active' => true]);

        // Placeholder sales data (could be replaced with real sales data from DB)
        $sales = [];

    for ($i = 1; $i <= 90; $i++) {
        $sales[] = [
            'id' => $i,
            'code' => 'CMD-' . str_pad($i, 4, '0', STR_PAD_LEFT),
            'client' => 'Client ' . $i, // A, B, C...
            'quantity' => rand(1, 5),
            'price' => rand(50, 150),
            'status' => ['Payée', 'En attente', 'Annulée'][rand(0, 2)],
        ];
    }

        return $this->render('vente/GestionVente/index.html.twig', [
            'professions' => $professions,
            'dossiers' => $dossiers,
            'allModules' => $allModules,
            'actions' => $actions,
            'sales' => $sales,
        ]);
    }

}
