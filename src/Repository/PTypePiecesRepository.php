<?php

namespace App\Repository;

use App\Entity\PTypePieces;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @extends ServiceEntityRepository<PTypePieces>
 *
 * @method PTypePieces|null find($id, $lockMode = null, $lockVersion = null)
 * @method PTypePieces|null findOneBy(array $criteria, array $orderBy = null)
 * @method PTypePieces[]    findAll()
 * @method PTypePieces[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class PTypePiecesRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, PTypePieces::class);
    }

//    /**
//     * @return PTypePieces[] Returns an array of PTypePieces objects
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

//    public function findOneBySomeField($value): ?PTypePieces
//    {
//        return $this->createQueryBuilder('p')
//            ->andWhere('p.exampleField = :val')
//            ->setParameter('val', $value)
//            ->getQuery()
//            ->getOneOrNullResult()
//        ;
//    }
}
