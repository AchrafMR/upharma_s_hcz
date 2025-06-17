<?php

namespace App\Entity;

use App\Repository\TVtDevisRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: TVtDevisRepository::class)]
#[ORM\Table(name: 't_vt_devis')]
class TVtDevis
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\OneToMany(mappedBy: 'uvDevis', targetEntity: TAcPrecommande::class)]
    private Collection $tAcPrecommandes;

    public function __construct()
    {
        $this->tAcPrecommandes = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    /**
     * @return Collection<int, TAcPrecommande>
     */
    public function getTAcPrecommandes(): Collection
    {
        return $this->tAcPrecommandes;
    }

    public function addTAcPrecommande(TAcPrecommande $tAcPrecommande): static
    {
        if (!$this->tAcPrecommandes->contains($tAcPrecommande)) {
            $this->tAcPrecommandes->add($tAcPrecommande);
            $tAcPrecommande->setUvDevis($this);
        }

        return $this;
    }

    public function removeTAcPrecommande(TAcPrecommande $tAcPrecommande): static
    {
        if ($this->tAcPrecommandes->removeElement($tAcPrecommande)) {
            // set the owning side to null (unless already changed)
            if ($tAcPrecommande->getUvDevis() === $this) {
                $tAcPrecommande->setUvDevis(null);
            }
        }

        return $this;
    }
}
