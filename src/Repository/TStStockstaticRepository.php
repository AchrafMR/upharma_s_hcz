<?php

namespace App\Repository;

use App\Entity\TStStockstatic;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @extends ServiceEntityRepository<TStStockstatic>
 *
 * @method TStStockstatic|null find($id, $lockMode = null, $lockVersion = null)
 * @method TStStockstatic|null findOneBy(array $criteria, array $orderBy = null)
 * @method TStStockstatic[]    findAll()
 * @method TStStockstatic[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class TStStockstaticRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, TStStockstatic::class);
    }

//    /**
//     * @return TStStockstatic[] Returns an array of TStStockstatic objects
//     */

    public function findStockByProductAndEmplacement(int $productId, int $demandeurId): ?array
    {
        return $this->createQueryBuilder('s')
            ->select('IDENTITY(s.pProduit) AS produit_id', 's.solde AS quantity')
            ->where('s.pProduit = :productId')
            ->andWhere('s.pEmplacements = :demandeurId')
            ->setParameter('productId', $productId)
            ->setParameter('demandeurId', $demandeurId)
            ->getQuery()
            ->getArrayResult();
    }
//    public function findByExampleField($value): array
//    {
//        return $this->createQueryBuilder('t')
//            ->andWhere('t.exampleField = :val')
//            ->setParameter('val', $value)
//            ->orderBy('t.id', 'ASC')
//            ->setMaxResults(10)
//            ->getQuery()
//            ->getResult()
//        ;
//    }

//    public function findOneBySomeField($value): ?TStStockstatic
//    {
//        return $this->createQueryBuilder('t')
//            ->andWhere('t.exampleField = :val')
//            ->setParameter('val', $value)
//            ->getQuery()
//            ->getOneOrNullResult()
//        ;
//    }
}
