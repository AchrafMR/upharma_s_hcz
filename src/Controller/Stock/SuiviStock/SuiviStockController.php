<?php

namespace App\Controller\Stock\SuiviStock;

use App\Entity\PMagasins;
use App\Entity\PProduits;
use App\Entity\PPrUnites;
use App\Entity\TAcMarche;
use App\Entity\TStStockObj;
use App\Entity\PPartenaires;
use App\Service\UserOperation;
use App\Entity\TAcReceptionObj;
use App\Repository\PEntiteRepository;
use App\Repository\PModuleRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Security\Core\Security;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

#[Route('/stock/suivi')]
class SuiviStockController extends AbstractController
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

    #[Route('/', name: 'app_stock_suivi_stock_index')]
    public function index(PEntiteRepository $pEntiteRepository, PModuleRepository $moduleRepository, Request $request): Response
    {
        $allModules = $moduleRepository->findBy(array("active"=> true));
        $dossiers = $pEntiteRepository->findBy(array("active"=> true));
        $actions = $this->userOperation->getOperations($this->getUser(), 'app_stock_suivi_stock_index', $request);

        $magasins = $this->em->getRepository(PMagasins::class)->findMagasinByUser($this->getUser());
        $magasinDefaut = $this->em->getRepository(PMagasins::class)->findMagasinParDefaut($this->getUser());

        if(!$actions){
            return $this->render('errors/403.html.twig');
        }

        return $this->render('stock/suivi_stock/index.html.twig', [
            // 'professions' => $professions,
            'allModules' => $allModules,
            'dossiers' => $dossiers,
            'actions' => $actions,
            'magasins' => $magasins,
            'magasinDefaut' => $magasinDefaut,
        ]);
    }

    #[Route('/list', name: 'app_stock_suivi_stock_list', options: ['expose' => true])]
    public function app_stock_suivi_stock_list(Request $request): Response
    {
        $magasinId = $request->query->get('magasin');

        if (!$magasinId) {
            $magasin = $this->em->getRepository(PMagasins::class)->findMagasinParDefaut($request->getSession()->get('dossier'));
            $magasinId = $magasin ? $magasin->getId() : null;
        }

        $magasinDefaut = $this->em->getRepository(PMagasins::class)->findMagasinParDefaut($request->getSession()->get('dossier'));

        $actions = $this->userOperation->getOperations($this->getUser(), 'app_stock_suivi_stock_index', $request);
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
        // dd($actions);
        $draw = $request->query->get('draw');
        $start = $request->query->get('start') ?? 0;
        $length = $request->query->get('length') ?? 10;
        $search = $request->query->all('search')["value"];
        $orderDir = null;
        $orderDir = null;

        if (!empty($request->query->all('order'))) {
            $orderColumnIndex = $request->query->all('order')[0]['column'];
            $orderColumn = $request->query->all("columns")[$orderColumnIndex]['name'];
            $orderDir = $request->query->all('order')[0]['dir'] ?? 'asc';
        }

        $queryBuilder = $this->em->createQueryBuilder()
            ->select('pr.id, pr.code, pr.titre, COUNT(obj) AS objCount')
            ->from(PProduits::class, 'pr')
            ->innerJoin('pr.tStStockObjs', 'obj')
            ->innerJoin('obj.adresse', 'adresse')
            ->where('adresse.magasin = :magasin')
            ->andWhere('pr.active = 1')
            ->andWhere('obj.active = 1')
            ->groupBy('pr.id, pr.code, pr.titre');

        $queryBuilder->setParameter('magasin', $magasinId);

        if (!empty($search)) {
            $queryBuilder->andWhere('(pr.code LIKE :search OR pr.titre LIKE :search)')
                ->setParameter('search', "%$search%");
        }

        $filteredRecords = count($queryBuilder->getQuery()->getResult());

        // Paginate results
        $queryBuilder->setFirstResult($start)
            ->setMaxResults($length);

        $results = $queryBuilder->getQuery()->getResult();

        // dd($results);
        $totalRecords = $this->em->createQueryBuilder()
            ->select('COUNT(DISTINCT pr.id)')
            ->from(PProduits::class, 'pr')
            ->innerJoin('pr.tStStockObjs', 'obj')
            ->where('pr.active = 1')
            ->andWhere('obj.active = 1')
            ->getQuery()
            ->getSingleScalarResult();

        return new JsonResponse([
            'draw' => $draw,
            'recordsTotal' => $totalRecords,
            'recordsFiltered' => $filteredRecords,
            'data' => $results,
            'actions' => $allActions
        ]);
    }

    #[Route('/details', name: 'app_stock_suivi_stock_details', options: ['expose' => true])]
    public function app_stock_suivi_stock_details(Request $request): Response
    {
        $idProduit = $request->get('idProduit');
        $codeProduit = $request->get('codeProduit');

        if (!$idProduit && !$codeProduit) {
            return new JsonResponse(['error' => 'ID ou Code de produit manquants'], 404);
        }

        try {

            $produit = !$idProduit ? $this->em->getRepository(PProduits::class)->findOneBy(['code' => $codeProduit]) : $this->em->getRepository(PProduits::class)->find($idProduit);

            if (!$produit) {
                return new JsonResponse(['error' => 'Produit introuvable.'], 404);
            }
            // dd($produit);

            $detailsProduits = $this->em->createQueryBuilder()
                ->select('mag.designationAccess AS magasin')
                ->addSelect('SUM(obj.quantite) AS quantite')
                ->addSelect('IDENTITY(obj.produit) AS produitID')
                ->addSelect('obj.numeroLot AS numlot')
                ->addSelect('obj.datePeremption AS dateperemption')
                ->from(TStStockObj::class, 'obj')
                ->innerJoin('obj.adresse', 'adresse')
                ->innerJoin('adresse.magasin', 'mag')
                ->where('obj.produit = :produit')
                ->andWhere('obj.active = 1')
                ->groupBy('mag.id, mag.designationAccess, obj.numeroLot, obj.datePeremption, obj.produit')
                ->setParameter('produit', $produit)
                ->getQuery()
                ->getResult();


            
            $actions = $this->userOperation->getOperations($this->getUser(), 'app_stock_suivi_stock_index', $request);


            $detailProduit = $this->render("stock/suivi_stock/pages/detailsProduit.html.twig", [
                'produit' => $produit,
                'detailsProduits' => $detailsProduits,
            ])->getContent();

            // dd($detailProduit);

            return new JsonResponse([
                'detailProduit' => $detailProduit,
            ], 200);

        } catch (\Throwable $e) {
            return new JsonResponse([
                'error' => 'Erreur lors de la récupération des détails de produit.',
                'details' => $e->getMessage(),
            ], 500);
        }
    }
}
