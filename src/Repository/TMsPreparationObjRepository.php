<?php

namespace App\Repository;

use App\Entity\TMsPreparationObj;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @extends ServiceEntityRepository<TMsPreparationObj>
 *
 * @method TMsPreparationObj|null find($id, $lockMode = null, $lockVersion = null)
 * @method TMsPreparationObj|null findOneBy(array $criteria, array $orderBy = null)
 * @method TMsPreparationObj[]    findAll()
 * @method TMsPreparationObj[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class TMsPreparationObjRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, TMsPreparationObj::class);
    }

//    /**
//     * @return TMsPreparationObj[] Returns an array of TMsPreparationObj objects
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

//    public function findOneBySomeField($value): ?TMsPreparationObj
//    {
//        return $this->createQueryBuilder('t')
//            ->andWhere('t.exampleField = :val')
//            ->setParameter('val', $value)
//            ->getQuery()
//            ->getOneOrNullResult()
//        ;
//    }
    public function findObjInPreparation($obj, $preparation)
    {
        return $this->createQueryBuilder('t')
            ->innerJoin('t.tMsPreparationLg', 'lg')
            ->andWhere('lg.tMsPreparation = :preparation')
            ->andWhere('t.tStStockObj = :obj')
            ->setParameter('preparation', $preparation)
            ->setParameter('obj', $obj)
            ->setMaxResults(1)
            ->getQuery()
            ->getOneOrNullResult()
            ;
    }

    public function findNonPrepareObjByPreparation($preparation)
    {
        return $this->createQueryBuilder('t')
            ->innerJoin('t.tMsPreparationLg', 'lg')
            ->andWhere('lg.tMsPreparation = :preparation')
            ->andWhere('t.prepare = 0')
            ->setParameter('preparation', $preparation)
            ->setMaxResults(1)
            ->getQuery()
            ->getOneOrNullResult()
            ;
    }

    public function findByPreparation($preparation)
    {
        return $this->createQueryBuilder('t')
            ->innerJoin('t.tMsPreparationLg', 'lg')
            ->andWhere('lg.tMsPreparation = :preparation')
            ->setParameter('preparation', $preparation)
            ->getQuery()
            ->getResult()
            ;
    }

    public function findByPreparationNoPalette($preparation)
    {
        return $this->createQueryBuilder('t')
            ->innerJoin('t.tMsPreparationLg', 'lg')
            ->andWhere('lg.tMsPreparation = :preparation')
            ->andWhere('t.codePalette is NULL')
            ->setParameter('preparation', $preparation)
            ->getQuery()
            ->getResult()
            ;
    }
}
