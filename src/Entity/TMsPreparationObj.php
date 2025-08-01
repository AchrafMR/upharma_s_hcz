<?php

namespace App\Entity;

use App\Repository\TMsPreparationObjRepository;
use Doctrine\DBAL\Types\Types;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: TMsPreparationObjRepository::class)]
#[ORM\Table(name: 't_ms_preparation_obj')]
class TMsPreparationObj
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\ManyToOne(inversedBy: 'tMsPreparationObjs')]
    private ?TMsPreparationLg $tMsPreparationLg = null;

    #[ORM\ManyToOne(inversedBy: 'tMsPreparationObjs')]
    private ?TStStockObj $tStStockObj = null;

    #[ORM\Column(nullable: true)]
    private ?bool $prepare = null;

    #[ORM\Column(type: Types::DATETIME_MUTABLE, nullable: true)]
    private ?\DateTimeInterface $datePrepare = null;

    #[ORM\ManyToOne(inversedBy: 'tMsPreparationObjsPrepare')]
    private ?User $userPrepare = null;

    #[ORM\Column(nullable: true)]
    private ?bool $valide = null;

    #[ORM\ManyToOne(inversedBy: 'tMsPreparationObjsValide')]
    private ?User $userValide = null;

    #[ORM\Column(type: Types::DATETIME_MUTABLE, nullable: true)]
    private ?\DateTimeInterface $dateValide = null;

    #[ORM\Column(length: 255, nullable: true)]
    private ?string $codePalette = null;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getTMsPreparationLg(): ?TMsPreparationLg
    {
        return $this->tMsPreparationLg;
    }

    public function setTMsPreparationLg(?TMsPreparationLg $tMsPreparationLg): static
    {
        $this->tMsPreparationLg = $tMsPreparationLg;

        return $this;
    }

    public function getTStStockObj(): ?TStStockObj
    {
        return $this->tStStockObj;
    }

    public function setTStStockObj(?TStStockObj $tStStockObj): static
    {
        $this->tStStockObj = $tStStockObj;

        return $this;
    }

    public function isPrepare(): ?bool
    {
        return $this->prepare;
    }

    public function setPrepare(?bool $prepare): static
    {
        $this->prepare = $prepare;

        return $this;
    }

    public function getDatePrepare(): ?\DateTimeInterface
    {
        return $this->datePrepare;
    }

    public function setDatePrepare(?\DateTimeInterface $datePrepare): static
    {
        $this->datePrepare = $datePrepare;

        return $this;
    }

    public function getUserPrepare(): ?User
    {
        return $this->userPrepare;
    }

    public function setUserPrepare(?User $userPrepare): static
    {
        $this->userPrepare = $userPrepare;

        return $this;
    }

    public function isValide(): ?bool
    {
        return $this->valide;
    }

    public function setValide(?bool $valide): static
    {
        $this->valide = $valide;

        return $this;
    }

    public function getUserValide(): ?User
    {
        return $this->userValide;
    }

    public function setUserValide(?User $userValide): static
    {
        $this->userValide = $userValide;

        return $this;
    }

    public function getDateValide(): ?\DateTimeInterface
    {
        return $this->dateValide;
    }

    public function setDateValide(?\DateTimeInterface $dateValide): static
    {
        $this->dateValide = $dateValide;

        return $this;
    }

    public function getCodePalette(): ?string
    {
        return $this->codePalette;
    }

    public function setCodePalette(?string $codePalette): static
    {
        $this->codePalette = $codePalette;

        return $this;
    }
}
