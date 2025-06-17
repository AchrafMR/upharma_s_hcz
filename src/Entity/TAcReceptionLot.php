<?php

namespace App\Entity;

use App\Repository\TAcReceptionLotRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\DBAL\Types\Types;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: TAcReceptionLotRepository::class)]
#[ORM\Table(name: 't_ac_reception_lot')]
class TAcReceptionLot
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\ManyToOne(inversedBy: 'tAcReceptionLots')]
    private ?TAcReception $reception = null;

    #[ORM\ManyToOne(inversedBy: 'tAcReceptionLots')]
    private ?TAcReceptionLg $receptionLg = null;

    #[ORM\Column(length: 255, nullable: true)]
    private ?string $lot = null;

    #[ORM\Column(type: Types::DATETIME_MUTABLE, nullable: true)]
    private ?\DateTimeInterface $datePeremption = null;

    #[ORM\Column(nullable: true)]
    private ?int $quantite = null;

    #[ORM\Column(nullable: true)]
    private ?float $prixunitaireAchatHt = null;

    #[ORM\Column(nullable: true)]
    private ?float $tvaAchat = null;

    #[ORM\Column(nullable: true)]
    private ?float $remiseAchat = null;

    #[ORM\Column(nullable: true)]
    private ?float $montantAchatHt = null;

    #[ORM\Column(nullable: true)]
    private ?float $montantAchatTtc = null;

    #[ORM\Column(nullable: true)]
    private ?float $prixunitaireVenteHt = null;

    #[ORM\Column(nullable: true)]
    private ?float $tvaVente = null;

    #[ORM\Column(nullable: true)]
    private ?float $remiseVente = null;

    #[ORM\Column(nullable: true)]
    private ?float $montantVenteTtc = null;

    #[ORM\Column(nullable: true)]
    private ?float $marge = null;

    #[ORM\Column(type: Types::DATETIME_MUTABLE, nullable: true)]
    private ?\DateTimeInterface $dateSys = null;

    #[ORM\OneToMany(mappedBy: 'lot', targetEntity: TAcReceptionObj::class)]
    private Collection $tAcReceptionObjs;

    #[ORM\ManyToOne(inversedBy: 'tAcReceptionLots')]
    private ?PProduits $produit = null;

    public function __construct()
    {
        $this->tAcReceptionObjs = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getReception(): ?TAcReception
    {
        return $this->reception;
    }

    public function setReception(?TAcReception $reception): static
    {
        $this->reception = $reception;

        return $this;
    }

    public function getReceptionLg(): ?TAcReceptionLg
    {
        return $this->receptionLg;
    }

    public function setReceptionLg(?TAcReceptionLg $receptionLg): static
    {
        $this->receptionLg = $receptionLg;

        return $this;
    }

    public function getLot(): ?string
    {
        return $this->lot;
    }

    public function setLot(?string $lot): static
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

    public function getQuantite(): ?int
    {
        return $this->quantite;
    }

    public function setQuantite(?int $quantite): static
    {
        $this->quantite = $quantite;

        return $this;
    }

    public function getPrixunitaireAchatHt(): ?float
    {
        return $this->prixunitaireAchatHt;
    }

    public function setPrixunitaireAchatHt(?float $prixunitaireAchatHt): static
    {
        $this->prixunitaireAchatHt = $prixunitaireAchatHt;

        return $this;
    }

    public function getTvaAchat(): ?float
    {
        return $this->tvaAchat;
    }

    public function setTvaAchat(?float $tvaAchat): static
    {
        $this->tvaAchat = $tvaAchat;

        return $this;
    }

    public function getRemiseAchat(): ?float
    {
        return $this->remiseAchat;
    }

    public function setRemiseAchat(?float $remiseAchat): static
    {
        $this->remiseAchat = $remiseAchat;

        return $this;
    }

    public function getMontantAchatHt(): ?float
    {
        return $this->montantAchatHt;
    }

    public function setMontantAchatHt(?float $montantAchatHt): static
    {
        $this->montantAchatHt = $montantAchatHt;

        return $this;
    }

    public function getMontantAchatTtc(): ?float
    {
        return $this->montantAchatTtc;
    }

    public function setMontantAchatTtc(?float $montantAchatTtc): static
    {
        $this->montantAchatTtc = $montantAchatTtc;

        return $this;
    }

    public function getPrixunitaireVenteHt(): ?float
    {
        return $this->prixunitaireVenteHt;
    }

    public function setPrixunitaireVenteHt(?float $prixunitaireVenteHt): static
    {
        $this->prixunitaireVenteHt = $prixunitaireVenteHt;

        return $this;
    }

    public function getTvaVente(): ?float
    {
        return $this->tvaVente;
    }

    public function setTvaVente(?float $tvaVente): static
    {
        $this->tvaVente = $tvaVente;

        return $this;
    }

    public function getRemiseVente(): ?float
    {
        return $this->remiseVente;
    }

    public function setRemiseVente(?float $remiseVente): static
    {
        $this->remiseVente = $remiseVente;

        return $this;
    }

    public function getMontantVenteTtc(): ?float
    {
        return $this->montantVenteTtc;
    }

    public function setMontantVenteTtc(?float $montantVenteTtc): static
    {
        $this->montantVenteTtc = $montantVenteTtc;

        return $this;
    }

    public function getMarge(): ?float
    {
        return $this->marge;
    }

    public function setMarge(?float $marge): static
    {
        $this->marge = $marge;

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

    /**
     * @return Collection<int, TAcReceptionObj>
     */
    public function getTAcReceptionObjs(): Collection
    {
        return $this->tAcReceptionObjs;
    }

    public function addTAcReceptionObj(TAcReceptionObj $tAcReceptionObj): static
    {
        if (!$this->tAcReceptionObjs->contains($tAcReceptionObj)) {
            $this->tAcReceptionObjs->add($tAcReceptionObj);
            $tAcReceptionObj->setLot($this);
        }

        return $this;
    }

    public function removeTAcReceptionObj(TAcReceptionObj $tAcReceptionObj): static
    {
        if ($this->tAcReceptionObjs->removeElement($tAcReceptionObj)) {
            // set the owning side to null (unless already changed)
            if ($tAcReceptionObj->getLot() === $this) {
                $tAcReceptionObj->setLot(null);
            }
        }

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
}
