<?php

namespace App\Entity;

use App\Repository\TMsDemandeRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\DBAL\Types\Types;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: TMsDemandeRepository::class)]
#[ORM\Table(name: 't_ms_Demande')]

class TMsDemande
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column(type: 'integer')]
    private ?int $id = null;

    #[ORM\Column(type: 'string', length: 100, nullable: true)]
    private ?string $code = null;

    #[ORM\Column(type: 'text', nullable: true)]
    private ?string $description = null;

    #[ORM\Column(type: 'string', length: 100, nullable: true)]
    private ?string $nomPatient = null;

    #[ORM\Column(type: 'string', length: 100, nullable: true)]
    private ?string $dossierPatient = null;

    #[ORM\Column(type: 'string', length: 100)]
    private ?string $positionActuel = null;

    #[ORM\Column(type: 'text', nullable: true)]
    private ?string $historique = null;

    #[ORM\Column(type: 'boolean')]
    private bool $urgent = false;

    #[ORM\Column(type: 'datetime', nullable: true)]
    private ?\DateTimeInterface $dateValider = null;

    #[ORM\Column(type: 'datetime', nullable: true)]
    private ?\DateTimeInterface $dateGenerer = null;

    #[ORM\Column(type: 'datetime', nullable: true)]
    private ?\DateTimeInterface $dateAnnuler = null;

    #[ORM\Column(type: 'datetime')]
    private ?\DateTimeInterface $created = null;

    #[ORM\Column(type: 'datetime', nullable: true)]
    private ?\DateTimeInterface $updated = null;

    #[ORM\Column(type: 'boolean')]
    private bool $actif = true;

    #[ORM\Column(type: 'boolean')]
    private bool $flagSynchronisationLocale = true;

    #[ORM\ManyToOne(targetEntity: User::class)]
    #[ORM\JoinColumn(nullable: false)]
    private ?User $userCreated = null;

    #[ORM\ManyToOne(targetEntity: User::class)]
    private ?User $userUpdated = null;

    #[ORM\ManyToOne(targetEntity: User::class)]
    private ?User $userValider = null;

    #[ORM\ManyToOne(targetEntity: User::class)]
    private ?User $userGenerer = null;

    #[ORM\ManyToOne(targetEntity: User::class)]
    private ?User $userAnnuler = null;

    #[ORM\ManyToOne(targetEntity: User::class)]
    private ?User $userArchiver = null;

    #[ORM\Column(type: 'string', length: 50, nullable: true)]
    private ?string $ipp = null;

    #[ORM\ManyToOne(inversedBy: 'tMsDemandes')]
    private ?PTypeOprt $typeDemande = null;

    #[ORM\ManyToOne(targetEntity: PMagasins::class)]
    #[ORM\JoinColumn(name: 'demandeur_id', referencedColumnName: 'id', nullable: false)]
    private ?PMagasins $demandeur_id = null;

    #[ORM\ManyToOne(targetEntity: PMagasins::class)]
    #[ORM\JoinColumn(name: 'recepteur_id', referencedColumnName: 'id', nullable: false)]
    private ?PMagasins $recepteur_id = null;

    #[ORM\ManyToOne(targetEntity: PPartenaires::class)]
    #[ORM\JoinColumn(name: 'p_partenaires_id', referencedColumnName: 'id', nullable: true)]
    private ?PPartenaires $p_partenaires_id = null;

    #[ORM\OneToMany(mappedBy: 'tmsDemande', targetEntity: TMsDemandelg::class)]
    private Collection $tMsDemandelgs;

    public function __construct()
    {
        $this->tMsDemandelgs = new ArrayCollection();
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

    public function setFlagSynchronisationLocale(bool $flagSynchronisationLocale): static
    {
        $this->flagSynchronisationLocale = $flagSynchronisationLocale;

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

    public function getIpp(): ?string
    {
        return $this->ipp;
    }

    public function setIpp(?string $ipp): static
    {
        $this->ipp = $ipp;
        return $this;
    }

    public function getTypeDemande(): ?PTypeOprt
    {
        return $this->typeDemande;
    }

    public function setTypeDemande(?PTypeOprt $typeDemande): static
    {
        $this->typeDemande = $typeDemande;

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
        return $this->p_partenaires_id;
    }

    public function setPPartenairesId(?PPartenaires $p_partenaires_id): static
    {
        $this->p_partenaires_id = $p_partenaires_id;

        return $this;
    }

    /**
     * @return Collection<int, TMsDemandelg>
     */
    public function getTMsDemandelgs(): Collection
    {
        return $this->tMsDemandelgs;
    }

    public function addTMsDemandelg(TMsDemandelg $tMsDemandelg): static
    {
        if (!$this->tMsDemandelgs->contains($tMsDemandelg)) {
            $this->tMsDemandelgs->add($tMsDemandelg);
            $tMsDemandelg->setTmsDemande($this);
        }

        return $this;
    }

    public function removeTMsDemandelg(TMsDemandelg $tMsDemandelg): static
    {
        if ($this->tMsDemandelgs->removeElement($tMsDemandelg)) {
            // set the owning side to null (unless already changed)
            if ($tMsDemandelg->getTmsDemande() === $this) {
                $tMsDemandelg->setTmsDemande(null);
            }
        }

        return $this;
    }

    
}
