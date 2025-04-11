<?php

namespace App\Repository;

use App\Entity\PDepots;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @extends ServiceEntityRepository<PDepots>
 *
 * @method PDepots|null find($id, $lockMode = null, $lockVersion = null)
 * @method PDepots|null findOneBy(array $criteria, array $orderBy = null)
 * @method PDepots[]    findAll()
 * @method PDepots[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class PDepotsRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, PDepots::class);
    }

//    /**
//     * @return PDepots[] Returns an array of PDepots objects
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

//    public function findOneBySomeField($value): ?PDepots
//    {
//        return $this->createQueryBuilder('p')
//            ->andWhere('p.exampleField = :val')
//            ->setParameter('val', $value)
//            ->getQuery()
//            ->getOneOrNullResult()
//        ;
//    }
}
