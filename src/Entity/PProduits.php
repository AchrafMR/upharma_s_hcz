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

    #[ORM\OneToMany(mappedBy: 'pProduit', targetEntity: TStStockdyna::class)]
    private Collection $tStStockdynas;

    #[ORM\OneToMany(mappedBy: 'pProduit', targetEntity: TStStockstatic::class)]
    private Collection $tStStockstatics;

    #[ORM\OneToMany(mappedBy: 'pProduit', targetEntity: TMsCommandelg::class)]
    private Collection $tMsCommandelgs;

    #[ORM\Column(length: 255, nullable: true)]
    private ?string $ai = null;

    #[ORM\Column(name: 'qte_stock', type: 'float', nullable: true)]
    private ?float $qteStock = null;

    #[ORM\Column(name: 'fon_code', length: 255, nullable: true)]
    private ?string $fonCode = null;

    #[ORM\Column(name: 'specialite_produit', length: 255, nullable: true)]
    private ?string $specialiteProduit = null;

    #[ORM\Column(name: 'spe_code', length: 255, nullable: true)]
    private ?string $speCode = null;

    #[ORM\Column(name: 'ancien_code', length: 255, nullable: true)]
    private ?string $ancienCode = null;

    #[ORM\Column(name: 'code_cat', length: 255, nullable: true)]
    private ?string $codeCat = null;

    #[ORM\Column(length: 255, options: ['default' => 'UNKNOWN'])]
    private string $categorie = 'UNKNOWN';

    #[ORM\Column(name: 'classe_produit', length: 255, nullable: true)]
    private ?string $classeProduit = null;

    #[ORM\Column(length: 255, nullable: true)]
    private ?string $famille = null;

    #[ORM\Column(name: 'segments_produit', length: 255, nullable: true)]
    private ?string $segmentsProduit = null;

    #[ORM\Column(name: 'sous_segments_produit', length: 255, nullable: true)]
    private ?string $sousSegmentsProduit = null;

    #[ORM\Column(length: 255, nullable: true)]
    private ?string $reference = null;

    #[ORM\Column(name: 'voie_administration', length: 255, nullable: true)]
    private ?string $voieAdministration = null;

    #[ORM\Column(length: 255, nullable: true)]
    private ?string $fournisseur = null;

    #[ORM\Column(name: 'prix_vente_ph', type: 'float', nullable: true)]
    private ?float $prixVentePh = null;

    #[ORM\Column(name: 'prix_vente_ppv', type: 'float', nullable: true)]
    private ?float $prixVentePpv = null;

    #[ORM\Column(name: 'prix_vente_ppc', type: 'float', nullable: true)]
    private ?float $prixVentePpc = null;

    #[ORM\Column(name: 'prix_vente', type: 'float', nullable: true)]
    private ?float $prixVente = null;

    #[ORM\Column(name: 'statut_commercialisation', length: 255, nullable: true)]
    private ?string $statutCommercialisation = null;
    
    #[ORM\Column(length: 255, nullable: true)]
    private ?string $code_dci = null;

    #[ORM\OneToMany(mappedBy: 'pProduit', targetEntity: TMsLivraisonlg::class)]
    private Collection $tMsLivraisonlgs;

    #[ORM\OneToMany(mappedBy: 'produit', targetEntity: TAcPrecommandeLg::class)]
    private Collection $tAcPrecommandeLgs;

    #[ORM\OneToMany(mappedBy: 'produit', targetEntity: TAcCommandeLg::class)]
    private Collection $tAcCommandeLgs;

    #[ORM\OneToMany(mappedBy: 'produit', targetEntity: TAcFactureLg::class)]
    private Collection $tAcFactureLgs;

    #[ORM\OneToMany(mappedBy: 'produit', targetEntity: TAcReceptionLg::class)]
    private Collection $tAcReceptionLgs;

    #[ORM\OneToMany(mappedBy: 'produit', targetEntity: TAcReceptionObj::class)]
    private Collection $tAcReceptionObjs;

    #[ORM\OneToMany(mappedBy: 'produit', targetEntity: TAcReceptionLot::class)]
    private Collection $tAcReceptionLots;

    
    public function __construct()
    {
        $this->pPrTarifications = new ArrayCollection();
        $this->tAcPrecommandeLgs = new ArrayCollection();
        $this->tAcCommandeLgs = new ArrayCollection();
        $this->tAcFactureLgs = new ArrayCollection();
        $this->tAcReceptionLgs = new ArrayCollection();
        $this->tAcReceptionObjs = new ArrayCollection();
        $this->tAcReceptionLots = new ArrayCollection();
        $this->pTarifFournisseurs = new ArrayCollection();
        $this->tMsDemandelgs = new ArrayCollection();
        $this->tStStockdynas = new ArrayCollection();
        $this->tStStockstatics = new ArrayCollection();
        $this->tMsCommandelgs = new ArrayCollection();
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

    public function getAi(): ?string
    {
        return $this->ai;
    }

    public function setAi(?string $ai): static
    {
        $this->ai = $ai;
        return $this;
    }

    public function getQteStock(): ?float
    {
        return $this->qteStock;
    }

    public function setQteStock(?float $qteStock): static
    {
        $this->qteStock = $qteStock;
        return $this;
    }

    public function getFonCode(): ?string
    {
        return $this->fonCode;
    }

    public function setFonCode(?string $fonCode): static
    {
        $this->fonCode = $fonCode;
        return $this;
    }

    public function getSpecialiteProduit(): ?string
    {
        return $this->specialiteProduit;
    }

    public function setSpecialiteProduit(?string $specialiteProduit): static
    {
        $this->specialiteProduit = $specialiteProduit;
        return $this;
    }

    public function getSpeCode(): ?string
    {
        return $this->speCode;
    }

    public function setSpeCode(?string $speCode): static
    {
        $this->speCode = $speCode;
        return $this;
    }

    public function getAncienCode(): ?string
    {
        return $this->ancienCode;
    }

    public function setAncienCode(?string $ancienCode): static
    {
        $this->ancienCode = $ancienCode;
        return $this;
    }

    public function getCodeCat(): ?string
    {
        return $this->codeCat;
    }

    public function setCodeCat(?string $codeCat): static
    {
        $this->codeCat = $codeCat;
        return $this;
    }

    public function getCategorie(): ?string
    {
        return $this->categorie;
    }

    public function setCategorie(?string $categorie): static
    {
        $this->categorie = $categorie;
        return $this;
    }

    public function getCodeDci(): ?string
    {
        return $this->code_dci;
    }

    public function setCodeDci(?string $code_dci): static
    {
        $this->code_dci = $code_dci;

        return $this;
    }

    public function getClasseProduit(): ?string
    {
        return $this->classeProduit;
    }

    public function setClasseProduit(?string $classeProduit): static
    {
        $this->classeProduit = $classeProduit;
        return $this;
    }

    public function getFamille(): ?string
    {
        return $this->famille;
    }

    public function setFamille(?string $famille): static
    {
        $this->famille = $famille;
        return $this;
    }

    public function getSegmentsProduit(): ?string
    {
        return $this->segmentsProduit;
    }

    public function setSegmentsProduit(?string $segmentsProduit): static
    {
        $this->segmentsProduit = $segmentsProduit;
        return $this;
    }

    public function getSousSegmentsProduit(): ?string
    {
        return $this->sousSegmentsProduit;
    }

    public function setSousSegmentsProduit(?string $sousSegmentsProduit): static
    {
        $this->sousSegmentsProduit = $sousSegmentsProduit;
        return $this;
    }

    public function getReference(): ?string
    {
        return $this->reference;
    }

    public function setReference(?string $reference): static
    {
        $this->reference = $reference;
        return $this;
    }

    public function getVoieAdministration(): ?string
    {
        return $this->voieAdministration;
    }

    public function setVoieAdministration(?string $voieAdministration): static
    {
        $this->voieAdministration = $voieAdministration;
        return $this;
    }

    public function getFournisseur(): ?string
    {
        return $this->fournisseur;
    }

    public function setFournisseur(?string $fournisseur): static
    {
        $this->fournisseur = $fournisseur;
        return $this;
    }

    public function getPrixVentePh(): ?float
    {
        return $this->prixVentePh;
    }

    public function setPrixVentePh(?float $prixVentePh): static
    {
        $this->prixVentePh = $prixVentePh;
        return $this;
    }

    public function getPrixVentePpv(): ?float
    {
        return $this->prixVentePpv;
    }

    public function setPrixVentePpv(?float $prixVentePpv): static
    {
        $this->prixVentePpv = $prixVentePpv;
        return $this;
    }

    public function getPrixVentePpc(): ?float
    {
        return $this->prixVentePpc;
    }

    public function setPrixVentePpc(?float $prixVentePpc): static
    {
        $this->prixVentePpc = $prixVentePpc;
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

    public function getStatutCommercialisation(): ?string
    {
        return $this->statutCommercialisation;
    }

    public function setStatutCommercialisation(?string $statutCommercialisation): static
    {
        $this->statutCommercialisation = $statutCommercialisation;
        return $this;
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

    /**
     * @return Collection<int, TStStockdyna>
     */
    public function getTStStockdynas(): Collection
    {
        return $this->tStStockdynas;
    }

    public function addTStStockdyna(TStStockdyna $tStStockdyna): static
    {
        if (!$this->tStStockdynas->contains($tStStockdyna)) {
            $this->tStStockdynas->add($tStStockdyna);
            $tStStockdyna->setPProduit($this);
        }

        return $this;
    }

    public function removeTStStockdyna(TStStockdyna $tStStockdyna): static
    {
        if ($this->tStStockdynas->removeElement($tStStockdyna)) {
            // set the owning side to null (unless already changed)
            if ($tStStockdyna->getPProduit() === $this) {
                $tStStockdyna->setPProduit(null);
            }
        }

        return $this;
    }

    /**
     * @return Collection<int, TStStockstatic>
     */
    public function getTStStockstatics(): Collection
    {
        return $this->tStStockstatics;
    }

    public function addTStStockstatic(TStStockstatic $tStStockstatic): static
    {
        if (!$this->tStStockstatics->contains($tStStockstatic)) {
            $this->tStStockstatics->add($tStStockstatic);
            $tStStockstatic->setPProduit($this);
        }

        return $this;
    }

    public function removeTStStockstatic(TStStockstatic $tStStockstatic): static
    {
        if ($this->tStStockstatics->removeElement($tStStockstatic)) {
            // set the owning side to null (unless already changed)
            if ($tStStockstatic->getPProduit() === $this) {
                $tStStockstatic->setPProduit(null);
            }
        }

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
            $tMsCommandelg->setPProduit($this);
        }

        return $this;
    }

    public function removeTMsCommandelg(TMsCommandelg $tMsCommandelg): static
    {
        if ($this->tMsCommandelgs->removeElement($tMsCommandelg)) {
            // set the owning side to null (unless already changed)
            if ($tMsCommandelg->getPProduit() === $this) {
                $tMsCommandelg->setPProduit(null);
            }
        }

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
            $tMsLivraisonlg->setPProduit($this);
        }

        return $this;
    }

    public function removeTMsLivraisonlg(TMsLivraisonlg $tMsLivraisonlg): static
    {
        if ($this->tMsLivraisonlgs->removeElement($tMsLivraisonlg)) {
            // set the owning side to null (unless already changed)
            if ($tMsLivraisonlg->getPProduit() === $this) {
                $tMsLivraisonlg->setPProduit(null);
            }
        }

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
            $tAcPrecommandeLg->setProduit($this);
        }

        return $this;
    }

    public function removeTAcPrecommandeLg(TAcPrecommandeLg $tAcPrecommandeLg): static
    {
        if ($this->tAcPrecommandeLgs->removeElement($tAcPrecommandeLg)) {
            // set the owning side to null (unless already changed)
            if ($tAcPrecommandeLg->getProduit() === $this) {
                $tAcPrecommandeLg->setProduit(null);
            }
        }

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
            $tAcCommandeLg->setProduit($this);
        }

        return $this;
    }

    public function removeTAcCommandeLg(TAcCommandeLg $tAcCommandeLg): static
    {
        if ($this->tAcCommandeLgs->removeElement($tAcCommandeLg)) {
            // set the owning side to null (unless already changed)
            if ($tAcCommandeLg->getProduit() === $this) {
                $tAcCommandeLg->setProduit(null);
            }
        }

        return $this;
    }

    /**
     * @return Collection<int, TAcFactureLg>
     */
    public function getTAcFactureLgs(): Collection
    {
        return $this->tAcFactureLgs;
    }

    public function addTAcFactureLg(TAcFactureLg $tAcFactureLg): static
    {
        if (!$this->tAcFactureLgs->contains($tAcFactureLg)) {
            $this->tAcFactureLgs->add($tAcFactureLg);
            $tAcFactureLg->setProduit($this);
        }

        return $this;
    }

    public function removeTAcFactureLg(TAcFactureLg $tAcFactureLg): static
    {
        if ($this->tAcFactureLgs->removeElement($tAcFactureLg)) {
            // set the owning side to null (unless already changed)
            if ($tAcFactureLg->getProduit() === $this) {
                $tAcFactureLg->setProduit(null);
            }
        }

        return $this;
    }

    /**
     * @return Collection<int, TAcReceptionLg>
     */
    public function getTAcReceptionLgs(): Collection
    {
        return $this->tAcReceptionLgs;
    }

    public function addTAcReceptionLg(TAcReceptionLg $tAcReceptionLg): static
    {
        if (!$this->tAcReceptionLgs->contains($tAcReceptionLg)) {
            $this->tAcReceptionLgs->add($tAcReceptionLg);
            $tAcReceptionLg->setProduit($this);
        }

        return $this;
    }

    public function removeTAcReceptionLg(TAcReceptionLg $tAcReceptionLg): static
    {
        if ($this->tAcReceptionLgs->removeElement($tAcReceptionLg)) {
            // set the owning side to null (unless already changed)
            if ($tAcReceptionLg->getProduit() === $this) {
                $tAcReceptionLg->setProduit(null);
            }
        }

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
            $tAcReceptionObj->setProduit($this);
        }

        return $this;
    }

    public function removeTAcReceptionObj(TAcReceptionObj $tAcReceptionObj): static
    {
        if ($this->tAcReceptionObjs->removeElement($tAcReceptionObj)) {
            // set the owning side to null (unless already changed)
            if ($tAcReceptionObj->getProduit() === $this) {
                $tAcReceptionObj->setProduit(null);
            }
        }

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
            $tAcReceptionLot->setProduit($this);
        }

        return $this;
    }

    public function removeTAcReceptionLot(TAcReceptionLot $tAcReceptionLot): static
    {
        if ($this->tAcReceptionLots->removeElement($tAcReceptionLot)) {
            // set the owning side to null (unless already changed)
            if ($tAcReceptionLot->getProduit() === $this) {
                $tAcReceptionLot->setProduit(null);
            }
        }

        return $this;
    }


}
