<?php

namespace App\Repository;

use App\Entity\PProduits;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @extends ServiceEntityRepository<PProduits>
 *
 * @method PProduits|null find($id, $lockMode = null, $lockVersion = null)
 * @method PProduits|null findOneBy(array $criteria, array $orderBy = null)
 * @method PProduits[]    findAll()
 * @method PProduits[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class PProduitsRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, PProduits::class);
    }

//    /**
//     * @return PProduits[] Returns an array of PProduits objects
//     */


    // public function findProductsWithTarificationAndSolde(): array
    // {
    //     return $this->createQueryBuilder('p')
    //         ->select('p.id, p.titre AS name, p.image, p.liste AS category, t.prixVentePpv AS price, COALESCE(s.solde, 0) AS quantity')
    //         ->leftJoin('p.pPrTarifications', 't', 'WITH', 't.active = 1')
    //         ->leftJoin('p.tStStockstatics', 's')
    //         ->where('p.active = 1')
    //         ->getQuery()
    //         ->getArrayResult();
    // }

    public function findProductsWithTarificationAndSolde(?int $parentId = null): array
    {
        $conn = $this->getEntityManager()->getConnection();

        // Optional parent ID filter
        $filter = '';
        if ($parentId !== null) {
            $filter = 'AND n4.parent_id = :parentId';
        }

        $sql = <<<SQL
        WITH RecursiveNiveaux AS (
            SELECT 
                id,
                parent_id,
                id AS original_id,
                id AS niveau4_id
            FROM p_pr_niveau_produits
            WHERE niveau = 4

            UNION ALL

            SELECT 
                c.id,
                c.parent_id,
                r.original_id,
                r.niveau4_id
            FROM p_pr_niveau_produits c
            INNER JOIN RecursiveNiveaux r ON c.parent_id = r.id
        )
        SELECT TOP 200
            p.id,
            p.titre AS name,
            p.image,
            p.qte_stock AS quantity,
            t.prix_vente_ppv AS price,
            COALESCE(s.solde, 0) AS quantityy,
            n4.designation AS category
        FROM 
            p_produits p
        LEFT JOIN 
            p_pr_tarifications t ON t.produit_id = p.id AND t.active = 1
        LEFT JOIN 
            t_st_stockstatic s ON s.p_produit_id = p.id
        INNER JOIN 
            RecursiveNiveaux map ON map.id = p.niveau_id
        INNER JOIN 
            p_pr_niveau_produits n4 ON n4.id = map.niveau4_id
        WHERE 
            p.active = 1
            $filter
    SQL;

        $params = [];
        if ($parentId !== null) {
            $params['parentId'] = $parentId;
        }

        return $conn->executeQuery($sql, $params)->fetchAllAssociative();
    }


    // public function findProductsWithTarificationAndSolde(?int $parentId = null): array
    // {
    //     $qb = $this->createQueryBuilder('p')
    //         ->select('
    //             p.id,
    //             p.titre AS name,
    //             p.image,
    //             n.designation AS category,
    //             t.prixVentePpv AS price,
    //             COALESCE(s.solde, 0) AS quantity
    //         ')
    //         ->leftJoin('p.pPrTarifications', 't', 'WITH', 't.active = 1')
    //         ->leftJoin('p.tStStockstatics', 's')
    //         ->leftJoin('p.niveau', 'n')
    //         ->where('p.active = 1')
    //         ->andWhere('n.niveau = 4')
    //         ->andWhere('n.active = 1');

    //     if ($parentId !== null) {
    //         $qb->andWhere('n.parent_id = :parentId')
    //         ->setParameter('parentId', $parentId);
    //     }

    //     return $qb->getQuery()->getArrayResult();
    // }


    // public function findProductsWithTarificationAndSolde(): array
    // {
    //     return $this->createQueryBuilder('p')
    //         ->select('
    //             p.id,
    //             p.titre AS name,
    //             p.image,
    //             n.designation AS category,
    //             t.prixVentePpv AS price,
    //             COALESCE(s.solde, 0) AS quantity
    //         ')
    //         ->leftJoin('p.pPrTarifications', 't', 'WITH', 't.active = 1')
    //         ->leftJoin('p.tStStockstatics', 's')
    //         ->leftJoin('p.niveau', 'n')  
    //         ->where('p.active = 1')
    //         ->andWhere('n.niveau = 4')
    //         ->getQuery()
    //         ->getArrayResult();
    // }



//    public function findByExampleField($value): array
//    {
//        return $this->createQueryBuilder('p')
//            ->andWhere('p.exampleField = :val')
//            ->setParameter('val', $value)
//            ->orderBy('p.id', 'ASC')
//            ->setMaxResults(10)
//            ->getQuery()
//            ->getResult()
//        ;
//    }

//    public function findOneBySomeField($value): ?PProduits
//    {
//        return $this->createQueryBuilder('p')
//            ->andWhere('p.exampleField = :val')
//            ->setParameter('val', $value)
//            ->getQuery()
//            ->getOneOrNullResult()
//        ;
//    }
}
