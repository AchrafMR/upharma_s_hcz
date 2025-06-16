<?php

namespace App\Entity;

use App\Repository\PTarifFournisseurRepository;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: PTarifFournisseurRepository::class)]
#[ORM\Table(name: 'p_tarif_fournisseur')]
class PTarifFournisseur
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\ManyToOne(inversedBy: 'pTarifFournisseurs')]
    private ?PProduits $produit = null;

    #[ORM\ManyToOne(inversedBy: 'pTarifFournisseurs')]
    private ?PPartenaires $fournisseur = null;

    #[ORM\Column(nullable: true)]
    private ?float $prix = null;

    #[ORM\Column(nullable: true)]
    private ?float $tva = null;

    public function getId(): ?int
    {
        return $this->id;
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

    public function getFournisseur(): ?PPartenaires
    {
        return $this->fournisseur;
    }

    public function setFournisseur(?PPartenaires $fournisseur): static
    {
        $this->fournisseur = $fournisseur;

        return $this;
    }

    public function getPrix(): ?float
    {
        return $this->prix;
    }

    public function setPrix(?float $prix): static
    {
        $this->prix = $prix;

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
}
