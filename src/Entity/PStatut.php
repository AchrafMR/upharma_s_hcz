<?php

namespace App\Entity;

use App\Repository\PStatutRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: PStatutRepository::class)]
#[ORM\Table(name: 'p_statut')]


class PStatut
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column(length: 255)]
    private ?string $designation = null;

    #[ORM\Column(length: 255)]
    private ?string $type = null;

    #[ORM\Column]
    private ?bool $active = null;

    #[ORM\OneToMany(mappedBy: 'status', targetEntity: TAcPrecommande::class)]
    private Collection $tAcPrecommandes;

    #[ORM\OneToMany(mappedBy: 'status', targetEntity: TAcCommande::class)]
    private Collection $tAcCommandes;

    #[ORM\OneToMany(mappedBy: 'status', targetEntity: TAcReception::class)]
    private Collection $tAcReceptions;

    #[ORM\OneToMany(mappedBy: 'StPositionActuel', targetEntity: TAcPrecommande::class)]
    private Collection $tAcPrecommandesPos;

    #[ORM\OneToMany(mappedBy: 'StPositionActuel', targetEntity: TAcCommande::class)]
    private Collection $tAcCommandesPos;

    #[ORM\OneToMany(mappedBy: 'StPositionActuel', targetEntity: TAcReception::class)]
    private Collection $tAcReceptionsPos;

    #[ORM\OneToMany(mappedBy: 'StPositionActuel', targetEntity: TAcFacture::class)]
    private Collection $tAcFacturesPos;

    #[ORM\OneToMany(mappedBy: 'status', targetEntity: TMsDemande::class)]
    private Collection $tMsDemandes;


    public function __construct()
    {
        $this->tAcPrecommandes = new ArrayCollection();
        $this->tAcCommandes = new ArrayCollection();
        $this->tAcPrecommandesPos = new ArrayCollection();
        $this->tAcCommandesPos = new ArrayCollection();
        $this->tAcReceptionsPos = new ArrayCollection();
        $this->tAcFacturesPos = new ArrayCollection();
        $this->tMsDemandes = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getDesignation(): ?string
    {
        return $this->designation;
    }

    public function setDesignation(string $designation): self
    {
        $this->designation = $designation;

        return $this;
    }

    public function getType(): ?string
    {
        return $this->type;
    }

    public function setType(string $type): self
    {
        $this->type = $type;

        return $this;
    }

    public function isActive(): ?bool
    {
        return $this->active;
    }

    public function setActive(bool $active): self
    {
        $this->active = $active;

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
            $tAcPrecommande->setStatus($this);
        }

        return $this;
    }

    public function removeTAcPrecommande(TAcPrecommande $tAcPrecommande): static
    {
        if ($this->tAcPrecommandes->removeElement($tAcPrecommande)) {
            // set the owning side to null (unless already changed)
            if ($tAcPrecommande->getStatus() === $this) {
                $tAcPrecommande->setStatus(null);
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
            $tAcCommande->setStatus($this);
        }

        return $this;
    }

    public function removeTAcCommande(TAcCommande $tAcCommande): static
    {
        if ($this->tAcCommandes->removeElement($tAcCommande)) {
            // set the owning side to null (unless already changed)
            if ($tAcCommande->getStatus() === $this) {
                $tAcCommande->setStatus(null);
            }
        }

        return $this;
    }

    /**
     * @return Collection<int, TAcReception>
     */
    public function getTAcReceptions(): Collection
    {
        return $this->tAcCommandes;
    }

    public function addTAcReception(TAcReception $tAcReceptions): static
    {
        if (!$this->tAcReceptions->contains($tAcReceptions)) {
            $this->tAcReceptions->add($tAcReceptions);
            $tAcReceptions->setStatus($this);
        }

        return $this;
    }

    public function removeTAcReception(TAcReception $tAcReceptions): static
    {
        if ($this->tAcReceptions->removeElement($tAcReceptions)) {
            // set the owning side to null (unless already changed)
            if ($tAcReceptions->getStatus() === $this) {
                $tAcReceptions->setStatus(null);
            }
        }

        return $this;
    }

    /**
     * @return Collection<int, TAcPrecommande>
     */
    public function getTAcPrecommandesPos(): Collection
    {
        return $this->tAcPrecommandesPos;
    }

    public function addTAcPrecommandesPo(TAcPrecommande $tAcPrecommandesPo): static
    {
        if (!$this->tAcPrecommandesPos->contains($tAcPrecommandesPo)) {
            $this->tAcPrecommandesPos->add($tAcPrecommandesPo);
            $tAcPrecommandesPo->setStPositionActuel($this);
        }

        return $this;
    }

    public function removeTAcPrecommandesPo(TAcPrecommande $tAcPrecommandesPo): static
    {
        if ($this->tAcPrecommandesPos->removeElement($tAcPrecommandesPo)) {
            // set the owning side to null (unless already changed)
            if ($tAcPrecommandesPo->getStPositionActuel() === $this) {
                $tAcPrecommandesPo->setStPositionActuel(null);
            }
        }

        return $this;
    }

    /**
     * @return Collection<int, TAcCommande>
     */
    public function getTAcCommandesPos(): Collection
    {
        return $this->tAcCommandesPos;
    }

    public function addTAcCommandesPo(TAcCommande $tAcCommandesPo): static
    {
        if (!$this->tAcCommandesPos->contains($tAcCommandesPo)) {
            $this->tAcCommandesPos->add($tAcCommandesPo);
            $tAcCommandesPo->setStPositionActuel($this);
        }

        return $this;
    }

    public function removeTAcCommandesPo(TAcCommande $tAcCommandesPo): static
    {
        if ($this->tAcCommandesPos->removeElement($tAcCommandesPo)) {
            // set the owning side to null (unless already changed)
            if ($tAcCommandesPo->getStPositionActuel() === $this) {
                $tAcCommandesPo->setStPositionActuel(null);
            }
        }

        return $this;
    }

    /**
     * @return Collection<int, TAcReception>
     */
    public function getTAcReceptionsPos(): Collection
    {
        return $this->tAcReceptionsPos;
    }

    public function addTAcReceptionsPo(TAcReception $tAcReceptionsPo): static
    {
        if (!$this->tAcReceptionsPos->contains($tAcReceptionsPo)) {
            $this->tAcReceptionsPos->add($tAcReceptionsPo);
            $tAcReceptionsPo->setStPositionActuel($this);
        }

        return $this;
    }

    public function removeTAcReceptionsPo(TAcReception $tAcReceptionsPo): static
    {
        if ($this->tAcReceptionsPos->removeElement($tAcReceptionsPo)) {
            // set the owning side to null (unless already changed)
            if ($tAcReceptionsPo->getStPositionActuel() === $this) {
                $tAcReceptionsPo->setStPositionActuel(null);
            }
        }

        return $this;
    }

    /**
     * @return Collection<int, TAcFacture>
     */
    public function getTAcFacturesPos(): Collection
    {
        return $this->tAcFacturesPos;
    }

    public function addTAcFacturesPo(TAcFacture $tAcFacturesPo): static
    {
        if (!$this->tAcFacturesPos->contains($tAcFacturesPo)) {
            $this->tAcFacturesPos->add($tAcFacturesPo);
            $tAcFacturesPo->setStPositionActuel($this);
        }

        return $this;
    }

    public function removeTAcFacturesPo(TAcFacture $tAcFacturesPo): static
    {
        if ($this->tAcFacturesPos->removeElement($tAcFacturesPo)) {
            // set the owning side to null (unless already changed)
            if ($tAcFacturesPo->getStPositionActuel() === $this) {
                $tAcFacturesPo->setStPositionActuel(null);
            }
        }

        return $this;
    }

    /**
     * @return Collection<int, TMsDemande>
     */
    public function getTMsDemandes(): Collection
    {
        return $this->tMsDemandes;
    }

    public function addTMsDemande(TMsDemande $tMsDemande): static
    {
        if (!$this->tMsDemandes->contains($tMsDemande)) {
            $this->tMsDemandes->add($tMsDemande);
            $tMsDemande->setStatus($this);
        }

        return $this;
    }

    public function removeTMsDemande(TMsDemande $tMsDemande): static
    {
        if ($this->tMsDemandes->removeElement($tMsDemande)) {
            // set the owning side to null (unless already changed)
            if ($tMsDemande->getStatus() === $this) {
                $tMsDemande->setStatus(null);
            }
        }

        return $this;
    }


}
