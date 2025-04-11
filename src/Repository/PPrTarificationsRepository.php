<?php

namespace App\Repository;

use App\Entity\PPrTarifications;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @extends ServiceEntityRepository<PPrTarifications>
 *
 * @method PPrTarifications|null find($id, $lockMode = null, $lockVersion = null)
 * @method PPrTarifications|null findOneBy(array $criteria, array $orderBy = null)
 * @method PPrTarifications[]    findAll()
 * @method PPrTarifications[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class PPrTarificationsRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, PPrTarifications::class);
    }

//    /**
//     * @return PPrTarifications[] Returns an array of PPrTarifications objects
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

//    public function findOneBySomeField($value): ?PPrTarifications
//    {
//        return $this->createQueryBuilder('p')
//            ->andWhere('p.exampleField = :val')
//            ->setParameter('val', $value)
//            ->getQuery()
//            ->getOneOrNullResult()
//        ;
//    }
}
