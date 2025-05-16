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
