<?php

namespace App\Entity;

use App\Repository\PPrNiveauProduitsRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: PPrNiveauProduitsRepository::class)]
class PPrNiveauProduits
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\OneToMany(mappedBy: 'niveau', targetEntity: PProduits::class)]
    private Collection $pProduits;

    #[ORM\ManyToOne(targetEntity: self::class, inversedBy: 'pPrNiveauProduits')]
    private ?self $parent = null;

    #[ORM\OneToMany(mappedBy: 'parent', targetEntity: self::class)]
    private Collection $pPrNiveauProduits;

    #[ORM\Column(length: 255, nullable: true)]
    private ?string $designation = null;

    #[ORM\Column(length: 255, nullable: true)]
    private ?string $description = null;

    #[ORM\Column(nullable: true)]
    private ?int $niveau = null;

    #[ORM\Column(nullable: true)]
    private ?bool $active = null;

    public function __construct()
    {
        $this->pProduits = new ArrayCollection();
        $this->pPrNiveauProduits = new ArrayCollection();
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
            $pProduit->setNiveau($this);
        }

        return $this;
    }

    public function removePProduit(PProduits $pProduit): static
    {
        if ($this->pProduits->removeElement($pProduit)) {
            // set the owning side to null (unless already changed)
            if ($pProduit->getNiveau() === $this) {
                $pProduit->setNiveau(null);
            }
        }

        return $this;
    }

    public function getParent(): ?self
    {
        return $this->parent;
    }

    public function setParent(?self $parent): static
    {
        $this->parent = $parent;

        return $this;
    }

    /**
     * @return Collection<int, self>
     */
    public function getPPrNiveauProduits(): Collection
    {
        return $this->pPrNiveauProduits;
    }

    public function addPPrNiveauProduit(self $pPrNiveauProduit): static
    {
        if (!$this->pPrNiveauProduits->contains($pPrNiveauProduit)) {
            $this->pPrNiveauProduits->add($pPrNiveauProduit);
            $pPrNiveauProduit->setParent($this);
        }

        return $this;
    }

    public function removePPrNiveauProduit(self $pPrNiveauProduit): static
    {
        if ($this->pPrNiveauProduits->removeElement($pPrNiveauProduit)) {
            // set the owning side to null (unless already changed)
            if ($pPrNiveauProduit->getParent() === $this) {
                $pPrNiveauProduit->setParent(null);
            }
        }

        return $this;
    }

    public function getDesignation(): ?string
    {
        return $this->designation;
    }

    public function setDesignation(?string $designation): static
    {
        $this->designation = $designation;

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

    public function getNiveau(): ?int
    {
        return $this->niveau;
    }

    public function setNiveau(?int $niveau): static
    {
        $this->niveau = $niveau;

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
