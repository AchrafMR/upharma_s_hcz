<?php

namespace App\Service\Hosix;

use Doctrine\DBAL\Connection;

class HosixHczService
{
    private Connection $connection;

    public function __construct(Connection $connection)
    {
        $this->connection = $connection;
    }

    public function findPatientByIPP(string $ipp): ?array
    {
        $sql = "SELECT
                    di.numorden AS ipp,
                    di.iddatidentific AS di, 
                    di.dossier, 
                    his.nombre AS patient,
                    cia.ctacontable AS codeOrg,
                    cia.nombre1 AS organisme,
                    fac.idtipofacturac AS grilleTarif

                FROM f_idatidentific di
                INNER JOIN a_historias his ON his.numorden = di.numorden
                INNER JOIN f_cias cia ON cia.codigo = di.idcia
                INNER JOIN f_itablasfacturas fac ON fac.idcia = cia.codigo
                INNER JOIN f_iestadosdatid est ON est.idestadodatid = di.idestadodatid

                WHERE di.numorden = :ipp
                AND LEFT(di.dossier,1) <> 'C'
                AND LEFT(di.dossier,1) <> 'L'
                AND di.cerrado = 'N'
                AND di.esvirtual = 0
                AND est.idestadodatid IN (0)";

        return $this->connection->fetchAssociative($sql, ['ipp' => $ipp]);
    }


}
