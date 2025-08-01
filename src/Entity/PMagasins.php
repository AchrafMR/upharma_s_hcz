<?php

namespace App\Entity;

use App\Repository\PMagasinsRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\DBAL\Types\Types;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: PMagasinsRepository::class)]
#[ORM\Table(name: 'p_magasins')]
class PMagasins
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column(length: 255, nullable: true)]
    private ?string $code = null;

    #[ORM\ManyToOne(inversedBy: 'pMagasins')]
    private ?PDepots $depot = null;

    #[ORM\Column(length: 255, nullable: true)]
    private ?string $designation = null;

    #[ORM\Column(nullable: true)]
    private ?bool $defaut = null;

    #[ORM\Column(type: Types::DATETIME_MUTABLE, nullable: true)]
    private ?\DateTimeInterface $created = null;

    #[ORM\Column(type: Types::DATETIME_MUTABLE, nullable: true)]
    private ?\DateTimeInterface $updated = null;

    #[ORM\ManyToOne]
    private ?User $userCreated = null;

    #[ORM\ManyToOne]
    private ?User $userUpdated = null;

    #[ORM\Column(nullable: true)]
    private ?int $dossierUgouvId = null;

    #[ORM\Column(length: 255, nullable: true)]
    private ?string $designationAccess = null;

    #[ORM\Column(length: 255, nullable: true)]
    private ?string $accessCode = null;


    #[ORM\Column(nullable: true)]
    private ?int $niveau = null;

    #[ORM\OneToMany(mappedBy: 'demandeurId', targetEntity: TMsCommande::class)]
    private Collection $tMsCommandes;

    #[ORM\OneToMany(mappedBy: 'magasin', targetEntity: PAffectationMagasin::class)]
    private Collection $pAffectationMagasins;

    #[ORM\OneToMany(mappedBy: 'recepteur', targetEntity: TMsLivraison::class)]
    private Collection $tMsLivraisons;

    #[ORM\OneToMany(mappedBy: 'magasin', targetEntity: PEmplacements::class)]
    private Collection $pEmplacements;

    #[ORM\Column(nullable: true)]
    private ?bool $complementaire = null;

    public function __construct()
    {
        $this->tMsCommandes = new ArrayCollection();
        $this->pAffectationMagasins = new ArrayCollection();
        $this->tMsLivraisons = new ArrayCollection();
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

    public function getDepot(): ?PDepots
    {
        return $this->depot;
    }

    public function setDepot(?PDepots $depot): static
    {
        $this->depot = $depot;

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

    public function isDefaut(): ?bool
    {
        return $this->defaut;
    }

    public function setDefaut(?bool $defaut): static
    {
        $this->defaut = $defaut;

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

    public function getUpdated(): ?\DateTimeInterface
    {
        return $this->updated;
    }

    public function setUpdated(?\DateTimeInterface $updated): static
    {
        $this->updated = $updated;

        return $this;
    }

    public function getUserCreated(): ?User
    {
        return $this->userCreated;
    }

    public function setUserCreated(?User $userCreated): static
    {
        $this->userCreated = $userCreated;

        return $this;
    }

    public function getUserUpdated(): ?User
    {
        return $this->userUpdated;
    }

    public function setUserUpdated(?User $userUpdated): static
    {
        $this->userUpdated = $userUpdated;

        return $this;
    }
        public function getDossierUgouvId(): ?int
    {
        return $this->dossierUgouvId;
    }

    public function setDossierUgouvId(?int $dossierUgouvId): static
    {
        $this->dossierUgouvId = $dossierUgouvId;

        return $this;
    }

    public function getDesignationAccess(): ?string
    {
        return $this->designationAccess;
    }

    public function setDesignationAccess(?string $designationAccess): static
    {
        $this->designationAccess = $designationAccess;

        return $this;
    }

    public function getAccessCode(): ?string
    {
        return $this->accessCode;
    }

    public function setAccessCode(?string $accessCode): static
    {
        $this->accessCode = $accessCode;

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

    /**
     * @return Collection<int, TMsCommande>
     */
    public function getTMsCommandes(): Collection
    {
        return $this->tMsCommandes;
    }

    public function addTMsCommande(TMsCommande $tMsCommande): static
    {
        if (!$this->tMsCommandes->contains($tMsCommande)) {
            $this->tMsCommandes->add($tMsCommande);
            $tMsCommande->setDemandeurId($this);
        }

        return $this;
    }

    public function removeTMsCommande(TMsCommande $tMsCommande): static
    {
        if ($this->tMsCommandes->removeElement($tMsCommande)) {
            // set the owning side to null (unless already changed)
            if ($tMsCommande->getDemandeurId() === $this) {
                $tMsCommande->setDemandeurId(null);
            }
        }

        return $this;
    }

    /**
     * @return Collection<int, PAffectationMagasin>
     */
    public function getPAffectationMagasins(): Collection
    {
        return $this->pAffectationMagasins;
    }

    public function addPAffectationMagasin(PAffectationMagasin $pAffectationMagasin): static
    {
        if (!$this->pAffectationMagasins->contains($pAffectationMagasin)) {
            $this->pAffectationMagasins->add($pAffectationMagasin);
            $pAffectationMagasin->setMagasin($this);
        }

        return $this;
    }

    public function removePAffectationMagasin(PAffectationMagasin $pAffectationMagasin): static
    {
        if ($this->pAffectationMagasins->removeElement($pAffectationMagasin)) {
            // set the owning side to null (unless already changed)
            if ($pAffectationMagasin->getMagasin() === $this) {
                $pAffectationMagasin->setMagasin(null);
            }
        }

        return $this;
    }

    /**
     * @return Collection<int, TMsLivraison>
     */
    public function getTMsLivraisons(): Collection
    {
        return $this->tMsLivraisons;
    }

    public function addTMsLivraison(TMsLivraison $tMsLivraison): static
    {
        if (!$this->tMsLivraisons->contains($tMsLivraison)) {
            $this->tMsLivraisons->add($tMsLivraison);
            $tMsLivraison->setRecepteurId($this);
        }

        return $this;
    }

    public function removeTMsLivraison(TMsLivraison $tMsLivraison): static
    {
        if ($this->tMsLivraisons->removeElement($tMsLivraison)) {
            // set the owning side to null (unless already changed)
            if ($tMsLivraison->getRecepteurId() === $this) {
                $tMsLivraison->setRecepteurId(null);
            }
        }

        return $this;
    }


        /**
     * @return Collection<int, PEmplacements>
     */
    public function getPEmplacements(): Collection
    {
        return $this->pEmplacements;
    }

    public function addPEmplacement(PEmplacements $pEmplacement): static
    {
        if (!$this->pEmplacements->contains($pEmplacement)) {
            $this->pEmplacements->add($pEmplacement);
            $pEmplacement->setMagasin($this);
        }

        return $this;
    }

    public function removePEmplacement(PEmplacements $pEmplacement): static
    {
        if ($this->pEmplacements->removeElement($pEmplacement)) {
            // set the owning side to null (unless already changed)
            if ($pEmplacement->getMagasin() === $this) {
                $pEmplacement->setMagasin(null);
            }
        }

        return $this;
    }

    public function isComplementaire(): ?bool
    {
        return $this->complementaire;
    }

    public function setComplementaire(?bool $complementaire): static
    {
        $this->complementaire = $complementaire;
        return $this;
    }

}
