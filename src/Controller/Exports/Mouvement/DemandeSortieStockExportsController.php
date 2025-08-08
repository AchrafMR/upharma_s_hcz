<?php

namespace App\Controller\Exports\Mouvement;

use App\Entity\PEntite;
use Mpdf\Mpdf;
use NumberFormatter;
use App\Entity\TMsDemande;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;
#[Route('/exports/mouvement')]
class DemandeSortieStockExportsController extends AbstractController
{
    private $em;
    public function __construct(EntityManagerInterface $em)
    {
       $this->em = $em;
    }

    #[Route('/demande_sortie_stock_pdf', name: 'app_exports_demande_sortie_stock', options: ['expose' => true])]
    public function generateDemandeSStockPdf(Request $request): Response
    {
        $idDemande = $request->query->get('id');

        if (!$idDemande) {
            return new JsonResponse(['error' => 'ID manquant'], 400);
        }

        $demande = $this->em->getRepository(TMsDemande::class)->findWithActiveLignes($idDemande);
        // dd($demande);
        if (!$demande) {
            return new JsonResponse(['error' => 'demande sortie stock introuvable.'], 404);
        }

        $logoPath = $this->getParameter('kernel.project_dir') . '/public/build/images/parametrage/dossiers/56.png';

        $totalHt = 0;
        $totalTva = 0;

        foreach ($demande->getTMsDemandelgs() as $lg) {
            $qte = $lg->getQuantite() ?? 0;
            $pu = $lg->getPrixUnitaire() ?? 0;
            $tva = $lg->getTva() ?? 0;
            $remise = $lg->getRemise() ?? 0;

            $ligneHt = ($qte * $pu) - $remise;
            $ligneTva = ($ligneHt * $tva / 100);

            $totalHt += $ligneHt;
            $totalTva += $ligneTva;
        }

        $totalTtc = $totalHt + $totalTva;

        $formatter = new \NumberFormatter('fr_FR', \NumberFormatter::SPELLOUT);
        $montantEnLettre = strtoupper($formatter->format($totalTtc)) . ' DIRHAMS';

        $dossierId = $request->getSession()->get('dossier');
        $dossier = $this->em->getRepository(PEntite::class)->find($dossierId);


        $html = $this->render('exports/mouvement/demande_sortie_stock_exports/index.html.twig', [
            'demande' => $demande,
            'logoPath' => $logoPath,
            'totalHt' => $totalHt,
            'totalTva' => $totalTva,
            'totalTtc' => $totalTtc,
            'montantLettre' => $montantEnLettre,
            'dossier'=>$dossier
        ])->getContent();
        $fontDir = [
            $this->getParameter('kernel.project_dir') . '/public/fonts/Courier_Prime'
        ];
        $defaultConfig = (new \Mpdf\Config\ConfigVariables())->getDefaults();
        $fontDirs = $defaultConfig['fontDir'];

        $defaultFontConfig = (new \Mpdf\Config\FontVariables())->getDefaults();
        $fontData = $defaultFontConfig['fontdata'];

        $mpdf = new \Mpdf\Mpdf([
            'format' => 'A4',
            'orientation' => 'P',
            'margin_top' => 6,
            'margin_bottom' => 5,
            'margin_left' => 7,
            'margin_right' => 5,
            'fontDir' => array_merge($fontDirs, $fontDir),
            'fontdata' => $fontData + [
                'courierprime' => [
                    'R' => 'CourierPrime-Regular.ttf',
                    'B' => 'CourierPrime-Bold.ttf',
                    'I' => 'CourierPrime-Italic.ttf',
                    'BI' => 'CourierPrime-BoldItalic.ttf',
                ]
            ],
            'default_font' => 'courierprime',
            'default_font_size' => 9,
        ]);

        $mpdf->SetTitle($demande->getCode());
        $mpdf->SetJS('this.print();');
        $mpdf->WriteHTML($html);
        return new Response($mpdf->Output('', 'I'));
    }

}
