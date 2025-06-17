<?php

namespace App\Controller\Vente\Livraison;

use App\Entity\PEntite;
use App\Entity\PMagasins;
use App\Entity\PProduits;
use App\Entity\TMsLivraison;
use App\Entity\TMsLivraisonlg;
use App\Entity\TMsLivraisonobj;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;
use App\Repository\PModuleRepository;
use App\Repository\PEntiteRepository;
use App\Repository\PProfessionRepository;
use App\Repository\PMagasinsRepository;
use App\Repository\PProduitsRepository;
use App\Repository\TMsCommandeRepository;
use App\Repository\TMsLivraisonRepository;
use App\Service\UserOperation;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\HttpFoundation\JsonResponse;

#[Route('/vente')]
class LivraisonController extends AbstractController
{
    private UserOperation $userOperation;
    private $em;
   

    public function __construct(UserOperation $userOperation, EntityManagerInterface $em)
    {
        $this->userOperation = $userOperation;
        $this->em = $em;
       
    }

    #[Route('/gestion-livrasions', name: 'vente_gestion_livrasions_index')]
    public function index(Request $request,PEntiteRepository $pEntiteRepository,PProfessionRepository $professionRep,PModuleRepository $moduleRepository,PMagasinsRepository $magasinsRepository,TMsLivraisonRepository $TMsLivraisonRepository,PProduitsRepository $produitsRepository,): Response 
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

        $livraisons = $TMsLivraisonRepository->findAllActifWithActive();
        
        $magasinsDemandeur = $magasinsRepository->findDemandeurMagasins($this->getUser());
        $magasinsTraitement = $magasinsRepository->findTraitementMagasins($this->getUser());


        $products = $produitsRepository->findProductsWithTarificationAndSolde();


        return $this->render('vente/GestionLivraison/index.html.twig', [
            'professions' => $professions,
            'dossiers' => $dossiers,
            'allModules' => $allModules,
            'actions' => $actions,
            'magasinsDemandeur' => $magasinsDemandeur,
            'magasinsTraitement' => $magasinsTraitement,
            'livraisons' => $livraisons,
            'produits' => $products,
           
        ]);
    }


        #[Route('/fetch-livraisons', name: 'app_fetch_livraisons', options: ['expose' => true], methods: 'GET')]
        public function fetchLivraison(Request $request, EntityManagerInterface $em): JsonResponse
        {
            $connection = $em->getConnection();
    
            $dossier = $request->getSession()->get('dossier');

            if (!$dossier || !method_exists($dossier, 'getId')) {
                return new JsonResponse([
                    'draw' => $request->query->get('draw'),
                    'recordsTotal' => 0,
                    'recordsFiltered' => 0,
                    'data' => [],
                    'actions' => [],
                    'error' => 'Dossier invalide'
                ]);
            }

            $dossierId = $dossier->getId();
            // dd($dossierId);

            $draw = $request->query->get('draw');
            $start = (int) $request->query->get('start', 0);
            $length = (int) $request->query->get('length', 10);
            $search = $request->query->all('search')['value'] ?? '';
            $orderColumnIndex = (int) $request->query->all('order')[0]['column'] ?? 0;
            $orderDir = strtoupper($request->query->all('order')[0]['dir'] ?? 'DESC');

            $columns = [
                'd.id',
                'd.code',
                'demandeur.designation',
                'recepteur.designation',
                'd.ipp',
                'd.nom_patient',
                'SUM(lg.montant_total)',
                "CASE WHEN d.urgent = 1 THEN 'Urgent' ELSE 'Normal' END",
                'd.created',
                'd.position_actuel',
            ];
            $orderColumn = $columns[$orderColumnIndex] ?? 'd.id';

            $where = " AND d.p_entite_id = ?";
            $params = [$dossierId];

            if (!empty($search)) {
                $where .= " AND (
                    d.code LIKE ? OR
                    d.ipp LIKE ? OR
                    d.position_actuel LIKE ? OR
                    d.created LIKE ? OR
                    d.nom_patient LIKE ? OR
                    demandeur.designation LIKE ? OR
                    recepteur.designation LIKE ?
                )";
                for ($i = 0; $i < 7; $i++) {
                    $params[] = '%' . $search . '%';
                }
            }

            // Main data query
            $sql = "
                SELECT 
                    d.id AS id,
                    d.code AS livraison_code,
                    demandeur.designation_access AS demandeur,
                    recepteur.designation_access AS recepteur,
                    d.ipp AS ipp_patient,
                    d.nom_patient,
                    SUM(lg.montant_total) AS total_montant_ttc,
                    CASE 
                        WHEN d.urgent = 1 THEN 'Urgent'
                        ELSE 'Normal'
                    END AS niveau_urgence,
                    d.created AS date_livraison,
                    d.position_actuel
                FROM t_ms_livraison d
                LEFT JOIN t_ms_livraisonlg lg ON lg.t_ms_livraison_id = d.id
                LEFT JOIN p_magasins demandeur ON demandeur.id = d.demandeur_id
                LEFT JOIN p_magasins recepteur ON recepteur.id = d.recepteur_id
                WHERE d.actif = 1
                $where
                GROUP BY 
                    d.id, d.code, d.ipp, d.nom_patient, d.created, 
                    d.position_actuel, d.urgent, 
                    demandeur.designation_access, recepteur.designation_access
                ORDER BY $orderColumn $orderDir
                OFFSET $start ROWS FETCH NEXT $length ROWS ONLY
            ";

            $stmt = $connection->prepare($sql);
            $results = $stmt->executeQuery($params)->fetchAllAssociative();

            // Count query (filtered)
            $countSql = "
                SELECT COUNT(DISTINCT d.id) as total
                FROM t_ms_livraison d
                LEFT JOIN p_magasins demandeur ON demandeur.id = d.demandeur_id
                LEFT JOIN p_magasins recepteur ON recepteur.id = d.recepteur_id
                WHERE d.actif = 1 AND d.p_entite_id = ?
                " . (!empty($search) ? substr($where, strpos($where, 'AND (')) : '')
            ;

            $countStmt = $connection->prepare($countSql);
            $totalRecords = $countStmt->executeQuery($params)->fetchOne();

            // Get user action permissions
            $actions = $this->userOperation->getOperations($this->getUser(), 'vente_gestion_livrasions_index', $request);
            $filteredActions = array_filter($actions, fn($action) => !$action->isHorizontal());
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
