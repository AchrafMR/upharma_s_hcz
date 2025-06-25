<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20250612160107 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        // $this->addSql(<<<'SQL'
        //     ALTER TABLE p_produits ADD ai NVARCHAR(255)
        // SQL);
        // $this->addSql(<<<'SQL'
        //     ALTER TABLE p_produits ADD qte_stock DOUBLE PRECISION
        // SQL);
        // $this->addSql(<<<'SQL'
        //     ALTER TABLE p_produits ADD fon_code NVARCHAR(255)
        // SQL);
        // $this->addSql(<<<'SQL'
        //     ALTER TABLE p_produits ADD specialite_produit NVARCHAR(255)
        // SQL);
        // $this->addSql(<<<'SQL'
        //     ALTER TABLE p_produits ADD spe_code NVARCHAR(255)
        // SQL);
        // $this->addSql(<<<'SQL'
        //     ALTER TABLE p_produits ADD ancien_code NVARCHAR(255)
        // SQL);
        // $this->addSql(<<<'SQL'
        //     ALTER TABLE p_produits ADD code_cat NVARCHAR(255)
        // SQL);
        // $this->addSql(<<<'SQL'
        //     ALTER TABLE p_produits ADD categorie NVARCHAR(255) NOT NULL CONSTRAINT DF_632763AC_497DD634 DEFAULT 'UNKNOWN'
        // SQL);

        // $this->addSql(<<<'SQL'
        //     ALTER TABLE p_produits ADD classe_produit NVARCHAR(255)
        // SQL);
        // $this->addSql(<<<'SQL'
        //     ALTER TABLE p_produits ADD famille NVARCHAR(255)
        // SQL);
        // $this->addSql(<<<'SQL'
        //     ALTER TABLE p_produits ADD segments_produit NVARCHAR(255)
        // SQL);
        // $this->addSql(<<<'SQL'
        //     ALTER TABLE p_produits ADD sous_segments_produit NVARCHAR(255)
        // SQL);
        // $this->addSql(<<<'SQL'
        //     ALTER TABLE p_produits ADD reference NVARCHAR(255)
        // SQL);
        // $this->addSql(<<<'SQL'
        //     ALTER TABLE p_produits ADD voie_administration NVARCHAR(255)
        // SQL);
        // $this->addSql(<<<'SQL'
        //     ALTER TABLE p_produits ADD fournisseur NVARCHAR(255)
        // SQL);
        // $this->addSql(<<<'SQL'
        //     ALTER TABLE p_produits ADD prix_vente_ph DOUBLE PRECISION
        // SQL);
        // $this->addSql(<<<'SQL'
        //     ALTER TABLE p_produits ADD prix_vente_ppv DOUBLE PRECISION
        // SQL);
        // $this->addSql(<<<'SQL'
        //     ALTER TABLE p_produits ADD prix_vente_ppc DOUBLE PRECISION
        // SQL);
        // $this->addSql(<<<'SQL'
        //     ALTER TABLE p_produits ADD prix_vente DOUBLE PRECISION
        // SQL);
        // $this->addSql(<<<'SQL'
        //     ALTER TABLE p_produits ADD statut_commercialisation NVARCHAR(255)
        // SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE p_produits ADD code_dci NVARCHAR(255)
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
        // $this->addSql(<<<'SQL'
        //     ALTER TABLE p_produits DROP COLUMN ai
        // SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE p_produits DROP COLUMN qte_stock
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE p_produits DROP COLUMN fon_code
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE p_produits DROP COLUMN specialite_produit
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE p_produits DROP COLUMN spe_code
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE p_produits DROP COLUMN ancien_code
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE p_produits DROP COLUMN code_cat
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE p_produits DROP COLUMN categorie
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE p_produits DROP COLUMN classe_produit
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE p_produits DROP COLUMN famille
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE p_produits DROP COLUMN segments_produit
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE p_produits DROP COLUMN sous_segments_produit
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE p_produits DROP COLUMN reference
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE p_produits DROP COLUMN voie_administration
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE p_produits DROP COLUMN fournisseur
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE p_produits DROP COLUMN prix_vente_ph
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE p_produits DROP COLUMN prix_vente_ppv
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE p_produits DROP COLUMN prix_vente_ppc
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE p_produits DROP COLUMN prix_vente
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE p_produits DROP COLUMN statut_commercialisation
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE p_produits DROP COLUMN code_dci
        SQL);
    }
}
