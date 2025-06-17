<?php

namespace App\Repository;

use App\Entity\TMsLivraisonobj;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @extends ServiceEntityRepository<TMsLivraisonobj>
 *
 * @method TMsLivraisonobj|null find($id, $lockMode = null, $lockVersion = null)
 * @method TMsLivraisonobj|null findOneBy(array $criteria, array $orderBy = null)
 * @method TMsLivraisonobj[]    findAll()
 * @method TMsLivraisonobj[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class TMsLivraisonobjRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, TMsLivraisonobj::class);
    }

//    /**
//     * @return TMsLivraisonobj[] Returns an array of TMsLivraisonobj objects
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

//    public function findOneBySomeField($value): ?TMsLivraisonobj
//    {
//        return $this->createQueryBuilder('t')
//            ->andWhere('t.exampleField = :val')
//            ->setParameter('val', $value)
//            ->getQuery()
//            ->getOneOrNullResult()
//        ;
//    }
}
