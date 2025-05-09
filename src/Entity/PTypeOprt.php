<?php

namespace App\Entity;

use App\Repository\PTypeOprtRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\DBAL\Types\Types;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: PTypeOprtRepository::class)]
#[ORM\Table(name: 'p_type_oprt')]
class PTypeOprt
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column(length: 255)]
    private ?string $code = null;

    #[ORM\Column(length: 255)]
    private ?string $titre = null;

    #[ORM\Column]
    private ?bool $actif = null;

    #[ORM\Column(type: Types::DATETIME_MUTABLE)]
    private ?\DateTimeInterface $creation = null;

    #[ORM\OneToMany(mappedBy: 'typeDemande', targetEntity: TMsDemande::class)]
    private Collection $tMsDemandes;

    public function __construct()
    {
        $this->tMsDemandes = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getCode(): ?string
    {
        return $this->code;
    }

    public function setCode(string $code): static
    {
        $this->code = $code;

        return $this;
    }

    public function getTitre(): ?string
    {
        return $this->titre;
    }

    public function setTitre(string $titre): static
    {
        $this->titre = $titre;

        return $this;
    }

    public function isActif(): ?bool
    {
        return $this->actif;
    }

    public function setActif(bool $actif): static
    {
        $this->actif = $actif;

        return $this;
    }

    public function getCreation(): ?\DateTimeInterface
    {
        return $this->creation;
    }

    public function setCreation(\DateTimeInterface $creation): static
    {
        $this->creation = $creation;

        return $this;
    }

    /**
     * @return Collection<int, TMsDemande>
     */
    public function getTMsDemandes(): Collection
    {
        return $this->tMsDemandes;
    }

    public function addTMsDemande(TMsDemande $tMsDemande): static
    {
        if (!$this->tMsDemandes->contains($tMsDemande)) {
            $this->tMsDemandes->add($tMsDemande);
            $tMsDemande->setTypeDemande($this);
        }

        return $this;
    }

    public function removeTMsDemande(TMsDemande $tMsDemande): static
    {
        if ($this->tMsDemandes->removeElement($tMsDemande)) {
            // set the owning side to null (unless already changed)
            if ($tMsDemande->getTypeDemande() === $this) {
                $tMsDemande->setTypeDemande(null);
            }
        }

        return $this;
    }
}
