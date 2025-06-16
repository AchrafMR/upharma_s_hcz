<?php

namespace App\Repository;

use App\Entity\TAcReception;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @extends ServiceEntityRepository<TAcReception>
 *
 * @method TAcReception|null find($id, $lockMode = null, $lockVersion = null)
 * @method TAcReception|null findOneBy(array $criteria, array $orderBy = null)
 * @method TAcReception[]    findAll()
 * @method TAcReception[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class TAcReceptionRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, TAcReception::class);
    }

//    /**
//     * @return TAcReception[] Returns an array of TAcReception objects
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

//    public function findOneBySomeField($value): ?TAcReception
//    {
//        return $this->createQueryBuilder('t')
//            ->andWhere('t.exampleField = :val')
//            ->setParameter('val', $value)
//            ->getQuery()
//            ->getOneOrNullResult()
//        ;
//    }
}
