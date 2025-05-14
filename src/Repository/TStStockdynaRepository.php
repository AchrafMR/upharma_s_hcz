<?php

namespace App\Repository;

use App\Entity\TStStockdyna;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @extends ServiceEntityRepository<TStStockdyna>
 *
 * @method TStStockdyna|null find($id, $lockMode = null, $lockVersion = null)
 * @method TStStockdyna|null findOneBy(array $criteria, array $orderBy = null)
 * @method TStStockdyna[]    findAll()
 * @method TStStockdyna[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class TStStockdynaRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, TStStockdyna::class);
    }

//    /**
//     * @return TStStockdyna[] Returns an array of TStStockdyna objects
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

//    public function findOneBySomeField($value): ?TStStockdyna
//    {
//        return $this->createQueryBuilder('t')
//            ->andWhere('t.exampleField = :val')
//            ->setParameter('val', $value)
//            ->getQuery()
//            ->getOneOrNullResult()
//        ;
//    }
}
