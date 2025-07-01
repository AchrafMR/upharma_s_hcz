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

    #[ORM\OneToMany(mappedBy: 'userupdate', targetEntity: TStStockstatic::class)]
    private Collection $tStStockstatics;

    #[ORM\OneToMany(mappedBy: 'userCreated', targetEntity: TMsCommande::class)]
    private Collection $tMsCommandes;
    
    #[ORM\OneToMany(mappedBy: 'userCreated', targetEntity: TAcReception::class)]
    private Collection $tAcReceptions;

    #[ORM\OneToMany(mappedBy: 'userAffAdresse', targetEntity: TAcReceptionObj::class)]
    private Collection $receptionObjsAff;

    #[ORM\OneToMany(mappedBy: 'userUpdate', targetEntity: TAcReceptionObj::class)]
    private Collection $receptionObjsUpdated;

    #[ORM\OneToMany(mappedBy: 'userEtiqueter', targetEntity: TAcReceptionObj::class)]
    private Collection $tAcReceptionObjsEtiqueter;

    #[ORM\OneToMany(mappedBy: 'userr', targetEntity: PAffectationMagasin::class)]
    private Collection $pAffectationMagasins;

    #[ORM\OneToMany(mappedBy: 'userCreated', targetEntity: TStStockdyna::class)]
    private Collection $tStStockdyna;

    public function __construct()
    {
        $this->pUserDossierActions = new ArrayCollection();
        $this->pPartenaires = new ArrayCollection();
        $this->pDepots = new ArrayCollection();
        $this->tStStockstatics = new ArrayCollection();
        $this->tMsCommandes = new ArrayCollection();
        $this->pAffectationMagasins = new ArrayCollection();
        $this->tAcReceptions = new ArrayCollection();
        $this->receptionObjsAff = new ArrayCollection();
        $this->receptionObjsUpdated = new ArrayCollection();
        $this->tAcReceptionObjsEtiqueter = new ArrayCollection();
        $this->pAffectationMagasins = new ArrayCollection();
        $this->tStStockdyna = new ArrayCollection();
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

    /**
     * @return Collection<int, TStStockstatic>
     */
    public function getTStStockstatics(): Collection
    {
        return $this->tStStockstatics;
    }

    public function addTStStockstatic(TStStockstatic $tStStockstatic): static
    {
        if (!$this->tStStockstatics->contains($tStStockstatic)) {
            $this->tStStockstatics->add($tStStockstatic);
            $tStStockstatic->setUserupdate($this);
        }

        return $this;
    }

    public function removeTStStockstatic(TStStockstatic $tStStockstatic): static
    {
        if ($this->tStStockstatics->removeElement($tStStockstatic)) {
            // set the owning side to null (unless already changed)
            if ($tStStockstatic->getUserupdate() === $this) {
                $tStStockstatic->setUserupdate(null);
            }
        }

        return $this;
    }

    /**
     * @return Collection<int, TMsCommande>
     */
    public function getTMsCommandes(): Collection
    {
        return $this->tMsCommandes;
    }

    public function addTMsCommande(TMsCommande $tMsCommande): static
    {
        if (!$this->tMsCommandes->contains($tMsCommande)) {
            $this->tMsCommandes->add($tMsCommande);
            $tMsCommande->setUserCreated($this);
        }

        return $this;
    }

    public function removeTMsCommande(TMsCommande $tMsCommande): static
    {
        if ($this->tMsCommandes->removeElement($tMsCommande)) {
            // set the owning side to null (unless already changed)
            if ($tMsCommande->getUserCreated() === $this) {
                $tMsCommande->setUserCreated(null);
            }
        }

        return $this;
    }

    /**
     * @return Collection<int, PAffectationMagasin>
     */
    public function getPAffectationMagasins(): Collection
    {
        return $this->pAffectationMagasins;
    }

    public function addPAffectationMagasin(PAffectationMagasin $pAffectationMagasin): static
    {
        if (!$this->pAffectationMagasins->contains($pAffectationMagasin)) {
            $this->pAffectationMagasins->add($pAffectationMagasin);
            $pAffectationMagasin->setUserr($this);
        }

        return $this;
    }

    public function removePAffectationMagasin(PAffectationMagasin $pAffectationMagasin): static
    {
        if ($this->pAffectationMagasins->removeElement($pAffectationMagasin)) {
            // set the owning side to null (unless already changed)
            if ($pAffectationMagasin->getUserr() === $this) {
                $pAffectationMagasin->setUserr(null);
            }
        }

        return $this;
    }

    /**
     * @return Collection<int, TAcReception>
     */
    public function getTAcReceptions(): Collection
    {
        return $this->tAcReceptions;
    }

    public function addTAcReception(TAcReception $tAcReception): static
    {
        if (!$this->tAcReceptions->contains($tAcReception)) {
            $this->tAcReceptions->add($tAcReception);
            $tAcReception->setUserCreated($this);
        }

        return $this;
    }

    public function removeTAcReception(TAcReception $tAcReception): static
    {
        if ($this->tAcReceptions->removeElement($tAcReception)) {
            // set the owning side to null (unless already changed)
            if ($tAcReception->getUserCreated() === $this) {
                $tAcReception->setUserCreated(null);
            }
        }

        return $this;
    }

    /**
     * @return Collection<int, TAcReceptionObj>
     */
    public function getReceptionObjsAff(): Collection
    {
        return $this->receptionObjsAff;
    }

    public function addReceptionObjsAff(TAcReceptionObj $receptionObjsAff): static
    {
        if (!$this->receptionObjsAff->contains($receptionObjsAff)) {
            $this->receptionObjsAff->add($receptionObjsAff);
            $receptionObjsAff->setUserAffAdresse($this);
        }

        return $this;
    }

    public function removeReceptionObjsAff(TAcReceptionObj $receptionObjsAff): static
    {
        if ($this->receptionObjsAff->removeElement($receptionObjsAff)) {
            // set the owning side to null (unless already changed)
            if ($receptionObjsAff->getUserAffAdresse() === $this) {
                $receptionObjsAff->setUserAffAdresse(null);
            }
        }

        return $this;
    }

    /**
     * @return Collection<int, TAcReceptionObj>
     */
    public function getReceptionObjsUpdated(): Collection
    {
        return $this->receptionObjsUpdated;
    }

    public function addReceptionObjsUpdated(TAcReceptionObj $receptionObjsUpdated): static
    {
        if (!$this->receptionObjsUpdated->contains($receptionObjsUpdated)) {
            $this->receptionObjsUpdated->add($receptionObjsUpdated);
            $receptionObjsUpdated->setUserUpdate($this);
        }

        return $this;
    }

    public function removeReceptionObjsUpdated(TAcReceptionObj $receptionObjsUpdated): static
    {
        if ($this->receptionObjsUpdated->removeElement($receptionObjsUpdated)) {
            // set the owning side to null (unless already changed)
            if ($receptionObjsUpdated->getUserUpdate() === $this) {
                $receptionObjsUpdated->setUserUpdate(null);
            }
        }

        return $this;
    }

    /**
     * @return Collection<int, TAcReceptionObj>
     */
    public function getTAcReceptionObjsEtiqueter(): Collection
    {
        return $this->tAcReceptionObjsEtiqueter;
    }

    public function addTAcReceptionObjsEtiqueter(TAcReceptionObj $tAcReceptionObjsEtiqueter): static
    {
        if (!$this->tAcReceptionObjsEtiqueter->contains($tAcReceptionObjsEtiqueter)) {
            $this->tAcReceptionObjsEtiqueter->add($tAcReceptionObjsEtiqueter);
            $tAcReceptionObjsEtiqueter->setUserEtiqueter($this);
        }

        return $this;
    }

    public function removeTAcReceptionObjsEtiqueter(TAcReceptionObj $tAcReceptionObjsEtiqueter): static
    {
        if ($this->tAcReceptionObjsEtiqueter->removeElement($tAcReceptionObjsEtiqueter)) {
            // set the owning side to null (unless already changed)
            if ($tAcReceptionObjsEtiqueter->getUserEtiqueter() === $this) {
                $tAcReceptionObjsEtiqueter->setUserEtiqueter(null);
            }
        }

        return $this;
    }

    /**
     * @return Collection<int, TStStockdyna>
     */
    public function getTStStockdyna(): Collection
    {
        return $this->tStStockdyna;
    }

    public function addTStStockdyna(TStStockdyna $tStStockdyna): static
    {
        if (!$this->tStStockdyna->contains($tStStockdyna)) {
            $this->tStStockdyna->add($tStStockdyna);
            $tStStockdyna->setUserCreated($this);
        }

        return $this;
    }

    public function removeTStStockdyna(TStStockdyna $tStStockdyna): static
    {
        if ($this->tStStockdyna->removeElement($tStStockdyna)) {
            // set the owning side to null (unless already changed)
            if ($tStStockdyna->getUserCreated() === $this) {
                $tStStockdyna->setUserCreated(null);
            }
        }

        return $this;
    }

}
