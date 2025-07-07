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



    // public function findProductsWithTarificationAndSolde(EntityManagerInterface $em, ?int $parentId = null): array
    // {
    //     // Step 1: Fetch all niveaux (id, parent_id, niveau)
    //     $allNiveaux = $em->getRepository(\App\Entity\PPrNiveauProduits::class)
    //         ->createQueryBuilder('n')
    //         ->select('n.id, IDENTITY(n.parent) AS parent_id, n.niveau')
    //         ->getQuery()
    //         ->getArrayResult();

    //     // Step 2: Build parent → children and id → parent maps
    //     $childrenMap = [];
    //     $parentMap = [];
    //     foreach ($allNiveaux as $niveau) {
    //         $parentIdLocal = $niveau['parent_id'];
    //         $id = $niveau['id'];
    //         $parentMap[$id] = $parentIdLocal;
    //         $childrenMap[$parentIdLocal][] = $id;
    //     }

    //     // Step 3: Determine entry points for niveau 4
    //     $niveau4Query = $em->getRepository(\App\Entity\PPrNiveauProduits::class)
    //         ->createQueryBuilder('n')
    //         ->select('n.id');

    //     if ($parentId !== null) {
    //         $niveau4Query->where('IDENTITY(n.parent) = :parentId')
    //             ->setParameter('parentId', $parentId);
    //     } else {
    //         $niveau4Query->where('n.niveau = 4');
    //     }

    //     $niveau4Ids = $niveau4Query->getQuery()->getSingleColumnResult();

    //     // Step 4: Traverse all children of niveau4
    //     $allRelevantIds = [];
    //     $stack = $niveau4Ids;

    //     while (!empty($stack)) {
    //         $current = array_pop($stack);
    //         if (in_array($current, $allRelevantIds)) {
    //             continue;
    //         }
    //         $allRelevantIds[] = $current;
    //         if (isset($childrenMap[$current])) {
    //             foreach ($childrenMap[$current] as $childId) {
    //                 $stack[] = $childId;
    //             }
    //         }
    //     }

    //     // Step 5: Map niveau → niveau4
    //     $niveauToNiveau4Map = [];
    //     foreach (array_keys($parentMap) as $id) {
    //         $current = $id;
    //         while (isset($parentMap[$current])) {
    //             if (in_array($current, $niveau4Ids)) {
    //                 $niveauToNiveau4Map[$id] = $current;
    //                 break;
    //             }
    //             $current = $parentMap[$current];
    //         }
    //     }

    //     // Step 6: Load niveau4 designations
    //     $niveau4Designations = $em->getRepository(\App\Entity\PPrNiveauProduits::class)
    //         ->createQueryBuilder('n')
    //         ->select('n.id, n.designation')
    //         ->where('n.id IN (:ids)')
    //         ->setParameter('ids', array_values($niveau4Ids))
    //         ->getQuery()
    //         ->getArrayResult();

    //     $niveau4Labels = [];
    //     foreach ($niveau4Designations as $n4) {
    //         $niveau4Labels[$n4['id']] = $n4['designation'];
    //     }

    //     // Step 7: Fetch products (limit 200, with niveau filter)
    //     $products = $this->createQueryBuilder('p')
    //         ->select('
    //             p.id,
    //             p.titre AS name,
    //             p.image,
    //             n.id AS niveau_id,
    //             t.prixVentePpv AS price,
    //             COALESCE(s.solde, 0) AS quantity
    //         ')
    //         ->leftJoin('p.pPrTarifications', 't', 'WITH', 't.active = 1')
    //         ->leftJoin('p.tStStockstatics', 's')
    //         ->innerJoin('p.niveau', 'n')
    //         ->where('p.active = 1')
    //         ->andWhere('IDENTITY(p.niveau) IN (:ids)')
    //         ->setParameter('ids', $allRelevantIds)
    //         ->setMaxResults(1000) 
    //         ->getQuery()
    //         ->getArrayResult();

    //     // Step 8: Inject category from niveau4
    //     foreach ($products as &$product) {
    //         $niveauId = $product['niveau_id'];
    //         $niveau4Id = $niveauToNiveau4Map[$niveauId] ?? null;
    //         $product['category'] = $niveau4Labels[$niveau4Id] ?? 'Unknown';
    //         unset($product['niveau_id']);
    //     }
    //     unset($product);

    //     return $products;
    // }


    // public function findProductsWithTarificationAndSolde(EntityManagerInterface $em): array
    // {
    //     // Get all niveaux (id and parent)
    //     $allNiveaux = $em->getRepository(\App\Entity\PPrNiveauProduits::class)
    //         ->createQueryBuilder('n')
    //         ->select('n.id, IDENTITY(n.parent) AS parent_id, n.niveau')
    //         ->getQuery()
    //         ->getArrayResult();

    //     // Build parent → children and id → parent maps
    //     $childrenMap = [];
    //     $parentMap = [];
    //     foreach ($allNiveaux as $niveau) {
    //         $parentId = $niveau['parent_id'];
    //         $id = $niveau['id'];
    //         $parentMap[$id] = $parentId;
    //         $childrenMap[$parentId][] = $id;
    //     }

    //     // Get all niveaux where niveau = 4
    //     $niveau4Ids = $em->getRepository(\App\Entity\PPrNiveauProduits::class)
    //         ->createQueryBuilder('n')
    //         ->select('n.id')
    //         ->where('n.niveau = 4')
    //         ->getQuery()
    //         ->getSingleColumnResult();

    //     // Traverse from niveau4 down to collect all descendant niveau IDs
    //     $allRelevantIds = [];
    //     $stack = $niveau4Ids;

    //     while (!empty($stack)) {
    //         $current = array_pop($stack);
    //         if (in_array($current, $allRelevantIds)) {
    //             continue;
    //         }
    //         $allRelevantIds[] = $current;
    //         if (isset($childrenMap[$current])) {
    //             foreach ($childrenMap[$current] as $childId) {
    //                 $stack[] = $childId;
    //             }
    //         }
    //     }

    //     // Build map from each niveau to its ancestor niveau4
    //     $niveauToNiveau4Map = [];
    //     foreach (array_keys($parentMap) as $id) {
    //         $current = $id;
    //         while (isset($parentMap[$current])) {
    //             if (in_array($current, $niveau4Ids)) {
    //                 $niveauToNiveau4Map[$id] = $current;
    //                 break;
    //             }
    //             $current = $parentMap[$current];
    //         }
    //     }

    //     // Load niveau4 designations
    //     $niveau4Designations = $em->getRepository(\App\Entity\PPrNiveauProduits::class)
    //         ->createQueryBuilder('n')
    //         ->select('n.id, n.designation')
    //         ->where('n.id IN (:ids)')
    //         ->setParameter('ids', array_values($niveau4Ids))
    //         ->getQuery()
    //         ->getArrayResult();

    //     $niveau4Labels = [];
    //     foreach ($niveau4Designations as $n4) {
    //         $niveau4Labels[$n4['id']] = $n4['designation'];
    //     }

    //     // Fetch products using relevant niveau IDs
    //     $products = $this->createQueryBuilder('p')
    //         ->select('
    //             p.id,
    //             p.titre AS name,
    //             p.image,
    //             n.id AS niveau_id,
    //             t.prixVentePpv AS price,
    //             COALESCE(s.solde, 0) AS quantity
    //         ')
    //         ->leftJoin('p.pPrTarifications', 't', 'WITH', 't.active = 1')
    //         ->leftJoin('p.tStStockstatics', 's')
    //         ->innerJoin('p.niveau', 'n')
    //         ->where('p.active = 1')
    //         ->andWhere('IDENTITY(p.niveau) IN (:ids)')
    //         ->setParameter('ids', $allRelevantIds)
    //         ->getQuery()
    //         ->getArrayResult();

    //     // Override category with closest niveau4 designation
    //     foreach ($products as &$product) {
    //         $niveauId = $product['niveau_id'];
    //         $niveau4Id = $niveauToNiveau4Map[$niveauId] ?? null;
    //         $product['category'] = $niveau4Labels[$niveau4Id] ?? 'Unknown';
    //         unset($product['niveau_id']); // Remove raw id
    //     }
    //     unset($product);

    //     return $products;
    // }



    // public function findProductsWithTarificationAndSolde(?PMagasins $magasin = null): array
    // {
    //     $qb = $this->getEntityManager()->getConnection();
    //     $magasinId = $magasin?->getId();

    //     $sql = <<<SQL
    //         SELECT
    //             p.id,
    //             p.titre AS name,
    //             p.image,
    //             t.prix_vente_ppv AS price,
    //             COALESCE(SUM(s.solde), 0) AS quantity,
    //             n4.designation AS category
    //         FROM 
    //             p_produits p
    //         LEFT JOIN 
    //             p_pr_tarifications t ON t.produit_id = p.id AND t.active = 1
    //         LEFT JOIN 
    //             t_st_stockstatic s ON s.p_produit_id = p.id
    //         LEFT JOIN 
    //             p_emplacements e ON e.id = s.p_emplacements_id
    //         LEFT JOIN 
    //             p_magasins m ON m.id = e.magasin_id
    //         INNER JOIN 
    //             p_pr_niveau_produits n4 ON n4.id = p.niveau_id
    //         WHERE 
    //             p.active = 1
    //             AND (:magasinId IS NULL OR m.id = :magasinId)
    //         GROUP BY 
    //             p.id, p.titre, p.image, t.prix_vente_ppv, n4.designation
    //         ORDER BY 
    //             p.titre ASC
            
    //     SQL;

    //     return $qb->executeQuery($sql, ['magasinId' => $magasinId])->fetchAllAssociative();
    // }


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


