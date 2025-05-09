<?php

namespace App\Entity;

use App\Repository\PProduitsRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\DBAL\Types\Types;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: PProduitsRepository::class)]

#[ORM\Table(name: 'p_produits')]
class PProduits
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column(length: 255, nullable: true)]
    private ?string $code = null;

    #[ORM\Column(length: 255, nullable: true)]
    private ?string $titre = null;

    #[ORM\Column(length: 255, nullable: true)]
    private ?string $description = null;

    #[ORM\ManyToOne(inversedBy: 'pProduits')]
    private ?PPrUnites $pPrUnite = null;

    #[ORM\ManyToOne(inversedBy: 'pProduits')]
    private ?PPrNiveauProduits $niveau = null;

    #[ORM\ManyToOne(inversedBy: 'pProduits')]
    private ?PPrDci $dci = null;

    #[ORM\Column(nullable: true)]
    private ?int $codeInterne = null;

    #[ORM\Column(length: 255, nullable: true)]
    private ?string $forme = null;

    #[ORM\Column(length: 255, nullable: true)]
    private ?string $dosage = null;

    #[ORM\Column(length: 255, nullable: true)]
    private ?string $ean = null;

    #[ORM\Column(length: 255, nullable: true)]
    private ?string $eanAcess = null;

    #[ORM\Column(length: 255, nullable: true)]
    private ?string $atc = null;

    #[ORM\Column(length: 255, nullable: true)]
    private ?string $codeImm = null;

    #[ORM\Column(length: 255, nullable: true)]
    private ?string $liste = null;

    #[ORM\Column(length: 255, nullable: true)]
    private ?string $observation = null;

    #[ORM\Column(length: 255, nullable: true)]
    private ?string $fabricant = null;

    #[ORM\Column(length: 255, nullable: true)]
    private ?string $dimensionPhysique = null;

    #[ORM\Column(length: 255, nullable: true)]
    private ?string $presentationArticle = null;

    #[ORM\Column(nullable: true)]
    private ?bool $active = null;

    #[ORM\Column(type: Types::DATETIME_MUTABLE, nullable: true)]
    private ?\DateTimeInterface $created = null;

    #[ORM\OneToMany(mappedBy: 'produit', targetEntity: PPrTarifications::class)]
    private Collection $pPrTarifications;

    #[ORM\Column(length: 255, nullable: true)]
    private ?string $image = null;

    #[ORM\OneToMany(mappedBy: 'pProduit', targetEntity: TMsDemandelg::class)]
    private Collection $tMsDemandelgs;

    public function __construct()
    {
        $this->pPrTarifications = new ArrayCollection();
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

    public function getTitre(): ?string
    {
        return $this->titre;
    }

    public function setTitre(?string $titre): static
    {
        $this->titre = $titre;

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

    public function getPPrUnite(): ?PPrUnites
    {
        return $this->pPrUnite;
    }

    public function setPPrUnite(?PPrUnites $pPrUnite): static
    {
        $this->pPrUnite = $pPrUnite;

        return $this;
    }

    public function getNiveau(): ?PPrNiveauProduits
    {
        return $this->niveau;
    }

    public function setNiveau(?PPrNiveauProduits $niveau): static
    {
        $this->niveau = $niveau;

        return $this;
    }

    public function getDci(): ?PPrDci
    {
        return $this->dci;
    }

    public function setDci(?PPrDci $dci): static
    {
        $this->dci = $dci;

        return $this;
    }

    public function getCodeInterne(): ?int
    {
        return $this->codeInterne;
    }

    public function setCodeInterne(?int $codeInterne): static
    {
        $this->codeInterne = $codeInterne;

        return $this;
    }

    public function getForme(): ?string
    {
        return $this->forme;
    }

    public function setForme(?string $forme): static
    {
        $this->forme = $forme;

        return $this;
    }

    public function getDosage(): ?string
    {
        return $this->dosage;
    }

    public function setDosage(?string $dosage): static
    {
        $this->dosage = $dosage;

        return $this;
    }

    public function getEan(): ?string
    {
        return $this->ean;
    }

    public function setEan(?string $ean): static
    {
        $this->ean = $ean;

        return $this;
    }

    public function getEanAcess(): ?string
    {
        return $this->eanAcess;
    }

    public function setEanAcess(?string $eanAcess): static
    {
        $this->eanAcess = $eanAcess;

        return $this;
    }

    public function getAtc(): ?string
    {
        return $this->atc;
    }

    public function setAtc(?string $atc): static
    {
        $this->atc = $atc;

        return $this;
    }

    public function getCodeImm(): ?string
    {
        return $this->codeImm;
    }

    public function setCodeImm(?string $codeImm): static
    {
        $this->codeImm = $codeImm;

        return $this;
    }

    public function getListe(): ?string
    {
        return $this->liste;
    }

    public function setListe(?string $liste): static
    {
        $this->liste = $liste;

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

    public function getFabricant(): ?string
    {
        return $this->fabricant;
    }

    public function setFabricant(?string $fabricant): static
    {
        $this->fabricant = $fabricant;

        return $this;
    }

    public function getDimensionPhysique(): ?string
    {
        return $this->dimensionPhysique;
    }

    public function setDimensionPhysique(?string $dimensionPhysique): static
    {
        $this->dimensionPhysique = $dimensionPhysique;

        return $this;
    }

    public function getPresentationArticle(): ?string
    {
        return $this->presentationArticle;
    }

    public function setPresentationArticle(?string $presentationArticle): static
    {
        $this->presentationArticle = $presentationArticle;

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

    public function getCreated(): ?\DateTimeInterface
    {
        return $this->created;
    }

    public function setCreated(?\DateTimeInterface $created): static
    {
        $this->created = $created;

        return $this;
    }

    /**
     * @return Collection<int, PPrTarifications>
     */
    public function getPPrTarifications(): Collection
    {
        return $this->pPrTarifications;
    }

    public function addPPrTarification(PPrTarifications $pPrTarification): static
    {
        if (!$this->pPrTarifications->contains($pPrTarification)) {
            $this->pPrTarifications->add($pPrTarification);
            $pPrTarification->setProduit($this);
        }

        return $this;
    }

    public function removePPrTarification(PPrTarifications $pPrTarification): static
    {
        if ($this->pPrTarifications->removeElement($pPrTarification)) {
            // set the owning side to null (unless already changed)
            if ($pPrTarification->getProduit() === $this) {
                $pPrTarification->setProduit(null);
            }
        }

        return $this;
    }

    public function getImage(): ?string
    {
        return $this->image;
    }

    public function setImage(?string $image): static
    {
        $this->image = $image;

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
            $tMsDemandelg->setPProduit($this);
        }

        return $this;
    }

    public function removeTMsDemandelg(TMsDemandelg $tMsDemandelg): static
    {
        if ($this->tMsDemandelgs->removeElement($tMsDemandelg)) {
            // set the owning side to null (unless already changed)
            if ($tMsDemandelg->getPProduit() === $this) {
                $tMsDemandelg->setPProduit(null);
            }
        }

        return $this;
    }
}
