<?php

namespace App\Repository;

use App\Entity\PPartenaires;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @extends ServiceEntityRepository<PPartenaires>
 *
 * @method PPartenaires|null find($id, $lockMode = null, $lockVersion = null)
 * @method PPartenaires|null findOneBy(array $criteria, array $orderBy = null)
 * @method PPartenaires[]    findAll()
 * @method PPartenaires[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class PPartenairesRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, PPartenaires::class);
    }

//    /**
//     * @return PPartenaires[] Returns an array of PPartenaires objects
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

//    public function findOneBySomeField($value): ?PPartenaires
//    {
//        return $this->createQueryBuilder('p')
//            ->andWhere('p.exampleField = :val')
//            ->setParameter('val', $value)
//            ->getQuery()
//            ->getOneOrNullResult()
//        ;
//    }
}
