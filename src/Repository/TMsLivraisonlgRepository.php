<?php

namespace App\Repository;

use App\Entity\TMsLivraisonlg;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @extends ServiceEntityRepository<TMsLivraisonlg>
 *
 * @method TMsLivraisonlg|null find($id, $lockMode = null, $lockVersion = null)
 * @method TMsLivraisonlg|null findOneBy(array $criteria, array $orderBy = null)
 * @method TMsLivraisonlg[]    findAll()
 * @method TMsLivraisonlg[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class TMsLivraisonlgRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, TMsLivraisonlg::class);
    }

//    /**
//     * @return TMsLivraisonlg[] Returns an array of TMsLivraisonlg objects
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

//    public function findOneBySomeField($value): ?TMsLivraisonlg
//    {
//        return $this->createQueryBuilder('t')
//            ->andWhere('t.exampleField = :val')
//            ->setParameter('val', $value)
//            ->getQuery()
//            ->getOneOrNullResult()
//        ;
//    }
}
