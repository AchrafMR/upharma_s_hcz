<?php

namespace App\Repository;

use App\Entity\TStStockObj;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @extends ServiceEntityRepository<TStStockObj>
 *
 * @method TStStockObj|null find($id, $lockMode = null, $lockVersion = null)
 * @method TStStockObj|null findOneBy(array $criteria, array $orderBy = null)
 * @method TStStockObj[]    findAll()
 * @method TStStockObj[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class TStStockObjRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, TStStockObj::class);
    }

//    /**
//     * @return TStStockObj[] Returns an array of TStStockObj objects
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

//    public function findOneBySomeField($value): ?TStStockObj
//    {
//        return $this->createQueryBuilder('t')
//            ->andWhere('t.exampleField = :val')
//            ->setParameter('val', $value)
//            ->getQuery()
//            ->getOneOrNullResult()
//        ;
//    }

    public function findObjByProduitAndMagasin($produit, $magasin, $qte)
    {
        // return $this->createQueryBuilder('t')
        //     ->innerJoin('t.adresse', 'emplacement')
        //     ->andWhere('t.produit = :produit')
        //     ->andWhere('emplacement.magasin = :magasin')
        //     ->andWhere('t.conformite = 1')
        //     ->andWhere('t.active = 1')
        //     ->andWhere('t.datePeremption >= :date')
        //     ->setParameter('magasin', $magasin)
        //     ->setParameter('produit', $produit)
        //     ->setParameter('date', new \DateTime('today'))
        //     ->orderBy('t.datePeremption', 'ASC')
        //     ->setMaxResults($qte)
        //     ->getQuery()
        //     ->getResult()
        // ;

        // Query 1: Get stock objects (same as your current logic)
        $stockObjs = $this->createQueryBuilder('t')
            ->innerJoin('t.adresse', 'emplacement')
            ->andWhere('t.produit = :produit')
            ->andWhere('emplacement.magasin = :magasin')
            ->andWhere('t.conformite = 1')
            ->andWhere('t.active = 1')
            ->andWhere('t.datePeremption >= :date')
            ->setParameter('magasin', $magasin)
            ->setParameter('produit', $produit)
            ->setParameter('date', new \DateTime('today'))
            ->orderBy('t.datePeremption', 'ASC')
            ->setMaxResults($qte)
            ->getQuery()
            ->getResult();

        $stockObjsGroupedByEmplacement = [];

        foreach ($stockObjs as $stockObj) {
            $emplacementId = $stockObj->getAdresse()->getId();

            if (!isset($stockObjsGroupedByEmplacement[$emplacementId])) {
                $stockObjsGroupedByEmplacement[$emplacementId] = 0;
            }

            $stockObjsGroupedByEmplacement[$emplacementId]++;
        }

        return [
            'stockObjs' => $stockObjs,  // List of stock objects
            'stockObjsGroupedByEmplacement' => $stockObjsGroupedByEmplacement,  // List of grouped stock objects by emplacement
        ];
    }
}
