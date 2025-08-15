<?php

namespace App\Repository;

use App\Entity\PMagasins;
use App\Entity\PProduits;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\ORM\EntityManagerInterface;
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



    // public function searchActiveByTerm(string $term, int $limit = 20): array
    // {
    //     $term = trim($term);
    //     if ($term === '') {
    //         return [];
    //     }

    //     return $this->createQueryBuilder('p')
    //         ->select('p.id AS id, p.code AS code, p.titre AS titre')
    //         ->where('p.active = 1')
    //         ->andWhere('p.code LIKE :term OR p.titre LIKE :term')
    //         ->setParameter('term', '%'.$term.'%')
    //         ->orderBy('p.code', 'ASC')
    //         ->setMaxResults($limit)
    //         ->getQuery()
    //         ->getArrayResult();
    // }

    public function searchByTermAndMagasin(string $term, int $emplacementId, int $limit = 20): array
    {
        $term = trim($term);
        if ($term === '') return [];

        return $this->createQueryBuilder('p')
            ->select('p.id AS id, p.code AS code, p.titre AS titre, COALESCE(s.solde, 0) AS stock')
            ->leftJoin('p.tStStockstatics', 's', 'WITH', 's.pEmplacements = :emplacement_id')
            ->where('p.active = 1')
            ->andWhere('p.code LIKE :term OR p.titre LIKE :term')
            ->setParameter('term', '%' . $term . '%')
            ->setParameter('emplacement_id', $emplacementId)
            ->orderBy('p.code', 'ASC')
            ->setMaxResults($limit)
            ->getQuery()
            ->getArrayResult();
    }


    public function findProductsWithTarificationAndSolde(?int $parentId = null, ?int $magasinId = null): array
    {
        $conn = $this->getEntityManager()->getConnection();

        $filters = '';
        $params = [];

        if ($parentId !== null) {
            $filters .= ' AND n4.parent_id = :parentId';
            $params['parentId'] = $parentId;
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
        SELECT TOP 100
            p.id,
            p.titre AS name,
            p.image,
            t.prix_vente_ppv AS price,
            COALESCE(SUM(CASE 
                WHEN e.magasin_id = :magasinId THEN s.solde 
                ELSE 0 
            END), 0) AS quantity,
            n4.designation AS category,
            :magasinId AS magasin_id

        FROM 
            p_produits p
        LEFT JOIN 
            p_pr_tarifications t ON t.produit_id = p.id AND t.active = 1
        LEFT JOIN 
            t_st_stockstatic s ON s.p_produit_id = p.id
        LEFT JOIN 
            p_emplacements e ON e.id = s.p_emplacements_id
        INNER JOIN 
            RecursiveNiveaux map ON map.id = p.niveau_id
        INNER JOIN 
            p_pr_niveau_produits n4 ON n4.id = map.niveau4_id

        WHERE 
            p.active = 1
            $filters

        GROUP BY 
            p.id, p.titre, p.image, t.prix_vente_ppv, n4.designation

        ORDER BY 
            CASE 
                WHEN SUM(CASE 
                    WHEN e.magasin_id = :magasinId THEN s.solde 
                    ELSE 0 
                END) > 0 THEN 0 
                ELSE 1 
            END,
            p.titre ASC
    SQL;

        if ($magasinId !== null) {
            $params['magasinId'] = $magasinId;
        }

        return $conn->executeQuery($sql, $params)->fetchAllAssociative();
    }

}
