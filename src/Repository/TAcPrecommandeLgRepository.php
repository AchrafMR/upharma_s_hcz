<?php

namespace App\Repository;

use App\Entity\TAcPrecommandeLg;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @extends ServiceEntityRepository<TAcPrecommandeLg>
 *
 * @method TAcPrecommandeLg|null find($id, $lockMode = null, $lockVersion = null)
 * @method TAcPrecommandeLg|null findOneBy(array $criteria, array $orderBy = null)
 * @method TAcPrecommandeLg[]    findAll()
 * @method TAcPrecommandeLg[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class TAcPrecommandeLgRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, TAcPrecommandeLg::class);
    }

//    /**
//     * @return TAcPrecommandeLg[] Returns an array of TAcPrecommandeLg objects
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

//    public function findOneBySomeField($value): ?TAcPrecommandeLg
//    {
//        return $this->createQueryBuilder('t')
//            ->andWhere('t.exampleField = :val')
//            ->setParameter('val', $value)
//            ->getQuery()
//            ->getOneOrNullResult()
//        ;
//    }
}
