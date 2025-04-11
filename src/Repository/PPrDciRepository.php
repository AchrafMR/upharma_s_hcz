<?php

namespace App\Repository;

use App\Entity\PPrDci;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @extends ServiceEntityRepository<PPrDci>
 *
 * @method PPrDci|null find($id, $lockMode = null, $lockVersion = null)
 * @method PPrDci|null findOneBy(array $criteria, array $orderBy = null)
 * @method PPrDci[]    findAll()
 * @method PPrDci[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class PPrDciRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, PPrDci::class);
    }

//    /**
//     * @return PPrDci[] Returns an array of PPrDci objects
//     */
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

//    public function findOneBySomeField($value): ?PPrDci
//    {
//        return $this->createQueryBuilder('p')
//            ->andWhere('p.exampleField = :val')
//            ->setParameter('val', $value)
//            ->getQuery()
//            ->getOneOrNullResult()
//        ;
//    }
}