// public function findProductsWithTarificationAndSolde(?int $parentId = null, ?int $magasinId = null): array
// {
//     $conn = $this->getEntityManager()->getConnection();

//     $filters = '';
//     $params = [];

//     if ($parentId !== null) {
//         $filters .= ' AND n4.parent_id = :parentId';
//         $params['parentId'] = $parentId;
//     }

//     if ($magasinId !== null) {
//         $filters .= ' AND (e.magasin_id = :magasinId OR e.magasin_id IS NULL)';
//         $params['magasinId'] = $magasinId;
//     }

//     $sql = <<<SQL
//     WITH RecursiveNiveaux AS (
//         SELECT 
//             id,
//             parent_id,
//             id AS original_id,
//             id AS niveau4_id
//         FROM p_pr_niveau_produits
//         WHERE niveau = 4

//         UNION ALL

//         SELECT 
//             c.id,
//             c.parent_id,
//             r.original_id,
//             r.niveau4_id
//         FROM p_pr_niveau_produits c
//         INNER JOIN RecursiveNiveaux r ON c.parent_id = r.id
//     )
//     SELECT TOP 1700
//         p.id,
//         p.titre AS name,
//         p.image,
//         t.prix_vente_ppv AS price,
//         COALESCE(SUM(CASE WHEN e.magasin_id = :magasinId THEN s.solde ELSE 0 END), 0) AS quantity,
//         n4.designation AS category,
//         :magasinId AS magasin_id

