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

#[Route('/vente/demande-vente')]
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

    #[Route('/', name: 'app_vente_demande_vente')]
    public function index(PEntiteRepository $pEntiteRepository , PProfessionRepository $professionRep,PModuleRepository $moduleRepository, UserRepository $userRep , PActionRepository $pActionRep, Request $request): Response
    {
        $allModules = $moduleRepository->findBy(array("active"=> true));
        $dossiers = $pEntiteRepository->findBy(array("active"=> true));
        $actions = $this->userOperation->getOperations($this->getUser(), 'app_vente_demande_vente', $request);
        $professions = $professionRep->findAll();

        if(!$actions){
            return $this->render('errors/403.html.twig');
        }

        return $this->render('vente/demande_vente/index.html.twig', [
            'professions' => $professions,
            'allModules' => $allModules,
            'dossiers' => $dossiers,
            'actions' => $actions,
        ]);
    }
}
