<?php

namespace App\Repository;

use App\Entity\TAcCommande;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @extends ServiceEntityRepository<TAcCommande>
 *
 * @method TAcCommande|null find($id, $lockMode = null, $lockVersion = null)
 * @method TAcCommande|null findOneBy(array $criteria, array $orderBy = null)
 * @method TAcCommande[]    findAll()
 * @method TAcCommande[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class TAcCommandeRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, TAcCommande::class);
    }

//    /**
//     * @return TAcCommande[] Returns an array of TAcCommande objects
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

//    public function findOneBySomeField($value): ?TAcCommande
//    {
//        return $this->createQueryBuilder('t')
//            ->andWhere('t.exampleField = :val')
//            ->setParameter('val', $value)
//            ->getQuery()
//            ->getOneOrNullResult()
//        ;
//    }
}
