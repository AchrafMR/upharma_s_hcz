<?php

namespace App\Entity;

use App\Repository\PCounterRepository;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: PCounterRepository::class)]
#[ORM\Table(name:"p_pg013_counter")]

class PCounter
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column(length: 255)]
    private ?string $piece = null;

    #[ORM\Column]
    private ?int $count = null;

    #[ORM\Column(nullable: true)]
    private ?int $annee = null;

    #[ORM\ManyToOne(inversedBy: 'counters')]
    private ?PDossier $dossier = null;

    #[ORM\Column(length: 255, nullable: true)]
    private ?string $dossierAbreviation = null;

    #[ORM\ManyToOne(inversedBy: 'couters')]
    private ?PTypePiece $typePiece = null;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getPiece(): ?string
    {
        return $this->piece;
    }

    public function setPiece(string $piece): self
    {
        $this->piece = $piece;

        return $this;
    }

    public function getCount(): ?int
    {
        return $this->count;
    }

    public function setCount(int $count): self
    {
        $this->count = $count;

        return $this;
    }

    public function getAnnee(): ?int
    {
        return $this->annee;
    }

    public function setAnnee(?int $annee): self
    {
        $this->annee = $annee;

        return $this;
    }

    public function getDossier(): ?PDossier
    {
        return $this->dossier;
    }

    public function setDossier(?PDossier $dossier): self
    {
        $this->dossier = $dossier;

        return $this;
    }

    public function getDossierAbreviation(): ?string
    {
        return $this->dossierAbreviation;
    }

    public function setDossierAbreviation(?string $dossierAbreviation): self
    {
        $this->dossierAbreviation = $dossierAbreviation;

        return $this;
    }

    public function getTypePiece(): ?PTypePiece
    {
        return $this->typePiece;
    }

    public function setTypePiece(?PTypePiece $typePiece): static
    {
        $this->typePiece = $typePiece;

        return $this;
    }
}
