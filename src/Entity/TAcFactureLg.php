<?php

namespace App\Entity;

use App\Repository\TAcFactureLgRepository;
use Doctrine\DBAL\Types\Types;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: TAcFactureLgRepository::class)]
#[ORM\Table(name: 't_ac_facture_lg')]
class TAcFactureLg
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\ManyToOne(inversedBy: 'tAcFactureLgs')]
    private ?TAcFacture $facture = null;

    #[ORM\ManyToOne(inversedBy: 'tAcFactureLgs')]
    private ?PProduits $produit = null;

    #[ORM\ManyToOne(inversedBy: 'tAcFactureLgs')]
    private ?PPrUnites $unite = null;

    #[ORM\Column(nullable: true)]
    private ?float $quantite = null;

    #[ORM\Column(nullable: true)]
    private ?float $prixunitaire = null;

    #[ORM\Column(nullable: true)]
    private ?float $remise = null;

    #[ORM\Column(nullable: true)]
    private ?float $tba = null;

    #[ORM\Column(nullable: true)]
    private ?float $montantHt = null;

    #[ORM\Column(length: 10, nullable: true)]
    private ?string $sens = null;

    #[ORM\Column(nullable: true)]
    private ?float $montantTtc = null;

    #[ORM\Column(nullable: true)]
    private ?float $montantMad = null;

    #[ORM\Column(type: Types::TEXT, nullable: true)]
    private ?string $observation = null;

    #[ORM\Column(length: 255, nullable: true)]
    private ?string $planComptableAchat = null;

    #[ORM\Column(nullable: true)]
    private ?int $flagSynchronisationLocale = null;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getFacture(): ?TAcFacture
    {
        return $this->facture;
    }

    public function setFacture(?TAcFacture $facture): static
    {
        $this->facture = $facture;

        return $this;
    }

    public function getProduit(): ?PProduits
    {
        return $this->produit;
    }

    public function setProduit(?PProduits $produit): static
    {
        $this->produit = $produit;

        return $this;
    }

    public function getUnite(): ?PPrUnites
    {
        return $this->unite;
    }

    public function setUnite(?PPrUnites $unite): static
    {
        $this->unite = $unite;

        return $this;
    }

    public function getQuantite(): ?float
    {
        return $this->quantite;
    }

    public function setQuantite(?float $quantite): static
    {
        $this->quantite = $quantite;

        return $this;
    }

    public function getPrixunitaire(): ?float
    {
        return $this->prixunitaire;
    }

    public function setPrixunitaire(?float $prixunitaire): static
    {
        $this->prixunitaire = $prixunitaire;

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

    public function getTba(): ?float
    {
        return $this->tba;
    }

    public function setTba(?float $tba): static
    {
        $this->tba = $tba;

        return $this;
    }

    public function getMontantHt(): ?float
    {
        return $this->montantHt;
    }

    public function setMontantHt(?float $montantHt): static
    {
        $this->montantHt = $montantHt;

        return $this;
    }

    public function getSens(): ?string
    {
        return $this->sens;
    }

    public function setSens(?string $sens): static
    {
        $this->sens = $sens;

        return $this;
    }

    public function getMontantTtc(): ?float
    {
        return $this->montantTtc;
    }

    public function setMontantTtc(?float $montantTtc): static
    {
        $this->montantTtc = $montantTtc;

        return $this;
    }

    public function getMontantMad(): ?float
    {
        return $this->montantMad;
    }

    public function setMontantMad(?float $montantMad): static
    {
        $this->montantMad = $montantMad;

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

    public function getPlanComptableAchat(): ?string
    {
        return $this->planComptableAchat;
    }

    public function setPlanComptableAchat(?string $planComptableAchat): static
    {
        $this->planComptableAchat = $planComptableAchat;

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
