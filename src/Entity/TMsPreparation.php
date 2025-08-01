<?php

namespace App\Entity;

use App\Repository\TMsPreparationRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\DBAL\Types\Types;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: TMsPreparationRepository::class)]
#[ORM\Table(name: 't_ms_preparation')]
class TMsPreparation
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column(length: 255, nullable: true)]
    private ?string $code = null;

    #[ORM\ManyToOne(inversedBy: 'tMsPreparations')]
    private ?TMsCommande $tMsCommande = null;

    #[ORM\ManyToOne(inversedBy: 'tMsPreparationCree')]
    private ?User $userCreated = null;

    #[ORM\Column(type: Types::DATETIME_MUTABLE, nullable: true)]
    private ?\DateTimeInterface $dateCreate = null;

    #[ORM\ManyToOne(inversedBy: 'tMsPreparations')]
    private ?PStatut $status = null;

    #[ORM\OneToMany(mappedBy: 'tMsPreparation', targetEntity: TMsPreparationLg::class)]
    private Collection $tMsPreparationLgs;

    #[ORM\ManyToOne(inversedBy: 'tMsPreparations')]
    private ?PEntite $entite = null;

    #[ORM\ManyToOne(inversedBy: 'tMsPreparationsPrepare')]
    private ?User $userPrepare = null;

    #[ORM\Column(type: Types::DATETIME_MUTABLE, nullable: true)]
    private ?\DateTimeInterface $datePrepare = null;

    #[ORM\ManyToOne(inversedBy: 'tMsPreparationsValide')]
    private ?User $userValide = null;

    #[ORM\Column(type: Types::DATETIME_MUTABLE, nullable: true)]
    private ?\DateTimeInterface $dateValide = null;

    #[ORM\OneToMany(mappedBy: 'tMsPreparation', targetEntity: TMsLivraison::class)]
    private Collection $tMsLivraisons;

    public function __construct()
    {
        $this->tMsPreparationLgs = new ArrayCollection();
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

    public function getTMsCommande(): ?TMsCommande
    {
        return $this->tMsCommande;
    }

    public function setTMsCommande(?TMsCommande $tMsCommande): static
    {
        $this->tMsCommande = $tMsCommande;

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

    public function getDateCreate(): ?\DateTimeInterface
    {
        return $this->dateCreate;
    }

    public function setDateCreate(?\DateTimeInterface $dateCreate): static
    {
        $this->dateCreate = $dateCreate;

        return $this;
    }

    public function getStatus(): ?PStatut
    {
        return $this->status;
    }

    public function setStatus(?PStatut $status): static
    {
        $this->status = $status;

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
            $tMsPreparationLg->setTMsPreparation($this);
        }

        return $this;
    }

    public function removeTMsPreparationLg(TMsPreparationLg $tMsPreparationLg): static
    {
        if ($this->tMsPreparationLgs->removeElement($tMsPreparationLg)) {
            // set the owning side to null (unless already changed)
            if ($tMsPreparationLg->getTMsPreparation() === $this) {
                $tMsPreparationLg->setTMsPreparation(null);
            }
        }

        return $this;
    }

    public function getEntite(): ?PEntite
    {
        return $this->entite;
    }

    public function setEntite(?PEntite $entite): static
    {
        $this->entite = $entite;

        return $this;
    }

    public function getUserPrepare(): ?User
    {
        return $this->userPrepare;
    }

    public function setUserPrepare(?User $userPrepare): static
    {
        $this->userPrepare = $userPrepare;

        return $this;
    }

    public function getDatePrepare(): ?\DateTimeInterface
    {
        return $this->datePrepare;
    }

    public function setDatePrepare(?\DateTimeInterface $datePrepare): static
    {
        $this->datePrepare = $datePrepare;

        return $this;
    }

    public function getUserValide(): ?User
    {
        return $this->userValide;
    }

    public function setUserValide(?User $userValide): static
    {
        $this->userValide = $userValide;

        return $this;
    }

    public function getDateValide(): ?\DateTimeInterface
    {
        return $this->dateValide;
    }

    public function setDateValide(?\DateTimeInterface $dateValide): static
    {
        $this->dateValide = $dateValide;

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
            $tMsLivraison->setTMsPreparation($this);
        }

        return $this;
    }

    public function removeTMsLivraison(TMsLivraison $tMsLivraison): static
    {
        if ($this->tMsLivraisons->removeElement($tMsLivraison)) {
            // set the owning side to null (unless already changed)
            if ($tMsLivraison->getTMsPreparation() === $this) {
                $tMsLivraison->setTMsPreparation(null);
            }
        }

        return $this;
    }
}
