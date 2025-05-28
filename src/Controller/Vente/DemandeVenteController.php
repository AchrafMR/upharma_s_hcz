<?php

namespace App\Controller\Vente;

use App\Entity\PEntite;
use App\Entity\PMagasins;
use App\Entity\PProduits;
use App\Entity\PPrUnites;
use App\Entity\PTypeOprt;
use App\Entity\TMsDemande;
use App\Entity\TMsDemandelg;
use App\Service\UserOperation;
use App\Repository\UserRepository;
use App\Repository\PActionRepository;
use App\Repository\PModuleRepository;
use App\Repository\PEntiteRepository;
use App\Repository\PMagasinsRepository;
use Doctrine\ORM\EntityManagerInterface;
use App\Repository\PProfessionRepository;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Security\Core\Security;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use App\Repository\PProduitsRepository;
use App\Repository\TMsDemandeRepository;
use DateTime;
use Symfony\Component\HttpFoundation\JsonResponse;

#[Route('/vente')]
class DemandeVenteController extends AbstractController
{
    /**
     * @var Security
     */
    private $security;
    private $userOperation;
    private $em;

    public function __construct(Security $security, UserOperation $userOperation, EntityManagerInterface $em)
    {
       $this->security = $security;
       $this->userOperation = $userOperation;
       $this->em = $em;
    }

    #[Route('/point-vente', name: 'app_vente_demande_vente')]
    public function index(
        PEntiteRepository $pEntiteRepository,
        PProduitsRepository $produitsRepository,
        PProfessionRepository $professionRep,
        PModuleRepository $moduleRepository,
        PMagasinsRepository $magasinsRepository,
        Request $request
    ): Response {
        $allModules = $moduleRepository->findBy(['active' => true]);
        $dossiers = $pEntiteRepository->findBy(['active' => true]);
        $actions = $this->userOperation->getOperations($this->getUser(), 'app_vente_demande_vente', $request);
        $professions = $professionRep->findAll();

        if (!$actions) {
            return $this->render('errors/403.html.twig');
        }

        $products = $produitsRepository->findProductsWithTarificationAndSolde();
        $categories = array_unique(array_column($products, 'category'));
        $magasins = $magasinsRepository->findMagasinsByUserEntite($this->getUser(), $pEntiteRepository);
        $defaultMagasin = $magasinsRepository->findDefaultMagasinForUser($this->getUser(), $pEntiteRepository);

        return $this->render('vente/PointVente/index.html.twig', [
            'professions' => $professions,
            'allModules' => $allModules,
            'dossiers' => $dossiers,
            'actions' => $actions,
            'products' => $products,
            'categories' => $categories,
            'magasins' => $magasins,
            'defaultMagasin' => $defaultMagasin,
        ]);
    }

