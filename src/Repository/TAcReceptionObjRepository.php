<?php

namespace App\Repository;

use App\Entity\TAcReceptionObj;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @extends ServiceEntityRepository<TAcReceptionObj>
 *
 * @method TAcReceptionObj|null find($id, $lockMode = null, $lockVersion = null)
 * @method TAcReceptionObj|null findOneBy(array $criteria, array $orderBy = null)
 * @method TAcReceptionObj[]    findAll()
 * @method TAcReceptionObj[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class TAcReceptionObjRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, TAcReceptionObj::class);
    }

//    /**
//     * @return TAcReceptionObj[] Returns an array of TAcReceptionObj objects
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

//    public function findOneBySomeField($value): ?TAcReceptionObj
//    {
//        return $this->createQueryBuilder('t')
//            ->andWhere('t.exampleField = :val')
//            ->setParameter('val', $value)
//            ->getQuery()
//            ->getOneOrNullResult()
//        ;
//    }
}
