<?php

namespace App\Entity;

use App\Repository\TAcReceptionObjRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\DBAL\Types\Types;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: TAcReceptionObjRepository::class)]
#[ORM\Table(name: 't_ac_reception_obj')]
class TAcReceptionObj
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column(length: 255, nullable: true)]
    private ?string $code = null;

    #[ORM\ManyToOne(inversedBy: 'tAcReceptionObjs')]
    private ?PProduits $produit = null;

    #[ORM\Column(length: 255, nullable: true)]
    private ?string $numeroLot = null;

    #[ORM\Column(length: 255, nullable: true)]
    private ?string $refMarche = null;

    #[ORM\Column(length: 255, nullable: true)]
    private ?string $codeBarre = null;

    #[ORM\ManyToOne(inversedBy: 'tAcReceptionObjs')]
    private ?PEntite $entite = null;

    #[ORM\ManyToOne(inversedBy: 'tAcReceptionObjs')]
    private ?TAcReceptionLot $lot = null;

    #[ORM\Column(type: Types::DATETIME_MUTABLE, nullable: true)]
    private ?\DateTimeInterface $datePeremption = null;

    #[ORM\Column(nullable: true)]
    private ?float $prixVente = null;

    #[ORM\Column(nullable: true)]
    private ?float $quantite = null;

    #[ORM\ManyToOne(targetEntity: self::class, inversedBy: 'tAcReceptionObjs')]
    private ?self $parentTransfor = null;

    #[ORM\OneToMany(mappedBy: 'parentTransfor', targetEntity: self::class)]
    private Collection $tAcReceptionObjs;

    #[ORM\Column(type: Types::DATETIME_MUTABLE, nullable: true)]
    private ?\DateTimeInterface $dateAffAdresse = null;

    #[ORM\ManyToOne(inversedBy: 'receptionObjsAff')]
    private ?User $userAffAdresse = null;

    #[ORM\Column(length: 255, nullable: true)]
    private ?string $source = null;

    #[ORM\Column(nullable: true)]
    private ?bool $active = null;

    #[ORM\Column(nullable: true)]
    private ?bool $conformite = null;

    #[ORM\Column(nullable: true)]
    private ?bool $reserve = null;

    #[ORM\ManyToOne(inversedBy: 'receptionObjsUpdated')]
    private ?User $userUpdate = null;

    #[ORM\Column(type: Types::DATETIME_MUTABLE, nullable: true)]
    private ?\DateTimeInterface $dateUpdate = null;

    #[ORM\Column(type: Types::DATETIME_MUTABLE, nullable: true)]
    private ?\DateTimeInterface $dateSys = null;

    #[ORM\ManyToOne(inversedBy: 'tAcReceptionObjs')]
    private ?PMagasins $magasin = null;

    #[ORM\ManyToOne(inversedBy: 'tAcReceptionObjs')]
    private ?PNaturePrix $naturePrix = null;

    #[ORM\ManyToOne(inversedBy: 'tAcReceptionObjs')]
    private ?PEmplacements $adresse = null;

    #[ORM\Column(nullable: true)]
    private ?bool $etiqueter = null;

    #[ORM\Column(type: Types::DATETIME_MUTABLE, nullable: true)]
    private ?\DateTimeInterface $dateEtiqueter = null;

    #[ORM\ManyToOne(inversedBy: 'tAcReceptionObjsEtiqueter')]
    private ?User $userEtiqueter = null;

    #[ORM\OneToMany(mappedBy: 'TAcReceptionObj', targetEntity: TMsLivraisonobj::class)]
    private Collection $tMsLivraisonobjs;

    public function __construct()
    {
        $this->tAcReceptionObjs = new ArrayCollection();
        $this->tMsLivraisonobjs = new ArrayCollection();
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

    public function getProduit(): ?PProduits
    {
        return $this->produit;
    }

    public function setProduit(?PProduits $produit): static
    {
        $this->produit = $produit;

        return $this;
    }

    public function getNumeroLot(): ?string
    {
        return $this->numeroLot;
    }

    public function setNumeroLot(?string $numeroLot): static
    {
        $this->numeroLot = $numeroLot;

        return $this;
    }

    public function getRefMarche(): ?string
    {
        return $this->refMarche;
    }

    public function setRefMarche(?string $refMarche): static
    {
        $this->refMarche = $refMarche;

        return $this;
    }

    public function getCodeBarre(): ?string
    {
        return $this->codeBarre;
    }

    public function setCodeBarre(?string $codeBarre): static
    {
        $this->codeBarre = $codeBarre;

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

    public function getLot(): ?TAcReceptionLot
    {
        return $this->lot;
    }

    public function setLot(?TAcReceptionLot $lot): static
    {
        $this->lot = $lot;

        return $this;
    }

    public function getDatePeremption(): ?\DateTimeInterface
    {
        return $this->datePeremption;
    }

    public function setDatePeremption(?\DateTimeInterface $datePeremption): static
    {
        $this->datePeremption = $datePeremption;

        return $this;
    }

    public function getPrixVente(): ?float
    {
        return $this->prixVente;
    }

    public function setPrixVente(?float $prixVente): static
    {
        $this->prixVente = $prixVente;

        return $this;
    }

    public function getQuantite(): ?float
    {
        return $this->quantite;
    }

    public function setQuantite(?float $quantite): static
    {
        $this->quantite = $quantite;

        return $this;
    }

    public function getParentTransfor(): ?self
    {
        return $this->parentTransfor;
    }

    public function setParentTransfor(?self $parentTransfor): static
    {
        $this->parentTransfor = $parentTransfor;

        return $this;
    }

    /**
     * @return Collection<int, self>
     */
    public function getTAcReceptionObjs(): Collection
    {
        return $this->tAcReceptionObjs;
    }

    public function addTAcReceptionObj(self $tAcReceptionObj): static
    {
        if (!$this->tAcReceptionObjs->contains($tAcReceptionObj)) {
            $this->tAcReceptionObjs->add($tAcReceptionObj);
            $tAcReceptionObj->setParentTransfor($this);
        }

        return $this;
    }

    public function removeTAcReceptionObj(self $tAcReceptionObj): static
    {
        if ($this->tAcReceptionObjs->removeElement($tAcReceptionObj)) {
            // set the owning side to null (unless already changed)
            if ($tAcReceptionObj->getParentTransfor() === $this) {
                $tAcReceptionObj->setParentTransfor(null);
            }
        }

        return $this;
    }

    public function getDateAffAdresse(): ?\DateTimeInterface
    {
        return $this->dateAffAdresse;
    }

    public function setDateAffAdresse(?\DateTimeInterface $dateAffAdresse): static
    {
        $this->dateAffAdresse = $dateAffAdresse;

        return $this;
    }

    public function getUserAffAdresse(): ?User
    {
        return $this->userAffAdresse;
    }

    public function setUserAffAdresse(?User $userAffAdresse): static
    {
        $this->userAffAdresse = $userAffAdresse;

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

    public function isActive(): ?bool
    {
        return $this->active;
    }

    public function setActive(?bool $active): static
    {
        $this->active = $active;

        return $this;
    }

    public function isConformite(): ?bool
    {
        return $this->conformite;
    }

    public function setConformite(?bool $conformite): static
    {
        $this->conformite = $conformite;

        return $this;
    }

    public function isReserve(): ?bool
    {
        return $this->reserve;
    }

    public function setReserve(?bool $reserve): static
    {
        $this->reserve = $reserve;

        return $this;
    }

    public function getUserUpdate(): ?User
    {
        return $this->userUpdate;
    }

    public function setUserUpdate(?User $userUpdate): static
    {
        $this->userUpdate = $userUpdate;

        return $this;
    }

    public function getDateUpdate(): ?\DateTimeInterface
    {
        return $this->dateUpdate;
    }

    public function setDateUpdate(?\DateTimeInterface $dateUpdate): static
    {
        $this->dateUpdate = $dateUpdate;

        return $this;
    }

    public function getDateSys(): ?\DateTimeInterface
    {
        return $this->dateSys;
    }

    public function setDateSys(?\DateTimeInterface $dateSys): static
    {
        $this->dateSys = $dateSys;

        return $this;
    }

    public function getMagasin(): ?PMagasins
    {
        return $this->magasin;
    }

    public function setMagasin(?PMagasins $magasin): static
    {
        $this->magasin = $magasin;

        return $this;
    }

    public function getNaturePrix(): ?PNaturePrix
    {
        return $this->naturePrix;
    }

    public function setNaturePrix(?PNaturePrix $naturePrix): static
    {
        $this->naturePrix = $naturePrix;

        return $this;
    }

    public function getAdresse(): ?PEmplacements
    {
        return $this->adresse;
    }

    public function setAdresse(?PEmplacements $adresse): static
    {
        $this->adresse = $adresse;

        return $this;
    }

    public function isEtiqueter(): ?bool
    {
        return $this->etiqueter;
    }

    public function setEtiqueter(?bool $etiqueter): static
    {
        $this->etiqueter = $etiqueter;

        return $this;
    }

    public function getDateEtiqueter(): ?\DateTimeInterface
    {
        return $this->dateEtiqueter;
    }

    public function setDateEtiqueter(?\DateTimeInterface $dateEtiqueter): static
    {
        $this->dateEtiqueter = $dateEtiqueter;

        return $this;
    }

    public function getUserEtiqueter(): ?User
    {
        return $this->userEtiqueter;
    }

    public function setUserEtiqueter(?User $userEtiqueter): static
    {
        $this->userEtiqueter = $userEtiqueter;

        return $this;
    }
    /**
     * @return Collection<int, TMsLivraisonobj>
     */
    public function getTMsLivraisonobjs(): Collection
    {
        return $this->tMsLivraisonobjs;
    }

    public function addTMsLivraisonobj(TMsLivraisonobj $tMsLivraisonobj): static
    {
        if (!$this->tMsLivraisonobjs->contains($tMsLivraisonobj)) {
            $this->tMsLivraisonobjs->add($tMsLivraisonobj);
            $tMsLivraisonobj->setTAcReceptionObj($this);
        }

        return $this;
    }

    public function removeTMsLivraisonobj(TMsLivraisonobj $tMsLivraisonobj): static
    {
        if ($this->tMsLivraisonobjs->removeElement($tMsLivraisonobj)) {
            // set the owning side to null (unless already changed)
            if ($tMsLivraisonobj->getTAcReceptionObj() === $this) {
                $tMsLivraisonobj->setTAcReceptionObj(null);
            }
        }

        return $this;
    }
}
