<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

final class Version20250522110138 extends AbstractMigration
{
    public function getDescription(): string
    {
        return 'Corrige la colonne actif dans t_ms_demandelg sans casser si la contrainte est absente';
    }

    public function up(Schema $schema): void
    {
        // Ignore l'erreur si la contrainte n'existe pas
        $this->addSql(<<<'SQL'
            BEGIN TRY
                ALTER TABLE t_ms_demandelg DROP CONSTRAINT DF_E329DC42_8F52502
            END TRY
            BEGIN CATCH
                PRINT 'Constraint DF_E329DC42_8F52502 not found, skipping...'
            END CATCH
        SQL);

        // Modifier le type de la colonne
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
    }
}
