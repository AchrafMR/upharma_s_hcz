<?php

namespace App\Repository;

use App\Entity\TMsCommandelg;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @extends ServiceEntityRepository<TMsCommandelg>
 *
 * @method TMsCommandelg|null find($id, $lockMode = null, $lockVersion = null)
 * @method TMsCommandelg|null findOneBy(array $criteria, array $orderBy = null)
 * @method TMsCommandelg[]    findAll()
 * @method TMsCommandelg[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class TMsCommandelgRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, TMsCommandelg::class);
    }

//    /**
//     * @return TMsCommandelg[] Returns an array of TMsCommandelg objects
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

//    public function findOneBySomeField($value): ?TMsCommandelg
//    {
//        return $this->createQueryBuilder('t')
//            ->andWhere('t.exampleField = :val')
//            ->setParameter('val', $value)
//            ->getQuery()
//            ->getOneOrNullResult()
//        ;
//    }
}
