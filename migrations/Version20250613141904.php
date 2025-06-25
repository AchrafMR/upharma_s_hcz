<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20250613141904 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql(<<<'SQL'
            CREATE TABLE t_ms_livraison (id INT IDENTITY NOT NULL, t_ms_commande_id INT NOT NULL, demandeur_id INT NOT NULL, recepteur_id INT, p_partenaires_id INT, code NVARCHAR(255), multi_recp BIT, ipp INT NOT NULL, nom_patient NVARCHAR(255) NOT NULL, dossier_patient NVARCHAR(255) NOT NULL, urgent BIT, created DATETIME2(6), updated DATETIME2(6), position_actuel NVARCHAR(255), historique NVARCHAR(255), actif BIT, flag_synchronisation_locale BIT, PRIMARY KEY (id))
        SQL);
        $this->addSql(<<<'SQL'
            CREATE INDEX IDX_D5A5A8BDA6662699 ON t_ms_livraison (t_ms_commande_id)
        SQL);
        $this->addSql(<<<'SQL'
            CREATE INDEX IDX_D5A5A8BD95A6EE59 ON t_ms_livraison (demandeur_id)
        SQL);
        $this->addSql(<<<'SQL'
            CREATE INDEX IDX_D5A5A8BD3B49782D ON t_ms_livraison (recepteur_id)
        SQL);
        $this->addSql(<<<'SQL'
            CREATE INDEX IDX_D5A5A8BDFE2AD1 ON t_ms_livraison (p_partenaires_id)
        SQL);
        $this->addSql(<<<'SQL'
            CREATE TABLE t_ms_livraisonlg (id INT IDENTITY NOT NULL, t_ms_livraison_id INT NOT NULL, p_produit_id INT NOT NULL, p_pr_unite_id INT, num_lot NVARCHAR(255), quantite_livree DOUBLE PRECISION, prixunitaire DOUBLE PRECISION, montant_total DOUBLE PRECISION, observation NVARCHAR(255), flag_synchronisation_locale BIT, PRIMARY KEY (id))
        SQL);
        $this->addSql(<<<'SQL'
            CREATE INDEX IDX_D221EC256BA5C920 ON t_ms_livraisonlg (t_ms_livraison_id)
        SQL);
        $this->addSql(<<<'SQL'
            CREATE INDEX IDX_D221EC25586778F4 ON t_ms_livraisonlg (p_produit_id)
        SQL);
        $this->addSql(<<<'SQL'
            CREATE INDEX IDX_D221EC25D372DD48 ON t_ms_livraisonlg (p_pr_unite_id)
        SQL);
        $this->addSql(<<<'SQL'
            CREATE TABLE t_ms_livraisonobj (id INT IDENTITY NOT NULL, t_ms_livraison_lg_id INT, date_peremption DATE, quantitie_livree DOUBLE PRECISION, lot NVARCHAR(255), prix_ttc DOUBLE PRECISION, total_ttc DOUBLE PRECISION, created DATETIME2(6), flag_synchronisation_locale BIT, PRIMARY KEY (id))
        SQL);
        $this->addSql(<<<'SQL'
            CREATE INDEX IDX_4B82D87C38DD9845 ON t_ms_livraisonobj (t_ms_livraison_lg_id)
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE t_ms_livraison ADD CONSTRAINT FK_D5A5A8BDA6662699 FOREIGN KEY (t_ms_commande_id) REFERENCES t_ms_commande (id)
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE t_ms_livraison ADD CONSTRAINT FK_D5A5A8BD95A6EE59 FOREIGN KEY (demandeur_id) REFERENCES p_magasins (id)
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE t_ms_livraison ADD CONSTRAINT FK_D5A5A8BD3B49782D FOREIGN KEY (recepteur_id) REFERENCES p_magasins (id)
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE t_ms_livraison ADD CONSTRAINT FK_D5A5A8BDFE2AD1 FOREIGN KEY (p_partenaires_id) REFERENCES p_partenaires (id)
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE t_ms_livraisonlg ADD CONSTRAINT FK_D221EC256BA5C920 FOREIGN KEY (t_ms_livraison_id) REFERENCES t_ms_livraison (id)
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE t_ms_livraisonlg ADD CONSTRAINT FK_D221EC25586778F4 FOREIGN KEY (p_produit_id) REFERENCES p_produits (id)
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE t_ms_livraisonlg ADD CONSTRAINT FK_D221EC25D372DD48 FOREIGN KEY (p_pr_unite_id) REFERENCES p_pr_unites (id)
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE t_ms_livraisonobj ADD CONSTRAINT FK_4B82D87C38DD9845 FOREIGN KEY (t_ms_livraison_lg_id) REFERENCES t_ms_livraisonlg (id)
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
            ALTER TABLE t_ms_livraison DROP CONSTRAINT FK_D5A5A8BDA6662699
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE t_ms_livraison DROP CONSTRAINT FK_D5A5A8BD95A6EE59
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE t_ms_livraison DROP CONSTRAINT FK_D5A5A8BD3B49782D
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE t_ms_livraison DROP CONSTRAINT FK_D5A5A8BDFE2AD1
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE t_ms_livraisonlg DROP CONSTRAINT FK_D221EC256BA5C920
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE t_ms_livraisonlg DROP CONSTRAINT FK_D221EC25586778F4
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE t_ms_livraisonlg DROP CONSTRAINT FK_D221EC25D372DD48
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE t_ms_livraisonobj DROP CONSTRAINT FK_4B82D87C38DD9845
        SQL);
        $this->addSql(<<<'SQL'
            DROP TABLE t_ms_livraison
        SQL);
        $this->addSql(<<<'SQL'
            DROP TABLE t_ms_livraisonlg
        SQL);
        $this->addSql(<<<'SQL'
            DROP TABLE t_ms_livraisonobj
        SQL);
    }
}
