<?php
namespace App\Service\Vente;

use App\Entity\TMsDemande;
use App\Entity\TMsDemandelg;
use App\Entity\PEntite;
use App\Entity\PProduits;
use App\Entity\PTypeOprt;
use App\Entity\PMagasins;
use App\Entity\PStatut;
use App\Entity\TMsCommande;
use App\Service\Vente\CommandeService;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\HttpFoundation\Request;
use DateTime;
use Symfony\Component\Security\Core\Security;

class DemandeService
{
    public function __construct(
        private EntityManagerInterface $em,
        private CommandeService $commandeService,
        private Security $security)
    {
    }

    public function createDemande(array $data, Request $request): TMsDemande
    {
        $demande = new TMsDemande();

        $demande->setCode(null);
        $demande->setDescription($data['description'] ?? null);
        
        if (isset($data['type_demande'])) {
            $typeDemande = (int) $data['type_demande'];

            $position_actuel = $this->em->getRepository(PStatut::class)->find(16);

            if ($typeDemande === 2) {
                $demande->setPositionActuel('Généré');
                $status = $this->em->getRepository(PStatut::class)->find(13);
                $demande->setNomPatient($data['nom_patient'] ?? null);
                $demande->setDossierPatient($data['dossier_patient'] ?? null);
                $demande->setIpp((int)($data['ipp'] ?? null));
            } else {
                $demande->setPositionActuel('Crée');
                $status = $this->em->getRepository(PStatut::class)->find(9);
            }

            $demande->setStatus($status);
            $demande->setStPositionActuel($position_actuel);
        }
        $demande->setHistorique(null);
        $demande->setUrgent(!empty($data['urgent']));
        $demande->setCreated(new DateTime());
        $demande->setActif(true);

        $dossierId = $request->getSession()->get('dossier');
        $dossier = $this->em->getRepository(PEntite::class)->find($dossierId);
        $demande->setPEntite($dossier);

        $user = $this->security->getUser();
        if ($user) {
            $demande->setUserCreated($user);
        }

        $demandeur = $this->em->getRepository(PMagasins::class)->find($data['demandeur_id'] ?? null);
        $recepteur = $this->em->getRepository(PMagasins::class)->find($data['recepteur_id'] ?? null);

        $demande->setDemandeurId($demandeur);
        $demande->setRecepteurId($recepteur);

        $typeDemande = $this->em->getRepository(PTypeOprt::class)->find($data['type_demande'] ?? null);
        // dd($typeDemande);
        $demande->setTypeDemande($typeDemande);

        $this->em->persist($demande);
        $this->em->flush();

        foreach ($data['lignes'] as $ligne) {
            $produit = $this->em->getRepository(PProduits::class)->find($ligne['id']);
            if (!$produit) continue;

            $unite = $produit->getPPrUnite();
            $remise = $ligne['remise'] ?? 0;
            $tva = $ligne['tva'] ?? 0;
            $quantite = (float) $ligne['quantity'];
            $prixUnitaire = (float) $ligne['price'];
            $montantHt = ($prixUnitaire * $quantite) - $remise;
            $montantTtc = $montantHt + ($montantHt * $tva / 100);

            $demandelg = new TMsDemandelg();
            $demandelg->setTmsDemande($demande);
            $demandelg->setPProduit($produit);
            $demandelg->setPPrUnite($unite);
            $demandelg->setQuantite($quantite);
            $demandelg->setPrixUnitaire($prixUnitaire);
            $demandelg->setRemise((float) $remise);
            $demandelg->setTva((float) $tva);
            $demandelg->setMontantHt($montantHt);
            $demandelg->setMontantTtc($montantTtc);
            $demandelg->setObservation(null);
            $demandelg->setCodeComptable(null);
            $demandelg->setActif(true);

            $this->em->persist($demandelg);
        }

        $this->em->flush();

        if (isset($data['type_demande']) && (int)$data['type_demande'] === 2) {
            $this->commandeService->createFromDemande($demande);
        }

        return $demande;
    }
    public function createDemandeAlimentationFromCommande(TMsCommande $commande): ?TMsDemande
    {
        $demandeur = $commande->getDemandeurId();
        $recepteur = $commande->getRecepteurId();

        if (!$demandeur || !$recepteur || $recepteur->getId() === $demandeur->getId()) {
            return null;
        }

        $demande = new TMsDemande();
        $demande->setCode(null);
        $demande->setDescription($commande->getDescription());
        $demande->setNomPatient($commande->getNomPatient());
        $demande->setDossierPatient($commande->getDossierPatient());
        $demande->setIpp($commande->getIpp());
        $demande->setPositionActuel('Validé');
        $status = $this->em->getRepository(PStatut::class)->find(12);
        $position_actuel=$this->em->getRepository(PStatut::class)->find(16);
        $demande->setStatus($status);
        $demande->setStPositionActuel($position_actuel);
        $demande->setHistorique(null);
        $demande->setUrgent($commande->isUrgent());
        $demande->setCreated(new \DateTime());
        $demande->setActif(true);
        $demande->setDemandeurId($demandeur);
        $demande->setRecepteurId($recepteur);
        $demande->setPEntite($commande->getPEntite());
        $demande->setUserCreated($this->security->getUser());
        $demande->setParent($commande);

        $typeDemande = $this->em->getRepository(PTypeOprt::class)->find(1); // Type = 1 = Alimentation
        $demande->setTypeDemande($typeDemande);

        $this->em->persist($demande);
        $this->em->flush();
        // Clone commandelg into demandelg
        foreach ($commande->getTMsCommandelgs() as $commandelg) {
            $produit = $commandelg->getPProduit();
            $unite = $commandelg->getPPrUnite();

            $quantite = $commandelg->getQuantiteCommandee();
            $prixUnitaire = $commandelg->getPrixUnitaire();
            $remise = $commandelg->getRemise() ?? 0;
            $tva = $commandelg->getTva() ?? 0;

            $montantHt = ($prixUnitaire * $quantite) - $remise;
            $montantTtc = $montantHt + ($montantHt * $tva / 100);

            $demandelg = new TMsDemandelg();
            $demandelg->setTmsDemande($demande);
            $demandelg->setPProduit($produit);
            $demandelg->setPPrUnite($unite);
            $demandelg->setQuantite($quantite);
            $demandelg->setPrixUnitaire($prixUnitaire);
            $demandelg->setRemise($remise);
            $demandelg->setTva($tva);
            $demandelg->setMontantHt($montantHt);
            $demandelg->setMontantTtc($montantTtc);
            $demandelg->setObservation($commandelg->getObservation());
            $demandelg->setCodeComptable($commandelg->getCodeComptable());
            $demandelg->setActif(true);

            $this->em->persist($demandelg);
        }

        $this->em->flush();
        return $demande;
    }

}