//     FROM 
//         p_produits p
//     LEFT JOIN 
//         p_pr_tarifications t ON t.produit_id = p.id AND t.active = 1
//     LEFT JOIN 
//         t_st_stockstatic s ON s.p_produit_id = p.id
//     LEFT JOIN 
//         p_emplacements e ON e.id = s.p_emplacements_id
//     INNER JOIN 
//         RecursiveNiveaux map ON map.id = p.niveau_id
//     INNER JOIN 
//         p_pr_niveau_produits n4 ON n4.id = map.niveau4_id

//     WHERE 
//         p.active = 1
//         $filters

//     GROUP BY 
//         p.id, p.titre, p.image, t.prix_vente_ppv, n4.designation

//     ORDER BY 
//         CASE 
//             WHEN SUM(CASE WHEN e.magasin_id = :magasinId THEN s.solde ELSE 0 END) > 0 THEN 0 
//             ELSE 1 
//         END,
//         p.titre ASC
// SQL;

//     return $conn->executeQuery($sql, $params)->fetchAllAssociative();
// }




// public function findProductsWithTarificationAndSolde(?int $parentId = null, ?int $magasinId = null): array
// {
//     $conn = $this->getEntityManager()->getConnection();

//     // Dynamic filters
//     $filters = '';
//     $params = [];

