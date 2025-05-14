<?php

namespace App\Controller\Vente;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;
use App\Repository\PModuleRepository;
use App\Repository\PEntiteRepository;
use App\Repository\PProfessionRepository;
use App\Repository\PActionRepository;
use App\Repository\UserRepository;
use App\Service\UserOperation;

#[Route('/vente')]
class GestionVenteController extends AbstractController
{
    private UserOperation $userOperation;

    public function __construct(UserOperation $userOperation)
    {
        $this->userOperation = $userOperation;
    }

    #[Route('/gestion-vente', name: 'app_vente_gestion_vente')]
    public function index(
        Request $request,
        PEntiteRepository $pEntiteRepository,
        PProfessionRepository $professionRep,
        PModuleRepository $moduleRepository,
        UserRepository $userRep,
        PActionRepository $pActionRep
    ): Response {
        $allModules = $moduleRepository->findBy(array("active"=> true));
        $dossiers = $pEntiteRepository->findBy(array("active"=> true));
        $actions = $this->userOperation->getOperations($this->getUser(), 'app_vente_demande_vente', $request);
        $professions = $professionRep->findAll();

        if(!$actions){
            return $this->render('errors/403.html.twig');
        }
        $professions = $professionRep->findAll();
        $dossiers = $pEntiteRepository->findBy(['active' => true]);
        $allModules = $moduleRepository->findBy(['active' => true]);

        // Mock data (can be replaced later)
        $sales = [];
        for ($i = 1; $i <= 90; $i++) {
            $sales[] = [
                'id' => $i,
                'code' => 'CMD-' . str_pad($i, 4, '0', STR_PAD_LEFT),
                'client' => 'Client ' . $i,
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
