<?php

namespace App\Entity;

use App\Repository\PPrUnitesRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\DBAL\Types\Types;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: PPrUnitesRepository::class)]
class PPrUnites
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\OneToMany(mappedBy: 'pPrUnite', targetEntity: PProduits::class)]
    private Collection $pProduits;

    #[ORM\Column(length: 255, nullable: true)]
    private ?string $code = null;

    #[ORM\Column(length: 255, nullable: true)]
    private ?string $titre = null;

    #[ORM\Column(nullable: true)]
    private ?bool $active = null;

    #[ORM\Column(type: Types::DATETIME_MUTABLE, nullable: true)]
    private ?\DateTimeInterface $created = null;

    #[ORM\OneToMany(mappedBy: 'pPrUnite', targetEntity: TMsDemandelg::class)]
    private Collection $tMsDemandelgs;

    #[ORM\OneToMany(mappedBy: 'pPrUnite', targetEntity: TStStockdyna::class)]
    private Collection $tStStockdynas;

    #[ORM\OneToMany(mappedBy: 'pPrUnite', targetEntity: TStStockstatic::class)]
    private Collection $tStStockstatics;

    public function __construct()
    {
        $this->pProduits = new ArrayCollection();
        $this->tMsDemandelgs = new ArrayCollection();
        $this->tStStockdynas = new ArrayCollection();
        $this->tStStockstatics = new ArrayCollection();
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
            $pProduit->setPPrUnite($this);
        }

        return $this;
    }

    public function removePProduit(PProduits $pProduit): static
    {
        if ($this->pProduits->removeElement($pProduit)) {
            // set the owning side to null (unless already changed)
            if ($pProduit->getPPrUnite() === $this) {
                $pProduit->setPPrUnite(null);
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

    /**
     * @return Collection<int, TMsDemandelg>
     */
    public function getTMsDemandelgs(): Collection
    {
        return $this->tMsDemandelgs;
    }

    public function addTMsDemandelg(TMsDemandelg $tMsDemandelg): static
    {
        if (!$this->tMsDemandelgs->contains($tMsDemandelg)) {
            $this->tMsDemandelgs->add($tMsDemandelg);
            $tMsDemandelg->setPPrUnite($this);
        }

        return $this;
    }

    public function removeTMsDemandelg(TMsDemandelg $tMsDemandelg): static
    {
        if ($this->tMsDemandelgs->removeElement($tMsDemandelg)) {
            // set the owning side to null (unless already changed)
            if ($tMsDemandelg->getPPrUnite() === $this) {
                $tMsDemandelg->setPPrUnite(null);
            }
        }

        return $this;
    }

    /**
     * @return Collection<int, TStStockdyna>
     */
    public function getTStStockdynas(): Collection
    {
        return $this->tStStockdynas;
    }

    public function addTStStockdyna(TStStockdyna $tStStockdyna): static
    {
        if (!$this->tStStockdynas->contains($tStStockdyna)) {
            $this->tStStockdynas->add($tStStockdyna);
            $tStStockdyna->setPPrUnite($this);
        }

        return $this;
    }

    public function removeTStStockdyna(TStStockdyna $tStStockdyna): static
    {
        if ($this->tStStockdynas->removeElement($tStStockdyna)) {
            // set the owning side to null (unless already changed)
            if ($tStStockdyna->getPPrUnite() === $this) {
                $tStStockdyna->setPPrUnite(null);
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
            $tStStockstatic->setPPrUnite($this);
        }

        return $this;
    }

    public function removeTStStockstatic(TStStockstatic $tStStockstatic): static
    {
        if ($this->tStStockstatics->removeElement($tStStockstatic)) {
            // set the owning side to null (unless already changed)
            if ($tStStockstatic->getPPrUnite() === $this) {
                $tStStockstatic->setPPrUnite(null);
            }
        }

        return $this;
    }
}
