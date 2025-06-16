<?php

namespace App\Repository;

use App\Entity\PTarifFournisseur;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @extends ServiceEntityRepository<PTarifFournisseur>
 *
 * @method PTarifFournisseur|null find($id, $lockMode = null, $lockVersion = null)
 * @method PTarifFournisseur|null findOneBy(array $criteria, array $orderBy = null)
 * @method PTarifFournisseur[]    findAll()
 * @method PTarifFournisseur[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class PTarifFournisseurRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, PTarifFournisseur::class);
    }

//    /**
//     * @return PTarifFournisseur[] Returns an array of PTarifFournisseur objects
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

   public function findByFrs($frs)
   {
       return $this->createQueryBuilder('p')
            ->innerJoin("p.fournisseur" ,"fournisseur")
            ->innerJoin("p.produit" ,"produit")
           ->andWhere('p.fournisseur = :frs')
           ->andWhere('produit.active = 1')
           ->setParameter('frs', $frs)
           ->getQuery()
           ->getResult()
       ;
   }
}
