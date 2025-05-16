<?php

namespace App\Entity;

use App\Repository\TStStockdynaRepository;
use Doctrine\DBAL\Types\Types;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: TStStockdynaRepository::class)]
#[ORM\Table(name: 't_st_stockdyna')]
class TStStockdyna
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\ManyToOne(inversedBy: 'tStStockdynas')]
    private ?PProduits $pProduit = null;

    #[ORM\Column]
    private ?float $qantite = null;

    #[ORM\ManyToOne(inversedBy: 'tStStockdynas')]
    private ?PPrUnites $pPrUnite = null;

    #[ORM\ManyToOne(inversedBy: 'userupdate')]
    private ?PEmplacement $PEmplacements = null;

    #[ORM\ManyToOne(inversedBy: 'tStStockdynas')]
    #[ORM\JoinColumn(nullable: false)]
    private ?User $userupdate = null;

    #[ORM\Column(type: Types::DATETIME_MUTABLE)]
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

    public function getQantite(): ?float
    {
        return $this->qantite;
    }

    public function setQantite(float $qantite): static
    {
        $this->qantite = $qantite;

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
        return $this->PEmplacements;
    }

    public function setPEmplacements(?PEmplacement $PEmplacements): static
    {
        $this->PEmplacements = $PEmplacements;

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

    public function setDateupdate(\DateTimeInterface $dateupdate): static
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
