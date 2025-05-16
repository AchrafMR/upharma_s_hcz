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
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\HttpFoundation\JsonResponse;

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

    #[Route('/vente/fetch-commandes', name: 'app_fetch_commandes', options: ['expose' => true], methods: 'GET')]
    public function fetchCommandes(Request $request, EntityManagerInterface $em): JsonResponse
    {
        $draw = $request->query->get('draw');
        $start = $request->query->get('start') ?? 0;
        $length = $request->query->get('length') ?? 10;
        $search = $request->query->all('search')['value'] ?? '';
        $orderColumnIndex = $request->query->all('order')[0]['column'] ?? 0;
        $orderColumn = $request->query->all('columns')[$orderColumnIndex]['name'] ?? 'd.id';
        $orderDir = $request->query->all('order')[0]['dir'] ?? 'desc';

        $qb = $em->createQueryBuilder()
            ->select(
                'd.id AS demande_id',
                'd.code AS demande_code',
                'demandeur.designation AS demandeur',
                'recepteur.designation AS recepteur',
                'd.ipp AS ipp_patient',
                'd.nom_patient',
                'SUM(lg.montant_ttc) AS total_montant_ttc',
                "CASE WHEN d.urgent = 1 THEN 'Urgent' ELSE 'Normal' END AS niveau_urgence",
                'd.created AS date_demmande',
                'd.position_actuel'
            )
            ->from('App\Entity\TMsDemande', 'd')
            ->leftJoin('d.lignes', 'lg')
            ->leftJoin('App\Entity\PMagasin', 'demandeur', 'WITH', 'demandeur.id = d.demandeur')
            ->leftJoin('App\Entity\PMagasin', 'recepteur', 'WITH', 'recepteur.id = d.recepteur')
            ->groupBy('d.id, d.code, d.ipp, d.nom_patient, d.created, d.position_actuel, d.urgent, demandeur.designation, recepteur.designation');

        // 🔍 Search
        if (!empty($search)) {
            $qb->andWhere('d.code LIKE :search OR d.ipp LIKE :search OR d.nom_patient LIKE :search OR demandeur.designation LIKE :search OR recepteur.designation LIKE :search')
            ->setParameter('search', "%$search%");
        }

        // 📦 Pagination
        $qb->setFirstResult($start)
        ->setMaxResults($length);

        // 🧭 Order
        if (!empty($orderColumn)) {
            $qb->orderBy($orderColumn, $orderDir);
        }

        $results = $qb->getQuery()->getResult();

        // 🔁 Count total records
        $countQb = clone $qb;
        $countQb->resetDQLPart('select')
                ->resetDQLPart('orderBy')
                ->resetDQLPart('groupBy')
                ->select('COUNT(d.id)');

        $totalRecords = $countQb->getQuery()->getSingleScalarResult();

        
        $actions = $this->userOperation->getOperations($this->getUser(), 'app_vente_demande_vente', $request);
        $filteredActions = array_filter($actions, fn($a) => !$a->isHorizontal());
        $allActions = array_map(fn($a) => [
            'idName' => $a->getIdName(),
            'nom' => $a->getNom(),
            'className' => $a->getClassName(),
            'icon' => $a->getIcon(),
        ], $filteredActions);

        return new JsonResponse([
            'draw' => $draw,
            'recordsTotal' => $totalRecords,
            'recordsFiltered' => $totalRecords,
            'data' => $results,
            'actions' => $allActions,
        ]);
    }



}
