<?php

namespace App\Repository;

use App\Entity\TAcPrecommande;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @extends ServiceEntityRepository<TAcPrecommande>
 *
 * @method TAcPrecommande|null find($id, $lockMode = null, $lockVersion = null)
 * @method TAcPrecommande|null findOneBy(array $criteria, array $orderBy = null)
 * @method TAcPrecommande[]    findAll()
 * @method TAcPrecommande[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class TAcPrecommandeRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, TAcPrecommande::class);
    }

//    /**
//     * @return TAcPrecommande[] Returns an array of TAcPrecommande objects
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

//    public function findOneBySomeField($value): ?TAcPrecommande
//    {
//        return $this->createQueryBuilder('t')
//            ->andWhere('t.exampleField = :val')
//            ->setParameter('val', $value)
//            ->getQuery()
//            ->getOneOrNullResult()
//        ;
//    }
}
