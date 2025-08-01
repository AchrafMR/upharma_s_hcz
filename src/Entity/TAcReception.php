<?php

namespace App\Entity;

use App\Repository\TAcReceptionRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\DBAL\Types\Types;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: TAcReceptionRepository::class)]
#[ORM\Table(name: 't_ac_reception')]
class TAcReception
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column(length: 100, nullable: true)]
    private ?string $code = null;

    #[ORM\ManyToOne(inversedBy: 'tAcReceptions')]
    private ?TAcCommande $commande = null;

    #[ORM\ManyToOne(inversedBy: 'tAcReceptions')]
    private ?TAcFacture $facture = null;

    #[ORM\ManyToOne(inversedBy: 'tAcReceptions')]
    private ?PEntite $entite = null;

    #[ORM\ManyToOne(inversedBy: 'tAcReceptions')]
    private ?PDevise $devise = null;

    #[ORM\ManyToOne(inversedBy: 'tAcReceptions')]
    private ?PPartenaires $partenaire = null;

    #[ORM\Column(name: "refDocAsso",length: 255, nullable: true)]
    private ?string $refDocAsso = null;

    #[ORM\Column(type: Types::DATETIME_MUTABLE, nullable: true)]
    private ?\DateTimeInterface $dateLivraison = null;

    #[ORM\Column(nullable: true)]
    private ?float $remise = null;

    #[ORM\Column(type: Types::TEXT, nullable: true)]
    private ?string $observation = null;

    #[ORM\Column(type: Types::TEXT, nullable: true)]
    private ?string $description = null;

    #[ORM\Column(type: Types::DATETIME_MUTABLE, nullable: true)]
    private ?\DateTimeInterface $created = null;

    #[ORM\Column(type: Types::DATETIME_MUTABLE, nullable: true)]
    private ?\DateTimeInterface $updated = null;

    #[ORM\Column(nullable: true)]
    private ?bool $active = null;

    #[ORM\ManyToOne(inversedBy: 'tAcReceptions')]
    private ?User $userCreated = null;

    #[ORM\ManyToOne]
    private ?User $userUpdated = null;

    #[ORM\ManyToOne]
    private ?User $userValider = null;

    #[ORM\ManyToOne]
    private ?User $userGenerer = null;

    #[ORM\ManyToOne]
    private ?User $userAnnuler = null;

    #[ORM\ManyToOne]
    private ?User $userEncours = null;

    #[ORM\ManyToOne]
    private ?User $userArchiver = null;

    #[ORM\Column(type: Types::DATETIME_MUTABLE, nullable: true)]
    private ?\DateTimeInterface $dateValider = null;

    #[ORM\Column(type: Types::DATETIME_MUTABLE, nullable: true)]
    private ?\DateTimeInterface $dateGenerer = null;

    #[ORM\Column(type: Types::DATETIME_MUTABLE, nullable: true)]
    private ?\DateTimeInterface $dateAnnuler = null;

    #[ORM\Column(type: Types::DATETIME_MUTABLE, nullable: true)]
    private ?\DateTimeInterface $dateEncours = null;

    #[ORM\Column(type: Types::DATETIME_MUTABLE, nullable: true)]
    private ?\DateTimeInterface $dateArchiver = null;

    #[ORM\Column(length: 100, nullable: true)]
    private ?string $positionActuel = null;

    #[ORM\Column(nullable: true)]
    private ?bool $avoir = null;

    #[ORM\Column(nullable: true)]
    private ?bool $cloture = null;

    #[ORM\Column(length: 255, nullable: true)]
    private ?string $source = null;

    #[ORM\Column(nullable: true)]
    private ?int $flagSynchronisationLocale = null;

    #[ORM\OneToMany(mappedBy: 'reception', targetEntity: TAcReceptionLg::class)]
    private Collection $tAcReceptionLgs;

    #[ORM\OneToMany(mappedBy: 'reception', targetEntity: TAcReceptionLot::class)]
    private Collection $tAcReceptionLots;

    #[ORM\ManyToOne(inversedBy: 'tAcReceptions')]
    private ?PTypePiece $piece = null;

    #[ORM\ManyToOne(inversedBy: 'tAcReceptions')]
    private ?PStatut $status = null;

    #[ORM\ManyToOne(inversedBy: 'tAcReceptionsPos')]
    private ?PStatut $StPositionActuel = null;

    #[ORM\Column(nullable: true)]
    private ?float $montantHt = null;

    #[ORM\Column(nullable: true)]
    private ?float $montantTtc = null;

    #[ORM\Column(nullable: true)]
    private ?float $tva = null;

    public function __construct()
    {
        $this->tAcReceptionLgs = new ArrayCollection();
        $this->tAcReceptionLots = new ArrayCollection();
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

    public function getCommande(): ?TAcCommande
    {
        return $this->commande;
    }

    public function setCommande(?TAcCommande $commande): static
    {
        $this->commande = $commande;

        return $this;
    }

    public function getFacture(): ?TAcFacture
    {
        return $this->facture;
    }

    public function setFacture(?TAcFacture $facture): static
    {
        $this->facture = $facture;

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

    public function getDevise(): ?PDevise
    {
        return $this->devise;
    }

    public function setDevise(?PDevise $devise): static
    {
        $this->devise = $devise;

        return $this;
    }

    public function getPartenaire(): ?PPartenaires
    {
        return $this->partenaire;
    }

    public function setPartenaire(?PPartenaires $partenaire): static
    {
        $this->partenaire = $partenaire;

        return $this;
    }

    public function getRefDocAsso(): ?string
    {
        return $this->refDocAsso;
    }

    public function setRefDocAsso(?string $refDocAsso): static
    {
        $this->refDocAsso = $refDocAsso;

        return $this;
    }

    public function getDateLivraison(): ?\DateTimeInterface
    {
        return $this->dateLivraison;
    }

    public function setDateLivraison(?\DateTimeInterface $dateLivraison): static
    {
        $this->dateLivraison = $dateLivraison;

        return $this;
    }

    public function getRemise(): ?float
    {
        return $this->remise;
    }

    public function setRemise(?float $remise): static
    {
        $this->remise = $remise;

        return $this;
    }

    public function getObservation(): ?string
    {
        return $this->observation;
    }

    public function setObservation(?string $observation): static
    {
        $this->observation = $observation;

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

    public function isActive(): ?bool
    {
        return $this->active;
    }

    public function setActive(?bool $active): static
    {
        $this->active = $active;

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

    public function getUserValider(): ?User
    {
        return $this->userValider;
    }

    public function setUserValider(?User $userValider): static
    {
        $this->userValider = $userValider;

        return $this;
    }

    public function getUserGenerer(): ?User
    {
        return $this->userGenerer;
    }

    public function setUserGenerer(?User $userGenerer): static
    {
        $this->userGenerer = $userGenerer;

        return $this;
    }

    public function getUserAnnuler(): ?User
    {
        return $this->userAnnuler;
    }

    public function setUserAnnuler(?User $userAnnuler): static
    {
        $this->userAnnuler = $userAnnuler;

        return $this;
    }

    public function getUserEncours(): ?User
    {
        return $this->userEncours;
    }

    public function setUserEncours(?User $userEncours): static
    {
        $this->userEncours = $userEncours;

        return $this;
    }

    public function getUserArchiver(): ?User
    {
        return $this->userArchiver;
    }

    public function setUserArchiver(?User $userArchiver): static
    {
        $this->userArchiver = $userArchiver;

        return $this;
    }

    public function getDateValider(): ?\DateTimeInterface
    {
        return $this->dateValider;
    }

    public function setDateValider(?\DateTimeInterface $dateValider): static
    {
        $this->dateValider = $dateValider;

        return $this;
    }

    public function getDateGenerer(): ?\DateTimeInterface
    {
        return $this->dateGenerer;
    }

    public function setDateGenerer(?\DateTimeInterface $dateGenerer): static
    {
        $this->dateGenerer = $dateGenerer;

        return $this;
    }

    public function getDateAnnuler(): ?\DateTimeInterface
    {
        return $this->dateAnnuler;
    }

    public function setDateAnnuler(?\DateTimeInterface $dateAnnuler): static
    {
        $this->dateAnnuler = $dateAnnuler;

        return $this;
    }

    public function getDateEncours(): ?\DateTimeInterface
    {
        return $this->dateEncours;
    }

    public function setDateEncours(?\DateTimeInterface $dateEncours): static
    {
        $this->dateEncours = $dateEncours;

        return $this;
    }

    public function getDateArchiver(): ?\DateTimeInterface
    {
        return $this->dateArchiver;
    }

    public function setDateArchiver(?\DateTimeInterface $dateArchiver): static
    {
        $this->dateArchiver = $dateArchiver;

        return $this;
    }

    public function getPositionActuel(): ?string
    {
        return $this->positionActuel;
    }

    public function setPositionActuel(?string $positionActuel): static
    {
        $this->positionActuel = $positionActuel;

        return $this;
    }

    public function isAvoir(): ?bool
    {
        return $this->avoir;
    }

    public function setAvoir(?bool $avoir): static
    {
        $this->avoir = $avoir;

        return $this;
    }

    public function isCloture(): ?bool
    {
        return $this->cloture;
    }

    public function setCloture(?bool $cloture): static
    {
        $this->cloture = $cloture;

        return $this;
    }

    public function getSource(): ?string
    {
        return $this->source;
    }

    public function setSource(?string $source): static
    {
        $this->source = $source;

        return $this;
    }

    public function getFlagSynchronisationLocale(): ?int
    {
        return $this->flagSynchronisationLocale;
    }

    public function setFlagSynchronisationLocale(?int $flagSynchronisationLocale): static
    {
        $this->flagSynchronisationLocale = $flagSynchronisationLocale;

        return $this;
    }

    /**
     * @return Collection<int, TAcReceptionLg>
     */
    public function getTAcReceptionLgs(): Collection
    {
        return $this->tAcReceptionLgs;
    }

    public function addTAcReceptionLg(TAcReceptionLg $tAcReceptionLg): static
    {
        if (!$this->tAcReceptionLgs->contains($tAcReceptionLg)) {
            $this->tAcReceptionLgs->add($tAcReceptionLg);
            $tAcReceptionLg->setReception($this);
        }

        return $this;
    }

    public function removeTAcReceptionLg(TAcReceptionLg $tAcReceptionLg): static
    {
        if ($this->tAcReceptionLgs->removeElement($tAcReceptionLg)) {
            // set the owning side to null (unless already changed)
            if ($tAcReceptionLg->getReception() === $this) {
                $tAcReceptionLg->setReception(null);
            }
        }

        return $this;
    }

    /**
     * @return Collection<int, TAcReceptionLot>
     */
    public function getTAcReceptionLots(): Collection
    {
        return $this->tAcReceptionLots;
    }

    public function addTAcReceptionLot(TAcReceptionLot $tAcReceptionLot): static
    {
        if (!$this->tAcReceptionLots->contains($tAcReceptionLot)) {
            $this->tAcReceptionLots->add($tAcReceptionLot);
            $tAcReceptionLot->setReception($this);
        }

        return $this;
    }

    public function removeTAcReceptionLot(TAcReceptionLot $tAcReceptionLot): static
    {
        if ($this->tAcReceptionLots->removeElement($tAcReceptionLot)) {
            // set the owning side to null (unless already changed)
            if ($tAcReceptionLot->getReception() === $this) {
                $tAcReceptionLot->setReception(null);
            }
        }

        return $this;
    }

    public function getPiece(): ?PTypePiece
    {
        return $this->piece;
    }

    public function setPiece(?PTypePiece $piece): static
    {
        $this->piece = $piece;

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

    public function getStPositionActuel(): ?PStatut
    {
        return $this->StPositionActuel;
    }

    public function setStPositionActuel(?PStatut $StPositionActuel): static
    {
        $this->StPositionActuel = $StPositionActuel;

        return $this;
    }

    public function getMontantHt(): ?float
    {
        return $this->montantHt;
    }

    public function setMontantHt(?float $montantHt): static
    {
        $this->montantHt = $montantHt;

        return $this;
    }

    public function getMontantTtc(): ?float
    {
        return $this->montantTtc;
    }

    public function setMontantTtc(?float $montantTtc): static
    {
        $this->montantTtc = $montantTtc;

        return $this;
    }

    public function getTva(): ?float
    {
        return $this->tva;
    }

    public function setTva(?float $tva): static
    {
        $this->tva = $tva;

        return $this;
    }
}
