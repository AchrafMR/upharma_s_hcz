<?php

namespace App\Entity;

use App\Repository\PPrTarificationsRepository;
use Doctrine\DBAL\Types\Types;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: PPrTarificationsRepository::class)]
class PPrTarifications
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column(length: 255, nullable: true)]
    private ?string $code = null;

    #[ORM\Column(length: 255, nullable: true)]
    private ?string $titre = null;

    #[ORM\ManyToOne(inversedBy: 'pPrTarifications')]
    private ?PPrTypeTarification $typeTarification = null;

    #[ORM\ManyToOne(inversedBy: 'pPrTarifications')]
    private ?PDevise $devise = null;

    #[ORM\ManyToOne(inversedBy: 'pPrTarifications')]
    private ?PProduits $produit = null;

    #[ORM\Column(nullable: true)]
    private ?float $prixAchat = null;

    #[ORM\Column(nullable: true)]
    private ?float $prixVente = null;

    #[ORM\Column(nullable: true)]
    private ?float $prixVentePh = null;

    #[ORM\Column(nullable: true)]
    private ?float $prixVentePpv = null;

    #[ORM\Column(nullable: true)]
    private ?bool $active = null;

    #[ORM\Column(type: Types::DATETIME_MUTABLE, nullable: true)]
    private ?\DateTimeInterface $created = null;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getCode(): ?string
    {
        return $this->code;
    }

    public function setCode(?string $code): static
    {
        $this->code = $code;

        return $this;
    }

    public function getTitre(): ?string
    {
        return $this->titre;
    }

    public function setTitre(?string $titre): static
    {
        $this->titre = $titre;

        return $this;
    }

    public function getTypeTarification(): ?PPrTypeTarification
    {
        return $this->typeTarification;
    }

    public function setTypeTarification(?PPrTypeTarification $typeTarification): static
    {
        $this->typeTarification = $typeTarification;

        return $this;
    }

    public function getDevise(): ?PDevise
    {
        return $this->devise;
    }

    public function setDevise(?PDevise $devise): static
    {
        $this->devise = $devise;

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

    public function getPrixAchat(): ?float
    {
        return $this->prixAchat;
    }

    public function setPrixAchat(?float $prixAchat): static
    {
        $this->prixAchat = $prixAchat;

        return $this;
    }

    public function getPrixVente(): ?float
    {
        return $this->prixVente;
    }

    public function setPrixVente(?float $prixVente): static
    {
        $this->prixVente = $prixVente;

        return $this;
    }

    public function getPrixVentePh(): ?float
    {
        return $this->prixVentePh;
    }

    public function setPrixVentePh(?float $prixVentePh): static
    {
        $this->prixVentePh = $prixVentePh;

        return $this;
    }

    public function getPrixVentePpv(): ?float
    {
        return $this->prixVentePpv;
    }

    public function setPrixVentePpv(?float $prixVentePpv): static
    {
        $this->prixVentePpv = $prixVentePpv;

        return $this;
    }

    public function isActive(): ?bool
    {
        return $this->active;
    }

    public function setActive(?bool $active): static
    {
        $this->active = $active;

        return $this;
    }

    public function getCreated(): ?\DateTimeInterface
    {
        return $this->created;
    }

    public function setCreated(?\DateTimeInterface $created): static
    {
        $this->created = $created;

        return $this;
    }
}
