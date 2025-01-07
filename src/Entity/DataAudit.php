<?php

namespace App\Entity;

use App\Repository\DataAuditRepository;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: DataAuditRepository::class)]
class DataAudit
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column(length: 255)]
    private ?string $table_name = null;

    #[ORM\Column(length: 10)]
    private ?string $operation = null;

    #[ORM\Column]
    private ?int $rowId = null;

    #[ORM\Column]
    private array $oldData = [];

    #[ORM\Column(nullable: true)]
    private array $newData = [];

    #[ORM\Column]
    private ?\DateTimeImmutable $changedAt = null;

    public function __construct()
    {
        $this->changedAt = new \DateTimeImmutable();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getTableName(): ?string
    {
        return $this->table_name;
    }

    public function setTableName(string $table_name): static
    {
        $this->table_name = $table_name;

        return $this;
    }

    public function getOperation(): ?string
    {
        return $this->operation;
    }

    public function setOperation(string $operation): static
    {
        $this->operation = $operation;

        return $this;
    }

    public function getRowId(): ?int
    {
        return $this->rowId;
    }

    public function setRowId(int $rowId): static
    {
        $this->rowId = $rowId;

        return $this;
    }

    public function getOldData(): array
    {
        return $this->oldData;
    }

    public function setOldData(array $oldData): static
    {
        $this->oldData = $oldData;

        return $this;
    }

    public function getNewData(): array
    {
        return $this->newData;
    }

    public function setNewData(array $newData): static
    {
        $this->newData = $newData;

        return $this;
    }

    public function getChangedAt(): ?\DateTimeImmutable
    {
        return $this->changedAt;
    }

    public function setChangedAt(\DateTimeImmutable $changedAt): static
    {
        $this->changedAt = $changedAt;

        return $this;
    }
}
