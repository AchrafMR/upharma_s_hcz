<?php

namespace App\Controller\Exports\Mouvement;


use Mpdf\Mpdf;
use NumberFormatter;
use App\Entity\PEntite;
use App\Entity\PTypeOprt;
use App\Entity\TMsLivraison;
use App\Entity\TMsPreparation;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
#[Route('/exports/mouvement')]
class LivraisonSortieStockExportsController extends AbstractController
{
    private $em;
    public function __construct(EntityManagerInterface $em)
    {
       $this->em = $em;
    }

    #[Route('/bon_livraison_pdf', name: 'app_exports_bon_livraison_exports', options: ['expose' => true])]
    public function generateLivraisonSStockPdf(Request $request): Response
     {
        $livraisonId = $request->get('idLivraison');
        $livraison = $this->em->getRepository(TMsLivraison::class)->find($livraisonId);

        if (!$livraison) {
            return new JsonResponse(['error' => 'Livraison introuvable.'], 404);
        }

        // if ($livraison->getStatus()->getDesignation() !== "Validé") {
        //     return new JsonResponse(['error' => 'Livraison n\'est pas encore validée.'], 404);
        // }

        $logoPath = $this->getParameter('kernel.project_dir') . '/public/build/images/parametrage/dossiers/56.png';

        $dossierId = $request->getSession()->get('dossier');
        $dossier = $this->em->getRepository(PEntite::class)->find($dossierId);

        $html = $this->render('exports/mouvement/livraison_sortie_stock_exports/index.html.twig', [
            'livraison' => $livraison,
            'logoPath' => $logoPath,
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

        $mpdf->SetTitle($livraison->getCode());
        $mpdf->SetJS('this.print();');
        $mpdf->WriteHTML($html);
        return new Response($mpdf->Output('', 'I'));
    }


}
