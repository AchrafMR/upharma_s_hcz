<?php

namespace App\Repository;

use App\Entity\TAcMarche;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @extends ServiceEntityRepository<TAcMarche>
 *
 * @method TAcMarche|null find($id, $lockMode = null, $lockVersion = null)
 * @method TAcMarche|null findOneBy(array $criteria, array $orderBy = null)
 * @method TAcMarche[]    findAll()
 * @method TAcMarche[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class TAcMarcheRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, TAcMarche::class);
    }

//    /**
//     * @return TAcMarche[] Returns an array of TAcMarche objects
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

//    public function findOneBySomeField($value): ?TAcMarche
//    {
//        return $this->createQueryBuilder('t')
//            ->andWhere('t.exampleField = :val')
//            ->setParameter('val', $value)
//            ->getQuery()
//            ->getOneOrNullResult()
//        ;
//    }
}
