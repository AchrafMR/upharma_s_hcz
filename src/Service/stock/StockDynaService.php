<?php
namespace App\Service\stock;

use App\Entity\TStStockdyna;
use App\Entity\PProduits;
use App\Entity\PPrUnites;
use App\Repository\PEmplacementsRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\Security\Core\Security;

class StockDynaService
{
    private EntityManagerInterface $em;
    private PEmplacementsRepository $emplacementsRepo;
    private Security $security;
    private StockStaticService $stockStaticService;

    public function __construct(
        EntityManagerInterface $em,
        PEmplacementsRepository $emplacementsRepo,
        Security $security,
        StockStaticService $stockStaticService
    ) {
        $this->em = $em;
        $this->emplacementsRepo = $emplacementsRepo;
        $this->security = $security;
        $this->stockStaticService = $stockStaticService;
    }

    public function insertStockDynamique(PProduits $produit, PPrUnites $unite, float $quantite,int $magasinId,string $type = 'entree'): void
    {
        // dd("achraf");
       
        $emplacement = $this->emplacementsRepo->findOneBy(['magasin' => $magasinId]);
        if (!$emplacement) {
            throw new \Exception("Aucun emplacement trouvé pour le magasin ID: " . $magasinId);
        }
        // dd($emplacement);
        if ($type === 'sortie') {
            $quantite = -abs($quantite); 
        } else {
            $quantite = abs($quantite); 
        }

        $stock = new TStStockdyna();
        $stock->setPProduit($produit);
        $stock->setPPrUnite($unite);
        $stock->setQuantite($quantite);
        $stock->setPEmplacements($emplacement);
        $stock->setUserCreated($this->security->getUser());
        $stock->setDateCreate(new \DateTime());
        $stock->setFlagSynchronisationLocale(false);

        $this->em->persist($stock);
        $this->stockStaticService->updateSolde($produit, $unite, $emplacement, $quantite);
    }
}
