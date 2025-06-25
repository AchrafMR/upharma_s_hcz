<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20250508165948 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql(<<<'SQL'
            CREATE TABLE t_ms_demandelg (id INT IDENTITY NOT NULL, t_ms_demande_id INT NOT NULL, p_produit_id INT, p_pr_unite_id INT, quantite DOUBLE PRECISION NOT NULL, prix_unitaire DOUBLE PRECISION NOT NULL, remise DOUBLE PRECISION, tva DOUBLE PRECISION, montant_ht DOUBLE PRECISION, montant_ttc DOUBLE PRECISION, observation VARCHAR(MAX), code_comptable NVARCHAR(100), flag_synchronisation_locale BIT, PRIMARY KEY (id))
        SQL);
        $this->addSql(<<<'SQL'
            CREATE INDEX IDX_E329DC42B84235EB ON t_ms_demandelg (t_ms_demande_id)
        SQL);
        $this->addSql(<<<'SQL'
            CREATE INDEX IDX_E329DC42586778F4 ON t_ms_demandelg (p_produit_id)
        SQL);
        $this->addSql(<<<'SQL'
            CREATE INDEX IDX_E329DC42D372DD48 ON t_ms_demandelg (p_pr_unite_id)
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE t_ms_demandelg ADD CONSTRAINT FK_E329DC42B84235EB FOREIGN KEY (t_ms_demande_id) REFERENCES t_ms_Demande (id)
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE t_ms_demandelg ADD CONSTRAINT FK_E329DC42586778F4 FOREIGN KEY (p_produit_id) REFERENCES p_Produits (id)
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE t_ms_demandelg ADD CONSTRAINT FK_E329DC42D372DD48 FOREIGN KEY (p_pr_unite_id) REFERENCES ppr_unites (id)
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE tms_demandelg DROP CONSTRAINT FK_9A922B0FB84235EB
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE tms_demandelg DROP CONSTRAINT FK_9A922B0F586778F4
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE tms_demandelg DROP CONSTRAINT FK_9A922B0FD372DD48
        SQL);
        $this->addSql(<<<'SQL'
            DROP TABLE tms_demandelg
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
            CREATE TABLE tms_demandelg (id INT IDENTITY NOT NULL, t_ms_demande_id INT NOT NULL, p_produit_id INT, p_pr_unite_id INT, quantite DOUBLE PRECISION NOT NULL, prix_unitaire DOUBLE PRECISION NOT NULL, remise DOUBLE PRECISION, tva DOUBLE PRECISION, montant_ht DOUBLE PRECISION, montant_ttc DOUBLE PRECISION, observation VARCHAR(MAX) COLLATE SQL_Latin1_General_CP1_CI_AS, code_comptable NVARCHAR(100) COLLATE SQL_Latin1_General_CP1_CI_AS, flag_synchronisation_locale BIT, PRIMARY KEY (id))
        SQL);
        $this->addSql(<<<'SQL'
            CREATE NONCLUSTERED INDEX IDX_9A922B0FB84235EB ON tms_demandelg (t_ms_demande_id)
        SQL);
        $this->addSql(<<<'SQL'
            CREATE NONCLUSTERED INDEX IDX_9A922B0F586778F4 ON tms_demandelg (p_produit_id)
        SQL);
        $this->addSql(<<<'SQL'
            CREATE NONCLUSTERED INDEX IDX_9A922B0FD372DD48 ON tms_demandelg (p_pr_unite_id)
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE tms_demandelg ADD CONSTRAINT FK_9A922B0FB84235EB FOREIGN KEY (t_ms_demande_id) REFERENCES t_ms_Demande (id) ON UPDATE NO ACTION ON DELETE NO ACTION
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE tms_demandelg ADD CONSTRAINT FK_9A922B0F586778F4 FOREIGN KEY (p_produit_id) REFERENCES p_Produits (id) ON UPDATE NO ACTION ON DELETE NO ACTION
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE tms_demandelg ADD CONSTRAINT FK_9A922B0FD372DD48 FOREIGN KEY (p_pr_unite_id) REFERENCES ppr_unites (id) ON UPDATE NO ACTION ON DELETE NO ACTION
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE t_ms_demandelg DROP CONSTRAINT FK_E329DC42B84235EB
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE t_ms_demandelg DROP CONSTRAINT FK_E329DC42586778F4
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE t_ms_demandelg DROP CONSTRAINT FK_E329DC42D372DD48
        SQL);
        $this->addSql(<<<'SQL'
            DROP TABLE t_ms_demandelg
        SQL);
    }
}
