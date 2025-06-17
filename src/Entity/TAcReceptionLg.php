<?php

namespace App\Entity;

use App\Repository\TAcReceptionLgRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\DBAL\Types\Types;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: TAcReceptionLgRepository::class)]
#[ORM\Table(name: 't_ac_reception_lg')]
class TAcReceptionLg
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\ManyToOne(inversedBy: 'tAcReceptionLgs')]
    private ?TAcReception $reception = null;

    #[ORM\ManyToOne(inversedBy: 'tAcReceptionLgs')]
    private ?PProduits $produit = null;

    #[ORM\ManyToOne(inversedBy: 'tAcReceptionLgs')]
    private ?PPrUnites $unite = null;

    #[ORM\Column(nullable: true)]
    private ?float $quantite = null;

    #[ORM\Column(nullable: true)]
    private ?float $prixunitaire = null;

    #[ORM\Column(nullable: true)]
    private ?float $remise = null;

    #[ORM\Column(nullable: true)]
    private ?float $tva = null;

    #[ORM\Column(nullable: true)]
    private ?float $montantHt = null;

    #[ORM\Column]
    private ?float $montantTtc = null;

    #[ORM\Column(type: Types::TEXT, nullable: true)]
    private ?string $observation = null;

    #[ORM\Column(length: 255, nullable: true)]
    private ?string $codeComptable = null;

    #[ORM\Column(nullable: true)]
    private ?int $flagSynchronisationLocale = null;

    #[ORM\OneToMany(mappedBy: 'receptionLg', targetEntity: TAcReceptionLot::class)]
    private Collection $tAcReceptionLots;

    #[ORM\ManyToOne(inversedBy: 'tAcReceptionLgs')]
    private ?TAcCommandeLg $tAcCommandeLg = null;

    #[ORM\Column(nullable: true)]
    private ?float $totalTva = null;

    #[ORM\Column(nullable: true)]
    private ?float $totalRemise = null;

    public function __construct()
    {
        $this->tAcReceptionLots = new ArrayCollection();
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

    public function getProduit(): ?PProduits
    {
        return $this->produit;
    }

    public function setProduit(?PProduits $produit): static
    {
        $this->produit = $produit;

        return $this;
    }

    public function getUnite(): ?PPrUnites
    {
        return $this->unite;
    }

    public function setUnite(?PPrUnites $unite): static
    {
        $this->unite = $unite;

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

    public function getPrixunitaire(): ?float
    {
        return $this->prixunitaire;
    }

    public function setPrixunitaire(?float $prixunitaire): static
    {
        $this->prixunitaire = $prixunitaire;

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

    public function getTva(): ?float
    {
        return $this->tva;
    }

    public function setTva(?float $tva): static
    {
        $this->tva = $tva;

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

    public function setMontantTtc(float $montantTtc): static
    {
        $this->montantTtc = $montantTtc;

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

    public function getCodeComptable(): ?string
    {
        return $this->codeComptable;
    }

    public function setCodeComptable(?string $codeComptable): static
    {
        $this->codeComptable = $codeComptable;

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
            $tAcReceptionLot->setReceptionLg($this);
        }

        return $this;
    }

    public function removeTAcReceptionLot(TAcReceptionLot $tAcReceptionLot): static
    {
        if ($this->tAcReceptionLots->removeElement($tAcReceptionLot)) {
            // set the owning side to null (unless already changed)
            if ($tAcReceptionLot->getReceptionLg() === $this) {
                $tAcReceptionLot->setReceptionLg(null);
            }
        }

        return $this;
    }

    public function getTAcCommandeLg(): ?TAcCommandeLg
    {
        return $this->tAcCommandeLg;
    }

    public function setTAcCommandeLg(?TAcCommandeLg $tAcCommandeLg): static
    {
        $this->tAcCommandeLg = $tAcCommandeLg;

        return $this;
    }

     public function getTotalTva(): ?float
    {
        return $this->totalTva;
    }

    public function setTotalTva(?float $totalTva): static
    {
        $this->totalTva = $totalTva;

        return $this;
    }

    public function getTotalRemise(): ?float
    {
        return $this->totalRemise;
    }

    public function setTotalRemise(?float $totalRemise): static
    {
        $this->totalRemise = $totalRemise;

        return $this;
    }
}
