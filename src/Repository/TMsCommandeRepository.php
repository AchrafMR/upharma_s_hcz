<?php

namespace App\Repository;

use App\Entity\TMsCommande;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @extends ServiceEntityRepository<TMsCommande>
 *
 * @method TMsCommande|null find($id, $lockMode = null, $lockVersion = null)
 * @method TMsCommande|null findOneBy(array $criteria, array $orderBy = null)
 * @method TMsCommande[]    findAll()
 * @method TMsCommande[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class TMsCommandeRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, TMsCommande::class);
    }

//    /**
//     * @return TMsCommande[] Returns an array of TMsCommande objects
//     */

        public function findWithActiveLignes(int $idCommande): ?TMsCommande
        {
            return $this->createQueryBuilder('c')
                ->leftJoin('c.tMsCommandelgs', 'lg')
                ->addSelect('lg')
                ->where('c.id = :id')
                ->andWhere('lg.actif = 1')
                ->setParameter('id', $idCommande)
                ->getQuery()
                ->getOneOrNullResult();
        }
        public function findAllActifWithActiveLg(): array
        {
            return $this->createQueryBuilder('d')
                ->where('d.actif = 1') 
                ->leftJoin('d.tMsCommandelgs', 'lg', 'WITH', 'lg.actif = 1') 
                ->addSelect('lg')
                ->leftJoin('d.demandeur_id', 'demandeur')
                ->addSelect('demandeur')
                ->leftJoin('d.recepteur_id', 'recepteur')
                ->addSelect('recepteur')
                ->orderBy('d.created', 'DESC')
                ->getQuery()
                ->getResult();
        }
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

//    public function findOneBySomeField($value): ?TMsCommande
//    {
//        return $this->createQueryBuilder('t')
//            ->andWhere('t.exampleField = :val')
//            ->setParameter('val', $value)
//            ->getQuery()
//            ->getOneOrNullResult()
//        ;
//    }
}
