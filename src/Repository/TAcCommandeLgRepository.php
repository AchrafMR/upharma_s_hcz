<?php

namespace App\Repository;

use App\Entity\TAcCommandeLg;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @extends ServiceEntityRepository<TAcCommandeLg>
 *
 * @method TAcCommandeLg|null find($id, $lockMode = null, $lockVersion = null)
 * @method TAcCommandeLg|null findOneBy(array $criteria, array $orderBy = null)
 * @method TAcCommandeLg[]    findAll()
 * @method TAcCommandeLg[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class TAcCommandeLgRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, TAcCommandeLg::class);
    }

//    /**
//     * @return TAcCommandeLg[] Returns an array of TAcCommandeLg objects
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

//    public function findOneBySomeField($value): ?TAcCommandeLg
//    {
//        return $this->createQueryBuilder('t')
//            ->andWhere('t.exampleField = :val')
//            ->setParameter('val', $value)
//            ->getQuery()
//            ->getOneOrNullResult()
//        ;
//    }

    public function getTotalQuantiteReceptionnee(TAcCommandeLg $commandeLg): int
    {
        $qb = $this->getEntityManager()->createQueryBuilder();

        return (int) $qb->select('SUM(rLg.quantite)')
            ->from(\App\Entity\TAcReceptionLg::class, 'rLg')
            ->where('rLg.tAcCommandeLg = :commandeLg')
            ->setParameter('commandeLg', $commandeLg)
            ->getQuery()
            ->getSingleScalarResult();
    }
}