    #[Route('/save-demande', name: 'vente_save_demande', methods: ['POST'])]
    public function saveDemande(Request $request): Response
    {
        $data = json_decode($request->getContent(), true);

        if (!$data || empty($data['lignes'])) {
            return $this->json(['status' => 'error', 'message' => 'Aucune donnée reçue.'], 400);
        }

        $demande = new TMsDemande();

        // Set Demande properties
        $demande->setCode(null); // code is handled by trigger
        $demande->setDescription($data['description'] ?? null);
        $demande->setNomPatient($data['nom_patient'] ?? null);
        $demande->setDossierPatient($data['dossier_patient'] ?? null);
        $demande->setIpp((int)($data['ipp'] ?? 0));

       
        $demande->setPositionActuel('Créer');
        $demande->setHistorique(null);
        $demande->setUrgent(!empty($data['urgent']));
        $demande->setCreated(new DateTime());
        $demande->setActif(true);

        $dossierId = $request->getSession()->get('dossier');
        $dossier = $this->em->getRepository(PEntite::class)->find($dossierId);
        $demande->setPEntite($dossier);
    
        $user = $this->getUser();
        $demande->setUserCreated($user);

        $demandeur = $this->em->getRepository(PMagasins::class)->find($data['demandeur_id'] ?? null);
        $recepteur = $this->em->getRepository(PMagasins::class)->find($data['recepteur_id'] ?? null);

        $demande->setDemandeurId($demandeur);
        $demande->setRecepteurId($recepteur);
        $typeDemande = $this->em->getRepository(PTypeOprt::class)->find(2);
        $demande->setTypeDemande($typeDemande);
        $this->em->persist($demande);
        $this->em->flush(); 

        // Save lines
        foreach ($data['lignes'] as $ligne) {
            $produit = $this->em->getRepository(PProduits::class)->find($ligne['id']);
            if (!$produit) {
                continue; 
            }

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

            // $demandelg->setFlagSynchronisationLocale(null);

            $this->em->persist($demandelg);
        }


        $this->em->flush();

        return $this->json([
            'status' => 'success',
            'message' => 'Demande enregistrée avec succès.',
            'demande_id' => $demande->getId(),
        ]);
    }
    #[Route('/edit-demande', name: 'vente_edit_demande', methods: ['POST'])]
    public function editDemande(Request $request): JsonResponse
    {
        $data = json_decode($request->getContent(), true);
        if (!$data || empty($data['demande_id'])) {
            return $this->json(['status' => 'error', 'message' => 'Données manquantes.'], 400);
        }
        // dd($data);
        $demande = $this->em->getRepository(TMsDemande::class)->find($data['demande_id']);
        if (!$demande) {
            return $this->json(['status' => 'error', 'message' => 'Demande introuvable.'], 404);
        }

        // Update general info
        $demande->setDescription($data['description'] ?? null);
        $demande->setNomPatient($data['nom_patient'] ?? null);
        $demande->setDossierPatient($data['dossier_patient'] ?? null);
        $demande->setIpp((int)($data['ipp'] ?? 0));
        $demande->setUrgent(!empty($data['urgent']));

        $demandeur = $this->em->getRepository(PMagasins::class)->find($data['demandeur_id'] ?? null);
        $recepteur = $this->em->getRepository(PMagasins::class)->find($data['recepteur_id'] ?? null);
        $demande->setDemandeurId($demandeur);
        $demande->setRecepteurId($recepteur);
        $user = $this->getUser();
        $demande->setUserUpdated($user);


        // EDITED lignes
        foreach ($data['edited'] ?? [] as $row) {
            $ligne = $this->em->getRepository(TMsDemandelg::class)->find($row['demandelg_id']);
            $produit = $this->em->getRepository(PProduits::class)->find($row['produit_id']);

            if (!$ligne || !$produit) continue;

            $unite = $produit->getPPrUnite();
            $quantite = (float) $row['quantite'];
            $remise = (float) ($row['remise'] ?? 0);
            $tva = (float) ($row['tva'] ?? 0);
            $prixUnitaire = $produit->getPPrTarifications()->first()?->getPrixVentePpv() ?? 0;
            $montantHt = ($prixUnitaire * $quantite) - $remise;
            $montantTtc = $montantHt + ($montantHt * $tva / 100);

            $ligne->setPProduit($produit);
            $ligne->setPPrUnite($unite);
            $ligne->setQuantite($quantite);
            $ligne->setPrixUnitaire($prixUnitaire);
            $ligne->setRemise($remise);
            $ligne->setTva($tva);
            $ligne->setMontantHt($montantHt);
            $ligne->setMontantTtc($montantTtc);
        }

        //  NEW lignes
        foreach ($data['added'] ?? [] as $row) {
            $produit = $this->em->getRepository(PProduits::class)->find($row['produit_id']);
            if (!$produit) continue;

            $unite = $produit->getPPrUnite();
            $quantite = (float) $row['quantite'];
            $remise = (float) ($row['remise'] ?? 0);
            $tva = (float) ($row['tva'] ?? 0);
            $prixUnitaire = $produit->getPPrTarifications()->first()?->getPrixVentePpv() ?? 0;
            $montantHt = ($prixUnitaire * $quantite) - $remise;
            $montantTtc = $montantHt + ($montantHt * $tva / 100);

            $ligne = new TMsDemandelg();
            $ligne->setTmsDemande($demande);
            $ligne->setPProduit($produit);
            $ligne->setPPrUnite($unite);
            $ligne->setQuantite($quantite);
            $ligne->setPrixUnitaire($prixUnitaire);
            $ligne->setRemise($remise);
            $ligne->setTva($tva);
            $ligne->setMontantHt($montantHt);
            $ligne->setMontantTtc($montantTtc);
            $ligne->setActif(true);

            $this->em->persist($ligne);
        }

        //  DELETED lignes
        foreach ($data['deleted'] ?? [] as $row) {
            $ligne = $this->em->getRepository(TMsDemandelg::class)->find($row['demandelg_id']);
            if ($ligne) {
                $ligne->setActif(false);
            }
        }
        $this->em->flush();

        return $this->json([
            'status' => 'success',
            'message' => 'Demande mise à jour avec succès.'
        ]);
    }
    #[Route('/update-position', name: 'update_position', methods: ['POST'])]
    public function updatePosition(Request $request,EntityManagerInterface $em,TMsDemandeRepository $repo,Security $security): JsonResponse 
    {
        $data = json_decode($request->getContent(), true);
        $id = $data['id'] ?? null;
        $position = $data['position'] ?? null;

        if (!$id || !$position) {
            return new JsonResponse(['success' => false, 'message' => 'Données invalides'], 400);
        }

        $demande = $repo->find($id);
        if (!$demande) {
            return new JsonResponse(['success' => false, 'message' => 'Demande introuvable'], 404);
        }

        $user = $security->getUser();
        if (!$user) {
            return new JsonResponse(['success' => false, 'message' => 'Utilisateur non authentifié'], 403);
        }

        $demande->setPositionActuel($position);
        switch ($position) {
            case 'valider':
                $demande->setUserValider($user);
                break;
            case 'Générer':
                $demande->setUserGenerer($user);
                break;
            case 'Créer': // dévalider
                $demande->setUserAnnuler($user);
                break;
        }

        $em->flush();

        return new JsonResponse(['success' => true]);
    }


}
