<?php

namespace App\Entity;

use App\Repository\TAcFactureRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\DBAL\Types\Types;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: TAcFactureRepository::class)]
#[ORM\Table(name: 't_ac_facture')]
class TAcFacture
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column(length: 100, nullable: true)]
    private ?string $code = null;

    #[ORM\ManyToOne(inversedBy: 'tAcFactures')]
    private ?PPartenaires $partenaire = null;

    #[ORM\Column(nullable: true)]
    private ?float $montant = null;

    #[ORM\Column(nullable: true)]
    private ?float $montantMad = null;

    #[ORM\Column(type: Types::TEXT, nullable: true)]
    private ?string $observation = null;

    #[ORM\Column(type: Types::TEXT, nullable: true)]
    private ?string $autreInformation = null;

    #[ORM\ManyToOne(inversedBy: 'tAcFactures')]
    private ?PEntite $entite = null;

    #[ORM\ManyToOne(inversedBy: 'tAcFactures')]
    private ?PDevise $devise = null;

    #[ORM\Column(length: 255, nullable: true)]
    private ?string $designationPiece = null;

    #[ORM\ManyToOne(inversedBy: 'tAcFactures')]
    private ?PTypePiece $piece = null;

    #[ORM\Column(type: Types::DATETIME_MUTABLE, nullable: true)]
    private ?\DateTimeInterface $dateFacture = null;

    #[ORM\Column(name: "refDocAsso",length: 255, nullable: true)]
    private ?string $refDocAsso = null;

    #[ORM\Column(type: Types::DATETIME_MUTABLE, nullable: true)]
    private ?\DateTimeInterface $dateDocAsso = null;

    #[ORM\Column(type: Types::DATETIME_MUTABLE, nullable: true)]
    private ?\DateTimeInterface $created = null;

    #[ORM\Column(type: Types::DATETIME_MUTABLE, nullable: true)]
    private ?\DateTimeInterface $updated = null;

    #[ORM\Column(nullable: true)]
    private ?bool $active = null;

    #[ORM\Column(nullable: true)]
    private ?bool $avoir = null;

    #[ORM\ManyToOne]
    private ?User $userCreated = null;

    #[ORM\ManyToOne]
    private ?User $userUpdated = null;

    #[ORM\ManyToOne]
    private ?User $UserValider = null;

    #[ORM\ManyToOne]
    private ?User $userGenerer = null;

    #[ORM\ManyToOne]
    private ?User $userAnnuler = null;

    #[ORM\ManyToOne]
    private ?User $userArchiver = null;

    #[ORM\Column(type: Types::DATETIME_MUTABLE, nullable: true)]
    private ?\DateTimeInterface $dateValider = null;

    #[ORM\Column(type: Types::DATETIME_MUTABLE, nullable: true)]
    private ?\DateTimeInterface $dateGenerer = null;

    #[ORM\Column(type: Types::DATETIME_MUTABLE, nullable: true)]
    private ?\DateTimeInterface $dateAnnuler = null;

    #[ORM\Column(type: Types::DATETIME_MUTABLE, nullable: true)]
    private ?\DateTimeInterface $dateArchiver = null;

    #[ORM\Column(length: 100, nullable: true)]
    private ?string $positionActuel = null;

    #[ORM\Column(type: Types::TEXT, nullable: true)]
    private ?string $historique = null;

    #[ORM\Column(length: 255, nullable: true)]
    private ?string $source = null;

    #[ORM\Column(nullable: true)]
    private ?int $anneecomptable = null;

    #[ORM\Column(nullable: true)]
    private ?int $flagSynchronisationLocale = null;

    #[ORM\OneToMany(mappedBy: 'facture', targetEntity: TAcFactureLg::class)]
    private Collection $tAcFactureLgs;

    #[ORM\OneToMany(mappedBy: 'facture', targetEntity: TAcReception::class)]
    private Collection $tAcReceptions;

    #[ORM\ManyToOne(inversedBy: 'tAcFacturesPos')]
    private ?PStatut $StPositionActuel = null;

    public function __construct()
    {
        $this->tAcFactureLgs = new ArrayCollection();
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

    public function getPartenaire(): ?PPartenaires
    {
        return $this->partenaire;
    }

    public function setPartenaire(?PPartenaires $partenaire): static
    {
        $this->partenaire = $partenaire;

        return $this;
    }

    public function getMontant(): ?float
    {
        return $this->montant;
    }

    public function setMontant(?float $montant): static
    {
        $this->montant = $montant;

        return $this;
    }

    public function getMontantMad(): ?float
    {
        return $this->montantMad;
    }

    public function setMontantMad(?float $montantMad): static
    {
        $this->montantMad = $montantMad;

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

    public function getAutreInformation(): ?string
    {
        return $this->autreInformation;
    }

    public function setAutreInformation(?string $autreInformation): static
    {
        $this->autreInformation = $autreInformation;

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

    public function getDesignationPiece(): ?string
    {
        return $this->designationPiece;
    }

    public function setDesignationPiece(?string $designationPiece): static
    {
        $this->designationPiece = $designationPiece;

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

    public function getDateFacture(): ?\DateTimeInterface
    {
        return $this->dateFacture;
    }

    public function setDateFacture(?\DateTimeInterface $dateFacture): static
    {
        $this->dateFacture = $dateFacture;

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

    public function getDateDocAsso(): ?\DateTimeInterface
    {
        return $this->dateDocAsso;
    }

    public function setDateDocAsso(?\DateTimeInterface $dateDocAsso): static
    {
        $this->dateDocAsso = $dateDocAsso;

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

    public function isAvoir(): ?bool
    {
        return $this->avoir;
    }

    public function setAvoir(?bool $avoir): static
    {
        $this->avoir = $avoir;

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
        return $this->UserValider;
    }

    public function setUserValider(?User $UserValider): static
    {
        $this->UserValider = $UserValider;

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

    public function setPositionActuel(string $positionActuel): static
    {
        $this->positionActuel = $positionActuel;

        return $this;
    }

    public function getHistorique(): ?string
    {
        return $this->historique;
    }

    public function setHistorique(?string $historique): static
    {
        $this->historique = $historique;

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

    public function getAnneecomptable(): ?int
    {
        return $this->anneecomptable;
    }

    public function setAnneecomptable(?int $anneecomptable): static
    {
        $this->anneecomptable = $anneecomptable;

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
     * @return Collection<int, TAcFactureLg>
     */
    public function getTAcFactureLgs(): Collection
    {
        return $this->tAcFactureLgs;
    }

    public function addTAcFactureLg(TAcFactureLg $tAcFactureLg): static
    {
        if (!$this->tAcFactureLgs->contains($tAcFactureLg)) {
            $this->tAcFactureLgs->add($tAcFactureLg);
            $tAcFactureLg->setFacture($this);
        }

        return $this;
    }

    public function removeTAcFactureLg(TAcFactureLg $tAcFactureLg): static
    {
        if ($this->tAcFactureLgs->removeElement($tAcFactureLg)) {
            // set the owning side to null (unless already changed)
            if ($tAcFactureLg->getFacture() === $this) {
                $tAcFactureLg->setFacture(null);
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
            $tAcReception->setFacture($this);
        }

        return $this;
    }

    public function removeTAcReception(TAcReception $tAcReception): static
    {
        if ($this->tAcReceptions->removeElement($tAcReception)) {
            // set the owning side to null (unless already changed)
            if ($tAcReception->getFacture() === $this) {
                $tAcReception->setFacture(null);
            }
        }

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
}
