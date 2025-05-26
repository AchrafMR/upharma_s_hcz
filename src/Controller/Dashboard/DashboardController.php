<?php

namespace App\Controller\Dashboard;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Doctrine\DBAL\Connection;

class DashboardController extends AbstractController
{
    #[Route('/tableau-de-bord', name: 'app_tableau_de_bord')]
    public function index(Connection $conn): Response
    {
        // Raw SQL queries
        $totalDemandes = $conn->fetchOne("SELECT COUNT(DISTINCT d.id) FROM t_ms_Demande d WHERE d.actif = 1");
        $validatedDemandes = $conn->fetchOne("SELECT COUNT(DISTINCT d.id) FROM t_ms_Demande d WHERE d.actif = 1 AND d.position_actuel = 'valider'");
        $generatedDemandes = $conn->fetchOne("SELECT COUNT(DISTINCT d.id) FROM t_ms_Demande d WHERE d.actif = 1 AND d.position_actuel = 'Générer'");

        return $this->render('dashboard/index.html.twig', [
            'allOrders' => $totalDemandes,
            'validatedOrders' => $validatedDemandes,
            'ongoingOrders' => 0, // placeholder, you can define your own logic
            'processedOrders' => $generatedDemandes,
            'returnedOrders' => 0, // optional, can be replaced with real logic later
        ]);
    }
}
