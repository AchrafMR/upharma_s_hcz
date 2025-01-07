<?php

namespace App\Repository;

use App\Entity\User;
use App\Entity\PDossier;
use Doctrine\Persistence\ManagerRegistry;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;

/**
 * @extends ServiceEntityRepository<PDossier>
 *
 * @method PDossier|null find($id, $lockMode = null, $lockVersion = null)
 * @method PDossier|null findOneBy(array $criteria, array $orderBy = null)
 * @method PDossier[]    findAll()
 * @method PDossier[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class PDossierRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, PDossier::class);
    }

    public function save(PDossier $entity, bool $flush = false): void
    {
        $this->getEntityManager()->persist($entity);

        if ($flush) {
            $this->getEntityManager()->flush();
        }
    }

    public function remove(PDossier $entity, bool $flush = false): void
    {
        $this->getEntityManager()->remove($entity);

        if ($flush) {
            $this->getEntityManager()->flush();
        }
    }

//    /**
//     * @return PDossier[] Returns an array of PDossier objects
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

//    public function findOneBySomeField($value): ?PDossier
//    {
//        return $this->createQueryBuilder('p')
//            ->andWhere('p.exampleField = :val')
//            ->setParameter('val', $value)
//            ->getQuery()
//            ->getOneOrNullResult()
//        ;
//    }

public function findSites(User $user): array
    {
        return $this->createQueryBuilder('p')
            ->innerJoin('p.pUserDossierActions','u')
            ->where('p.active = 1')
            // ->andWhere('p.parent is not null')
            ->andWhere('u.userr = :user')
            ->orderBy('p.ord', 'ASC')
            ->setParameter('user', $user)
            // ->setMaxResults(10)
            ->getQuery()
            ->getResult()
        ;
    }
}
