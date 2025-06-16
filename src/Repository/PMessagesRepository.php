<?php

namespace App\Repository;

use App\Entity\PMessages;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @extends ServiceEntityRepository<PMessages>
 *
 * @method PMessages|null find($id, $lockMode = null, $lockVersion = null)
 * @method PMessages|null findOneBy(array $criteria, array $orderBy = null)
 * @method PMessages[]    findAll()
 * @method PMessages[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class PMessagesRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, PMessages::class);
    }

//    /**
//     * @return PMessages[] Returns an array of PMessages objects
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

//    public function findOneBySomeField($value): ?PMessages
//    {
//        return $this->createQueryBuilder('p')
//            ->andWhere('p.exampleField = :val')
//            ->setParameter('val', $value)
//            ->getQuery()
//            ->getOneOrNullResult()
//        ;
//    }
}
