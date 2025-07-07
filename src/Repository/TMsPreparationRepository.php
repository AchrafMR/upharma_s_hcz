<?php

namespace App\Repository;

use App\Entity\TMsPreparation;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @extends ServiceEntityRepository<TMsPreparation>
 *
 * @method TMsPreparation|null find($id, $lockMode = null, $lockVersion = null)
 * @method TMsPreparation|null findOneBy(array $criteria, array $orderBy = null)
 * @method TMsPreparation[]    findAll()
 * @method TMsPreparation[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class TMsPreparationRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, TMsPreparation::class);
    }

//    /**
//     * @return TMsPreparation[] Returns an array of TMsPreparation objects
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

//    public function findOneBySomeField($value): ?TMsPreparation
//    {
//        return $this->createQueryBuilder('t')
//            ->andWhere('t.exampleField = :val')
//            ->setParameter('val', $value)
//            ->getQuery()
//            ->getOneOrNullResult()
//        ;
//    }
}
