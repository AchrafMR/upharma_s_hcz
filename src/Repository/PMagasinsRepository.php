<?php

namespace App\Repository;

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



// src/Repository/PMagasinsRepository.php

    public function findDefaultMagasinForUser(User $user, PEntiteRepository $entiteRepo): ?PMagasins
    {
        $sites = in_array('ROLE_ADMIN', $user->getRoles())
            ? $entiteRepo->findBy(['active' => true])
            : $entiteRepo->findSites($user);

        if (empty($sites)) return null;

        $siteIds = array_map(fn($s) => $s->getId(), $sites);

        return $this->createQueryBuilder('m')
            ->innerJoin('m.depot', 'd')
            ->innerJoin('d.entite', 'e')
            ->where('m.defaut = 1')
            ->andWhere('e.id IN (:entites)')
            ->setParameter('entites', $siteIds)
            ->setMaxResults(1)
            ->getQuery()
            ->getOneOrNullResult();
    }

    public function findMagasinsByUserEntite(User $user, PEntiteRepository $entiteRepo): array
    {
        $sites = in_array('ROLE_ADMIN', $user->getRoles())
            ? $entiteRepo->findBy(['active' => true])
            : $entiteRepo->findSites($user);

        if (empty($sites)) return [];

        $siteIds = array_map(fn($s) => $s->getId(), $sites);

        return $this->createQueryBuilder('m')
            ->innerJoin('m.depot', 'd')
            ->innerJoin('d.entite', 'e')
            ->where('e.id IN (:entites)')
            ->setParameter('entites', $siteIds)
            ->orderBy('m.designation', 'ASC')
            ->getQuery()
            ->getResult();
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

//    public function findOneBySomeField($value): ?PMagasins
//    {
//        return $this->createQueryBuilder('p')
//            ->andWhere('p.exampleField = :val')
//            ->setParameter('val', $value)
//            ->getQuery()
//            ->getOneOrNullResult()
//        ;
//    }
}
