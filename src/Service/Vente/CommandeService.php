<?php

namespace App\Service\Vente;

use App\Entity\TMsCommande;
use App\Entity\TMsCommandelg;
use App\Entity\TMsDemande;
use App\Entity\TMsDemandelg;
use Doctrine\ORM\EntityManagerInterface;

class CommandeService
{
    private EntityManagerInterface $em;

    public function __construct(EntityManagerInterface $em)
    {
        $this->em = $em;
    }

    /**
     * Crée une commande à partir d'une demande de type "Générée".
     */
    public function createFromDemande(TMsDemande $demande): TMsCommande
    {
        
        $commande = new TMsCommande();
        $commande->setCode(null);
        $commande->setDescription($demande->getDescription());
        $commande->setNomPatient($demande->getNomPatient());
        $commande->setDossierPatient($demande->getDossierPatient());
        $commande->setIpp($demande->getIpp());
        $commande->setCreated(new \DateTime());
        $commande->setUrgent($demande->getUrgent());
        $commande->setActif(true);
        $commande->setPEntite($demande->getPEntite());
        $commande->setUserCreated($demande->getUserCreated());
        $commande->setTMsDemande($demande); 
        $commande->setPositionActuel("Crée");
        $commande->setTypeCommande($demande->getTypeDemande());
        $commande->setDemandeurId($demande->getDemandeurId());
        $commande->setRecepteurId($demande->getRecepteurId());

        $this->em->persist($commande);
        
        $demandelgs = $this->em->getRepository(TMsDemandelg::class)
            ->findBy(['tMsDemande' => $demande]);

        foreach ($demandelgs as $demandelg) {
            $quantite = $demandelg->getQuantite();

            $commandelg = new TMsCommandelg();
            $commandelg->setTmsCommande($commande);
            $commandelg->setPProduit($demandelg->getPProduit());
            $commandelg->setPPrUnite($demandelg->getPPrUnite());
            $commandelg->setQuantiteCommandee($quantite);
            $commandelg->setQuantiteServie(0);
            $commandelg->setQuantiteReste($quantite);
            $commandelg->setPrixUnitaire($demandelg->getPrixUnitaire());
            $commandelg->setRemise($demandelg->getRemise());
            $commandelg->setTva($demandelg->getTva());
            $commandelg->setMontantHt($demandelg->getMontantHt());
            $commandelg->setMontantTtc($demandelg->getMontantTtc());
            $commandelg->setObservation(null);
            $commandelg->setActif(true);

            $this->em->persist($commandelg);
        }

        $this->em->flush();
        return $commande;
    }
}
