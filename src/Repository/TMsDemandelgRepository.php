<?php

namespace App\Repository;

use App\Entity\TMsDemandelg;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @extends ServiceEntityRepository<TMsDemandelg>
 *
 * @method TMsDemandelg|null find($id, $lockMode = null, $lockVersion = null)
 * @method TMsDemandelg|null findOneBy(array $criteria, array $orderBy = null)
 * @method TMsDemandelg[]    findAll()
 * @method TMsDemandelg[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class TMsDemandelgRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, TMsDemandelg::class);
    }

//    /**
//     * @return TMsDemandelg[] Returns an array of TMsDemandelg objects
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

//    public function findOneBySomeField($value): ?TMsDemandelg
//    {
//        return $this->createQueryBuilder('t')
//            ->andWhere('t.exampleField = :val')
//            ->setParameter('val', $value)
//            ->getQuery()
//            ->getOneOrNullResult()
//        ;
//    }
}
