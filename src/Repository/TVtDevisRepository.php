<?php

namespace App\Repository;

use App\Entity\TVtDevis;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @extends ServiceEntityRepository<TVtDevis>
 *
 * @method TVtDevis|null find($id, $lockMode = null, $lockVersion = null)
 * @method TVtDevis|null findOneBy(array $criteria, array $orderBy = null)
 * @method TVtDevis[]    findAll()
 * @method TVtDevis[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class TVtDevisRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, TVtDevis::class);
    }

//    /**
//     * @return TVtDevis[] Returns an array of TVtDevis objects
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

//    public function findOneBySomeField($value): ?TVtDevis
//    {
//        return $this->createQueryBuilder('t')
//            ->andWhere('t.exampleField = :val')
//            ->setParameter('val', $value)
//            ->getQuery()
//            ->getOneOrNullResult()
//        ;
//    }
}
