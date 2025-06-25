<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20250612104005 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql(<<<'SQL'
            ALTER TABLE t_ms_commande DROP CONSTRAINT FK_1BCB87FAA7C40F41
        SQL);
        $this->addSql(<<<'SQL'
            DROP INDEX IDX_1BCB87FAA7C40F41 ON t_ms_commande
        SQL);
        $this->addSql(<<<'SQL'
            sp_rename 't_ms_commande.commande_consommation_id', 'parent_id', 'COLUMN'
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE t_ms_commande ADD CONSTRAINT FK_1BCB87FA727ACA70 FOREIGN KEY (parent_id) REFERENCES t_ms_commande (id)
        SQL);
        $this->addSql(<<<'SQL'
            CREATE INDEX IDX_1BCB87FA727ACA70 ON t_ms_commande (parent_id)
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE t_ms_Demande DROP CONSTRAINT FK_6D16CC67A7C40F41
        SQL);
        $this->addSql(<<<'SQL'
            DROP INDEX IDX_6D16CC67A7C40F41 ON t_ms_Demande
        SQL);
        $this->addSql(<<<'SQL'
            sp_rename 't_ms_Demande.commande_consommation_id', 'parent_id', 'COLUMN'
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE t_ms_Demande ADD CONSTRAINT FK_6D16CC67727ACA70 FOREIGN KEY (parent_id) REFERENCES t_ms_commande (id)
        SQL);
        $this->addSql(<<<'SQL'
            CREATE INDEX IDX_6D16CC67727ACA70 ON t_ms_Demande (parent_id)
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
            ALTER TABLE t_ms_commande DROP CONSTRAINT FK_1BCB87FA727ACA70
        SQL);
        $this->addSql(<<<'SQL'
            DROP INDEX IDX_1BCB87FA727ACA70 ON t_ms_commande
        SQL);
        $this->addSql(<<<'SQL'
            sp_rename 't_ms_commande.parent_id', 'commande_consommation_id', 'COLUMN'
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE t_ms_commande ADD CONSTRAINT FK_1BCB87FAA7C40F41 FOREIGN KEY (commande_consommation_id) REFERENCES t_ms_commande (id) ON UPDATE NO ACTION ON DELETE NO ACTION
        SQL);
        $this->addSql(<<<'SQL'
            CREATE NONCLUSTERED INDEX IDX_1BCB87FAA7C40F41 ON t_ms_commande (commande_consommation_id)
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE t_ms_demande DROP CONSTRAINT FK_6D16CC67727ACA70
        SQL);
        $this->addSql(<<<'SQL'
            DROP INDEX IDX_6D16CC67727ACA70 ON t_ms_demande
        SQL);
        $this->addSql(<<<'SQL'
            sp_rename 't_ms_demande.parent_id', 'commande_consommation_id', 'COLUMN'
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE t_ms_demande ADD CONSTRAINT FK_6D16CC67A7C40F41 FOREIGN KEY (commande_consommation_id) REFERENCES t_ms_commande (id) ON UPDATE NO ACTION ON DELETE NO ACTION
        SQL);
        $this->addSql(<<<'SQL'
            CREATE NONCLUSTERED INDEX IDX_6D16CC67A7C40F41 ON t_ms_demande (commande_consommation_id)
        SQL);
    }
}
