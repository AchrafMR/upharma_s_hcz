<?php

namespace App\Entity;

use App\Repository\TAcCommandeRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\DBAL\Types\Types;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: TAcCommandeRepository::class)]
#[ORM\Table(name: 't_ac_commande')]
class TAcCommande
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column(length: 100, nullable: true)]
    private ?string $code = null;

    #[ORM\Column(type: Types::TEXT, nullable: true)]
    private ?string $observation = null;

    #[ORM\Column(type: Types::TEXT, nullable: true)]
    private ?string $autreInformation = null;

    #[ORM\Column(nullable: true)]
    private ?float $remise = null;

    #[ORM\Column(nullable: true)]
    private ?bool $avoir = null;

    #[ORM\Column(type: Types::DATETIME_MUTABLE, nullable: true)]
    private ?\DateTimeInterface $dateCommande = null;

    #[ORM\ManyToOne(inversedBy: 'tAcCommandes')]
    private ?PDevise $devise = null;

    #[ORM\ManyToOne(inversedBy: 'tAcCommandes')]
    private ?PPartenaires $partenaire = null;

    #[ORM\ManyToOne(inversedBy: 'tAcCommandes')]
    private ?PEntite $entite = null;

    #[ORM\ManyToOne(inversedBy: 'tAcCommandes')]
    private ?TAcPrecommande $precommande = null;

    #[ORM\Column(name: "refDocAsso",length: 255, nullable: true)]
    private ?string $refDocAsso = null;

    #[ORM\Column(type: Types::DATETIME_MUTABLE, nullable: true)]
    private ?\DateTimeInterface $dateDocAsso = null;

    #[ORM\Column(type: Types::DATETIME_MUTABLE, nullable: true)]
    private ?\DateTimeInterface $dateLivrProvisoire = null;

    #[ORM\Column(type: Types::DATETIME_MUTABLE, nullable: true)]
    private ?\DateTimeInterface $created = null;

    #[ORM\Column(type: Types::DATETIME_MUTABLE, nullable: true)]
    private ?\DateTimeInterface $updated = null;

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

    #[ORM\ManyToOne]
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
    private ?User $userArchiver = null;

    #[ORM\Column(nullable: true)]
    private ?int $flagSynchronisationLocale = null;

    #[ORM\OneToMany(mappedBy: 'commande', targetEntity: TAcCommandeLg::class)]
    private Collection $tAcCommandeLgs;

    #[ORM\OneToMany(mappedBy: 'commande', targetEntity: TAcReception::class)]
    private Collection $tAcReceptions;

    #[ORM\ManyToOne(inversedBy: 'tAcCommandes')]
    private ?PTypePiece $piece = null;

    #[ORM\ManyToOne(inversedBy: 'tAcCommandes')]
    private ?PStatut $status = null;

    #[ORM\ManyToOne(inversedBy: 'tAcCommandesPos')]
    private ?PStatut $StPositionActuel = null;

    #[ORM\Column(nullable: true)]
    private ?float $montantHt = null;

    #[ORM\Column(nullable: true)]
    private ?float $montantTtc = null;

    #[ORM\Column(nullable: true)]
    private ?float $tva = null;

    #[ORM\Column(type: Types::DATETIME_MUTABLE, nullable: true)]
    private ?\DateTimeInterface $datePrevueLivraison = null;

    public function __construct()
    {
        $this->tAcCommandeLgs = new ArrayCollection();
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

    public function getRemise(): ?float
    {
        return $this->remise;
    }

    public function setRemise(?float $remise): static
    {
        $this->remise = $remise;

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

    public function getDateCommande(): ?\DateTimeInterface
    {
        return $this->dateCommande;
    }

    public function setDateCommande(?\DateTimeInterface $dateCommande): static
    {
        $this->dateCommande = $dateCommande;

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

    public function getEntite(): ?PEntite
    {
        return $this->entite;
    }

    public function setEntite(?PEntite $entite): static
    {
        $this->entite = $entite;

        return $this;
    }

    public function getPrecommande(): ?TAcPrecommande
    {
        return $this->precommande;
    }

    public function setPrecommande(?TAcPrecommande $precommande): static
    {
        $this->precommande = $precommande;

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

    public function getDateLivrProvisoire(): ?\DateTimeInterface
    {
        return $this->dateLivrProvisoire;
    }

    public function setDateLivrProvisoire(?\DateTimeInterface $dateLivrProvisoire): static
    {
        $this->dateLivrProvisoire = $dateLivrProvisoire;

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

    public function setPositionActuel(?string $positionActuel): static
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

    public function getUserArchiver(): ?User
    {
        return $this->userArchiver;
    }

    public function setUserArchiver(?User $userArchiver): static
    {
        $this->userArchiver = $userArchiver;

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
     * @return Collection<int, TAcCommandeLg>
     */
    public function getTAcCommandeLgs(): Collection
    {
        return $this->tAcCommandeLgs;
    }

    public function addTAcCommandeLg(TAcCommandeLg $tAcCommandeLg): static
    {
        if (!$this->tAcCommandeLgs->contains($tAcCommandeLg)) {
            $this->tAcCommandeLgs->add($tAcCommandeLg);
            $tAcCommandeLg->setCommande($this);
        }

        return $this;
    }

    public function removeTAcCommandeLg(TAcCommandeLg $tAcCommandeLg): static
    {
        if ($this->tAcCommandeLgs->removeElement($tAcCommandeLg)) {
            // set the owning side to null (unless already changed)
            if ($tAcCommandeLg->getCommande() === $this) {
                $tAcCommandeLg->setCommande(null);
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
            $tAcReception->setCommande($this);
        }

        return $this;
    }

    public function removeTAcReception(TAcReception $tAcReception): static
    {
        if ($this->tAcReceptions->removeElement($tAcReception)) {
            // set the owning side to null (unless already changed)
            if ($tAcReception->getCommande() === $this) {
                $tAcReception->setCommande(null);
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

    public function getDatePrevueLivraison(): ?\DateTimeInterface
    {
        return $this->datePrevueLivraison;
    }

    public function setDatePrevueLivraison(?\DateTimeInterface $datePrevueLivraison): static
    {
        $this->datePrevueLivraison = $datePrevueLivraison;

        return $this;
    }
}
