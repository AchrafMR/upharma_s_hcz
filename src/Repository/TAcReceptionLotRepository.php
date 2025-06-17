<?php

namespace App\Repository;

use App\Entity\TAcReceptionLot;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @extends ServiceEntityRepository<TAcReceptionLot>
 *
 * @method TAcReceptionLot|null find($id, $lockMode = null, $lockVersion = null)
 * @method TAcReceptionLot|null findOneBy(array $criteria, array $orderBy = null)
 * @method TAcReceptionLot[]    findAll()
 * @method TAcReceptionLot[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class TAcReceptionLotRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, TAcReceptionLot::class);
    }

//    /**
//     * @return TAcReceptionLot[] Returns an array of TAcReceptionLot objects
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

//    public function findOneBySomeField($value): ?TAcReceptionLot
//    {
//        return $this->createQueryBuilder('t')
//            ->andWhere('t.exampleField = :val')
//            ->setParameter('val', $value)
//            ->getQuery()
//            ->getOneOrNullResult()
//        ;
//    }
}
