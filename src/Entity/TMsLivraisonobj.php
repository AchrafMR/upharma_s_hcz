<?php

namespace App\Entity;

use App\Repository\TMsLivraisonobjRepository;
use Doctrine\DBAL\Types\Types;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: TMsLivraisonobjRepository::class)]
#[ORM\Table(name: 't_ms_livraisonobj')]
class TMsLivraisonobj
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\ManyToOne(inversedBy: 'tMsLivraisonobjs')]
    private ?TMsLivraisonLg $tMsLivraisonLg = null;

    #[ORM\Column(type: Types::DATE_MUTABLE, nullable: true)]
    private ?\DateTimeInterface $date_peremption = null;

    #[ORM\Column(nullable: true)]
    private ?float $quantitie_livree = null;

    #[ORM\Column(length: 255, nullable: true)]
    private ?string $lot = null;

    #[ORM\Column(nullable: true)]
    private ?float $prix_ttc = null;

    #[ORM\Column(nullable: true)]
    private ?float $total_ttc = null;

    #[ORM\Column(type: Types::DATETIME_MUTABLE, nullable: true)]
    private ?\DateTimeInterface $created = null;

    #[ORM\Column(nullable: true)]
    private ?bool $flag_synchronisation_locale = null;

    #[ORM\ManyToOne(inversedBy: 'tMsLivraisonobjs')]
    private ?TAcReceptionObj $TAcReceptionObj = null;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getTMsLivraisonLg(): ?TMsLivraisonLg
    {
        return $this->tMsLivraisonLg;
    }

    public function setTMsLivraisonLg(?TMsLivraisonLg $tMsLivraisonLg): static
    {
        $this->tMsLivraisonLg = $tMsLivraisonLg;

        return $this;
    }

    public function getDatePeremption(): ?\DateTimeInterface
    {
        return $this->date_peremption;
    }

    public function setDatePeremption(?\DateTimeInterface $date_peremption): static
    {
        $this->date_peremption = $date_peremption;

        return $this;
    }

    public function getQuantitieLivree(): ?float
    {
        return $this->quantitie_livree;
    }

    public function setQuantitieLivree(?float $quantitie_livree): static
    {
        $this->quantitie_livree = $quantitie_livree;

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

    public function getPrixTtc(): ?float
    {
        return $this->prix_ttc;
    }

    public function setPrixTtc(?float $prix_ttc): static
    {
        $this->prix_ttc = $prix_ttc;

        return $this;
    }

    public function getTotalTtc(): ?float
    {
        return $this->total_ttc;
    }

    public function setTotalTtc(?float $total_ttc): static
    {
        $this->total_ttc = $total_ttc;

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

    public function isFlagSynchronisationLocale(): ?bool
    {
        return $this->flag_synchronisation_locale;
    }

    public function setFlagSynchronisationLocale(?bool $flag_synchronisation_locale): static
    {
        $this->flag_synchronisation_locale = $flag_synchronisation_locale;

        return $this;
    }
    
        public function getTAcReceptionObj(): ?TAcReceptionObj
    {
        return $this->TAcReceptionObj;
    }

    public function setTAcReceptionObj(?TAcReceptionObj $TAcReceptionObj): static
    {
        $this->TAcReceptionObj = $TAcReceptionObj;

        return $this;
    }
}
