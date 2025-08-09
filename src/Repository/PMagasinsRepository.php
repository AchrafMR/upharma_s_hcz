<?php

namespace App\Repository;

use App\Entity\PAffectationMagasin;
use App\Entity\PMagasins;
use App\Entity\User;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @extends ServiceEntityRepository<PMagasins>
 *
 * @method PMagasins|null find($id, $lockMode = null, $lockVersion = null)
 * @method PMagasins|null findOneBy(array $criteria, array $orderBy = null)
 * @method PMagasins[]    findAll()
 * @method PMagasins[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class PMagasinsRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, PMagasins::class);
    }

    //    /**
    //     * @return PMagasins[] Returns an array of PMagasins objects
    //     */

    public function findDemandeurMagasins(User $user): array
    {
        if (in_array('ROLE_ADMIN', $user->getRoles())) {
            return $this->createQueryBuilder('m')
                ->getQuery()
                ->getResult();
        }

        return $this->createQueryBuilder('m')
            ->innerJoin(PAffectationMagasin::class, 'a', 'WITH', 'a.magasin = m')
            ->where('a.userr = :user')
            ->andWhere('a.defaut = 1')
            ->setParameter('user', $user)
            ->getQuery()
            ->getResult();
    }


    public function findTraitementMagasins(User $user): array
    {
        if (in_array('ROLE_ADMIN', $user->getRoles())) {
            return $this->createQueryBuilder('m')
                ->getQuery()
                ->getResult();
        }

        return $this->createQueryBuilder('m')
            ->innerJoin(PAffectationMagasin::class, 'a', 'WITH', 'a.magasin = m')
            ->where('a.userr = :user')
            ->setParameter('user', $user)
            ->getQuery()
            ->getResult();
    }


    public function findSelectedMagasin(User $user): ?PMagasins
    {
        $qb = $this->createQueryBuilder('m')
            ->setMaxResults(1)
            ->where('m.defaut = 1');

        if (!in_array('ROLE_ADMIN', $user->getRoles())) {
            $qb->innerJoin(PAffectationMagasin::class, 'a', 'WITH', 'a.magasin = m')
            ->andWhere('a.userr = :user')
            ->andWhere('a.defaut = 1')
            ->setParameter('user', $user);
        }

        return $qb->getQuery()->getOneOrNullResult();
    }
        public function findMagasinParDefaut($user): ?PMagasins
    {
        return $this->createQueryBuilder('m')
            ->join('m.pAffectationMagasins', 'a')
            ->join('a.userr', 'user')
            ->where('m.defaut = 1')
            ->andWhere('a.defaut = 1') 
            ->andWhere('user = :user')
            ->setParameter('user', $user)
            ->setMaxResults(1)
            ->getQuery()
            ->getOneOrNullResult();
    }

    public function findMagasinComplementaire($user): ?PMagasins
    {
        return $this->createQueryBuilder('m')
            ->join('m.pAffectationMagasins', 'a')
            ->join('a.userr', 'user')
            ->where('m.complementaire = 1')
            // ->andWhere('d.defaut = 1') //if it should be the default depot
            ->andWhere('user = :user')
            ->setParameter('user', $user)
            ->setMaxResults(1)
            ->getQuery()
            ->getOneOrNullResult();
    }

    public function findMagasinByUser($user)
    {
        return $this->createQueryBuilder('m')
            ->join('m.pAffectationMagasins', 'a')
            ->join('a.userr', 'user')
            ->andWhere('a.defaut = 1') 
            ->andWhere('user = :user')
            ->setParameter('user', $user)
            ->getQuery()
            ->getResult();
    }





}
