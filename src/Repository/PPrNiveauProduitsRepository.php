<?php

namespace App\Repository;

use App\Entity\PPrNiveauProduits;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @extends ServiceEntityRepository<PPrNiveauProduits>
 *
 * @method PPrNiveauProduits|null find($id, $lockMode = null, $lockVersion = null)
 * @method PPrNiveauProduits|null findOneBy(array $criteria, array $orderBy = null)
 * @method PPrNiveauProduits[]    findAll()
 * @method PPrNiveauProduits[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class PPrNiveauProduitsRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, PPrNiveauProduits::class);
    }

//    /**
//     * @return PPrNiveauProduits[] Returns an array of PPrNiveauProduits objects
//     */
//    public function findByExampleField($value): array
//    {
//        return $this->createQueryBuilder('p')
//            ->andWhere('p.exampleField = :val')
//            ->setParameter('val', $value)
//            ->orderBy('p.id', 'ASC')
//            ->setMaxResults(10)
//            ->getQuery()
//            ->getResult()
//        ;
//    }

//    public function findOneBySomeField($value): ?PPrNiveauProduits
//    {
//        return $this->createQueryBuilder('p')
//            ->andWhere('p.exampleField = :val')
//            ->setParameter('val', $value)
//            ->getQuery()
//            ->getOneOrNullResult()
//        ;
//    }
}
