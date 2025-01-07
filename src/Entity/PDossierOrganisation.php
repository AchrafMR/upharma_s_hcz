<?php

namespace App\Entity;

use App\Repository\PDossierOrganisationRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: PDossierOrganisationRepository::class)]
#[ORM\Table(name:"p_et001_dossier_organisation")]

class PDossierOrganisation
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column(length: 255, nullable: true)]
    private ?string $designation = null;

    #[ORM\Column(length: 255, nullable: true)]
    private ?string $code = null;

    #[ORM\Column(length: 255, nullable: true)]
    private ?string $abreviation = null;

    #[ORM\Column]
    private ?bool $active = null;

    #[ORM\Column(length: 50, nullable: true)]
    private ?string $prefix = null;

    #[ORM\Column(nullable: true)]
    private ?int $ord = null;

    #[ORM\OneToMany(mappedBy: 'organisation', targetEntity: PDossier::class)]
    private Collection $pDossiers;

    #[ORM\Column(nullable: true)]
    private ?int $niveau = null;

    #[ORM\Column(length: 255, nullable: true)]
    private ?string $natureentite = null;

    #[ORM\Column(length: 255, nullable: true)]
    private ?string $parente = null;

    #[ORM\ManyToOne(targetEntity: self::class)]
    private ?self $parent = null;

    public function __construct()
    {
        $this->pDossiers = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getDesignation(): ?string
    {
        return $this->designation;
    }

    public function setDesignation(?string $designation): self
    {
        $this->designation = $designation;

        return $this;
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

    public function getAbreviation(): ?string
    {
        return $this->abreviation;
    }

    public function setAbreviation(?string $abreviation): self
    {
        $this->abreviation = $abreviation;

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

    public function setPrefix(?string $prefix): self
    {
        $this->prefix = $prefix;

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

    /**
     * @return Collection<int, PDossier>
     */
    public function getPDossiers(): Collection
    {
        return $this->pDossiers;
    }

    public function addPDossier(PDossier $pDossier): self
    {
        if (!$this->pDossiers->contains($pDossier)) {
            $this->pDossiers->add($pDossier);
            $pDossier->setOrganisation($this);
        }

        return $this;
    }

    public function removePDossier(PDossier $pDossier): self
    {
        if ($this->pDossiers->removeElement($pDossier)) {
            // set the owning side to null (unless already changed)
            if ($pDossier->getOrganisation() === $this) {
                $pDossier->setOrganisation(null);
            }
        }

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

    public function getNatureentite(): ?string
    {
        return $this->natureentite;
    }

    public function setNatureentite(?string $natureentite): static
    {
        $this->natureentite = $natureentite;

        return $this;
    }

    public function getParente(): ?string
    {
        return $this->parente;
    }

    public function setParente(?string $parente): static
    {
        $this->parente = $parente;

        return $this;
    }

    public function getParent(): ?self
    {
        return $this->parent;
    }

    public function setParent(?self $parent): static
    {
        $this->parent = $parent;

        return $this;
    }
}
