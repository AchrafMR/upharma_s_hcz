<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20250610101257 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql(<<<'SQL'
            ALTER TABLE t_ms_Demande DROP CONSTRAINT FK_6D16CC67A7C40F41
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE t_ms_Demande ADD CONSTRAINT FK_6D16CC67A7C40F41 FOREIGN KEY (commande_consommation_id) REFERENCES t_ms_commande (id)
        SQL);
        // $this->addSql(<<<'SQL'
        //     ALTER TABLE t_ms_demandelg DROP CONSTRAINT DF_E329DC42_8F52502
        // SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE t_ms_demandelg ALTER COLUMN actif INT
        SQL);
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql(<<<'SQL'
            CREATE SCHEMA db_accessadmin
        SQL);
        $this->addSql(<<<'SQL'
            CREATE SCHEMA db_backupoperator
        SQL);
        $this->addSql(<<<'SQL'
            CREATE SCHEMA db_datareader
        SQL);
        $this->addSql(<<<'SQL'
            CREATE SCHEMA db_datawriter
        SQL);
        $this->addSql(<<<'SQL'
            CREATE SCHEMA db_ddladmin
        SQL);
        $this->addSql(<<<'SQL'
            CREATE SCHEMA db_denydatareader
        SQL);
        $this->addSql(<<<'SQL'
            CREATE SCHEMA db_denydatawriter
        SQL);
        $this->addSql(<<<'SQL'
            CREATE SCHEMA db_owner
        SQL);
        $this->addSql(<<<'SQL'
            CREATE SCHEMA db_securityadmin
        SQL);
        $this->addSql(<<<'SQL'
            CREATE SCHEMA dbo
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE t_ms_demandelg ALTER COLUMN actif INT
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE t_ms_demandelg ADD CONSTRAINT DF_E329DC42_8F52502 DEFAULT 1 FOR actif
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE t_ms_demande DROP CONSTRAINT FK_6D16CC67A7C40F41
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE t_ms_demande ADD CONSTRAINT FK_6D16CC67A7C40F41 FOREIGN KEY (commande_consommation_id) REFERENCES t_ms_Demande (id) ON UPDATE NO ACTION ON DELETE NO ACTION
        SQL);
    }
}
