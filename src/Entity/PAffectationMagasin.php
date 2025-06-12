<?php

namespace App\Entity;

use App\Repository\PAffectationMagasinRepository;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: PAffectationMagasinRepository::class)]
#[ORM\Table(name: 'p_affectation_magasin')]
class PAffectationMagasin
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\ManyToOne(inversedBy: 'pAffectationMagasins')]
    #[ORM\JoinColumn(nullable: false)]
    private ?PMagasins $magasin = null;

    #[ORM\ManyToOne(inversedBy: 'pAffectationMagasins')]
    #[ORM\JoinColumn(nullable: false)]
    private ?User $userr = null;

    #[ORM\Column]
    private ?bool $defaut = null;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getMagasin(): ?PMagasins
    {
        return $this->magasin;
    }

    public function setMagasin(?PMagasins $magasin): static
    {
        $this->magasin = $magasin;

        return $this;
    }

    public function getUserr(): ?User
    {
        return $this->userr;
    }

    public function setUserr(?User $userr): static
    {
        $this->userr = $userr;

        return $this;
    }

    public function isDefaut(): ?bool
    {
        return $this->defaut;
    }

    public function setDefaut(bool $defaut): static
    {
        $this->defaut = $defaut;

        return $this;
    }
}
