<?php

namespace App\Repository;

use App\Entity\InterfacageHcz;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @extends ServiceEntityRepository<InterfacageHcz>
 *
 * @method InterfacageHcz|null find($id, $lockMode = null, $lockVersion = null)
 * @method InterfacageHcz|null findOneBy(array $criteria, array $orderBy = null)
 * @method InterfacageHcz[]    findAll()
 * @method InterfacageHcz[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class InterfacageHczRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, InterfacageHcz::class);
    }

//    /**
//     * @return InterfacageHcz[] Returns an array of InterfacageHcz objects
//     */
//    public function findByExampleField($value): array
//    {
//        return $this->createQueryBuilder('i')
//            ->andWhere('i.exampleField = :val')
//            ->setParameter('val', $value)
//            ->orderBy('i.id', 'ASC')
//            ->setMaxResults(10)
//            ->getQuery()
//            ->getResult()
//        ;
//    }

//    public function findOneBySomeField($value): ?InterfacageHcz
//    {
//        return $this->createQueryBuilder('i')
//            ->andWhere('i.exampleField = :val')
//            ->setParameter('val', $value)
//            ->getQuery()
//            ->getOneOrNullResult()
//        ;
//    }
}
