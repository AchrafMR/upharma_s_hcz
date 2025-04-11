<?php

namespace App\Entity;

use App\Repository\PPrDciRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\DBAL\Types\Types;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: PPrDciRepository::class)]
class PPrDci
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\OneToMany(mappedBy: 'dci', targetEntity: PProduits::class)]
    private Collection $pProduits;

    #[ORM\Column(length: 255, nullable: true)]
    private ?string $code = null;

    #[ORM\Column(length: 255, nullable: true)]
    private ?string $titre = null;

    #[ORM\Column(length: 255, nullable: true)]
    private ?string $description = null;

    #[ORM\Column(type: Types::DATETIME_MUTABLE, nullable: true)]
    private ?\DateTimeInterface $created = null;

    #[ORM\Column(nullable: true)]
    private ?bool $active = null;

    public function __construct()
    {
        $this->pProduits = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    /**
     * @return Collection<int, PProduits>
     */
    public function getPProduits(): Collection
    {
        return $this->pProduits;
    }

    public function addPProduit(PProduits $pProduit): static
    {
        if (!$this->pProduits->contains($pProduit)) {
            $this->pProduits->add($pProduit);
            $pProduit->setDci($this);
        }

        return $this;
    }

    public function removePProduit(PProduits $pProduit): static
    {
        if ($this->pProduits->removeElement($pProduit)) {
            // set the owning side to null (unless already changed)
            if ($pProduit->getDci() === $this) {
                $pProduit->setDci(null);
            }
        }

        return $this;
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

    public function getDescription(): ?string
    {
        return $this->description;
    }

    public function setDescription(?string $description): static
    {
        $this->description = $description;

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

    public function isActive(): ?bool
    {
        return $this->active;
    }

    public function setActive(?bool $active): static
    {
        $this->active = $active;

        return $this;
    }
}
