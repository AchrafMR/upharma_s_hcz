<?php

namespace App\Repository;

use App\Entity\TAcFacture;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @extends ServiceEntityRepository<TAcFacture>
 *
 * @method TAcFacture|null find($id, $lockMode = null, $lockVersion = null)
 * @method TAcFacture|null findOneBy(array $criteria, array $orderBy = null)
 * @method TAcFacture[]    findAll()
 * @method TAcFacture[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class TAcFactureRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, TAcFacture::class);
    }

//    /**
//     * @return TAcFacture[] Returns an array of TAcFacture objects
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

//    public function findOneBySomeField($value): ?TAcFacture
//    {
//        return $this->createQueryBuilder('t')
//            ->andWhere('t.exampleField = :val')
//            ->setParameter('val', $value)
//            ->getQuery()
//            ->getOneOrNullResult()
//        ;
//    }
}
