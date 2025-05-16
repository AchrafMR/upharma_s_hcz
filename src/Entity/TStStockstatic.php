<?php

namespace App\Entity;

use App\Repository\TStStockstaticRepository;
use Doctrine\DBAL\Types\Types;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: TStStockstaticRepository::class)]
#[ORM\Table(name: 't_st_stockstatic')]
class TStStockstatic
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\ManyToOne(inversedBy: 'tStStockstatics')]
    private ?PProduits $pProduit = null;

    #[ORM\Column]
    private ?float $solde = null;

    #[ORM\ManyToOne(inversedBy: 'tStStockstatics')]
    private ?PPrUnites $pPrUnite = null;

    #[ORM\ManyToOne(inversedBy: 'tStStockstatics')]
    private ?PEmplacement $pEmplacements = null;

    #[ORM\ManyToOne(inversedBy: 'tStStockstatics')]
    private ?User $userupdate = null;

    #[ORM\Column(type: Types::DATETIME_MUTABLE, nullable: true)]
    private ?\DateTimeInterface $dateupdate = null;

    #[ORM\Column(nullable: true)]
    private ?int $flagSynchronisationLocale = null;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getPProduit(): ?PProduits
    {
        return $this->pProduit;
    }

    public function setPProduit(?PProduits $pProduit): static
    {
        $this->pProduit = $pProduit;
        return $this;
    }

    public function getSolde(): ?float
    {
        return $this->solde;
    }

    public function setSolde(?float $solde): static
    {
        $this->solde = $solde;
        return $this;
    }

    public function getPPrUnite(): ?PPrUnites
    {
        return $this->pPrUnite;
    }

    public function setPPrUnite(?PPrUnites $pPrUnite): static
    {
        $this->pPrUnite = $pPrUnite;
        return $this;
    }

    public function getPEmplacements(): ?PEmplacement
    {
        return $this->pEmplacements;
    }

    public function setPEmplacements(?PEmplacement $pEmplacements): static
    {
        $this->pEmplacements = $pEmplacements;
        return $this;
    }

    public function getUserupdate(): ?User
    {
        return $this->userupdate;
    }

    public function setUserupdate(?User $userupdate): static
    {
        $this->userupdate = $userupdate;
        return $this;
    }

    public function getDateupdate(): ?\DateTimeInterface
    {
        return $this->dateupdate;
    }

    public function setDateupdate(?\DateTimeInterface $dateupdate): static
    {
        $this->dateupdate = $dateupdate;
        return $this;
    }

    public function getFlagSynchronisationLocale(): ?int
    {
        return $this->flagSynchronisationLocale;
    }

    public function setFlagSynchronisationLocale(?int $flagSynchronisationLocale): static
    {
        $this->flagSynchronisationLocale = $flagSynchronisationLocale;
        return $this;
    }
}
