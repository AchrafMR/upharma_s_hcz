<?php

namespace App\Controller\Vente;

use App\Entity\TMsDemande;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;
use App\Repository\PModuleRepository;
use App\Repository\PEntiteRepository;
use App\Repository\PProfessionRepository;
use App\Repository\PActionRepository;
use App\Repository\PMagasinsRepository;
use App\Repository\PProduitsRepository;
use App\Repository\TMsDemandelgRepository;
use App\Repository\TMsDemandeRepository;
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
        PMagasinsRepository $magasinsRepository,
        TMsDemandeRepository $TMsDemandeRepository,
        PProduitsRepository $produitsRepository,
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


        $magasins = $magasinsRepository->findMagasinsByUserEntite($this->getUser(), $pEntiteRepository);
        $defaultMagasin = $magasinsRepository->findDefaultMagasinForUser($this->getUser(), $pEntiteRepository);
        
        $demandes = $TMsDemandeRepository->findAll();
        $products = $produitsRepository->findProductsWithTarificationAndSolde();
        // dd($demandes);

        return $this->render('vente/GestionVente/index.html.twig', [
            'professions' => $professions,
            'dossiers' => $dossiers,
            'allModules' => $allModules,
            'actions' => $actions,
            'magasins' => $magasins,
            'defaultMagasin' => $defaultMagasin,
            'demandes' => $demandes,
            'produits' => $products,
        ]);
    }

    #[Route('/fetch-commandes', name: 'app_fetch_commandes', options: ['expose' => true], methods: 'GET')]
    public function fetchCommandes(Request $request, EntityManagerInterface $em): JsonResponse
    {
        $connection = $em->getConnection();

        $draw = $request->query->get('draw');
        $start = (int) $request->query->get('start', 0);
        $length = (int) $request->query->get('length', 10);
        $search = $request->query->all('search')['value'] ?? '';
        $orderColumnIndex = (int) $request->query->all('order')[0]['column'] ?? 0;
        $orderDir = strtoupper($request->query->all('order')[0]['dir'] ?? 'DESC');

        // Column mapping (raw SQL expressions)
        $columns = [
            'd.id',
            'd.code',
            'demandeur.designation',
            'recepteur.designation',
            'd.ipp',
            'd.nom_patient',
            'SUM(lg.montant_ttc)',
            "CASE WHEN d.urgent = 1 THEN 'Urgent' ELSE 'Normal' END",
            'd.created',
            'd.position_actuel',
        ];

        $orderColumn = $columns[$orderColumnIndex] ?? 'd.id';

        // Search setup
        $where = '';
        $params = [];
        // CASE WHEN d.urgent = 1 THEN 'Urgent' ELSE 'Normal' END LIKE ? OR
        if (!empty($search)) {
            $where = "WHERE (
                d.code LIKE ? OR
                d.ipp LIKE ? OR
                d.position_actuel LIKE ? OR
                d.created LIKE ? OR
                d.nom_patient LIKE ? OR
                demandeur.designation LIKE ? OR
                recepteur.designation LIKE ?
            )";

            // Positional parameters
            for ($i = 0; $i <8; $i++) {
                $params[] = '%' . $search . '%';
            }
        }

        // Main query
        $sql = "
            SELECT 
                d.id AS id,
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
            LEFT JOIN t_ms_demandelg lg ON lg.t_ms_demande_id = d.id AND lg.actif = 1
            LEFT JOIN pmagasins demandeur ON demandeur.id = d.demandeur_id
            LEFT JOIN pmagasins recepteur ON recepteur.id = d.recepteur_id
            $where
            GROUP BY 
                d.id, d.code, d.ipp, d.nom_patient, d.created, 
                d.position_actuel, d.urgent, 
                demandeur.designation, recepteur.designation
            ORDER BY $orderColumn $orderDir
            OFFSET $start ROWS FETCH NEXT $length ROWS ONLY
        ";

        $stmt = $connection->prepare($sql);
        $results = $stmt->executeQuery($params)->fetchAllAssociative();

        // Count query
        $countSql = "
            SELECT COUNT(DISTINCT d.id) as total
            FROM t_ms_Demande d
            LEFT JOIN pmagasins demandeur ON demandeur.id = d.demandeur_id
            LEFT JOIN pmagasins recepteur ON recepteur.id = d.recepteur_id
            $where
        ";
        $countStmt = $connection->prepare($countSql);
        $totalRecords = $countStmt->executeQuery($params)->fetchOne();

        $actions = $this->userOperation->getOperations($this->getUser(), 'app_vente_gestion_vente', $request);
        $filteredActions = array_filter($actions, function($action) {
            return (!$action->isHorizontal());
        });
        $allActions = array_map(function($action) {
            return [
                'sousModuleId'=> $action->getPSousModule()->getId(),
                'idOp'=> $action->getId(),
                'idName' => $action->getIdName(),
                'nom' => $action->getNom(),
                'className' => $action->getClassName(),
                'icon' => $action->getIcon(),
            ];
        }, $filteredActions);

        return new JsonResponse([
            'draw' => $draw,
            'recordsTotal' => $totalRecords,
            'recordsFiltered' => $totalRecords,
            'data' => $results,
            'actions' => $allActions
        ]);
    }


}
