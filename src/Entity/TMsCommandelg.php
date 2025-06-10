<?php

namespace App\Entity;

use App\Repository\TMsCommandelgRepository;
use Doctrine\DBAL\Types\Types;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: TMsCommandelgRepository::class)]
#[ORM\Table(name: 't_ms_commandelg')]
class TMsCommandelg
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column]
    private ?float $quantiteCommandee = null;

    #[ORM\Column(nullable: true)]
    private ?float $quantiteServie = null;

    #[ORM\Column(nullable: true)]
    private ?float $quantiteReste = null;

    #[ORM\Column]
    private ?float $prixUnitaire = null;

    #[ORM\Column(nullable: true)]
    private ?float $remise = null;

    #[ORM\Column(nullable: true)]
    private ?float $tva = null;

    #[ORM\Column]
    private ?float $montantHt = null;

    #[ORM\Column]
    private ?float $montantTtc = null;

    #[ORM\Column(type: Types::TEXT, nullable: true)]
    private ?string $observation = null;

    #[ORM\Column(length: 255, nullable: true)]
    private ?string $codeComptable = null;

    #[ORM\Column(nullable: true)]
    private ?bool $flagSynchronisationLocale = null;

    #[ORM\ManyToOne(inversedBy: 'tMsCommandelgs')]
    #[ORM\JoinColumn(nullable: false)]
    private ?TMsCommande $tMsCommande = null;

    #[ORM\ManyToOne(inversedBy: 'tMsCommandelgs')]
    #[ORM\JoinColumn(nullable: false)]
    private ?PProduits $pProduit = null;

    #[ORM\ManyToOne(inversedBy: 'tMsCommandelgs')]
    private ?PPrUnites $pPrUnite = null;

    #[ORM\Column(nullable: true)]
    private ?bool $actif = null;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getQuantiteCommandee(): ?float
    {
        return $this->quantiteCommandee;
    }

    public function setQuantiteCommandee(float $quantiteCommandee): static
    {
        $this->quantiteCommandee = $quantiteCommandee;

        return $this;
    }

    public function getQuantiteServie(): ?float
    {
        return $this->quantiteServie;
    }

    public function setQuantiteServie(?float $quantiteServie): static
    {
        $this->quantiteServie = $quantiteServie;

        return $this;
    }

    public function getQuantiteReste(): ?float
    {
        return $this->quantiteReste;
    }

    public function setQuantiteReste(?float $quantiteReste): static
    {
        $this->quantiteReste = $quantiteReste;

        return $this;
    }

    public function getPrixUnitaire(): ?float
    {
        return $this->prixUnitaire;
    }

    public function setPrixUnitaire(float $prixUnitaire): static
    {
        $this->prixUnitaire = $prixUnitaire;

        return $this;
    }

    public function getRemise(): ?float
    {
        return $this->remise;
    }

    public function setRemise(?float $remise): static
    {
        $this->remise = $remise;

        return $this;
    }

    public function getTva(): ?float
    {
        return $this->tva;
    }

    public function setTva(?float $tva): static
    {
        $this->tva = $tva;

        return $this;
    }

    public function getMontantHt(): ?float
    {
        return $this->montantHt;
    }

    public function setMontantHt(float $montantHt): static
    {
        $this->montantHt = $montantHt;

        return $this;
    }

    public function getMontantTtc(): ?float
    {
        return $this->montantTtc;
    }

    public function setMontantTtc(float $montantTtc): static
    {
        $this->montantTtc = $montantTtc;

        return $this;
    }

    public function getObservation(): ?string
    {
        return $this->observation;
    }

    public function setObservation(?string $observation): static
    {
        $this->observation = $observation;

        return $this;
    }

    public function getCodeComptable(): ?string
    {
        return $this->codeComptable;
    }

    public function setCodeComptable(?string $codeComptable): static
    {
        $this->codeComptable = $codeComptable;

        return $this;
    }

    public function isFlagSynchronisationLocale(): ?bool
    {
        return $this->flagSynchronisationLocale;
    }

    public function setFlagSynchronisationLocale(?bool $flagSynchronisationLocale): static
    {
        $this->flagSynchronisationLocale = $flagSynchronisationLocale;

        return $this;
    }

    public function getTMsCommande(): ?TMsCommande
    {
        return $this->tMsCommande;
    }

    public function setTMsCommande(?TMsCommande $tMsCommande): static
    {
        $this->tMsCommande = $tMsCommande;

        return $this;
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

    public function getPPrUnite(): ?PPrUnites
    {
        return $this->pPrUnite;
    }

    public function setPPrUnite(?PPrUnites $pPrUnite): static
    {
        $this->pPrUnite = $pPrUnite;

        return $this;
    }

    public function isActif(): ?bool
    {
        return $this->actif;
    }

    public function setActif(?bool $actif): static
    {
        $this->actif = $actif;

        return $this;
    }
}
