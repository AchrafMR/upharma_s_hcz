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

 #[Route('/fetch-commandes', name: 'app_fetch_commandes', options: ['expose' => true], methods: 'GET')]
    public function fetchCommandes(Request $request, EntityManagerInterface $em): JsonResponse
    {
        $connection = $em->getConnection();

        $draw = $request->query->get('draw');
        $start = $request->query->get('start') ?? 0;
        $length = $request->query->get('length') ?? 10;
        $search = $request->query->all('search')['value'] ?? '';
        $orderColumnIndex = $request->query->all('order')[0]['column'] ?? 0;
        $orderDir = $request->query->all('order')[0]['dir'] ?? 'desc';

        // Search filter
        $where = '';
        $params = [];

        if (!empty($search)) {
            $where = "WHERE (
                d.code LIKE :search OR
                d.ipp LIKE :search OR
                d.nom_patient LIKE :search OR
                demandeur.designation LIKE :search OR
                recepteur.designation LIKE :search
            )";
            $params['search'] = '%' . $search . '%';
        }

        // Columns (for future ordering)
        $columns = [
            'd.id',
            'd.code',
            'demandeur.designation',
            'recepteur.designation',
            'd.ipp',
            'd.nom_patient',
            'total_montant_ttc',
            'niveau_urgence',
            'd.created',
            'd.position_actuel',
        ];
        $orderColumn = $columns[$orderColumnIndex] ?? 'd.id';

        // Final SQL
       $sql = "
            SELECT 
                d.id AS demande_id,
                d.code AS demande_code,
                demandeur.designation AS demandeur,
                recepteur.designation AS recepteur,
                d.ipp AS ipp_patient,
                d.nom_patient,
                SUM(lg.montant_ttc) AS total_montant_ttc,
                CASE 
                    WHEN d.urgent = 1 THEN 'Urgent'
                    ELSE 'Normal'
                END AS niveau_urgence,
                d.created AS date_demmande,
                d.position_actuel
            FROM t_ms_Demande d
            LEFT JOIN t_ms_demandelg lg ON lg.t_ms_demande_id = d.id
            LEFT JOIN pmagasins demandeur ON demandeur.id = d.demandeur_id
            LEFT JOIN pmagasins recepteur ON recepteur.id = d.recepteur_id
            $where
            GROUP BY d.id, d.code, d.ipp, d.nom_patient, d.created, d.position_actuel, d.urgent, demandeur.designation, recepteur.designation
            ORDER BY $orderColumn $orderDir
            OFFSET $start ROWS FETCH NEXT $length ROWS ONLY
        ";


        
        $stmt = $connection->prepare($sql);
        
        $results = $stmt->executeQuery($params)->fetchAllAssociative();
// dd($results);
        // Count total
        $countSql = "
            SELECT COUNT(DISTINCT d.id) as total
            FROM t_ms_Demande d
            LEFT JOIN pmagasins demandeur ON demandeur.id = d.demandeur_id
            LEFT JOIN pmagasins recepteur ON recepteur.id = d.recepteur_id
            $where
        ";

        $countStmt = $connection->prepare($countSql);
        $totalRecords = $countStmt->executeQuery($params)->fetchOne();

        // Get actions (same as before)
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
