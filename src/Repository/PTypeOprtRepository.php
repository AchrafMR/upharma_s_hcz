<?php

namespace App\Repository;

use App\Entity\PTypeOprt;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @extends ServiceEntityRepository<PTypeOprt>
 *
 * @method PTypeOprt|null find($id, $lockMode = null, $lockVersion = null)
 * @method PTypeOprt|null findOneBy(array $criteria, array $orderBy = null)
 * @method PTypeOprt[]    findAll()
 * @method PTypeOprt[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class PTypeOprtRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, PTypeOprt::class);
    }

//    /**
//     * @return PTypeOprt[] Returns an array of PTypeOprt objects
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

//    public function findOneBySomeField($value): ?PTypeOprt
//    {
//        return $this->createQueryBuilder('p')
//            ->andWhere('p.exampleField = :val')
//            ->setParameter('val', $value)
//            ->getQuery()
//            ->getOneOrNullResult()
//        ;
//    }
}
