<?php

namespace App\Controller\Dashboard;

use App\Repository\PEntiteRepository;
use App\Repository\PModuleRepository;
use App\Repository\PProfessionRepository;
use App\Service\UserOperation;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Doctrine\DBAL\Connection;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\HttpFoundation\Request;

class DashboardController extends AbstractController
{
    private UserOperation $userOperation;
    private $em;
   
    public function __construct(UserOperation $userOperation, EntityManagerInterface $em)
    {
        $this->userOperation = $userOperation;
        $this->em = $em;
    }
    #[Route('/tableau-de-bord', name: 'app_tableau_de_bord')]
    public function index(Connection $conn,Request $request,PEntiteRepository $pEntiteRepository,PProfessionRepository $professionRep,PModuleRepository $moduleRepository): Response
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
        // Raw SQL queries
        $totalDemandes = $conn->fetchOne("SELECT COUNT(DISTINCT d.id) FROM t_ms_commande d WHERE d.actif = 1");
        $validatedDemandes = $conn->fetchOne("SELECT COUNT(DISTINCT d.id) FROM t_ms_commande d WHERE d.actif = 1 AND d.position_actuel = 'validée'");
        $generatedDemandes = $conn->fetchOne("SELECT COUNT(DISTINCT d.id) FROM t_ms_commande d WHERE d.actif = 1 AND d.position_actuel = 'Générée'");

        return $this->render('dashboard/index.html.twig', [
            'professions' => $professions,
            'dossiers' => $dossiers,
            'allModules' => $allModules,
            'actions' => $actions,
            'allOrders' => $totalDemandes,
            'validatedOrders' => $validatedDemandes,
            'ongoingOrders' => 0,
            'processedOrders' => $generatedDemandes,
            'returnedOrders' => 0,
        ]);
    }
}
