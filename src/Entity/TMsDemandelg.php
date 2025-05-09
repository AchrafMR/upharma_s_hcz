<?php

namespace App\Entity;

use App\Repository\TMsDemandelgRepository;
use Doctrine\DBAL\Types\Types;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: TMsDemandelgRepository::class)]
#[ORM\Table(name: 't_ms_demandelg')]
class TMsDemandelg
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;


    #[ORM\Column]
    private ?float $quantite = null;

    #[ORM\Column]
    private ?float $prix_unitaire = null;

    #[ORM\Column(nullable: true)]
    private ?float $remise = null;

    #[ORM\Column(nullable: true)]
    private ?float $tva = null;

    #[ORM\Column(nullable: true)]
    private ?float $montant_ht = null;

    #[ORM\Column(nullable: true)]
    private ?float $montant_ttc = null;

    #[ORM\Column(type: Types::TEXT, nullable: true)]
    private ?string $observation = null;

    #[ORM\Column(length: 100, nullable: true)]
    private ?string $code_comptable = null;

    #[ORM\Column(nullable: true)]
    private ?bool $flag_synchronisation_locale = null;

    #[ORM\ManyToOne(inversedBy: 'tMsDemandelgs')]
    #[ORM\JoinColumn(nullable: false)]
    private ?TMsDemande $tMsDemande = null;

    #[ORM\ManyToOne(inversedBy: 'tMsDemandelgs')]
    private ?PProduits $pProduit = null;

    #[ORM\ManyToOne(inversedBy: 'tMsDemandelgs')]
    private ?PPrUnites $pPrUnite = null;


    public function getId(): ?int
    {
        return $this->id;
    }


    public function getQuantite(): ?float
    {
        return $this->quantite;
    }

    public function setQuantite(float $quantite): static
    {
        $this->quantite = $quantite;

        return $this;
    }

    public function getPrixUnitaire(): ?float
    {
        return $this->prix_unitaire;
    }

    public function setPrixUnitaire(float $prix_unitaire): static
    {
        $this->prix_unitaire = $prix_unitaire;

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
        return $this->montant_ht;
    }

    public function setMontantHt(?float $montant_ht): static
    {
        $this->montant_ht = $montant_ht;

        return $this;
    }

    public function getMontantTtc(): ?float
    {
        return $this->montant_ttc;
    }

    public function setMontantTtc(?float $montant_ttc): static
    {
        $this->montant_ttc = $montant_ttc;

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
        return $this->code_comptable;
    }

    public function setCodeComptable(?string $code_comptable): static
    {
        $this->code_comptable = $code_comptable;

        return $this;
    }

    public function isFlagSynchronisationLocale(): ?bool
    {
        return $this->flag_synchronisation_locale;
    }

    public function setFlagSynchronisationLocale(?bool $flag_synchronisation_locale): static
    {
        $this->flag_synchronisation_locale = $flag_synchronisation_locale;

        return $this;
    }

    public function getTmsDemande(): ?TMsDemande
    {
        return $this->tMsDemande;
    }

    public function setTmsDemande(?TMsDemande $tMsDemande): static
    {
        $this->tMsDemande = $tMsDemande;

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

}
