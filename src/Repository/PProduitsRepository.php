<?php

namespace App\Repository;

use App\Entity\PProduits;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @extends ServiceEntityRepository<PProduits>
 *
 * @method PProduits|null find($id, $lockMode = null, $lockVersion = null)
 * @method PProduits|null findOneBy(array $criteria, array $orderBy = null)
 * @method PProduits[]    findAll()
 * @method PProduits[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class PProduitsRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, PProduits::class);
    }

//    /**
//     * @return PProduits[] Returns an array of PProduits objects
//     */

    public function findProductsWithTarification(): array
    {
        return $this->createQueryBuilder('p')
            ->select('p.id, p.titre AS name, p.image, p.liste AS category, t.prixVente AS price')
            ->leftJoin('p.pPrTarifications', 't', 'WITH', 't.active = 1')
            ->where('p.active = 1')
            ->getQuery()
            ->getArrayResult();
    }



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

//    public function findOneBySomeField($value): ?PProduits
//    {
//        return $this->createQueryBuilder('p')
//            ->andWhere('p.exampleField = :val')
//            ->setParameter('val', $value)
//            ->getQuery()
//            ->getOneOrNullResult()
//        ;
//    }
}
