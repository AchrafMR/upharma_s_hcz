<?php

namespace App\Entity;

use App\Repository\PTypePieceRepository;
use Doctrine\ORM\Mapping as ORM;
use Doctrine\Common\Collections\Collection;
use Doctrine\Common\Collections\ArrayCollection;

#[ORM\Entity(repositoryClass: PTypePieceRepository::class)]
#[ORM\Table(name: 'p_type_piece')]
class PTypePiece
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column(length: 255, nullable: true)]
    private ?string $code = null;

    #[ORM\Column(length: 255, nullable: true)]
    private ?string $description = null;

    #[ORM\Column(nullable: true)]
    private ?bool $active = null;

    #[ORM\OneToMany(mappedBy: 'typePiece', targetEntity: PCounter::class)]
    private Collection $counters;

    #[ORM\OneToMany(mappedBy: 'piece', targetEntity: TAcFacture::class)]
    private Collection $tAcFactures;

    #[ORM\OneToMany(mappedBy: 'piece', targetEntity: TAcCommande::class)]
    private Collection $tAcCommandes;

    #[ORM\OneToMany(mappedBy: 'piece', targetEntity: TAcPrecommande::class)]
    private Collection $tAcPrecommandes;

    #[ORM\OneToMany(mappedBy: 'piece', targetEntity: TAcReception::class)]
    private Collection $tAcReceptions;

    public function __construct()
    {
        $this->tAcFactures = new ArrayCollection();
        $this->tAcCommandes = new ArrayCollection();
        $this->tAcPrecommandes = new ArrayCollection();
        $this->tAcReceptions = new ArrayCollection();
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

    public function getDescription(): ?string
    {
        return $this->description;
    }

    public function setDescription(?string $description): static
    {
        $this->description = $description;

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

    /**
     * @return Collection<int, PCounter>
     */
    public function getCounters(): Collection
    {
        return $this->counters;
    }

    public function addCounter(PCounter $counter): static
    {
        if (!$this->counters->contains($counter)) {
            $this->counters->add($counter);
            $counter->setTypePiece($this);
        }

        return $this;
    }

    public function removeCounter(PCounter $counter): static
    {
        if ($this->counters->removeElement($counter)) {
            // set the owning side to null (unless already changed)
            if ($counter->getTypePiece() === $this) {
                $counter->setTypePiece(null);
            }
        }

        return $this;
    }

    /**
     * @return Collection<int, TAcFacture>
     */
    public function getTAcFactures(): Collection
    {
        return $this->tAcFactures;
    }

    public function addTAcFacture(TAcFacture $tAcFacture): static
    {
        if (!$this->tAcFactures->contains($tAcFacture)) {
            $this->tAcFactures->add($tAcFacture);
            $tAcFacture->setPiece($this);
        }

        return $this;
    }

    public function removeTAcFacture(TAcFacture $tAcFacture): static
    {
        if ($this->tAcFactures->removeElement($tAcFacture)) {
            // set the owning side to null (unless already changed)
            if ($tAcFacture->getPiece() === $this) {
                $tAcFacture->setPiece(null);
            }
        }

        return $this;
    }

    /**
     * @return Collection<int, TAcCommande>
     */
    public function getTAcCommandes(): Collection
    {
        return $this->tAcCommandes;
    }

    public function addTAcCommande(TAcCommande $tAcCommande): static
    {
        if (!$this->tAcCommandes->contains($tAcCommande)) {
            $this->tAcCommandes->add($tAcCommande);
            $tAcCommande->setPiece($this);
        }

        return $this;
    }

    public function removeTAcCommande(TAcCommande $tAcCommande): static
    {
        if ($this->tAcCommandes->removeElement($tAcCommande)) {
            // set the owning side to null (unless already changed)
            if ($tAcCommande->getPiece() === $this) {
                $tAcCommande->setPiece(null);
            }
        }

        return $this;
    }

    /**
     * @return Collection<int, TAcPrecommande>
     */
    public function getTAcPrecommandes(): Collection
    {
        return $this->tAcPrecommandes;
    }

    public function addTAcPrecommande(TAcPrecommande $tAcPrecommande): static
    {
        if (!$this->tAcPrecommandes->contains($tAcPrecommande)) {
            $this->tAcPrecommandes->add($tAcPrecommande);
            $tAcPrecommande->setPPiece($this);
        }

        return $this;
    }

    public function removeTAcPrecommande(TAcPrecommande $tAcPrecommande): static
    {
        if ($this->tAcPrecommandes->removeElement($tAcPrecommande)) {
            // set the owning side to null (unless already changed)
            if ($tAcPrecommande->getPPiece() === $this) {
                $tAcPrecommande->setPPiece(null);
            }
        }

        return $this;
    }

    /**
     * @return Collection<int, TAcReception>
     */
    public function getTAcReceptions(): Collection
    {
        return $this->tAcReceptions;
    }

    public function addTAcReception(TAcReception $tAcReception): static
    {
        if (!$this->tAcReceptions->contains($tAcReception)) {
            $this->tAcReceptions->add($tAcReception);
            $tAcReception->setPiece($this);
        }

        return $this;
    }

    public function removeTAcReception(TAcReception $tAcReception): static
    {
        if ($this->tAcReceptions->removeElement($tAcReception)) {
            // set the owning side to null (unless already changed)
            if ($tAcReception->getPiece() === $this) {
                $tAcReception->setPiece(null);
            }
        }

        return $this;
    }
}
