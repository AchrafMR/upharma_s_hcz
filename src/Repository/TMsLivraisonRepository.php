<?php

namespace App\Repository;

use App\Entity\TMsLivraison;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @extends ServiceEntityRepository<TMsLivraison>
 *
 * @method TMsLivraison|null find($id, $lockMode = null, $lockVersion = null)
 * @method TMsLivraison|null findOneBy(array $criteria, array $orderBy = null)
 * @method TMsLivraison[]    findAll()
 * @method TMsLivraison[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class TMsLivraisonRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, TMsLivraison::class);
    }

//    /**
//     * @return TMsLivraison[] Returns an array of TMsLivraison objects
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

//    public function findOneBySomeField($value): ?TMsLivraison
//    {
//        return $this->createQueryBuilder('t')
//            ->andWhere('t.exampleField = :val')
//            ->setParameter('val', $value)
//            ->getQuery()
//            ->getOneOrNullResult()
//        ;
//    }
}
