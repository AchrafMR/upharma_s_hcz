<?php

namespace App\Repository;

use App\Entity\TMsPreparationLg;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @extends ServiceEntityRepository<TMsPreparationLg>
 *
 * @method TMsPreparationLg|null find($id, $lockMode = null, $lockVersion = null)
 * @method TMsPreparationLg|null findOneBy(array $criteria, array $orderBy = null)
 * @method TMsPreparationLg[]    findAll()
 * @method TMsPreparationLg[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class TMsPreparationLgRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, TMsPreparationLg::class);
    }

//    /**
//     * @return TMsPreparationLg[] Returns an array of TMsPreparationLg objects
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

//    public function findOneBySomeField($value): ?TMsPreparationLg
//    {
//        return $this->createQueryBuilder('t')
//            ->andWhere('t.exampleField = :val')
//            ->setParameter('val', $value)
//            ->getQuery()
//            ->getOneOrNullResult()
//        ;
//    }
}
