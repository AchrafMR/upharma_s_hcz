<?php

namespace App\Entity;

use App\Repository\TAcMarcheRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: TAcMarcheRepository::class)]
#[ORM\Table(name: 't_ac_marche')]
class TAcMarche
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\OneToMany(mappedBy: 'marche', targetEntity: TAcMarcheLg::class)]
    private Collection $tAcMarcheLgs;

    #[ORM\OneToMany(mappedBy: 'marche', targetEntity: TAcPrecommande::class)]
    private Collection $tAcPrecommandes;

    #[ORM\Column(length: 255, nullable: true)]
    private ?string $code = null;

    public function __construct()
    {
        $this->tAcMarcheLgs = new ArrayCollection();
        $this->tAcPrecommandes = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    /**
     * @return Collection<int, TAcMarcheLg>
     */
    public function getTAcMarcheLgs(): Collection
    {
        return $this->tAcMarcheLgs;
    }

    public function addTAcMarcheLg(TAcMarcheLg $tAcMarcheLg): static
    {
        if (!$this->tAcMarcheLgs->contains($tAcMarcheLg)) {
            $this->tAcMarcheLgs->add($tAcMarcheLg);
            $tAcMarcheLg->setMarche($this);
        }

        return $this;
    }

    public function removeTAcMarcheLg(TAcMarcheLg $tAcMarcheLg): static
    {
        if ($this->tAcMarcheLgs->removeElement($tAcMarcheLg)) {
            // set the owning side to null (unless already changed)
            if ($tAcMarcheLg->getMarche() === $this) {
                $tAcMarcheLg->setMarche(null);
            }
        }

        return $this;
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
            $tAcPrecommande->setMarche($this);
        }

        return $this;
    }

    public function removeTAcPrecommande(TAcPrecommande $tAcPrecommande): static
    {
        if ($this->tAcPrecommandes->removeElement($tAcPrecommande)) {
            // set the owning side to null (unless already changed)
            if ($tAcPrecommande->getMarche() === $this) {
                $tAcPrecommande->setMarche(null);
            }
        }

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
