<?php

namespace App\Entity;

use App\Repository\TMsPreparationRepository;
use Doctrine\DBAL\Types\Types;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: TMsPreparationRepository::class)]
#[ORM\Table(name: 't_ms_preparation')]
class TMsPreparation
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\ManyToOne(inversedBy: 'tMsPreparations')]
    private ?TMsCommande $tMsCommande = null;

    #[ORM\Column(type: Types::DATETIME_MUTABLE, nullable: true)]
    private ?\DateTimeInterface $created = null;

    #[ORM\ManyToOne(inversedBy: 'tMsPreparations')]
    private ?User $userCreated = null;

    #[ORM\ManyToOne(inversedBy: 'tMsPreparations')]
    private ?TStStockObj $tStStockObj = null;

    #[ORM\Column(length: 255, nullable: true)]
    private ?string $code = null;

    public function getId(): ?int
    {
        return $this->id;
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

    public function getCreated(): ?\DateTimeInterface
    {
        return $this->created;
    }

    public function setCreated(?\DateTimeInterface $created): static
    {
        $this->created = $created;

        return $this;
    }

    public function getUserCreated(): ?User
    {
        return $this->userCreated;
    }

    public function setUserCreated(?User $userCreated): static
    {
        $this->userCreated = $userCreated;

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

    public function getCode(): ?string
    {
        return $this->code;
    }

    public function setCode(?string $code): static
    {
        $this->code = $code;

        return $this;
    }
}
