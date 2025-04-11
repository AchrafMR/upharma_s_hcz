<?php

namespace App\Entity;

use App\Repository\PPartenairesRepository;
use Doctrine\DBAL\Types\Types;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: PPartenairesRepository::class)]
class PPartenaires
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column(length: 100, nullable: true)]
    private ?string $code = null;

    #[ORM\Column(length: 100, nullable: true)]
    private ?string $lettrageAdonix = null;

    #[ORM\Column(length: 255, nullable: true)]
    private ?string $libelleO = null;

    #[ORM\Column(length: 150, nullable: true)]
    private ?string $societe = null;

    #[ORM\Column(length: 150, nullable: true)]
    private ?string $nom = null;

    #[ORM\Column(length: 150, nullable: true)]
    private ?string $prenom = null;

    #[ORM\Column(length: 255, nullable: true)]
    private ?string $nomContact = null;

    #[ORM\Column(length: 255, nullable: true)]
    private ?string $telContact = null;

    #[ORM\ManyToOne(inversedBy: 'pPartenaires')]
    private ?PTypePartenaire $typePartenaire = null;

    #[ORM\Column(length: 100, nullable: true)]
    private ?string $formeJuridique = null;

    #[ORM\Column(type: Types::TEXT, nullable: true)]
    private ?string $adresse = null;

    #[ORM\Column(length: 100, nullable: true)]
    private ?string $pays = null;

    #[ORM\Column(length: 100, nullable: true)]
    private ?string $ville = null;

    #[ORM\Column(length: 100, nullable: true)]
    private ?string $tel1 = null;

    #[ORM\Column(length: 100, nullable: true)]
    private ?string $tel2 = null;

    #[ORM\Column(length: 100, nullable: true)]
    private ?string $fax1 = null;

    #[ORM\Column(length: 100, nullable: true)]
    private ?string $fax2 = null;

    #[ORM\Column(length: 100, nullable: true)]
    private ?string $mail1 = null;

    #[ORM\Column(length: 100, nullable: true)]
    private ?string $mail2 = null;

    #[ORM\Column(length: 100, nullable: true)]
    private ?string $rib = null;

    #[ORM\Column(length: 255, nullable: true)]
    private ?string $iban = null;

    #[ORM\Column(length: 255, nullable: true)]
    private ?string $swift = null;

    #[ORM\Column(length: 100)]
    private ?string $banque = null;

    #[ORM\Column(nullable: true)]
    private ?bool $active = null;

    #[ORM\Column(nullable: true)]
    private ?bool $taxable = null;

    #[ORM\Column(nullable: true)]
    private ?int $tva = null;

    #[ORM\Column(length: 100, nullable: true)]
    private ?string $iff = null;

    #[ORM\Column(length: 100, nullable: true)]
    private ?string $rc = null;

    #[ORM\Column(length: 100, nullable: true)]
    private ?string $ice = null;

    #[ORM\Column(length: 100, nullable: true)]
    private ?string $patente = null;

    #[ORM\ManyToOne(inversedBy: 'pPartenaires')]
    private ?PEntite $entite = null;

    #[ORM\Column(type: Types::DATETIME_MUTABLE, nullable: true)]
    private ?\DateTimeInterface $created = null;

    #[ORM\ManyToOne(inversedBy: 'pPartenaires')]
    private ?User $userCreated = null;

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

    public function getLettrageAdonix(): ?string
    {
        return $this->lettrageAdonix;
    }

    public function setLettrageAdonix(string $lettrageAdonix): static
    {
        $this->lettrageAdonix = $lettrageAdonix;

        return $this;
    }

    public function getLibelleO(): ?string
    {
        return $this->libelleO;
    }

    public function setLibelleO(?string $libelleO): static
    {
        $this->libelleO = $libelleO;

        return $this;
    }

    public function getSociete(): ?string
    {
        return $this->societe;
    }

    public function setSociete(?string $societe): static
    {
        $this->societe = $societe;

        return $this;
    }

    public function getNom(): ?string
    {
        return $this->nom;
    }

    public function setNom(?string $nom): static
    {
        $this->nom = $nom;

        return $this;
    }

    public function getPrenom(): ?string
    {
        return $this->prenom;
    }

    public function setPrenom(?string $prenom): static
    {
        $this->prenom = $prenom;

        return $this;
    }

    public function getNomContact(): ?string
    {
        return $this->nomContact;
    }

    public function setNomContact(?string $nomContact): static
    {
        $this->nomContact = $nomContact;

        return $this;
    }

    public function getTelContact(): ?string
    {
        return $this->telContact;
    }

    public function setTelContact(?string $telContact): static
    {
        $this->telContact = $telContact;

        return $this;
    }

    public function getTypePartenaire(): ?PTypePartenaire
    {
        return $this->typePartenaire;
    }

    public function setTypePartenaire(?PTypePartenaire $typePartenaire): static
    {
        $this->typePartenaire = $typePartenaire;

        return $this;
    }

    public function getFormeJuridique(): ?string
    {
        return $this->formeJuridique;
    }

    public function setFormeJuridique(?string $formeJuridique): static
    {
        $this->formeJuridique = $formeJuridique;

        return $this;
    }

    public function getAdresse(): ?string
    {
        return $this->adresse;
    }

    public function setAdresse(?string $adresse): static
    {
        $this->adresse = $adresse;

        return $this;
    }

    public function getPays(): ?string
    {
        return $this->pays;
    }

    public function setPays(?string $pays): static
    {
        $this->pays = $pays;

        return $this;
    }

    public function getVille(): ?string
    {
        return $this->ville;
    }

    public function setVille(?string $ville): static
    {
        $this->ville = $ville;

        return $this;
    }

    public function getTel1(): ?string
    {
        return $this->tel1;
    }

    public function setTel1(?string $tel1): static
    {
        $this->tel1 = $tel1;

        return $this;
    }

    public function getTel2(): ?string
    {
        return $this->tel2;
    }

    public function setTel2(?string $tel2): static
    {
        $this->tel2 = $tel2;

        return $this;
    }

    public function getFax1(): ?string
    {
        return $this->fax1;
    }

    public function setFax1(?string $fax1): static
    {
        $this->fax1 = $fax1;

        return $this;
    }

    public function getFax2(): ?string
    {
        return $this->fax2;
    }

    public function setFax2(?string $fax2): static
    {
        $this->fax2 = $fax2;

        return $this;
    }

    public function getMail1(): ?string
    {
        return $this->mail1;
    }

    public function setMail1(?string $mail1): static
    {
        $this->mail1 = $mail1;

        return $this;
    }

    public function getMail2(): ?string
    {
        return $this->mail2;
    }

    public function setMail2(?string $mail2): static
    {
        $this->mail2 = $mail2;

        return $this;
    }

    public function getRib(): ?string
    {
        return $this->rib;
    }

    public function setRib(?string $rib): static
    {
        $this->rib = $rib;

        return $this;
    }

    public function getIban(): ?string
    {
        return $this->iban;
    }

    public function setIban(?string $iban): static
    {
        $this->iban = $iban;

        return $this;
    }

    public function getSwift(): ?string
    {
        return $this->swift;
    }

    public function setSwift(?string $swift): static
    {
        $this->swift = $swift;

        return $this;
    }

    public function getBanque(): ?string
    {
        return $this->banque;
    }

    public function setBanque(string $banque): static
    {
        $this->banque = $banque;

        return $this;
    }

    public function isActive(): ?bool
    {
        return $this->active;
    }

    public function setActive(?bool $active): static
    {
        $this->active = $active;

        return $this;
    }

    public function isTaxable(): ?bool
    {
        return $this->taxable;
    }

    public function setTaxable(?bool $taxable): static
    {
        $this->taxable = $taxable;

        return $this;
    }

    public function getTva(): ?int
    {
        return $this->tva;
    }

    public function setTva(?int $tva): static
    {
        $this->tva = $tva;

        return $this;
    }

    public function getIff(): ?string
    {
        return $this->iff;
    }

    public function setIff(?string $iff): static
    {
        $this->iff = $iff;

        return $this;
    }

    public function getRc(): ?string
    {
        return $this->rc;
    }

    public function setRc(?string $rc): static
    {
        $this->rc = $rc;

        return $this;
    }

    public function getIce(): ?string
    {
        return $this->ice;
    }

    public function setIce(?string $ice): static
    {
        $this->ice = $ice;

        return $this;
    }

    public function getPatente(): ?string
    {
        return $this->patente;
    }

    public function setPatente(?string $patente): static
    {
        $this->patente = $patente;

        return $this;
    }

    public function getEntite(): ?PEntite
    {
        return $this->entite;
    }

    public function setEntite(?PEntite $entite): static
    {
        $this->entite = $entite;

        return $this;
    }

    public function getCreated(): ?\DateTimeInterface
    {
        return $this->created;
    }

    public function setCreated(?\DateTimeInterface $created): static
    {
        $this->created = $created;

        return $this;
    }

    public function getUserCreated(): ?User
    {
        return $this->userCreated;
    }

    public function setUserCreated(?User $userCreated): static
    {
        $this->userCreated = $userCreated;

        return $this;
    }
}
