<?php

namespace App\Repository;

use App\Entity\PPrTypeTarification;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @extends ServiceEntityRepository<PPrTypeTarification>
 *
 * @method PPrTypeTarification|null find($id, $lockMode = null, $lockVersion = null)
 * @method PPrTypeTarification|null findOneBy(array $criteria, array $orderBy = null)
 * @method PPrTypeTarification[]    findAll()
 * @method PPrTypeTarification[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class PPrTypeTarificationRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, PPrTypeTarification::class);
    }

//    /**
//     * @return PPrTypeTarification[] Returns an array of PPrTypeTarification objects
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

//    public function findOneBySomeField($value): ?PPrTypeTarification
//    {
//        return $this->createQueryBuilder('p')
//            ->andWhere('p.exampleField = :val')
//            ->setParameter('val', $value)
//            ->getQuery()
//            ->getOneOrNullResult()
//        ;
//    }
}
