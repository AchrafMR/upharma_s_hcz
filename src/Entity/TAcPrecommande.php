<?php

namespace App\Entity;

use App\Repository\TAcPrecommandeRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\DBAL\Types\Types;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: TAcPrecommandeRepository::class)]
#[ORM\Table(name: 't_ac_precommande')]
class TAcPrecommande
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column(length: 255, nullable: true)]
    private ?string $code = null;

    #[ORM\Column(length: 255, nullable: true)]
    private ?string $description = null;

    #[ORM\Column(type: Types::TEXT, nullable: true)]
    private ?string $autreInformation = null;

    #[ORM\Column(type: Types::DATETIME_MUTABLE, nullable: true)]
    private ?\DateTimeInterface $dateDemande = null;

    #[ORM\ManyToOne(inversedBy: 'tAcPrecommandes')]
    private ?PTypePiece $piece = null;

    #[ORM\ManyToOne(inversedBy: 'tAcPrecommandes')]
    private ?TAcMarche $marche = null;

    #[ORM\ManyToOne(inversedBy: 'tAcPrecommandes')]
    private ?PEntite $pEntite = null;

    #[ORM\ManyToOne(inversedBy: 'tAcPrecommandes')]
    private ?PDevise $pDevise = null;

    #[ORM\Column(nullable: true)]
    private ?bool $avoir = null;

    #[ORM\ManyToOne(inversedBy: 'tAcPrecommandes')]
    private ?PPartenaires $partenaireFournisseur = null;

    #[ORM\Column(name: "refDocAsso",length: 255, nullable: true)]
    private ?string $refDocAsso = null;

    #[ORM\ManyToOne(inversedBy: 'tAcPrecommandes')]
    private ?TVtDevis $uvDevis = null;

    #[ORM\Column(nullable: true)]
    private ?float $montant = null;

    #[ORM\Column(nullable: true)]
    private ?float $remise = null;

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

    #[ORM\Column(length: 100, nullable: true)]
    private ?string $positionActuel = null;

    #[ORM\Column(type: Types::TEXT, nullable: true)]
    private ?string $historique = null;

    #[ORM\Column(length: 255, nullable: true)]
    private ?string $source = null;

    #[ORM\Column(nullable: true)]
    private ?int $flagSynchronisationLocale = null;

    #[ORM\OneToMany(mappedBy: 'precommande', targetEntity: TAcPrecommandeLg::class)]
    private Collection $tAcPrecommandeLgs;

    #[ORM\OneToMany(mappedBy: 'precommande', targetEntity: TAcCommande::class)]
    private Collection $tAcCommandes;

    #[ORM\ManyToOne(inversedBy: 'tAcPrecommandes')]
    private ?PStatut $status = null;

    #[ORM\Column(type: Types::DATETIME_MUTABLE, nullable: true)]
    private ?\DateTimeInterface $dateValider = null;

    #[ORM\Column(type: Types::DATETIME_MUTABLE, nullable: true)]
    private ?\DateTimeInterface $dateGenerer = null;

    #[ORM\Column(type: Types::DATETIME_MUTABLE, nullable: true)]
    private ?\DateTimeInterface $dateAnnuler = null;

    #[ORM\Column(type: Types::DATETIME_MUTABLE, nullable: true)]
    private ?\DateTimeInterface $dateArchiver = null;

    #[ORM\Column(nullable: true)]
    private ?float $montantHt = null;

    #[ORM\Column(nullable: true)]
    private ?float $montantTtc = null;

    #[ORM\Column(nullable: true)]
    private ?float $tva = null;

    #[ORM\Column(type: Types::DATETIME_MUTABLE, nullable: true)]
    private ?\DateTimeInterface $created = null;

    #[ORM\Column(type: Types::DATETIME_MUTABLE, nullable: true)]
    private ?\DateTimeInterface $updated = null;

    #[ORM\ManyToOne(inversedBy: 'tAcPrecommandesPos')]
    private ?PStatut $StPositionActuel = null;

    #[ORM\ManyToOne(inversedBy: 'tAcPrecommandes')]
    private ?TMsCommande $tMsCommande = null;

    public function __construct()
    {
        $this->tAcPrecommandeLgs = new ArrayCollection();
        $this->tAcCommandes = new ArrayCollection();
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

    public function getAutreInformation(): ?string
    {
        return $this->autreInformation;
    }

    public function setAutreInformation(?string $autreInformation): static
    {
        $this->autreInformation = $autreInformation;

        return $this;
    }

    public function getDateDemande(): ?\DateTimeInterface
    {
        return $this->dateDemande;
    }

    public function setDateDemande(?\DateTimeInterface $dateDemande): static
    {
        $this->dateDemande = $dateDemande;

        return $this;
    }

    public function getpiece(): ?PTypePiece
    {
        return $this->piece;
    }

    public function setpiece(?PTypePiece $piece): static
    {
        $this->piece = $piece;

        return $this;
    }

    public function getMarche(): ?TAcMarche
    {
        return $this->marche;
    }

    public function setMarche(?TAcMarche $marche): static
    {
        $this->marche = $marche;

        return $this;
    }

    public function getPEntite(): ?PEntite
    {
        return $this->pEntite;
    }

    public function setPEntite(?PEntite $pEntite): static
    {
        $this->pEntite = $pEntite;

        return $this;
    }

    public function getPDevise(): ?PDevise
    {
        return $this->pDevise;
    }

    public function setPDevise(?PDevise $pDevise): static
    {
        $this->pDevise = $pDevise;

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

    public function getPartenaireFournisseur(): ?PPartenaires
    {
        return $this->partenaireFournisseur;
    }

    public function setPartenaireFournisseur(?PPartenaires $partenaireFournisseur): static
    {
        $this->partenaireFournisseur = $partenaireFournisseur;

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

    public function getUvDevis(): ?TVtDevis
    {
        return $this->uvDevis;
    }

    public function setUvDevis(?TVtDevis $uvDevis): static
    {
        $this->uvDevis = $uvDevis;

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

    public function getRemise(): ?float
    {
        return $this->remise;
    }

    public function setRemise(?float $remise): static
    {
        $this->remise = $remise;

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
     * @return Collection<int, TAcPrecommandeLg>
     */
    public function getTAcPrecommandeLgs(): Collection
    {
        return $this->tAcPrecommandeLgs;
    }

    public function addTAcPrecommandeLg(TAcPrecommandeLg $tAcPrecommandeLg): static
    {
        if (!$this->tAcPrecommandeLgs->contains($tAcPrecommandeLg)) {
            $this->tAcPrecommandeLgs->add($tAcPrecommandeLg);
            $tAcPrecommandeLg->setPrecommande($this);
        }

        return $this;
    }

    public function removeTAcPrecommandeLg(TAcPrecommandeLg $tAcPrecommandeLg): static
    {
        if ($this->tAcPrecommandeLgs->removeElement($tAcPrecommandeLg)) {
            // set the owning side to null (unless already changed)
            if ($tAcPrecommandeLg->getPrecommande() === $this) {
                $tAcPrecommandeLg->setPrecommande(null);
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
            $tAcCommande->setPrecommande($this);
        }

        return $this;
    }

    public function removeTAcCommande(TAcCommande $tAcCommande): static
    {
        if ($this->tAcCommandes->removeElement($tAcCommande)) {
            // set the owning side to null (unless already changed)
            if ($tAcCommande->getPrecommande() === $this) {
                $tAcCommande->setPrecommande(null);
            }
        }

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

    public function getStPositionActuel(): ?PStatut
    {
        return $this->StPositionActuel;
    }

    public function setStPositionActuel(?PStatut $StPositionActuel): static
    {
        $this->StPositionActuel = $StPositionActuel;

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
}
