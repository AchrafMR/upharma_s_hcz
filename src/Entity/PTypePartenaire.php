<?php

namespace App\Entity;

use App\Repository\PTypePartenaireRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\DBAL\Types\Types;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: PTypePartenaireRepository::class)]
class PTypePartenaire
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\OneToMany(mappedBy: 'typePartenaire', targetEntity: PPartenaires::class)]
    private Collection $pPartenaires;

    #[ORM\Column(length: 255, nullable: true)]
    private ?string $code = null;

    #[ORM\Column(length: 255, nullable: true)]
    private ?string $titre = null;

    #[ORM\Column(nullable: true)]
    private ?bool $active = null;

    #[ORM\Column(type: Types::DATETIME_MUTABLE, nullable: true)]
    private ?\DateTimeInterface $created = null;

    public function __construct()
    {
        $this->pPartenaires = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    /**
     * @return Collection<int, PPartenaires>
     */
    public function getPPartenaires(): Collection
    {
        return $this->pPartenaires;
    }

    public function addPPartenaire(PPartenaires $pPartenaire): static
    {
        if (!$this->pPartenaires->contains($pPartenaire)) {
            $this->pPartenaires->add($pPartenaire);
            $pPartenaire->setTypePartenaire($this);
        }

        return $this;
    }

    public function removePPartenaire(PPartenaires $pPartenaire): static
    {
        if ($this->pPartenaires->removeElement($pPartenaire)) {
            // set the owning side to null (unless already changed)
            if ($pPartenaire->getTypePartenaire() === $this) {
                $pPartenaire->setTypePartenaire(null);
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
