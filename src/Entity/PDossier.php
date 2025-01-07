<?php

namespace App\Entity;

use App\Repository\PDossierRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\DBAL\Types\Types;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: PDossierRepository::class)]
#[ORM\Table(name:"p_et000_dossier")]

class PDossier
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column(length: 50, nullable: true)]
    private ?string $code = null;


    #[ORM\Column(type: Types::DATETIME_MUTABLE, nullable: true)]
    private ?\DateTimeInterface $dateCreated = null;

    #[ORM\Column(length: 255, nullable: true)]
    private ?string $address = null;

    #[ORM\Column(length: 50, nullable: true)]
    private ?string $tel = null;

    #[ORM\Column]
    private ?bool $active = null;

    #[ORM\Column(length: 50,  nullable: true)]
    private ?string $prefix = null;

    #[ORM\Column(length: 255, nullable: true)]
    private ?string $title = null;

    #[ORM\Column(length: 255, nullable: true)]
    private ?string $cce_0_libelle = null;

    #[ORM\Column(length: 50, nullable: true)]
    private ?string $cce_0 = null;

    #[ORM\Column(length: 255, nullable: true)]
    private ?string $fcy_0_libelle = null;

    #[ORM\Column(length: 50, nullable: true)]
    private ?string $fcy_0 = null;

    #[ORM\Column(length: 255, nullable: true)]
    private ?string $logo = null;

    #[ORM\Column(nullable: true)]
    private ?int $logoWidth = null;

    #[ORM\Column(nullable: true)]
    private ?int $logoHeight = null;

    #[ORM\Column(nullable: true)]
    private ?int $ord = null;

    #[ORM\Column]
    private ?bool $isSubDossier = null;

    #[ORM\ManyToOne(inversedBy: 'pDossiers')]
    private ?PDossierOrganisation $organisation = null;

    #[ORM\OneToMany(mappedBy: 'dossier', targetEntity: PUserDossierAction::class )]
    private Collection $pUserDossierActions;

    #[ORM\ManyToOne(targetEntity: self::class, inversedBy: 'pDossiers')]
    private ?self $parent = null;

    #[ORM\OneToMany(mappedBy: 'parent', targetEntity: self::class)]
    private Collection $pDossiers;

    #[ORM\ManyToOne]
    private ?User $userCreated = null;

    #[ORM\OneToMany(mappedBy: 'dossier', targetEntity: PCounter::class)]
    private Collection $counters;


    #[ORM\Column(length: 255, nullable: true)]
    private ?string $natureentite = null;

    #[ORM\Column(nullable: true)]
    private ?int $niveau = null;



    public function __construct()
    {
        $this->pUserDossierActions = new ArrayCollection();
        $this->pDossiers = new ArrayCollection();
        $this->counters = new ArrayCollection();

    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getCode(): ?string
    {
        return $this->code;
    }

    public function setCode(?string $code): self
    {
        $this->code = $code;

        return $this;
    }


    public function getDateCreated(): ?\DateTimeInterface
    {
        return $this->dateCreated;
    }

    public function setDateCreated(?\DateTimeInterface $dateCreated): self
    {
        $this->dateCreated = $dateCreated;

        return $this;
    }

    public function getAddress(): ?string
    {
        return $this->address;
    }

    public function setAddress(?string $address): self
    {
        $this->address = $address;

        return $this;
    }

    public function getTel(): ?string
    {
        return $this->tel;
    }

    public function setTel(?string $tel): self
    {
        $this->tel = $tel;

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

    public function getPrefix(): ?string
    {
        return $this->prefix;
    }

    public function setPrefix(string $prefix): self
    {
        $this->prefix = $prefix;

        return $this;
    }

    public function getTitle(): ?string
    {
        return $this->title;
    }

    public function setTitle(?string $title): self
    {
        $this->title = $title;

        return $this;
    }

    public function getCce0Libelle(): ?string
    {
        return $this->cce_0_libelle;
    }

    public function setCce0Libelle(?string $cce_0_libelle): self
    {
        $this->cce_0_libelle = $cce_0_libelle;

        return $this;
    }

    public function getCce0(): ?string
    {
        return $this->cce_0;
    }

    public function setCce0(?string $cce_0): self
    {
        $this->cce_0 = $cce_0;

        return $this;
    }

    public function getFcy0Libelle(): ?string
    {
        return $this->fcy_0_libelle;
    }

    public function setFcy0Libelle(?string $fcy_0_libelle): self
    {
        $this->fcy_0_libelle = $fcy_0_libelle;

        return $this;
    }

    public function getFcy0(): ?string
    {
        return $this->fcy_0;
    }

    public function setFcy0(?string $fcy_0): self
    {
        $this->fcy_0 = $fcy_0;

        return $this;
    }

    public function getLogo(): ?string
    {
        return $this->logo;
    }

    public function setLogo(?string $logo): self
    {
        $this->logo = $logo;

        return $this;
    }

    public function getLogoWidth(): ?int
    {
        return $this->logoWidth;
    }

    public function setLogoWidth(?int $logoWidth): self
    {
        $this->logoWidth = $logoWidth;

        return $this;
    }

    public function getLogoHeight(): ?int
    {
        return $this->logoHeight;
    }

    public function setLogoHeight(?int $logoHeight): self
    {
        $this->logoHeight = $logoHeight;

        return $this;
    }

    public function getOrd(): ?int
    {
        return $this->ord;
    }

    public function setOrd(?int $ord): self
    {
        $this->ord = $ord;

        return $this;
    }

    public function isIsSubDossier(): ?bool
    {
        return $this->isSubDossier;
    }

    public function setIsSubDossier(bool $isSubDossier): self
    {
        $this->isSubDossier = $isSubDossier;

        return $this;
    }


    public function getOrganisation(): ?PDossierOrganisation
    {
        return $this->organisation;
    }

    public function setOrganisation(?PDossierOrganisation $organisation): self
    {
        $this->organisation = $organisation;

        return $this;
    }

    /**
     * @return Collection<int, PUserDossierAction>
     */
    public function getPUserDossierActions(): Collection
    {
        return $this->pUserDossierActions;
    }

    public function addPUserDossierAction(PUserDossierAction $pUserDossierAction): self
    {
        if (!$this->pUserDossierActions->contains($pUserDossierAction)) {
            $this->pUserDossierActions->add($pUserDossierAction);
            $pUserDossierAction->setDossier($this);
        }

        return $this;
    }

    public function removePUserDossierAction(PUserDossierAction $pUserDossierAction): self
    {
        if ($this->pUserDossierActions->removeElement($pUserDossierAction)) {
            // set the owning side to null (unless already changed)
            if ($pUserDossierAction->getDossier() === $this) {
                $pUserDossierAction->setDossier(null);
            }
        }

        return $this;
    }

    public function getParent(): ?self
    {
        return $this->parent;
    }

    public function setParent(?self $parent): self
    {
        $this->parent = $parent;

        return $this;
    }

    /**
     * @return Collection<int, self>
     */
    public function getPDossiers(): Collection
    {
        return $this->pDossiers;
    }

    public function addPDossier(self $pDossier): self
    {
        if (!$this->pDossiers->contains($pDossier)) {
            $this->pDossiers->add($pDossier);
            $pDossier->setParent($this);
        }

        return $this;
    }

    public function removePDossier(self $pDossier): self
    {
        if ($this->pDossiers->removeElement($pDossier)) {
            // set the owning side to null (unless already changed)
            if ($pDossier->getParent() === $this) {
                $pDossier->setParent(null);
            }
        }

        return $this;
    }

    public function getUserCreated(): ?User
    {
        return $this->userCreated;
    }

    public function setUserCreated(?User $userCreated): self
    {
        $this->userCreated = $userCreated;

        return $this;
    }



    /**
     * @return Collection<int, PCounter>
     */
    public function getCounters(): Collection
    {
        return $this->counters;
    }

    public function addCounter(PCounter $counter): self
    {
        if (!$this->counters->contains($counter)) {
            $this->counters->add($counter);
            $counter->setDossier($this);
        }

        return $this;
    }

    public function removeCounter(PCounter $counter): self
    {
        if ($this->counters->removeElement($counter)) {
            // set the owning side to null (unless already changed)
            if ($counter->getDossier() === $this) {
                $counter->setDossier(null);
            }
        }

        return $this;
    }



    public function getNatureentite(): ?string
    {
        return $this->natureentite;
    }

    public function setNatureentite(?string $natureentite): static
    {
        $this->natureentite = $natureentite;

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



}
