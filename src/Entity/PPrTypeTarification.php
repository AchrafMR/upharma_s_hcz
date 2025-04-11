<?php

namespace App\Entity;

use App\Repository\PPrTypeTarificationRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\DBAL\Types\Types;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: PPrTypeTarificationRepository::class)]
class PPrTypeTarification
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column(length: 255, nullable: true)]
    private ?string $code = null;

    #[ORM\Column(length: 255, nullable: true)]
    private ?string $titre = null;

    #[ORM\Column(nullable: true)]
    private ?bool $active = null;

    #[ORM\Column(type: Types::DATETIME_MUTABLE, nullable: true)]
    private ?\DateTimeInterface $created = null;

    #[ORM\OneToMany(mappedBy: 'typeTarification', targetEntity: PPrTarifications::class)]
    private Collection $pPrTarifications;

    public function __construct()
    {
        $this->pPrTarifications = new ArrayCollection();
    }

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

    /**
     * @return Collection<int, PPrTarifications>
     */
    public function getPPrTarifications(): Collection
    {
        return $this->pPrTarifications;
    }

    public function addPPrTarification(PPrTarifications $pPrTarification): static
    {
        if (!$this->pPrTarifications->contains($pPrTarification)) {
            $this->pPrTarifications->add($pPrTarification);
            $pPrTarification->setTypeTarification($this);
        }

        return $this;
    }

    public function removePPrTarification(PPrTarifications $pPrTarification): static
    {
        if ($this->pPrTarifications->removeElement($pPrTarification)) {
            // set the owning side to null (unless already changed)
            if ($pPrTarification->getTypeTarification() === $this) {
                $pPrTarification->setTypeTarification(null);
            }
        }

        return $this;
    }
}
