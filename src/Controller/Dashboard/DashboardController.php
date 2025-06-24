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
        $totalDemandes = $conn->fetchOne("SELECT COUNT(DISTINCT d.id) FROM t_ms_commande d WHERE d.actif = 1");
        $validatedDemandes = $conn->fetchOne("SELECT COUNT(DISTINCT d.id) FROM t_ms_commande d WHERE d.actif = 1 AND d.position_actuel = 'validée'");
        $generatedDemandes = $conn->fetchOne("SELECT COUNT(DISTINCT d.id) FROM t_ms_commande d WHERE d.actif = 1 AND d.position_actuel = 'Générée'");

        return $this->render('dashboard/index.html.twig', [
            'allOrders' => $totalDemandes,
            'validatedOrders' => $validatedDemandes,
            'ongoingOrders' => 0,
            'processedOrders' => $generatedDemandes,
            'returnedOrders' => 0,
        ]);
    }
}
