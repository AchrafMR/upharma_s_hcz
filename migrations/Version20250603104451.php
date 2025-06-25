<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20250603104451 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql(<<<'SQL'
            CREATE TABLE t_ms_commandelg (id INT IDENTITY NOT NULL, t_ms_commande_id INT NOT NULL, p_produit_id INT NOT NULL, p_pr_unite_id INT, quantite_commandee DOUBLE PRECISION NOT NULL, quantite_servie DOUBLE PRECISION, quantite_reste DOUBLE PRECISION, prix_unitaire DOUBLE PRECISION NOT NULL, remise DOUBLE PRECISION, tva DOUBLE PRECISION, montant_ht DOUBLE PRECISION NOT NULL, montant_ttc DOUBLE PRECISION NOT NULL, observation VARCHAR(MAX), code_comptable NVARCHAR(255), flag_synchronisation_locale BIT, PRIMARY KEY (id))
        SQL);
        $this->addSql(<<<'SQL'
            CREATE INDEX IDX_C6C8C6D0A6662699 ON t_ms_commandelg (t_ms_commande_id)
        SQL);
        $this->addSql(<<<'SQL'
            CREATE INDEX IDX_C6C8C6D0586778F4 ON t_ms_commandelg (p_produit_id)
        SQL);
        $this->addSql(<<<'SQL'
            CREATE INDEX IDX_C6C8C6D0D372DD48 ON t_ms_commandelg (p_pr_unite_id)
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE t_ms_commandelg ADD CONSTRAINT FK_C6C8C6D0A6662699 FOREIGN KEY (t_ms_commande_id) REFERENCES t_ms_commande (id)
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE t_ms_commandelg ADD CONSTRAINT FK_C6C8C6D0586778F4 FOREIGN KEY (p_produit_id) REFERENCES p_produits (id)
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE t_ms_commandelg ADD CONSTRAINT FK_C6C8C6D0D372DD48 FOREIGN KEY (p_pr_unite_id) REFERENCES ppr_unites (id)
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE tms_commandelg DROP CONSTRAINT FK_CEDC400AA6662699
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE tms_commandelg DROP CONSTRAINT FK_CEDC400A586778F4
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE tms_commandelg DROP CONSTRAINT FK_CEDC400AD372DD48
        SQL);
        $this->addSql(<<<'SQL'
            DROP TABLE tms_commandelg
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
            CREATE TABLE tms_commandelg (id INT IDENTITY NOT NULL, t_ms_commande_id INT NOT NULL, p_produit_id INT NOT NULL, p_pr_unite_id INT, quantite_commandee DOUBLE PRECISION NOT NULL, quantite_servie DOUBLE PRECISION, quantite_reste DOUBLE PRECISION, prix_unitaire DOUBLE PRECISION NOT NULL, remise DOUBLE PRECISION, tva DOUBLE PRECISION, montant_ht DOUBLE PRECISION NOT NULL, montant_ttc DOUBLE PRECISION NOT NULL, observation VARCHAR(MAX) COLLATE SQL_Latin1_General_CP1_CI_AS, code_comptable NVARCHAR(255) COLLATE SQL_Latin1_General_CP1_CI_AS, flag_synchronisation_locale BIT, PRIMARY KEY (id))
        SQL);
        $this->addSql(<<<'SQL'
            CREATE NONCLUSTERED INDEX IDX_CEDC400AA6662699 ON tms_commandelg (t_ms_commande_id)
        SQL);
        $this->addSql(<<<'SQL'
            CREATE NONCLUSTERED INDEX IDX_CEDC400A586778F4 ON tms_commandelg (p_produit_id)
        SQL);
        $this->addSql(<<<'SQL'
            CREATE NONCLUSTERED INDEX IDX_CEDC400AD372DD48 ON tms_commandelg (p_pr_unite_id)
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE tms_commandelg ADD CONSTRAINT FK_CEDC400AA6662699 FOREIGN KEY (t_ms_commande_id) REFERENCES t_ms_commande (id) ON UPDATE NO ACTION ON DELETE NO ACTION
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE tms_commandelg ADD CONSTRAINT FK_CEDC400A586778F4 FOREIGN KEY (p_produit_id) REFERENCES p_produits (id) ON UPDATE NO ACTION ON DELETE NO ACTION
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE tms_commandelg ADD CONSTRAINT FK_CEDC400AD372DD48 FOREIGN KEY (p_pr_unite_id) REFERENCES ppr_unites (id) ON UPDATE NO ACTION ON DELETE NO ACTION
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE t_ms_commandelg DROP CONSTRAINT FK_C6C8C6D0A6662699
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE t_ms_commandelg DROP CONSTRAINT FK_C6C8C6D0586778F4
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE t_ms_commandelg DROP CONSTRAINT FK_C6C8C6D0D372DD48
        SQL);
        $this->addSql(<<<'SQL'
            DROP TABLE t_ms_commandelg
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE t_ms_demandelg ALTER COLUMN actif INT
        SQL);
        // $this->addSql(<<<'SQL'
        //     ALTER TABLE t_ms_demandelg ADD CONSTRAINT DF_E329DC42_8F52502 DEFAULT 1 FOR actif
        // SQL);
    }
}
