<?php

namespace App\Repository;

use App\Entity\PPrUnites;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @extends ServiceEntityRepository<PPrUnites>
 *
 * @method PPrUnites|null find($id, $lockMode = null, $lockVersion = null)
 * @method PPrUnites|null findOneBy(array $criteria, array $orderBy = null)
 * @method PPrUnites[]    findAll()
 * @method PPrUnites[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class PPrUnitesRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, PPrUnites::class);
    }

//    /**
//     * @return PPrUnites[] Returns an array of PPrUnites objects
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

//    public function findOneBySomeField($value): ?PPrUnites
//    {
//        return $this->createQueryBuilder('p')
//            ->andWhere('p.exampleField = :val')
//            ->setParameter('val', $value)
//            ->getQuery()
//            ->getOneOrNullResult()
//        ;
//    }
}
