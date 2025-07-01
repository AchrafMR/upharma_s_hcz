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
    private ?PEmplacements $pEmplacements = null;

    #[ORM\ManyToOne(inversedBy: 'tStStockstatics')]
    private ?User $userupdate = null;

    #[ORM\Column(type: Types::DATETIME_MUTABLE, nullable: true)]
    private ?\DateTimeInterface $dateupdate = null;

    #[ORM\Column(nullable: true)]
    private ?int $flagSynchronisationLocale = null;

    #[ORM\Column(nullable: true)]
    private ?float $quantiteReserve = null;

    #[ORM\Column(type: Types::DATETIME_MUTABLE, nullable: true)]
    private ?\DateTimeInterface $dateCreate = null;

    #[ORM\ManyToOne]
    private ?User $userCreated = null;

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

    public function getPEmplacements(): ?PEmplacements
    {
        return $this->pEmplacements;
    }

    public function setPEmplacements(?PEmplacements $pEmplacements): static
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

    public function getQuantiteReserve(): ?float
    {
        return $this->quantiteReserve;
    }

    public function setQuantiteReserve(?float $quantiteReserve): static
    {
        $this->quantiteReserve = $quantiteReserve;

        return $this;
    }

    public function getDateCreate(): ?\DateTimeInterface
    {
        return $this->dateCreate;
    }

    public function setDateCreate(?\DateTimeInterface $dateCreate): static
    {
        $this->dateCreate = $dateCreate;

        return $this;
    }

    public function getUserCreated(): ?User
    {
        return $this->userCreated;
    }

    public function setUserCreated(?User $userCreated): static
    {
        $this->userCreated = $userCreated;

        return $this;
    }
}
