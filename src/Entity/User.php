<?php

namespace App\Entity;

use App\Repository\UserRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\DBAL\Types\Types;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Bridge\Doctrine\Validator\Constraints\UniqueEntity;
use Symfony\Component\Security\Core\User\PasswordAuthenticatedUserInterface;
use Symfony\Component\Security\Core\User\UserInterface;

#[ORM\Entity(repositoryClass: UserRepository::class)]
#[ORM\Table(name: 'p_pv000_user')]
#[UniqueEntity(fields: ['username'], message: 'There is already an account with this username')]
class User implements UserInterface, PasswordAuthenticatedUserInterface
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column(length: 180, unique: true)]
    private ?string $username = null;

    #[ORM\Column]
    private array $roles = [];

    /**
     * @var string The hashed password
     */
    #[ORM\Column]
    private ?string $password = null;

    #[ORM\Column(length: 255)]
    private ?string $name = null;

    #[ORM\Column]
    private ?bool $isActive = null;

    #[ORM\Column(type: Types::DATETIME_MUTABLE, nullable: true)]
    private ?\DateTimeInterface $dateUpdate = null;

    #[ORM\ManyToOne(inversedBy: 'users')]
    private ?PProfession $PProfession = null;

    #[ORM\Column( nullable: true)]
    private ?bool $isDeleted = null;


    #[ORM\Column(length: 255, nullable: true)]
    private ?string $route = null;

    #[ORM\OneToMany(mappedBy: 'userr', targetEntity: PUserDossierAction::class)]
    private Collection $pUserDossierActions;

    #[ORM\ManyToOne(targetEntity: self::class)]
    private ?self $userUpdate = null;

    #[ORM\OneToMany(mappedBy: 'userCreated', targetEntity: PPartenaires::class)]
    private Collection $pPartenaires;

    #[ORM\OneToMany(mappedBy: 'userCreated', targetEntity: PDepots::class)]
    private Collection $pDepots;


    public function __construct()
    {
        $this->pUserDossierActions = new ArrayCollection();
        $this->pPartenaires = new ArrayCollection();
        $this->pDepots = new ArrayCollection();

    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getUsername(): ?string
    {
        return $this->username;
    }

    public function setUsername(string $username): self
    {
        $this->username = $username;

        return $this;
    }

    /**
     * A visual identifier that represents this user.
     *
     * @see UserInterface
     */
    public function getUserIdentifier(): string
    {
        return (string) $this->username;
    }

    /**
     * @see UserInterface
     */
    public function getRoles(): array
    {
        $roles = $this->roles;
        // guarantee every user at least has ROLE_USER
        $roles[] = 'ROLE_USER';

        return array_unique($roles);
    }

    public function setRoles(array $roles): self
    {
        $this->roles = $roles;

        return $this;
    }

    /**
     * @see PasswordAuthenticatedUserInterface
     */
    public function getPassword(): string
    {
        return $this->password;
    }

    public function setPassword(string $password): self
    {
        $this->password = $password;

        return $this;
    }

    /**
     * @see UserInterface
     */
    public function eraseCredentials()
    {
        // If you store any temporary, sensitive data on the user, clear it here
        // $this->plainPassword = null;
    }

    public function getName(): ?string
    {
        return $this->name;
    }

    public function setName(string $name): self
    {
        $this->name = $name;

        return $this;
    }

    public function isIsActive(): ?bool
    {
        return $this->isActive;
    }

    public function setIsActive(bool $isActive): self
    {
        $this->isActive = $isActive;

        return $this;
    }


    public function getDateUpdate(): ?\DateTimeInterface
    {
        return $this->dateUpdate;
    }

    public function setDateUpdate(?\DateTimeInterface $dateUpdate): self
    {
        $this->dateUpdate = $dateUpdate;

        return $this;
    }


    public function getPProfession(): ?PProfession
    {
        return $this->PProfession;
    }

    public function setPProfession(?PProfession $PProfession): self
    {
        $this->PProfession = $PProfession;

        return $this;
    }

    public function isIsDeleted(): ?bool
    {
        return $this->isDeleted;
    }

    public function setIsDeleted(bool $isDeleted): self
    {
        $this->isDeleted = $isDeleted;

        return $this;
    }


    public function getRoute(): ?string
    {
        return $this->route;
    }

    public function setRoute(?string $route): self
    {
        $this->route = $route;

        return $this;
    }

    /**
     * @return Collection<int, PUserDossierAction>
     */
    public function getPUserDossierActions(): Collection
    {
        return $this->pUserDossierActions;
    }

    public function addPUserDossierAction(PUserDossierAction $pUserDossierAction): self
    {
        if (!$this->pUserDossierActions->contains($pUserDossierAction)) {
            $this->pUserDossierActions->add($pUserDossierAction);
            $pUserDossierAction->setUserr($this);
        }

        return $this;
    }

    public function removePUserDossierAction(PUserDossierAction $pUserDossierAction): self
    {
        if ($this->pUserDossierActions->removeElement($pUserDossierAction)) {
            // set the owning side to null (unless already changed)
            if ($pUserDossierAction->getUserr() === $this) {
                $pUserDossierAction->setUserr(null);
            }
        }

        return $this;
    }

    public function getUserUpdate(): ?self
    {
        return $this->userUpdate;
    }

    public function setUserUpdate(?self $userUpdate): self
    {
        $this->userUpdate = $userUpdate;

        return $this;
    }

    /**
     * @return Collection<int, PPartenaires>
     */
    public function getPPartenaires(): Collection
    {
        return $this->pPartenaires;
    }

    public function addPPartenaire(PPartenaires $pPartenaire): static
    {
        if (!$this->pPartenaires->contains($pPartenaire)) {
            $this->pPartenaires->add($pPartenaire);
            $pPartenaire->setUserCreated($this);
        }

        return $this;
    }

    public function removePPartenaire(PPartenaires $pPartenaire): static
    {
        if ($this->pPartenaires->removeElement($pPartenaire)) {
            // set the owning side to null (unless already changed)
            if ($pPartenaire->getUserCreated() === $this) {
                $pPartenaire->setUserCreated(null);
            }
        }

        return $this;
    }

    /**
     * @return Collection<int, PDepots>
     */
    public function getPDepots(): Collection
    {
        return $this->pDepots;
    }

    public function addPDepot(PDepots $pDepot): static
    {
        if (!$this->pDepots->contains($pDepot)) {
            $this->pDepots->add($pDepot);
            $pDepot->setUserCreated($this);
        }

        return $this;
    }

    public function removePDepot(PDepots $pDepot): static
    {
        if ($this->pDepots->removeElement($pDepot)) {
            // set the owning side to null (unless already changed)
            if ($pDepot->getUserCreated() === $this) {
                $pDepot->setUserCreated(null);
            }
        }

        return $this;
    }

}
