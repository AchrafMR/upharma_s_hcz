<?php

namespace App\Entity;

use App\Repository\TMsLivraisonlgRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: TMsLivraisonlgRepository::class)]
#[ORM\Table(name: 't_ms_livraisonlg')]
class TMsLivraisonlg
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\ManyToOne(inversedBy: 'tMsLivraisonlgs')]
    #[ORM\JoinColumn(nullable: false)]
    private ?TMsLivraison $tMsLivraison = null;

    #[ORM\ManyToOne(inversedBy: 'tMsLivraisonlgs')]
    #[ORM\JoinColumn(nullable: false)]
    private ?PProduits $pProduit = null;

    #[ORM\ManyToOne(inversedBy: 'tMsLivraisonlgs')]
    private ?PPrUnites $pPrUnite = null;

    #[ORM\Column(length: 255, nullable: true)]
    private ?string $num_lot = null;

    #[ORM\Column(nullable: true)]
    private ?float $quantite_livree = null;

    #[ORM\Column(nullable: true)]
    private ?float $prixunitaire = null;

    #[ORM\Column(nullable: true)]
    private ?float $montant_total = null;

    #[ORM\Column(length: 255, nullable: true)]
    private ?string $observation = null;

    #[ORM\Column(nullable: true)]
    private ?bool $flag_synchronisation_locale = null;

    #[ORM\OneToMany(mappedBy: 'tMsLivraisonLg', targetEntity: TMsLivraisonobj::class)]
    private Collection $tMsLivraisonobjs;

    public function __construct()
    {
        $this->tMsLivraisonobjs = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getTMsLivraison(): ?TMsLivraison
    {
        return $this->tMsLivraison;
    }

    public function setTMsLivraison(?TMsLivraison $tMsLivraison): static
    {
        $this->tMsLivraison = $tMsLivraison;

        return $this;
    }

    public function getPProduit(): ?PProduits
    {
        return $this->pProduit;
    }

    public function setPProduit(?PProduits $pProduit): static
    {
        $this->pProduit = $pProduit;

        return $this;
    }

    public function getPPrUnite(): ?PPrUnites
    {
        return $this->pPrUnite;
    }

    public function setPPrUnite(?PPrUnites $pPrUnite): static
    {
        $this->pPrUnite = $pPrUnite;

        return $this;
    }

    public function getNumLot(): ?string
    {
        return $this->num_lot;
    }

    public function setNumLot(?string $num_lot): static
    {
        $this->num_lot = $num_lot;

        return $this;
    }

    public function getQuantiteLivree(): ?float
    {
        return $this->quantite_livree;
    }

    public function setQuantiteLivree(?float $quantite_livree): static
    {
        $this->quantite_livree = $quantite_livree;

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

    public function getMontantTotal(): ?float
    {
        return $this->montant_total;
    }

    public function setMontantTotal(?float $montant_total): static
    {
        $this->montant_total = $montant_total;

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
            $tMsLivraisonobj->setTMsLivraisonLg($this);
        }

        return $this;
    }

    public function removeTMsLivraisonobj(TMsLivraisonobj $tMsLivraisonobj): static
    {
        if ($this->tMsLivraisonobjs->removeElement($tMsLivraisonobj)) {
            // set the owning side to null (unless already changed)
            if ($tMsLivraisonobj->getTMsLivraisonLg() === $this) {
                $tMsLivraisonobj->setTMsLivraisonLg(null);
            }
        }

        return $this;
    }
}
