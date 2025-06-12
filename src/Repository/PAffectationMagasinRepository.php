<?php

namespace App\Repository;

use App\Entity\PAffectationMagasin;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @extends ServiceEntityRepository<PAffectationMagasin>
 *
 * @method PAffectationMagasin|null find($id, $lockMode = null, $lockVersion = null)
 * @method PAffectationMagasin|null findOneBy(array $criteria, array $orderBy = null)
 * @method PAffectationMagasin[]    findAll()
 * @method PAffectationMagasin[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class PAffectationMagasinRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, PAffectationMagasin::class);
    }

//    /**
//     * @return PAffectationMagasin[] Returns an array of PAffectationMagasin objects
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

//    public function findOneBySomeField($value): ?PAffectationMagasin
//    {
//        return $this->createQueryBuilder('p')
//            ->andWhere('p.exampleField = :val')
//            ->setParameter('val', $value)
//            ->getQuery()
//            ->getOneOrNullResult()
//        ;
//    }
}
