<?php

namespace App\Entity;

use App\Repository\PEmplacementsRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: PEmplacementsRepository::class)]
#[ORM\Table(name: 'p_emplacements')]

class PEmplacements
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column(length: 255)]
    private ?string $position = null;

    #[ORM\Column]
    private ?bool $reserve = null;

    #[ORM\OneToMany(mappedBy: 'PEmplacements', targetEntity: TStStockdyna::class)]
    private Collection $tStStockdynas;

    #[ORM\OneToMany(mappedBy: 'pEmplacements', targetEntity: TStStockstatic::class)]
    private Collection $tStStockstatics;

    #[ORM\ManyToOne(inversedBy: 'pEmplacements')]
    private ?PMagasins $magasin = null;

    #[ORM\OneToMany(mappedBy: 'adresse', targetEntity: TStStockObj::class)]
    private Collection $tStStockObjs;

    #[ORM\OneToMany(mappedBy: 'adresse', targetEntity: TMsPreparationLg::class)]
    private Collection $tMsPreparationLgs;

    public function __construct()
    {
        $this->tStStockdynas = new ArrayCollection();
        $this->tStStockstatics = new ArrayCollection();
        $this->tStStockObjs = new ArrayCollection();
        $this->tMsPreparationLgs = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }
    public function getPosition(): ?string
    {
        return $this->position;
    }

    public function setPosition(string $position): static
    {
        $this->position = $position;

        return $this;
    }

    public function isReserve(): ?bool
    {
        return $this->reserve;
    }

    public function setReserve(bool $reserve): static
    {
        $this->reserve = $reserve;

        return $this;
    }

    /**
     * @return Collection<int, TStStockdyna>
     */
    public function getUserupdate(): Collection
    {
        return $this->tStStockdynas;
    }

    public function addTStStockdynas(TStStockdyna $tStStockdynas): static
    {
        if (!$this->tStStockdynas->contains($tStStockdynas)) {
            $this->tStStockdynas->add($tStStockdynas);
            $tStStockdynas->setPEmplacements($this);
        }

        return $this;
    }

    public function removeTStStockdynas(TStStockdyna $tStStockdynas): static
    {
        if ($this->tStStockdynas->removeElement($tStStockdynas)) {
            // set the owning side to null (unless already changed)
            if ($tStStockdynas->getPEmplacements() === $this) {
                $tStStockdynas->setPEmplacements(null);
            }
        }

        return $this;
    }

    /**
     * @return Collection<int, TStStockstatic>
     */
    public function getTStStockstatics(): Collection
    {
        return $this->tStStockstatics;
    }

    public function addTStStockstatic(TStStockstatic $tStStockstatic): static
    {
        if (!$this->tStStockstatics->contains($tStStockstatic)) {
            $this->tStStockstatics->add($tStStockstatic);
            $tStStockstatic->setPEmplacements($this);
        }

        return $this;
    }

    public function removeTStStockstatic(TStStockstatic $tStStockstatic): static
    {
        if ($this->tStStockstatics->removeElement($tStStockstatic)) {
            // set the owning side to null (unless already changed)
            if ($tStStockstatic->getPEmplacements() === $this) {
                $tStStockstatic->setPEmplacements(null);
            }
        }

        return $this;
    }

    public function getMagasin(): ?PMagasins
    {
        return $this->magasin;
    }

    public function setMagasin(?PMagasins $magasin): static
    {
        $this->magasin = $magasin;

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
            $tStStockObj->setAdresse($this);
        }

        return $this;
    }

    public function removeTStStockObj(TStStockObj $tStStockObj): static
    {
        if ($this->tStStockObjs->removeElement($tStStockObj)) {
            // set the owning side to null (unless already changed)
            if ($tStStockObj->getAdresse() === $this) {
                $tStStockObj->setAdresse(null);
            }
        }

        return $this;
    }

    /**
     * @return Collection<int, TMsPreparationLg>
     */
    public function getTMsPreparationLgs(): Collection
    {
        return $this->tMsPreparationLgs;
    }

    public function addTMsPreparationLg(TMsPreparationLg $tMsPreparationLg): static
    {
        if (!$this->tMsPreparationLgs->contains($tMsPreparationLg)) {
            $this->tMsPreparationLgs->add($tMsPreparationLg);
            $tMsPreparationLg->setAdresse($this);
        }

        return $this;
    }

    public function removeTMsPreparationLg(TMsPreparationLg $tMsPreparationLg): static
    {
        if ($this->tMsPreparationLgs->removeElement($tMsPreparationLg)) {
            // set the owning side to null (unless already changed)
            if ($tMsPreparationLg->getAdresse() === $this) {
                $tMsPreparationLg->setAdresse(null);
            }
        }

        return $this;
    }
}
