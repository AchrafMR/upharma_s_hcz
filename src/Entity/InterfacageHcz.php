<?php

namespace App\Entity;

use App\Repository\InterfacageHczRepository;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: InterfacageHczRepository::class)]
class InterfacageHcz
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column(length: 255, nullable: true)]
    private ?string $nameTable = null;

    #[ORM\Column(nullable: true)]
    private ?int $lastId = null;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getNameTable(): ?string
    {
        return $this->nameTable;
    }

    public function setNameTable(?string $nameTable): static
    {
        $this->nameTable = $nameTable;

        return $this;
    }

    public function getLastId(): ?int
    {
        return $this->lastId;
    }

    public function setLastId(?int $lastId): static
    {
        $this->lastId = $lastId;

        return $this;
    }
}
