<?php

namespace App\Repository;

use App\Entity\TMsDemande;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @extends ServiceEntityRepository<TMsDemande>
 *
 * @method TMsDemande|null find($id, $lockMode = null, $lockVersion = null)
 * @method TMsDemande|null findOneBy(array $criteria, array $orderBy = null)
 * @method TMsDemande[]    findAll()
 * @method TMsDemande[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class TMsDemandeRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, TMsDemande::class);
    }

//    /**
//     * @return TMsDemande[] Returns an array of TMsDemande objects
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

//    public function findOneBySomeField($value): ?TMsDemande
//    {
//        return $this->createQueryBuilder('t')
//            ->andWhere('t.exampleField = :val')
//            ->setParameter('val', $value)
//            ->getQuery()
//            ->getOneOrNullResult()
//        ;
//    }
}
