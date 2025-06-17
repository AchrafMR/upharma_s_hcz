<?php

namespace App\Repository;

use App\Entity\TAcMarcheLg;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @extends ServiceEntityRepository<TAcMarcheLg>
 *
 * @method TAcMarcheLg|null find($id, $lockMode = null, $lockVersion = null)
 * @method TAcMarcheLg|null findOneBy(array $criteria, array $orderBy = null)
 * @method TAcMarcheLg[]    findAll()
 * @method TAcMarcheLg[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class TAcMarcheLgRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, TAcMarcheLg::class);
    }

//    /**
//     * @return TAcMarcheLg[] Returns an array of TAcMarcheLg objects
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

//    public function findOneBySomeField($value): ?TAcMarcheLg
//    {
//        return $this->createQueryBuilder('t')
//            ->andWhere('t.exampleField = :val')
//            ->setParameter('val', $value)
//            ->getQuery()
//            ->getOneOrNullResult()
//        ;
//    }
}
