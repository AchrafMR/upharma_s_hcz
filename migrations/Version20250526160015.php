<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

final class Version20250526160015 extends AbstractMigration
{
    public function getDescription(): string
    {
        return 'Mise à jour des colonnes recepteur_id et actif avec suppression sécurisée de contrainte';
    }

    public function up(Schema $schema): void
    {
        // Modifier la colonne recepteur_id
        $this->addSql(<<<'SQL'
            ALTER TABLE t_ms_Demande ALTER COLUMN recepteur_id INT
        SQL);

        // Supprimer la contrainte si elle existe (évite plantage)
        $this->addSql(<<<'SQL'
            BEGIN TRY
                ALTER TABLE t_ms_demandelg DROP CONSTRAINT DF_E329DC42_8F52502
            END TRY
            BEGIN CATCH
                PRINT 'Constraint DF_E329DC42_8F52502 not found, skipping...'
            END CATCH
        SQL);

        // Modifier la colonne actif
        $this->addSql(<<<'SQL'
            ALTER TABLE t_ms_demandelg ALTER COLUMN actif INT
        SQL);
    }

    public function down(Schema $schema): void
    {
        $this->addSql(<<<'SQL'
            ALTER TABLE t_ms_demandelg ALTER COLUMN actif INT NOT NULL
        SQL);

        $this->addSql(<<<'SQL'
            ALTER TABLE t_ms_demandelg ADD CONSTRAINT DF_E329DC42_8F52502 DEFAULT 1 FOR actif
        SQL);

        $this->addSql(<<<'SQL'
            ALTER TABLE t_ms_Demande ALTER COLUMN recepteur_id INT NOT NULL
        SQL);
    }
}
