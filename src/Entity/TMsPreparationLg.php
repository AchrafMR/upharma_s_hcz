<?php

namespace App\Entity;

use App\Repository\TMsPreparationLgRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: TMsPreparationLgRepository::class)]
#[ORM\Table(name: 't_ms_preparation_lg')]
class TMsPreparationLg
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\ManyToOne(inversedBy: 'tMsPreparationLgs')]
    private ?TMsPreparation $tMsPreparation = null;

    #[ORM\ManyToOne(inversedBy: 'tMsPreparationLgs')]
    private ?PProduits $produit = null;

    #[ORM\Column(nullable: true)]
    private ?float $quantitePreparee = null;

    #[ORM\ManyToOne(inversedBy: 'tMsPreparationLgs')]
    private ?PPrUnites $unite = null;

    #[ORM\OneToMany(mappedBy: 'tMsPreparationLg', targetEntity: TMsPreparationObj::class)]
    private Collection $tMsPreparationObjs;

    #[ORM\ManyToOne(inversedBy: 'tMsPreparationLgs')]
    private ?TMsCommandelg $tMsCommandeLg = null;

    #[ORM\ManyToOne(inversedBy: 'tMsPreparationLgs')]
    private ?TAcReceptionLot $lot = null;

    #[ORM\ManyToOne(inversedBy: 'tMsPreparationLgs')]
    private ?PEmplacements $adresse = null;

    public function __construct()
    {
        $this->tMsPreparationObjs = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getTMsPreparation(): ?TMsPreparation
    {
        return $this->tMsPreparation;
    }

    public function setTMsPreparation(?TMsPreparation $tMsPreparation): static
    {
        $this->tMsPreparation = $tMsPreparation;

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

    public function getQuantitePreparee(): ?float
    {
        return $this->quantitePreparee;
    }

    public function setQuantitePreparee(?float $quantitePreparee): static
    {
        $this->quantitePreparee = $quantitePreparee;

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

    /**
     * @return Collection<int, TMsPreparationObj>
     */
    public function getTMsPreparationObjs(): Collection
    {
        return $this->tMsPreparationObjs;
    }

    public function addTMsPreparationObj(TMsPreparationObj $tMsPreparationObj): static
    {
        if (!$this->tMsPreparationObjs->contains($tMsPreparationObj)) {
            $this->tMsPreparationObjs->add($tMsPreparationObj);
            $tMsPreparationObj->setTMsPreparationLg($this);
        }

        return $this;
    }

    public function removeTMsPreparationObj(TMsPreparationObj $tMsPreparationObj): static
    {
        if ($this->tMsPreparationObjs->removeElement($tMsPreparationObj)) {
            // set the owning side to null (unless already changed)
            if ($tMsPreparationObj->getTMsPreparationLg() === $this) {
                $tMsPreparationObj->setTMsPreparationLg(null);
            }
        }

        return $this;
    }

    public function getTMsCommandeLg(): ?TMsCommandelg
    {
        return $this->tMsCommandeLg;
    }

    public function setTMsCommandeLg(?TMsCommandelg $tMsCommandeLg): static
    {
        $this->tMsCommandeLg = $tMsCommandeLg;

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

    public function getAdresse(): ?PEmplacements
    {
        return $this->adresse;
    }

    public function setAdresse(?PEmplacements $adresse): static
    {
        $this->adresse = $adresse;

        return $this;
    }
}
