<?php

namespace App\Repository;

use App\Entity\TAcReceptionLg;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @extends ServiceEntityRepository<TAcReceptionLg>
 *
 * @method TAcReceptionLg|null find($id, $lockMode = null, $lockVersion = null)
 * @method TAcReceptionLg|null findOneBy(array $criteria, array $orderBy = null)
 * @method TAcReceptionLg[]    findAll()
 * @method TAcReceptionLg[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class TAcReceptionLgRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, TAcReceptionLg::class);
    }

//    /**
//     * @return TAcReceptionLg[] Returns an array of TAcReceptionLg objects
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

//    public function findOneBySomeField($value): ?TAcReceptionLg
//    {
//        return $this->createQueryBuilder('t')
//            ->andWhere('t.exampleField = :val')
//            ->setParameter('val', $value)
//            ->getQuery()
//            ->getOneOrNullResult()
//        ;
//    }
}
