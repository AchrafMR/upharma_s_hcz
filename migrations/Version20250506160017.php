<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20250506160017 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql(<<<'SQL'
            CREATE TABLE pdepots (id INT IDENTITY NOT NULL, entite_id INT, user_created_id INT, user_updated_id INT, code NVARCHAR(255), titre NVARCHAR(255), description NVARCHAR(255), adresse NVARCHAR(255), code_postal NVARCHAR(255), ville NVARCHAR(255), pays NVARCHAR(255), active BIT, autre_information VARCHAR(MAX), created DATETIME2(6), PRIMARY KEY (id))
        SQL);
        $this->addSql(<<<'SQL'
            CREATE INDEX IDX_19580AD19BEA957A ON pdepots (entite_id)
        SQL);
        $this->addSql(<<<'SQL'
            CREATE INDEX IDX_19580AD1F987D8A8 ON pdepots (user_created_id)
        SQL);
        $this->addSql(<<<'SQL'
            CREATE INDEX IDX_19580AD1316B011F ON pdepots (user_updated_id)
        SQL);
        $this->addSql(<<<'SQL'
            CREATE TABLE pdevise (id INT IDENTITY NOT NULL, code NVARCHAR(255), titre NVARCHAR(255), active BIT, created DATETIME2(6), PRIMARY KEY (id))
        SQL);
        $this->addSql(<<<'SQL'
            CREATE TABLE pet_type_entites (id INT IDENTITY NOT NULL, code NVARCHAR(255), titre NVARCHAR(255), active BIT, created DATETIME2(6), PRIMARY KEY (id))
        SQL);
        $this->addSql(<<<'SQL'
            CREATE TABLE pmagasins (id INT IDENTITY NOT NULL, depot_id INT, user_created_id INT, user_updated_id INT, code NVARCHAR(255), designation NVARCHAR(255), defaut BIT, created DATETIME2(6), updated DATETIME2(6), PRIMARY KEY (id))
        SQL);
        $this->addSql(<<<'SQL'
            CREATE INDEX IDX_CDD8DD2D8510D4DE ON pmagasins (depot_id)
        SQL);
        $this->addSql(<<<'SQL'
            CREATE INDEX IDX_CDD8DD2DF987D8A8 ON pmagasins (user_created_id)
        SQL);
        $this->addSql(<<<'SQL'
            CREATE INDEX IDX_CDD8DD2D316B011F ON pmagasins (user_updated_id)
        SQL);
        $this->addSql(<<<'SQL'
            CREATE TABLE ppartenaires (id INT IDENTITY NOT NULL, type_partenaire_id INT, entite_id INT, user_created_id INT, code NVARCHAR(100), lettrage_adonix NVARCHAR(100), libelle_o NVARCHAR(255), societe NVARCHAR(150), nom NVARCHAR(150), prenom NVARCHAR(150), nom_contact NVARCHAR(255), tel_contact NVARCHAR(255), forme_juridique NVARCHAR(100), adresse VARCHAR(MAX), pays NVARCHAR(100), ville NVARCHAR(100), tel1 NVARCHAR(100), tel2 NVARCHAR(100), fax1 NVARCHAR(100), fax2 NVARCHAR(100), mail1 NVARCHAR(100), mail2 NVARCHAR(100), rib NVARCHAR(100), iban NVARCHAR(255), swift NVARCHAR(255), banque NVARCHAR(100) NOT NULL, active BIT, taxable BIT, tva INT, iff NVARCHAR(100), rc NVARCHAR(100), ice NVARCHAR(100), patente NVARCHAR(100), created DATETIME2(6), PRIMARY KEY (id))
        SQL);
        $this->addSql(<<<'SQL'
            CREATE INDEX IDX_E628E659E833A499 ON ppartenaires (type_partenaire_id)
        SQL);
        $this->addSql(<<<'SQL'
            CREATE INDEX IDX_E628E6599BEA957A ON ppartenaires (entite_id)
        SQL);
        $this->addSql(<<<'SQL'
            CREATE INDEX IDX_E628E659F987D8A8 ON ppartenaires (user_created_id)
        SQL);
        $this->addSql(<<<'SQL'
            CREATE TABLE ppr_dci (id INT IDENTITY NOT NULL, code NVARCHAR(255), titre NVARCHAR(255), description NVARCHAR(255), created DATETIME2(6), active BIT, PRIMARY KEY (id))
        SQL);
        $this->addSql(<<<'SQL'
            CREATE TABLE ppr_niveau_produits (id INT IDENTITY NOT NULL, parent_id INT, designation NVARCHAR(255), description NVARCHAR(255), niveau INT, active BIT, PRIMARY KEY (id))
        SQL);
        $this->addSql(<<<'SQL'
            CREATE INDEX IDX_4D6D1123727ACA70 ON ppr_niveau_produits (parent_id)
        SQL);
        $this->addSql(<<<'SQL'
            CREATE TABLE ppr_tarifications (id INT IDENTITY NOT NULL, type_tarification_id INT, devise_id INT, produit_id INT, code NVARCHAR(255), titre NVARCHAR(255), prix_achat DOUBLE PRECISION, prix_vente DOUBLE PRECISION, prix_vente_ph DOUBLE PRECISION, prix_vente_ppv DOUBLE PRECISION, active BIT, created DATETIME2(6), PRIMARY KEY (id))
        SQL);
        $this->addSql(<<<'SQL'
            CREATE INDEX IDX_4DD0B771503D61F4 ON ppr_tarifications (type_tarification_id)
        SQL);
        $this->addSql(<<<'SQL'
            CREATE INDEX IDX_4DD0B771F4445056 ON ppr_tarifications (devise_id)
        SQL);
        $this->addSql(<<<'SQL'
            CREATE INDEX IDX_4DD0B771F347EFB ON ppr_tarifications (produit_id)
        SQL);
        $this->addSql(<<<'SQL'
            CREATE TABLE ppr_type_tarification (id INT IDENTITY NOT NULL, code NVARCHAR(255), titre NVARCHAR(255), active BIT, created DATETIME2(6), PRIMARY KEY (id))
        SQL);
        $this->addSql(<<<'SQL'
            CREATE TABLE ppr_unites (id INT IDENTITY NOT NULL, code NVARCHAR(255), titre NVARCHAR(255), active BIT, created DATETIME2(6), PRIMARY KEY (id))
        SQL);
        $this->addSql(<<<'SQL'
            CREATE TABLE pproduits (id INT IDENTITY NOT NULL, p_pr_unite_id INT, niveau_id INT, dci_id INT, code NVARCHAR(255), titre NVARCHAR(255), description NVARCHAR(255), code_interne INT, forme NVARCHAR(255), dosage NVARCHAR(255), ean NVARCHAR(255), ean_acess NVARCHAR(255), atc NVARCHAR(255), code_imm NVARCHAR(255), liste NVARCHAR(255), observation NVARCHAR(255), fabricant NVARCHAR(255), dimension_physique NVARCHAR(255), presentation_article NVARCHAR(255), active BIT, created DATETIME2(6), PRIMARY KEY (id))
        SQL);
        $this->addSql(<<<'SQL'
            CREATE INDEX IDX_CDA5D79ED372DD48 ON pproduits (p_pr_unite_id)
        SQL);
        $this->addSql(<<<'SQL'
            CREATE INDEX IDX_CDA5D79EB3E9C81 ON pproduits (niveau_id)
        SQL);
        $this->addSql(<<<'SQL'
            CREATE INDEX IDX_CDA5D79E231B45D9 ON pproduits (dci_id)
        SQL);
        $this->addSql(<<<'SQL'
            CREATE TABLE ptype_partenaire (id INT IDENTITY NOT NULL, code NVARCHAR(255), titre NVARCHAR(255), active BIT, created DATETIME2(6), PRIMARY KEY (id))
        SQL);
        $this->addSql(<<<'SQL'
            CREATE TABLE ptype_pieces (id INT IDENTITY NOT NULL, code NVARCHAR(255), titre NVARCHAR(255), active BIT, created DATETIME2(6), PRIMARY KEY (id))
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE pdepots ADD CONSTRAINT FK_19580AD19BEA957A FOREIGN KEY (entite_id) REFERENCES p_entite (id)
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE pdepots ADD CONSTRAINT FK_19580AD1F987D8A8 FOREIGN KEY (user_created_id) REFERENCES p_pv000_user (id)
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE pdepots ADD CONSTRAINT FK_19580AD1316B011F FOREIGN KEY (user_updated_id) REFERENCES p_pv000_user (id)
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE pmagasins ADD CONSTRAINT FK_CDD8DD2D8510D4DE FOREIGN KEY (depot_id) REFERENCES pdepots (id)
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE pmagasins ADD CONSTRAINT FK_CDD8DD2DF987D8A8 FOREIGN KEY (user_created_id) REFERENCES p_pv000_user (id)
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE pmagasins ADD CONSTRAINT FK_CDD8DD2D316B011F FOREIGN KEY (user_updated_id) REFERENCES p_pv000_user (id)
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE ppartenaires ADD CONSTRAINT FK_E628E659E833A499 FOREIGN KEY (type_partenaire_id) REFERENCES ptype_partenaire (id)
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE ppartenaires ADD CONSTRAINT FK_E628E6599BEA957A FOREIGN KEY (entite_id) REFERENCES p_entite (id)
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE ppartenaires ADD CONSTRAINT FK_E628E659F987D8A8 FOREIGN KEY (user_created_id) REFERENCES p_pv000_user (id)
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE ppr_niveau_produits ADD CONSTRAINT FK_4D6D1123727ACA70 FOREIGN KEY (parent_id) REFERENCES ppr_niveau_produits (id)
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE ppr_tarifications ADD CONSTRAINT FK_4DD0B771503D61F4 FOREIGN KEY (type_tarification_id) REFERENCES ppr_type_tarification (id)
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE ppr_tarifications ADD CONSTRAINT FK_4DD0B771F4445056 FOREIGN KEY (devise_id) REFERENCES pdevise (id)
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE ppr_tarifications ADD CONSTRAINT FK_4DD0B771F347EFB FOREIGN KEY (produit_id) REFERENCES pproduits (id)
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE pproduits ADD CONSTRAINT FK_CDA5D79ED372DD48 FOREIGN KEY (p_pr_unite_id) REFERENCES ppr_unites (id)
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE pproduits ADD CONSTRAINT FK_CDA5D79EB3E9C81 FOREIGN KEY (niveau_id) REFERENCES ppr_niveau_produits (id)
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE pproduits ADD CONSTRAINT FK_CDA5D79E231B45D9 FOREIGN KEY (dci_id) REFERENCES ppr_dci (id)
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE data_audit ALTER COLUMN table_name NVARCHAR(255) NOT NULL
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE data_audit ALTER COLUMN operation NVARCHAR(10) NOT NULL
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE data_audit ALTER COLUMN old_data VARCHAR(MAX) NOT NULL
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE data_audit ALTER COLUMN new_data VARCHAR(MAX)
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE p_counter ALTER COLUMN piece NVARCHAR(255) NOT NULL
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE p_counter ALTER COLUMN entite_abreviation NVARCHAR(255)
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE p_entite ALTER COLUMN code NVARCHAR(50)
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE p_entite ALTER COLUMN address NVARCHAR(255)
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE p_entite ALTER COLUMN tel NVARCHAR(50)
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE p_entite ALTER COLUMN prefix NVARCHAR(50)
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE p_entite ALTER COLUMN title NVARCHAR(255)
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE p_entite ALTER COLUMN cce_0_libelle NVARCHAR(255)
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE p_entite ALTER COLUMN cce_0 NVARCHAR(50)
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE p_entite ALTER COLUMN fcy_0_libelle NVARCHAR(255)
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE p_entite ALTER COLUMN fcy_0 NVARCHAR(50)
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE p_entite ALTER COLUMN logo NVARCHAR(255)
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE p_entite ALTER COLUMN natureentite NVARCHAR(255)
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE p_entite_org ALTER COLUMN designation NVARCHAR(255)
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE p_entite_org ALTER COLUMN code NVARCHAR(255)
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE p_entite_org ALTER COLUMN abreviation NVARCHAR(255)
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE p_entite_org ALTER COLUMN prefix NVARCHAR(50)
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE p_entite_org ALTER COLUMN natureentite NVARCHAR(255)
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE p_entite_org ALTER COLUMN parente NVARCHAR(255)
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE p_pv000_user ALTER COLUMN username NVARCHAR(180) NOT NULL
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE p_pv000_user ALTER COLUMN roles VARCHAR(MAX) NOT NULL
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE p_pv000_user ALTER COLUMN password NVARCHAR(255) NOT NULL
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE p_pv000_user ALTER COLUMN name NVARCHAR(255) NOT NULL
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE p_pv000_user ALTER COLUMN route NVARCHAR(255)
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE p_pv001_profession ALTER COLUMN description NVARCHAR(255) NOT NULL
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE p_pv002_action ALTER COLUMN nom NVARCHAR(255) NOT NULL
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE p_pv002_action ALTER COLUMN icon NVARCHAR(255)
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE p_pv002_action ALTER COLUMN class_name NVARCHAR(255)
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE p_pv002_action ALTER COLUMN id_name NVARCHAR(255)
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE p_pv002_action ALTER COLUMN route NVARCHAR(255)
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE p_pv002_action ALTER COLUMN modal_name NVARCHAR(255)
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE p_pv003_module ALTER COLUMN nom NVARCHAR(255) NOT NULL
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE p_pv003_module ALTER COLUMN icon NVARCHAR(255)
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE p_pv003_module ALTER COLUMN route NVARCHAR(255)
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE p_pv003_module ALTER COLUMN abreviation NVARCHAR(255)
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE p_pv003_module ALTER COLUMN image NVARCHAR(255)
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE p_pv004_sousmodule ALTER COLUMN nom NVARCHAR(255) NOT NULL
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE p_pv004_sousmodule ALTER COLUMN route NVARCHAR(255)
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE p_statut ALTER COLUMN designation NVARCHAR(255) NOT NULL
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE p_statut ALTER COLUMN type NVARCHAR(255) NOT NULL
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE p_type_piece ALTER COLUMN code NVARCHAR(255)
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE p_type_piece ALTER COLUMN description NVARCHAR(255)
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
            ALTER TABLE pdepots DROP CONSTRAINT FK_19580AD19BEA957A
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE pdepots DROP CONSTRAINT FK_19580AD1F987D8A8
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE pdepots DROP CONSTRAINT FK_19580AD1316B011F
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE pmagasins DROP CONSTRAINT FK_CDD8DD2D8510D4DE
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE pmagasins DROP CONSTRAINT FK_CDD8DD2DF987D8A8
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE pmagasins DROP CONSTRAINT FK_CDD8DD2D316B011F
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE ppartenaires DROP CONSTRAINT FK_E628E659E833A499
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE ppartenaires DROP CONSTRAINT FK_E628E6599BEA957A
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE ppartenaires DROP CONSTRAINT FK_E628E659F987D8A8
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE ppr_niveau_produits DROP CONSTRAINT FK_4D6D1123727ACA70
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE ppr_tarifications DROP CONSTRAINT FK_4DD0B771503D61F4
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE ppr_tarifications DROP CONSTRAINT FK_4DD0B771F4445056
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE ppr_tarifications DROP CONSTRAINT FK_4DD0B771F347EFB
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE pproduits DROP CONSTRAINT FK_CDA5D79ED372DD48
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE pproduits DROP CONSTRAINT FK_CDA5D79EB3E9C81
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE pproduits DROP CONSTRAINT FK_CDA5D79E231B45D9
        SQL);
        $this->addSql(<<<'SQL'
            DROP TABLE pdepots
        SQL);
        $this->addSql(<<<'SQL'
            DROP TABLE pdevise
        SQL);
        $this->addSql(<<<'SQL'
            DROP TABLE pet_type_entites
        SQL);
        $this->addSql(<<<'SQL'
            DROP TABLE pmagasins
        SQL);
        $this->addSql(<<<'SQL'
            DROP TABLE ppartenaires
        SQL);
        $this->addSql(<<<'SQL'
            DROP TABLE ppr_dci
        SQL);
        $this->addSql(<<<'SQL'
            DROP TABLE ppr_niveau_produits
        SQL);
        $this->addSql(<<<'SQL'
            DROP TABLE ppr_tarifications
        SQL);
        $this->addSql(<<<'SQL'
            DROP TABLE ppr_type_tarification
        SQL);
        $this->addSql(<<<'SQL'
            DROP TABLE ppr_unites
        SQL);
        $this->addSql(<<<'SQL'
            DROP TABLE pproduits
        SQL);
        $this->addSql(<<<'SQL'
            DROP TABLE ptype_partenaire
        SQL);
        $this->addSql(<<<'SQL'
            DROP TABLE ptype_pieces
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE p_entite ALTER COLUMN code NVARCHAR(50) COLLATE Latin1_General_CI_AS
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE p_entite ALTER COLUMN address NVARCHAR(255) COLLATE Latin1_General_CI_AS
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE p_entite ALTER COLUMN tel NVARCHAR(50) COLLATE Latin1_General_CI_AS
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE p_entite ALTER COLUMN prefix NVARCHAR(50) COLLATE Latin1_General_CI_AS
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE p_entite ALTER COLUMN title NVARCHAR(255) COLLATE Latin1_General_CI_AS
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE p_entite ALTER COLUMN cce_0_libelle NVARCHAR(255) COLLATE Latin1_General_CI_AS
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE p_entite ALTER COLUMN cce_0 NVARCHAR(50) COLLATE Latin1_General_CI_AS
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE p_entite ALTER COLUMN fcy_0_libelle NVARCHAR(255) COLLATE Latin1_General_CI_AS
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE p_entite ALTER COLUMN fcy_0 NVARCHAR(50) COLLATE Latin1_General_CI_AS
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE p_entite ALTER COLUMN logo NVARCHAR(255) COLLATE Latin1_General_CI_AS
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE p_entite ALTER COLUMN natureentite NVARCHAR(255) COLLATE Latin1_General_CI_AS
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE p_entite_org ALTER COLUMN designation NVARCHAR(255) COLLATE Latin1_General_CI_AS
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE p_entite_org ALTER COLUMN code NVARCHAR(255) COLLATE Latin1_General_CI_AS
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE p_entite_org ALTER COLUMN abreviation NVARCHAR(255) COLLATE Latin1_General_CI_AS
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE p_entite_org ALTER COLUMN prefix NVARCHAR(50) COLLATE Latin1_General_CI_AS
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE p_entite_org ALTER COLUMN natureentite NVARCHAR(255) COLLATE Latin1_General_CI_AS
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE p_entite_org ALTER COLUMN parente NVARCHAR(255) COLLATE Latin1_General_CI_AS
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE p_pv000_user ALTER COLUMN username NVARCHAR(180) COLLATE Latin1_General_CI_AS NOT NULL
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE p_pv000_user ALTER COLUMN roles VARCHAR(MAX) COLLATE Latin1_General_CI_AS NOT NULL
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE p_pv000_user ALTER COLUMN password NVARCHAR(255) COLLATE Latin1_General_CI_AS NOT NULL
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE p_pv000_user ALTER COLUMN name NVARCHAR(255) COLLATE Latin1_General_CI_AS NOT NULL
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE p_pv000_user ALTER COLUMN route NVARCHAR(255) COLLATE Latin1_General_CI_AS
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE p_pv001_profession ALTER COLUMN description NVARCHAR(255) COLLATE Latin1_General_CI_AS NOT NULL
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE p_pv002_action ALTER COLUMN nom NVARCHAR(255) COLLATE Latin1_General_CI_AS NOT NULL
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE p_pv002_action ALTER COLUMN icon NVARCHAR(255) COLLATE Latin1_General_CI_AS
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE p_pv002_action ALTER COLUMN class_name NVARCHAR(255) COLLATE Latin1_General_CI_AS
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE p_pv002_action ALTER COLUMN id_name NVARCHAR(255) COLLATE Latin1_General_CI_AS
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE p_pv002_action ALTER COLUMN route NVARCHAR(255) COLLATE Latin1_General_CI_AS
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE p_pv002_action ALTER COLUMN modal_name NVARCHAR(255) COLLATE Latin1_General_CI_AS
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE p_pv003_module ALTER COLUMN nom NVARCHAR(255) COLLATE Latin1_General_CI_AS NOT NULL
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE p_pv003_module ALTER COLUMN icon NVARCHAR(255) COLLATE Latin1_General_CI_AS
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE p_pv003_module ALTER COLUMN route NVARCHAR(255) COLLATE Latin1_General_CI_AS
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE p_pv003_module ALTER COLUMN abreviation NVARCHAR(255) COLLATE Latin1_General_CI_AS
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE p_pv003_module ALTER COLUMN image NVARCHAR(255) COLLATE Latin1_General_CI_AS
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE p_pv004_sousmodule ALTER COLUMN nom NVARCHAR(255) COLLATE Latin1_General_CI_AS NOT NULL
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE p_pv004_sousmodule ALTER COLUMN route NVARCHAR(255) COLLATE Latin1_General_CI_AS
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE data_audit ALTER COLUMN table_name NVARCHAR(255) COLLATE Latin1_General_CI_AS NOT NULL
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE data_audit ALTER COLUMN operation NVARCHAR(10) COLLATE Latin1_General_CI_AS NOT NULL
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE data_audit ALTER COLUMN old_data VARCHAR(MAX) COLLATE Latin1_General_CI_AS NOT NULL
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE data_audit ALTER COLUMN new_data VARCHAR(MAX) COLLATE Latin1_General_CI_AS
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE p_counter ALTER COLUMN piece NVARCHAR(255) COLLATE Latin1_General_CI_AS NOT NULL
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE p_counter ALTER COLUMN entite_abreviation NVARCHAR(255) COLLATE Latin1_General_CI_AS
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE p_statut ALTER COLUMN designation NVARCHAR(255) COLLATE Latin1_General_CI_AS NOT NULL
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE p_statut ALTER COLUMN type NVARCHAR(255) COLLATE Latin1_General_CI_AS NOT NULL
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE p_type_piece ALTER COLUMN code NVARCHAR(255) COLLATE Latin1_General_CI_AS
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE p_type_piece ALTER COLUMN description NVARCHAR(255) COLLATE Latin1_General_CI_AS
        SQL);
    }
}
