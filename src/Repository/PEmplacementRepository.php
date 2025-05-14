<?php

namespace App\Repository;

use App\Entity\PEmplacement;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @extends ServiceEntityRepository<PEmplacement>
 *
 * @method PEmplacement|null find($id, $lockMode = null, $lockVersion = null)
 * @method PEmplacement|null findOneBy(array $criteria, array $orderBy = null)
 * @method PEmplacement[]    findAll()
 * @method PEmplacement[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class PEmplacementRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, PEmplacement::class);
    }

//    /**
//     * @return PEmplacement[] Returns an array of PEmplacement objects
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

//    public function findOneBySomeField($value): ?PEmplacement
//    {
//        return $this->createQueryBuilder('p')
//            ->andWhere('p.exampleField = :val')
//            ->setParameter('val', $value)
//            ->getQuery()
//            ->getOneOrNullResult()
//        ;
//    }
}
