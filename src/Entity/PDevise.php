<?php

namespace App\Entity;

use App\Repository\PDeviseRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\DBAL\Types\Types;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: PDeviseRepository::class)]
#[ORM\Table(name: 'p_devise')]
class PDevise
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\OneToMany(mappedBy: 'devise', targetEntity: PPrTarifications::class)]
    private Collection $pPrTarifications;

    #[ORM\Column(length: 255, nullable: true)]
    private ?string $code = null;

    #[ORM\Column(length: 255, nullable: true)]
    private ?string $titre = null;

    #[ORM\Column(nullable: true)]
    private ?bool $active = null;

    #[ORM\Column(type: Types::DATETIME_MUTABLE, nullable: true)]
    private ?\DateTimeInterface $created = null;

    #[ORM\OneToMany(mappedBy: 'pDevise', targetEntity: TAcPrecommande::class)]
    private Collection $tAcPrecommandes;

    #[ORM\OneToMany(mappedBy: 'devise', targetEntity: TAcCommande::class)]
    private Collection $tAcCommandes;

    #[ORM\OneToMany(mappedBy: 'devise', targetEntity: TAcFacture::class)]
    private Collection $tAcFactures;

    #[ORM\OneToMany(mappedBy: 'devise', targetEntity: TAcReception::class)]
    private Collection $tAcReceptions;

    public function __construct()
    {
        $this->pPrTarifications = new ArrayCollection();
        $this->tAcPrecommandes = new ArrayCollection();
        $this->tAcCommandes = new ArrayCollection();
        $this->tAcFactures = new ArrayCollection();
        $this->tAcReceptions = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
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
            $pPrTarification->setDevise($this);
        }

        return $this;
    }

    public function removePPrTarification(PPrTarifications $pPrTarification): static
    {
        if ($this->pPrTarifications->removeElement($pPrTarification)) {
            // set the owning side to null (unless already changed)
            if ($pPrTarification->getDevise() === $this) {
                $pPrTarification->setDevise(null);
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
            $tAcPrecommande->setPDevise($this);
        }

        return $this;
    }

    public function removeTAcPrecommande(TAcPrecommande $tAcPrecommande): static
    {
        if ($this->tAcPrecommandes->removeElement($tAcPrecommande)) {
            // set the owning side to null (unless already changed)
            if ($tAcPrecommande->getPDevise() === $this) {
                $tAcPrecommande->setPDevise(null);
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
            $tAcCommande->setDevise($this);
        }

        return $this;
    }

    public function removeTAcCommande(TAcCommande $tAcCommande): static
    {
        if ($this->tAcCommandes->removeElement($tAcCommande)) {
            // set the owning side to null (unless already changed)
            if ($tAcCommande->getDevise() === $this) {
                $tAcCommande->setDevise(null);
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
            $tAcFacture->setDevise($this);
        }

        return $this;
    }

    public function removeTAcFacture(TAcFacture $tAcFacture): static
    {
        if ($this->tAcFactures->removeElement($tAcFacture)) {
            // set the owning side to null (unless already changed)
            if ($tAcFacture->getDevise() === $this) {
                $tAcFacture->setDevise(null);
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
            $tAcReception->setDevise($this);
        }

        return $this;
    }

    public function removeTAcReception(TAcReception $tAcReception): static
    {
        if ($this->tAcReceptions->removeElement($tAcReception)) {
            // set the owning side to null (unless already changed)
            if ($tAcReception->getDevise() === $this) {
                $tAcReception->setDevise(null);
            }
        }

        return $this;
    }
}
