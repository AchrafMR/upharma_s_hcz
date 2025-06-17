<?php

namespace App\Entity;

use App\Repository\TAcMarcheLgRepository;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: TAcMarcheLgRepository::class)]
#[ORM\Table(name: 't_ac_marche_lg')]
class TAcMarcheLg
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\ManyToOne(inversedBy: 'tAcMarcheLgs')]
    private ?TAcMarche $marche = null;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getMarche(): ?TAcMarche
    {
        return $this->marche;
    }

    public function setMarche(?TAcMarche $marche): static
    {
        $this->marche = $marche;

        return $this;
    }
}
