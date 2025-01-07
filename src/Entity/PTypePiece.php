<?php

namespace App\Entity;

use App\Repository\PTypePieceRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: PTypePieceRepository::class)]
#[ORM\Table(name: 'p_pg017_type_piece')]
class PTypePiece
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column(length: 20, nullable: true)]
    private ?string $code = null;

    #[ORM\Column(length: 255, nullable: true)]
    private ?string $description = null;

    #[ORM\Column]
    private ?bool $active = null;


    #[ORM\OneToMany(mappedBy: 'typePiece', targetEntity: PCounter::class)]
    private Collection $couters;

    public function __construct()
    {
        $this->couters = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
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

    public function getDescription(): ?string
    {
        return $this->description;
    }

    public function setDescription(?string $description): static
    {
        $this->description = $description;

        return $this;
    }

    public function isActive(): ?bool
    {
        return $this->active;
    }

    public function setActive(bool $active): static
    {
        $this->active = $active;

        return $this;
    }


    /**
     * @return Collection<int, PCounter>
     */
    public function getCouters(): Collection
    {
        return $this->couters;
    }

    public function addCouter(PCounter $couter): static
    {
        if (!$this->couters->contains($couter)) {
            $this->couters->add($couter);
            $couter->setTypePiece($this);
        }

        return $this;
    }

    public function removeCouter(PCounter $couter): static
    {
        if ($this->couters->removeElement($couter)) {
            // set the owning side to null (unless already changed)
            if ($couter->getTypePiece() === $this) {
                $couter->setTypePiece(null);
            }
        }

        return $this;
    }
}
