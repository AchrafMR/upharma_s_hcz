<?php

namespace App\Controller\Dashboard;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class DashboardController extends AbstractController
{
    #[Route('/tableau-de-bord', name: 'app_tableau_de_bord')]
    public function index(): Response
    {
        
        return $this->render('dashboard/index.html.twig', [
            'controller_name' => 'Tableau de Bord',
        ]);
    }
}
