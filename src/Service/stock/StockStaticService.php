<?php

namespace App\Service\stock;

use App\Entity\PEmplacements;
use App\Entity\PProduits;
use App\Entity\PPrUnites;
use App\Entity\TStStockstatic;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\Security\Core\Security;

class StockStaticService
{
    private EntityManagerInterface $em;
    private Security $security;

    public function __construct(EntityManagerInterface $em, Security $security)
    {
        $this->em = $em;
        $this->security = $security;
    }

    public function updateSolde(PProduits $produit, PPrUnites $unite, PEmplacements $emplacement, float $quantite): void
    {
        // dd("achraf");
        $stock = $this->em->getRepository(TStStockstatic::class)->findOneBy([
            'pProduit' => $produit,
            'pPrUnite' => $unite,
            'pEmplacements' => $emplacement,
        ]);


        if ($stock) {
            //  Update existing solde
            $newSolde = $stock->getSolde() + $quantite;
            $stock->setSolde($newSolde);
        } else {
            //  Create new stock static row
            $stock = new TStStockstatic();
            $stock->setPProduit($produit);
            $stock->setPPrUnite($unite);
            $stock->setPEmplacements($emplacement);
            $stock->setSolde($quantite);
            $stock->setQuantiteReserve(0);
            $stock->setFlagSynchronisationLocale(0);
        }

        //  Always update these
        $stock->setUserupdate($this->security->getUser());
        $stock->setDateupdate(new \DateTime());

        $this->em->persist($stock);
    }
}
