<?php

namespace App\Entity;

use App\Repository\TMsLivraisonRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\DBAL\Types\Types;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: TMsLivraisonRepository::class)]
#[ORM\Table(name: 't_ms_livraison')]
class TMsLivraison
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column(length: 255, nullable: true)]
    private ?string $code = null;

    #[ORM\ManyToOne(inversedBy: 'tMsLivraisons')]
    #[ORM\JoinColumn(nullable: false)]
    private ?TMsCommande $tMsCommande = null;

    #[ORM\Column(nullable: true)]
    private ?bool $multi_recp = null;

    #[ORM\ManyToOne(targetEntity: PMagasins::class)]
    #[ORM\JoinColumn(name: 'demandeur_id', referencedColumnName: 'id', nullable: false)]
    private ?PMagasins $demandeur_id = null;

    #[ORM\ManyToOne(targetEntity: PMagasins::class)]
    #[ORM\JoinColumn(name: 'recepteur_id', referencedColumnName: 'id', nullable: True)]
    private ?PMagasins $recepteur_id = null;

    #[ORM\Column]
    private ?int $ipp = null;

    #[ORM\Column(length: 255)]
    private ?string $nom_patient = null;

    #[ORM\Column(length: 255)]
    private ?string $dossier_patient = null;

    #[ORM\ManyToOne(inversedBy: 'tMsLivraisons')]
    private ?PPartenaires $pPartenaires = null;

    #[ORM\Column(nullable: true)]
    private ?bool $urgent = null;

    #[ORM\Column(type: Types::DATETIME_MUTABLE, nullable: true)]
    private ?\DateTimeInterface $created = null;

    #[ORM\Column(type: Types::DATETIME_MUTABLE, nullable: true)]
    private ?\DateTimeInterface $updated = null;

    #[ORM\Column(length: 255, nullable: true)]
    private ?string $position_actuel = null;

    #[ORM\Column(length: 255, nullable: true)]
    private ?string $historique = null;

    #[ORM\Column(nullable: true)]
    private ?bool $actif = null;

    #[ORM\Column(nullable: true)]
    private ?bool $flag_synchronisation_locale = null;

    #[ORM\OneToMany(mappedBy: 'tMsLivraison', targetEntity: TMsLivraisonlg::class)]
    private Collection $tMsLivraisonlgs;

    public function __construct()
    {
        $this->tMsLivraisonlgs = new ArrayCollection();
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

    public function isMultiRecp(): ?bool
    {
        return $this->multi_recp;
    }

    public function setMultiRecp(?bool $multi_recp): static
    {
        $this->multi_recp = $multi_recp;

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
    public function getIpp(): ?int
    {
        return $this->ipp;
    }

    public function setIpp(int $ipp): static
    {
        $this->ipp = $ipp;

        return $this;
    }

    public function getNomPatient(): ?string
    {
        return $this->nom_patient;
    }

    public function setNomPatient(string $nom_patient): static
    {
        $this->nom_patient = $nom_patient;

        return $this;
    }

    public function getDossierPatient(): ?string
    {
        return $this->dossier_patient;
    }

    public function setDossierPatient(string $dossier_patient): static
    {
        $this->dossier_patient = $dossier_patient;

        return $this;
    }

    public function getPPartenaires(): ?PPartenaires
    {
        return $this->pPartenaires;
    }

    public function setPPartenaires(?PPartenaires $pPartenaires): static
    {
        $this->pPartenaires = $pPartenaires;

        return $this;
    }

    public function isUrgent(): ?bool
    {
        return $this->urgent;
    }

    public function setUrgent(?bool $urgent): static
    {
        $this->urgent = $urgent;

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

    public function getPositionActuel(): ?string
    {
        return $this->position_actuel;
    }

    public function setPositionActuel(?string $position_actuel): static
    {
        $this->position_actuel = $position_actuel;

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

    public function isActif(): ?bool
    {
        return $this->actif;
    }

    public function setActif(?bool $actif): static
    {
        $this->actif = $actif;

        return $this;
    }

    public function isFlagSynchronisationLocale(): ?bool
    {
        return $this->flag_synchronisation_locale;
    }

    public function setFlagSynchronisationLocale(?bool $flag_synchronisation_locale): static
    {
        $this->flag_synchronisation_locale = $flag_synchronisation_locale;

        return $this;
    }

    /**
     * @return Collection<int, TMsLivraisonlg>
     */
    public function getTMsLivraisonlgs(): Collection
    {
        return $this->tMsLivraisonlgs;
    }

    public function addTMsLivraisonlg(TMsLivraisonlg $tMsLivraisonlg): static
    {
        if (!$this->tMsLivraisonlgs->contains($tMsLivraisonlg)) {
            $this->tMsLivraisonlgs->add($tMsLivraisonlg);
            $tMsLivraisonlg->setTMsLivraison($this);
        }

        return $this;
    }

    public function removeTMsLivraisonlg(TMsLivraisonlg $tMsLivraisonlg): static
    {
        if ($this->tMsLivraisonlgs->removeElement($tMsLivraisonlg)) {
            // set the owning side to null (unless already changed)
            if ($tMsLivraisonlg->getTMsLivraison() === $this) {
                $tMsLivraisonlg->setTMsLivraison(null);
            }
        }

        return $this;
    }
}
