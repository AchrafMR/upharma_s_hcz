<?php

namespace App\Entity;

use App\Repository\TMsCommandeRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\DBAL\Types\Types;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: TMsCommandeRepository::class)]
#[ORM\Table(name: 't_ms_commande')]
class TMsCommande
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column(length: 100, nullable: true)]
    private ?string $code = null;

    #[ORM\Column(type: Types::TEXT, nullable: true)]
    private ?string $description = null;

    #[ORM\Column(length: 255, nullable: true)]
    private ?string $nomPatient = null;

    #[ORM\Column(length: 255, nullable: true)]
    private ?string $dossierPatient = null;

    #[ORM\Column(length: 255)]
    private ?string $positionActuel = null;

    #[ORM\Column(type: Types::TEXT, nullable: true)]
    private ?string $historique = null;

    #[ORM\Column]
    private ?bool $urgent = null;

    #[ORM\Column(type: Types::DATETIME_MUTABLE, nullable: true)]
    private ?\DateTimeInterface $dateValider = null;

    #[ORM\Column(type: Types::DATETIME_MUTABLE, nullable: true)]
    private ?\DateTimeInterface $dateGenerer = null;

    #[ORM\Column(type: Types::DATETIME_MUTABLE, nullable: true)]
    private ?\DateTimeInterface $dateAnnuler = null;

    #[ORM\Column(type: Types::DATETIME_MUTABLE)]
    private ?\DateTimeInterface $created = null;

    #[ORM\Column(type: Types::DATETIME_MUTABLE, nullable: true)]
    private ?\DateTimeInterface $updated = null;

    #[ORM\Column]
    private ?bool $actif = null;

    #[ORM\Column(nullable: true)]
    private ?bool $flagSynchronisationLocale = null;

    #[ORM\Column(length: 255, nullable: true)]
    private ?string $ipp = null;

    #[ORM\ManyToOne(inversedBy: 'tMsCommandes')]
    #[ORM\JoinColumn(nullable: false)]
    private ?User $userCreated = null;

    #[ORM\ManyToOne(inversedBy: 'tMsCommandes')]
    private ?User $userUpdated = null;

    #[ORM\ManyToOne(inversedBy: 'tMsCommandes')]
    private ?User $userValider = null;

    #[ORM\ManyToOne(inversedBy: 'tMsCommandes')]
    private ?User $userGenerer = null;

    #[ORM\ManyToOne(inversedBy: 'tMsCommandes')]
    private ?User $userAnnuler = null;

    #[ORM\ManyToOne(inversedBy: 'tMsCommandes')]
    private ?User $UserArchiver = null;

    #[ORM\ManyToOne(inversedBy: 'tMsCommandes')]
    #[ORM\JoinColumn(nullable: false)]
    private ?PTypeOprt $typeCommande = null;

    #[ORM\ManyToOne(targetEntity: PMagasins::class)]
    #[ORM\JoinColumn(name: 'demandeur_id', referencedColumnName: 'id', nullable: false)]
    private ?PMagasins $demandeur_id = null;

    #[ORM\ManyToOne(targetEntity: PMagasins::class)]
    #[ORM\JoinColumn(name: 'recepteur_id', referencedColumnName: 'id', nullable: True)]
    private ?PMagasins $recepteur_id = null;

    #[ORM\ManyToOne(inversedBy: 'tMsCommandes')]
    private ?PPartenaires $pPartenairesId = null;

    #[ORM\ManyToOne(inversedBy: 'tMsCommandes')]
    private ?PEntite $pEntite = null;

    #[ORM\OneToMany(mappedBy: 'tMsCommande', targetEntity: TMsCommandelg::class)]
    private Collection $tMsCommandelgs;

    #[ORM\ManyToOne(inversedBy: 'tMsCommandes')]
    #[ORM\JoinColumn(nullable: false)]
    private ?TMsDemande $tMsDemande = null;

    #[ORM\ManyToOne(targetEntity: self::class)]
    private ?self $commandeConsommation = null;

    public function __construct()
    {
        $this->tMsCommandelgs = new ArrayCollection();
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

    public function getNomPatient(): ?string
    {
        return $this->nomPatient;
    }

    public function setNomPatient(?string $nomPatient): static
    {
        $this->nomPatient = $nomPatient;

        return $this;
    }

    public function getDossierPatient(): ?string
    {
        return $this->dossierPatient;
    }

    public function setDossierPatient(?string $dossierPatient): static
    {
        $this->dossierPatient = $dossierPatient;

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

    public function isUrgent(): ?bool
    {
        return $this->urgent;
    }

    public function setUrgent(bool $urgent): static
    {
        $this->urgent = $urgent;

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

    public function getCreated(): ?\DateTimeInterface
    {
        return $this->created;
    }

    public function setCreated(\DateTimeInterface $created): static
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

    public function isActif(): ?bool
    {
        return $this->actif;
    }

    public function setActif(bool $actif): static
    {
        $this->actif = $actif;

        return $this;
    }

    public function isFlagSynchronisationLocale(): ?bool
    {
        return $this->flagSynchronisationLocale;
    }

    public function setFlagSynchronisationLocale(?bool $flagSynchronisationLocale): static
    {
        $this->flagSynchronisationLocale = $flagSynchronisationLocale;

        return $this;
    }

    public function getIpp(): ?string
    {
        return $this->ipp;
    }

    public function setIpp(?string $ipp): static
    {
        $this->ipp = $ipp;

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
        return $this->UserArchiver;
    }

    public function setUserArchiver(?User $UserArchiver): static
    {
        $this->UserArchiver = $UserArchiver;

        return $this;
    }

    public function getTypeCommande(): ?PTypeOprt
    {
        return $this->typeCommande;
    }

    public function setTypeCommande(?PTypeOprt $typeCommande): static
    {
        $this->typeCommande = $typeCommande;

        return $this;
    }

    public function getDemandeurId(): ?PMagasins
    {
        return $this->demandeur_id;
    }

    public function setDemandeurId(?PMagasins $demandeur_id): static
    {
        $this->demandeur_id = $demandeur_id;

        return $this;
    }

    public function getRecepteurId(): ?PMagasins
    {
        return $this->recepteur_id;
    }

    public function setRecepteurId(?PMagasins $recepteur_id): static
    {
        $this->recepteur_id = $recepteur_id;

        return $this;
    }

    public function getPPartenairesId(): ?PPartenaires
    {
        return $this->pPartenairesId;
    }

    public function setPPartenairesId(?PPartenaires $pPartenairesId): static
    {
        $this->pPartenairesId = $pPartenairesId;

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

    /**
     * @return Collection<int, TMsCommandelg>
     */
    public function getTMsCommandelgs(): Collection
    {
        return $this->tMsCommandelgs;
    }

    public function addTMsCommandelg(TMsCommandelg $tMsCommandelg): static
    {
        if (!$this->tMsCommandelgs->contains($tMsCommandelg)) {
            $this->tMsCommandelgs->add($tMsCommandelg);
            $tMsCommandelg->setTMsCommande($this);
        }

        return $this;
    }

    public function removeTMsCommandelg(TMsCommandelg $tMsCommandelg): static
    {
        if ($this->tMsCommandelgs->removeElement($tMsCommandelg)) {
            // set the owning side to null (unless already changed)
            if ($tMsCommandelg->getTMsCommande() === $this) {
                $tMsCommandelg->setTMsCommande(null);
            }
        }

        return $this;
    }

    public function getTMsDemande(): ?TMsDemande
    {
        return $this->tMsDemande;
    }

    public function setTMsDemande(?TMsDemande $tMsDemande): static
    {
        $this->tMsDemande = $tMsDemande;

        return $this;
    }

    public function getCommandeConsommation(): ?self
    {
        return $this->commandeConsommation;
    }

    public function setCommandeConsommation(?self $commandeConsommation): static
    {
        $this->commandeConsommation = $commandeConsommation;

        return $this;
    }
}
