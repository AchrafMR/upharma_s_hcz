<?php

namespace App\Repository;

use App\Entity\PNaturePrix;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @extends ServiceEntityRepository<PNaturePrix>
 *
 * @method PNaturePrix|null find($id, $lockMode = null, $lockVersion = null)
 * @method PNaturePrix|null findOneBy(array $criteria, array $orderBy = null)
 * @method PNaturePrix[]    findAll()
 * @method PNaturePrix[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class PNaturePrixRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, PNaturePrix::class);
    }

//    /**
//     * @return PNaturePrix[] Returns an array of PNaturePrix objects
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

//    public function findOneBySomeField($value): ?PNaturePrix
//    {
//        return $this->createQueryBuilder('p')
//            ->andWhere('p.exampleField = :val')
//            ->setParameter('val', $value)
//            ->getQuery()
//            ->getOneOrNullResult()
//        ;
//    }
}