//     if ($parentId !== null) {
//         $filters .= ' AND n4.parent_id = :parentId';
//         $params['parentId'] = $parentId;
//     }

//     if ($magasinId !== null) {
//         $filters .= ' AND m.id = :magasinId';
//         $params['magasinId'] = $magasinId;
//     }

// $sql = <<<SQL
// WITH RecursiveNiveaux AS (
//     SELECT 
//         id,
//         parent_id,
//         id AS original_id,
//         id AS niveau4_id
//     FROM p_pr_niveau_produits
//     WHERE niveau = 4

//     UNION ALL

//     SELECT 
//         c.id,
//         c.parent_id,
//         r.original_id,
//         r.niveau4_id
//     FROM p_pr_niveau_produits c
//     INNER JOIN RecursiveNiveaux r ON c.parent_id = r.id
// )
// SELECT TOP 200
//     p.id,
//     p.titre AS name,
//     p.image,
//     t.prix_vente_ppv AS price,
//     COALESCE(SUM(s.solde), 0) AS quantity,
//     n4.designation AS category,
//     m.id AS magasin_id

// FROM 
//     p_produits p
// LEFT JOIN 
//     p_pr_tarifications t ON t.produit_id = p.id AND t.active = 1
// LEFT JOIN 
//     t_st_stockstatic s ON s.p_produit_id = p.id
// LEFT JOIN 
//     p_emplacements e ON e.id = s.p_emplacements_id
// LEFT JOIN 
//     p_magasins m ON m.id = e.magasin_id
// INNER JOIN 
//     RecursiveNiveaux map ON map.id = p.niveau_id
// INNER JOIN 
//     p_pr_niveau_produits n4 ON n4.id = map.niveau4_id

// WHERE 
//     p.active = 1
//     $filters

// GROUP BY 
//     p.id, p.titre, p.image, t.prix_vente_ppv, n4.designation, m.id

// ORDER BY 
//     p.titre ASC
// SQL;

//     return $conn->executeQuery($sql, $params)->fetchAllAssociative();
// }



    // public function findProductsWithTarificationAndSolde(?int $parentId = null): array
    // {
    //     $conn = $this->getEntityManager()->getConnection();

    //     // Optional parent ID filter
    //     $filter = '';
    //     if ($parentId !== null) {
    //         $filter = 'AND n4.parent_id = :parentId';
    //     }

    //     $sql = <<<SQL
    //     WITH RecursiveNiveaux AS (
    //         SELECT 
    //             id,
    //             parent_id,
    //             id AS original_id,
    //             id AS niveau4_id
    //         FROM p_pr_niveau_produits
    //         WHERE niveau = 4

    //         UNION ALL

    //         SELECT 
    //             c.id,
    //             c.parent_id,
    //             r.original_id,
    //             r.niveau4_id
    //         FROM p_pr_niveau_produits c
    //         INNER JOIN RecursiveNiveaux r ON c.parent_id = r.id
    //     )
    //     SELECT TOP 200
    //         p.id,
    //         p.titre AS name,
    //         p.image,
    //         -- p.qte_stock AS quantity,
    //         t.prix_vente_ppv AS price,
    //         COALESCE(s.solde, 0) AS quantity,
    //         n4.designation AS category
    //     FROM 
    //         p_produits p
    //     LEFT JOIN 
    //         p_pr_tarifications t ON t.produit_id = p.id AND t.active = 1
    //     LEFT JOIN 
    //         t_st_stockstatic s ON s.p_produit_id = p.id
    //     INNER JOIN 
    //         RecursiveNiveaux map ON map.id = p.niveau_id
    //     INNER JOIN 
    //         p_pr_niveau_produits n4 ON n4.id = map.niveau4_id
    //     WHERE 
    //         p.active = 1
    //         $filter
    // SQL;

    //     $params = [];
    //     if ($parentId !== null) {
    //         $params['parentId'] = $parentId;
    //     }

    //     return $conn->executeQuery($sql, $params)->fetchAllAssociative();
    // }


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


}
