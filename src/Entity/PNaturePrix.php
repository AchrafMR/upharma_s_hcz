<?php

namespace App\Entity;

use App\Repository\PNaturePrixRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\DBAL\Types\Types;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: PNaturePrixRepository::class)]
#[ORM\Table(name: 'p_nature_prix')]
class PNaturePrix
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

      #[ORM\OneToMany(mappedBy: 'naturePrix', targetEntity: TStStockObj::class)]
    private Collection $tStStockObjs;

    public function __construct()
    {
        $this->tStStockObjs = new ArrayCollection();
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
     * @return Collection<int, TStStockObj>
     */
    public function getTStStockObjs(): Collection
    {
        return $this->tStStockObjs;
    }

    public function addTStStockObj(TStStockObj $tStStockObj): static
    {
        if (!$this->tStStockObjs->contains($tStStockObj)) {
            $this->tStStockObjs->add($tStStockObj);
            $tStStockObj->setNaturePrix($this);
        }

        return $this;
    }

    public function removeTStStockObj(TStStockObj $tStStockObj): static
    {
        if ($this->tStStockObjs->removeElement($tStStockObj)) {
            // set the owning side to null (unless already changed)
            if ($tStStockObj->getNaturePrix() === $this) {
                $tStStockObj->setNaturePrix(null);
            }
        }

        return $this;
    }
}
