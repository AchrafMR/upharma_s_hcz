<?php

namespace App\Repository;

use App\Entity\PTypePartenaire;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @extends ServiceEntityRepository<PTypePartenaire>
 *
 * @method PTypePartenaire|null find($id, $lockMode = null, $lockVersion = null)
 * @method PTypePartenaire|null findOneBy(array $criteria, array $orderBy = null)
 * @method PTypePartenaire[]    findAll()
 * @method PTypePartenaire[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class PTypePartenaireRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, PTypePartenaire::class);
    }

//    /**
//     * @return PTypePartenaire[] Returns an array of PTypePartenaire objects
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

//    public function findOneBySomeField($value): ?PTypePartenaire
//    {
//        return $this->createQueryBuilder('p')
//            ->andWhere('p.exampleField = :val')
//            ->setParameter('val', $value)
//            ->getQuery()
//            ->getOneOrNullResult()
//        ;
//    }
}
