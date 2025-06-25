<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20250407135216 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql(<<<'SQL'
            CREATE TABLE data_audit (id INT IDENTITY NOT NULL, table_name NVARCHAR(255) NOT NULL, operation NVARCHAR(10) NOT NULL, row_id INT NOT NULL, old_data VARCHAR(MAX) NOT NULL, new_data VARCHAR(MAX), changed_at DATETIME2(6) NOT NULL, PRIMARY KEY (id))
        SQL);
        $this->addSql(<<<'SQL'
            EXEC sp_addextendedproperty N'MS_Description', N'(DC2Type:json)', N'SCHEMA', 'dbo', N'TABLE', 'data_audit', N'COLUMN', 'old_data'
        SQL);
        $this->addSql(<<<'SQL'
            EXEC sp_addextendedproperty N'MS_Description', N'(DC2Type:json)', N'SCHEMA', 'dbo', N'TABLE', 'data_audit', N'COLUMN', 'new_data'
        SQL);
        $this->addSql(<<<'SQL'
            EXEC sp_addextendedproperty N'MS_Description', N'(DC2Type:datetime_immutable)', N'SCHEMA', 'dbo', N'TABLE', 'data_audit', N'COLUMN', 'changed_at'
        SQL);
        $this->addSql(<<<'SQL'
            CREATE TABLE p_counter (id INT IDENTITY NOT NULL, entite_id INT, type_piece_id INT, piece NVARCHAR(255) NOT NULL, count INT NOT NULL, annee INT, entite_abreviation NVARCHAR(255), PRIMARY KEY (id))
        SQL);
        $this->addSql(<<<'SQL'
            CREATE INDEX IDX_C6E27D179BEA957A ON p_counter (entite_id)
        SQL);
        $this->addSql(<<<'SQL'
            CREATE INDEX IDX_C6E27D179F0E854 ON p_counter (type_piece_id)
        SQL);
        $this->addSql(<<<'SQL'
            CREATE TABLE p_entite (id INT IDENTITY NOT NULL, parent_id INT, user_created_id INT, organisation_id INT, code NVARCHAR(50), date_created DATETIME2(6), address NVARCHAR(255), tel NVARCHAR(50), active BIT NOT NULL, prefix NVARCHAR(50), title NVARCHAR(255), cce_0_libelle NVARCHAR(255), cce_0 NVARCHAR(50), fcy_0_libelle NVARCHAR(255), fcy_0 NVARCHAR(50), logo NVARCHAR(255), logo_width INT, logo_height INT, ord INT, is_sub_entite BIT NOT NULL, natureentite NVARCHAR(255), niveau INT, PRIMARY KEY (id))
        SQL);
        $this->addSql(<<<'SQL'
            CREATE INDEX IDX_B7046E23727ACA70 ON p_entite (parent_id)
        SQL);
        $this->addSql(<<<'SQL'
            CREATE INDEX IDX_B7046E23F987D8A8 ON p_entite (user_created_id)
        SQL);
        $this->addSql(<<<'SQL'
            CREATE INDEX IDX_B7046E239E6B1585 ON p_entite (organisation_id)
        SQL);
        $this->addSql(<<<'SQL'
            CREATE TABLE p_entite_org (id INT IDENTITY NOT NULL, parent_id INT, designation NVARCHAR(255), code NVARCHAR(255), abreviation NVARCHAR(255), active BIT, prefix NVARCHAR(50), ord INT, niveau INT, natureentite NVARCHAR(255), parente NVARCHAR(255), PRIMARY KEY (id))
        SQL);
        $this->addSql(<<<'SQL'
            CREATE INDEX IDX_FED9A6AB727ACA70 ON p_entite_org (parent_id)
        SQL);
        $this->addSql(<<<'SQL'
            CREATE TABLE p_pv000_user (id INT IDENTITY NOT NULL, pprofession_id INT, user_update_id INT, username NVARCHAR(180) NOT NULL, roles VARCHAR(MAX) NOT NULL, password NVARCHAR(255) NOT NULL, name NVARCHAR(255) NOT NULL, is_active BIT NOT NULL, date_update DATETIME2(6), is_deleted BIT, route NVARCHAR(255), PRIMARY KEY (id))
        SQL);
        $this->addSql(<<<'SQL'
            CREATE UNIQUE INDEX UNIQ_FE69F173F85E0677 ON p_pv000_user (username) WHERE username IS NOT NULL
        SQL);
        $this->addSql(<<<'SQL'
            CREATE INDEX IDX_FE69F173C94F0596 ON p_pv000_user (pprofession_id)
        SQL);
        $this->addSql(<<<'SQL'
            CREATE INDEX IDX_FE69F173D5766755 ON p_pv000_user (user_update_id)
        SQL);
        $this->addSql(<<<'SQL'
            EXEC sp_addextendedproperty N'MS_Description', N'(DC2Type:json)', N'SCHEMA', 'dbo', N'TABLE', 'p_pv000_user', N'COLUMN', 'roles'
        SQL);
        $this->addSql(<<<'SQL'
            CREATE TABLE p_pv001_profession (id INT IDENTITY NOT NULL, user_update_id INT, description NVARCHAR(255) NOT NULL, active BIT NOT NULL, date_update DATETIME2(6), PRIMARY KEY (id))
        SQL);
        $this->addSql(<<<'SQL'
            CREATE INDEX IDX_485AB613D5766755 ON p_pv001_profession (user_update_id)
        SQL);
        $this->addSql(<<<'SQL'
            CREATE TABLE p_pv002_action (id INT IDENTITY NOT NULL, p_sous_module_id INT, user_update_id INT, nom NVARCHAR(255) NOT NULL, date_update DATETIME2(6), icon NVARCHAR(255), ord INT, horizontal BIT, class_name NVARCHAR(255), id_name NVARCHAR(255), route NVARCHAR(255), active BIT, principal BIT, modal BIT, modal_name NVARCHAR(255), PRIMARY KEY (id))
        SQL);
        $this->addSql(<<<'SQL'
            CREATE INDEX IDX_854A93078CBCF8FA ON p_pv002_action (p_sous_module_id)
        SQL);
        $this->addSql(<<<'SQL'
            CREATE INDEX IDX_854A9307D5766755 ON p_pv002_action (user_update_id)
        SQL);
        $this->addSql(<<<'SQL'
            CREATE TABLE p_pv003_module (id INT IDENTITY NOT NULL, user_update_id INT, nom NVARCHAR(255) NOT NULL, date_update DATETIME2(6), icon NVARCHAR(255), route NVARCHAR(255), ord INT, active BIT, setting BIT, abreviation NVARCHAR(255), image NVARCHAR(255), PRIMARY KEY (id))
        SQL);
        $this->addSql(<<<'SQL'
            CREATE INDEX IDX_2083923D5766755 ON p_pv003_module (user_update_id)
        SQL);
        $this->addSql(<<<'SQL'
            CREATE TABLE p_pv004_sousmodule (id INT IDENTITY NOT NULL, p_module_id INT, user_update_id INT, nom NVARCHAR(255) NOT NULL, date_update DATETIME2(6), route NVARCHAR(255), ord INT, active BIT, PRIMARY KEY (id))
        SQL);
        $this->addSql(<<<'SQL'
            CREATE INDEX IDX_9392063B94719FE5 ON p_pv004_sousmodule (p_module_id)
        SQL);
        $this->addSql(<<<'SQL'
            CREATE INDEX IDX_9392063BD5766755 ON p_pv004_sousmodule (user_update_id)
        SQL);
        $this->addSql(<<<'SQL'
            CREATE TABLE p_pv005_user_entite_action (id INT IDENTITY NOT NULL, userr_id INT, dossier_id INT, action_id INT, PRIMARY KEY (id))
        SQL);
        $this->addSql(<<<'SQL'
            CREATE INDEX IDX_13878A31DF0FD358 ON p_pv005_user_entite_action (userr_id)
        SQL);
        $this->addSql(<<<'SQL'
            CREATE INDEX IDX_13878A31611C0C56 ON p_pv005_user_entite_action (dossier_id)
        SQL);
        $this->addSql(<<<'SQL'
            CREATE INDEX IDX_13878A319D32F035 ON p_pv005_user_entite_action (action_id)
        SQL);
        $this->addSql(<<<'SQL'
            CREATE TABLE p_statut (id INT IDENTITY NOT NULL, designation NVARCHAR(255) NOT NULL, type NVARCHAR(255) NOT NULL, active BIT NOT NULL, PRIMARY KEY (id))
        SQL);
        $this->addSql(<<<'SQL'
            CREATE TABLE p_type_piece (id INT IDENTITY NOT NULL, code NVARCHAR(255), description NVARCHAR(255), active BIT, PRIMARY KEY (id))
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE p_counter ADD CONSTRAINT FK_C6E27D179BEA957A FOREIGN KEY (entite_id) REFERENCES p_entite (id)
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE p_counter ADD CONSTRAINT FK_C6E27D179F0E854 FOREIGN KEY (type_piece_id) REFERENCES p_type_piece (id)
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE p_entite ADD CONSTRAINT FK_B7046E23727ACA70 FOREIGN KEY (parent_id) REFERENCES p_entite (id)
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE p_entite ADD CONSTRAINT FK_B7046E23F987D8A8 FOREIGN KEY (user_created_id) REFERENCES p_pv000_user (id)
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE p_entite ADD CONSTRAINT FK_B7046E239E6B1585 FOREIGN KEY (organisation_id) REFERENCES p_entite_org (id)
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE p_entite_org ADD CONSTRAINT FK_FED9A6AB727ACA70 FOREIGN KEY (parent_id) REFERENCES p_entite_org (id)
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE p_pv000_user ADD CONSTRAINT FK_FE69F173C94F0596 FOREIGN KEY (pprofession_id) REFERENCES p_pv001_profession (id)
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE p_pv000_user ADD CONSTRAINT FK_FE69F173D5766755 FOREIGN KEY (user_update_id) REFERENCES p_pv000_user (id)
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE p_pv001_profession ADD CONSTRAINT FK_485AB613D5766755 FOREIGN KEY (user_update_id) REFERENCES p_pv000_user (id)
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE p_pv002_action ADD CONSTRAINT FK_854A93078CBCF8FA FOREIGN KEY (p_sous_module_id) REFERENCES p_pv004_sousmodule (id)
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE p_pv002_action ADD CONSTRAINT FK_854A9307D5766755 FOREIGN KEY (user_update_id) REFERENCES p_pv000_user (id)
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE p_pv003_module ADD CONSTRAINT FK_2083923D5766755 FOREIGN KEY (user_update_id) REFERENCES p_pv000_user (id)
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE p_pv004_sousmodule ADD CONSTRAINT FK_9392063B94719FE5 FOREIGN KEY (p_module_id) REFERENCES p_pv003_module (id)
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE p_pv004_sousmodule ADD CONSTRAINT FK_9392063BD5766755 FOREIGN KEY (user_update_id) REFERENCES p_pv000_user (id)
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE p_pv005_user_entite_action ADD CONSTRAINT FK_13878A31DF0FD358 FOREIGN KEY (userr_id) REFERENCES p_pv000_user (id)
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE p_pv005_user_entite_action ADD CONSTRAINT FK_13878A31611C0C56 FOREIGN KEY (dossier_id) REFERENCES p_entite (id)
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE p_pv005_user_entite_action ADD CONSTRAINT FK_13878A319D32F035 FOREIGN KEY (action_id) REFERENCES p_pv002_action (id)
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
            ALTER TABLE p_counter DROP CONSTRAINT FK_C6E27D179BEA957A
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE p_counter DROP CONSTRAINT FK_C6E27D179F0E854
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE p_entite DROP CONSTRAINT FK_B7046E23727ACA70
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE p_entite DROP CONSTRAINT FK_B7046E23F987D8A8
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE p_entite DROP CONSTRAINT FK_B7046E239E6B1585
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE p_entite_org DROP CONSTRAINT FK_FED9A6AB727ACA70
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE p_pv000_user DROP CONSTRAINT FK_FE69F173C94F0596
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE p_pv000_user DROP CONSTRAINT FK_FE69F173D5766755
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE p_pv001_profession DROP CONSTRAINT FK_485AB613D5766755
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE p_pv002_action DROP CONSTRAINT FK_854A93078CBCF8FA
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE p_pv002_action DROP CONSTRAINT FK_854A9307D5766755
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE p_pv003_module DROP CONSTRAINT FK_2083923D5766755
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE p_pv004_sousmodule DROP CONSTRAINT FK_9392063B94719FE5
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE p_pv004_sousmodule DROP CONSTRAINT FK_9392063BD5766755
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE p_pv005_user_entite_action DROP CONSTRAINT FK_13878A31DF0FD358
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE p_pv005_user_entite_action DROP CONSTRAINT FK_13878A31611C0C56
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE p_pv005_user_entite_action DROP CONSTRAINT FK_13878A319D32F035
        SQL);
        $this->addSql(<<<'SQL'
            DROP TABLE data_audit
        SQL);
        $this->addSql(<<<'SQL'
            DROP TABLE p_counter
        SQL);
        $this->addSql(<<<'SQL'
            DROP TABLE p_entite
        SQL);
        $this->addSql(<<<'SQL'
            DROP TABLE p_entite_org
        SQL);
        $this->addSql(<<<'SQL'
            DROP TABLE p_pv000_user
        SQL);
        $this->addSql(<<<'SQL'
            DROP TABLE p_pv001_profession
        SQL);
        $this->addSql(<<<'SQL'
            DROP TABLE p_pv002_action
        SQL);
        $this->addSql(<<<'SQL'
            DROP TABLE p_pv003_module
        SQL);
        $this->addSql(<<<'SQL'
            DROP TABLE p_pv004_sousmodule
        SQL);
        $this->addSql(<<<'SQL'
            DROP TABLE p_pv005_user_entite_action
        SQL);
        $this->addSql(<<<'SQL'
            DROP TABLE p_statut
        SQL);
        $this->addSql(<<<'SQL'
            DROP TABLE p_type_piece
        SQL);
    }
}
