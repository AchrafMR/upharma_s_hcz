<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20250603104126 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql(<<<'SQL'
            CREATE TABLE t_ms_commande (id INT IDENTITY NOT NULL, user_created_id INT NOT NULL, user_updated_id INT, user_valider_id INT, user_generer_id INT, user_annuler_id INT, user_archiver_id INT, type_demande_id INT NOT NULL, demandeur_id INT NOT NULL, recepteur_id INT, p_partenaires_id_id INT, p_entite_id INT, t_ms_demande_id INT NOT NULL, code NVARCHAR(100), description VARCHAR(MAX), nom_patient NVARCHAR(255), dossier_patient NVARCHAR(255), position_actuel NVARCHAR(255) NOT NULL, historique VARCHAR(MAX), urgent BIT NOT NULL, date_valider DATETIME2(6), date_generer DATETIME2(6), date_annuler DATETIME2(6), created DATETIME2(6) NOT NULL, updated DATETIME2(6), actif BIT NOT NULL, flag_synchronisation_locale BIT, ipp NVARCHAR(255), PRIMARY KEY (id))
        SQL);
        $this->addSql(<<<'SQL'
            CREATE INDEX IDX_1BCB87FAF987D8A8 ON t_ms_commande (user_created_id)
        SQL);
        $this->addSql(<<<'SQL'
            CREATE INDEX IDX_1BCB87FA316B011F ON t_ms_commande (user_updated_id)
        SQL);
        $this->addSql(<<<'SQL'
            CREATE INDEX IDX_1BCB87FAF749B324 ON t_ms_commande (user_valider_id)
        SQL);
        $this->addSql(<<<'SQL'
            CREATE INDEX IDX_1BCB87FA32C38471 ON t_ms_commande (user_generer_id)
        SQL);
        $this->addSql(<<<'SQL'
            CREATE INDEX IDX_1BCB87FAE38A95CE ON t_ms_commande (user_annuler_id)
        SQL);
        $this->addSql(<<<'SQL'
            CREATE INDEX IDX_1BCB87FAD2B09A9 ON t_ms_commande (user_archiver_id)
        SQL);
        $this->addSql(<<<'SQL'
            CREATE INDEX IDX_1BCB87FA9DEA883D ON t_ms_commande (type_demande_id)
        SQL);
        $this->addSql(<<<'SQL'
            CREATE INDEX IDX_1BCB87FA95A6EE59 ON t_ms_commande (demandeur_id)
        SQL);
        $this->addSql(<<<'SQL'
            CREATE INDEX IDX_1BCB87FA3B49782D ON t_ms_commande (recepteur_id)
        SQL);
        $this->addSql(<<<'SQL'
            CREATE INDEX IDX_1BCB87FADF648904 ON t_ms_commande (p_partenaires_id_id)
        SQL);
        $this->addSql(<<<'SQL'
            CREATE INDEX IDX_1BCB87FAA059BF0E ON t_ms_commande (p_entite_id)
        SQL);
        $this->addSql(<<<'SQL'
            CREATE INDEX IDX_1BCB87FAB84235EB ON t_ms_commande (t_ms_demande_id)
        SQL);
        $this->addSql(<<<'SQL'
            CREATE TABLE tms_commandelg (id INT IDENTITY NOT NULL, t_ms_commande_id INT NOT NULL, p_produit_id INT NOT NULL, p_pr_unite_id INT, quantite_commandee DOUBLE PRECISION NOT NULL, quantite_servie DOUBLE PRECISION, quantite_reste DOUBLE PRECISION, prix_unitaire DOUBLE PRECISION NOT NULL, remise DOUBLE PRECISION, tva DOUBLE PRECISION, montant_ht DOUBLE PRECISION NOT NULL, montant_ttc DOUBLE PRECISION NOT NULL, observation VARCHAR(MAX), code_comptable NVARCHAR(255), flag_synchronisation_locale BIT, PRIMARY KEY (id))
        SQL);
        $this->addSql(<<<'SQL'
            CREATE INDEX IDX_CEDC400AA6662699 ON tms_commandelg (t_ms_commande_id)
        SQL);
        $this->addSql(<<<'SQL'
            CREATE INDEX IDX_CEDC400A586778F4 ON tms_commandelg (p_produit_id)
        SQL);
        $this->addSql(<<<'SQL'
            CREATE INDEX IDX_CEDC400AD372DD48 ON tms_commandelg (p_pr_unite_id)
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE t_ms_commande ADD CONSTRAINT FK_1BCB87FAF987D8A8 FOREIGN KEY (user_created_id) REFERENCES p_pv000_user (id)
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE t_ms_commande ADD CONSTRAINT FK_1BCB87FA316B011F FOREIGN KEY (user_updated_id) REFERENCES p_pv000_user (id)
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE t_ms_commande ADD CONSTRAINT FK_1BCB87FAF749B324 FOREIGN KEY (user_valider_id) REFERENCES p_pv000_user (id)
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE t_ms_commande ADD CONSTRAINT FK_1BCB87FA32C38471 FOREIGN KEY (user_generer_id) REFERENCES p_pv000_user (id)
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE t_ms_commande ADD CONSTRAINT FK_1BCB87FAE38A95CE FOREIGN KEY (user_annuler_id) REFERENCES p_pv000_user (id)
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE t_ms_commande ADD CONSTRAINT FK_1BCB87FAD2B09A9 FOREIGN KEY (user_archiver_id) REFERENCES p_pv000_user (id)
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE t_ms_commande ADD CONSTRAINT FK_1BCB87FA9DEA883D FOREIGN KEY (type_demande_id) REFERENCES p_type_oprt (id)
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE t_ms_commande ADD CONSTRAINT FK_1BCB87FA95A6EE59 FOREIGN KEY (demandeur_id) REFERENCES pmagasins (id)
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE t_ms_commande ADD CONSTRAINT FK_1BCB87FA3B49782D FOREIGN KEY (recepteur_id) REFERENCES pmagasins (id)
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE t_ms_commande ADD CONSTRAINT FK_1BCB87FADF648904 FOREIGN KEY (p_partenaires_id_id) REFERENCES ppartenaires (id)
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE t_ms_commande ADD CONSTRAINT FK_1BCB87FAA059BF0E FOREIGN KEY (p_entite_id) REFERENCES p_entite (id)
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE t_ms_commande ADD CONSTRAINT FK_1BCB87FAB84235EB FOREIGN KEY (t_ms_demande_id) REFERENCES t_ms_demande (id)
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE tms_commandelg ADD CONSTRAINT FK_CEDC400AA6662699 FOREIGN KEY (t_ms_commande_id) REFERENCES t_ms_commande (id)
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE tms_commandelg ADD CONSTRAINT FK_CEDC400A586778F4 FOREIGN KEY (p_produit_id) REFERENCES p_produits (id)
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE tms_commandelg ADD CONSTRAINT FK_CEDC400AD372DD48 FOREIGN KEY (p_pr_unite_id) REFERENCES ppr_unites (id)
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE tms_commande DROP CONSTRAINT FK_7C846EF3F987D8A8
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE tms_commande DROP CONSTRAINT FK_7C846EF3316B011F
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE tms_commande DROP CONSTRAINT FK_7C846EF3F749B324
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE tms_commande DROP CONSTRAINT FK_7C846EF332C38471
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE tms_commande DROP CONSTRAINT FK_7C846EF3E38A95CE
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE tms_commande DROP CONSTRAINT FK_7C846EF3D2B09A9
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE tms_commande DROP CONSTRAINT FK_7C846EF39DEA883D
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE tms_commande DROP CONSTRAINT FK_7C846EF3DF648904
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE tms_commande DROP CONSTRAINT FK_7C846EF3A059BF0E
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE tms_commande DROP CONSTRAINT FK_7C846EF395A6EE59
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE tms_commande DROP CONSTRAINT FK_7C846EF33B49782D
        SQL);
        $this->addSql(<<<'SQL'
            DROP TABLE tms_commande
        SQL);
        $this->addSql(<<<'SQL'
            EXEC sp_rename N't_ms_Demande.idx_a2abf5fbf987d8a8', N'IDX_6D16CC67F987D8A8', N'INDEX'
        SQL);
        $this->addSql(<<<'SQL'
            EXEC sp_rename N't_ms_Demande.idx_a2abf5fb316b011f', N'IDX_6D16CC67316B011F', N'INDEX'
        SQL);
        $this->addSql(<<<'SQL'
            EXEC sp_rename N't_ms_Demande.idx_a2abf5fbf749b324', N'IDX_6D16CC67F749B324', N'INDEX'
        SQL);
        $this->addSql(<<<'SQL'
            EXEC sp_rename N't_ms_Demande.idx_a2abf5fb32c38471', N'IDX_6D16CC6732C38471', N'INDEX'
        SQL);
        $this->addSql(<<<'SQL'
            EXEC sp_rename N't_ms_Demande.idx_a2abf5fbe38a95ce', N'IDX_6D16CC67E38A95CE', N'INDEX'
        SQL);
        $this->addSql(<<<'SQL'
            EXEC sp_rename N't_ms_Demande.idx_a2abf5fbd2b09a9', N'IDX_6D16CC67D2B09A9', N'INDEX'
        SQL);
        $this->addSql(<<<'SQL'
            EXEC sp_rename N't_ms_Demande.idx_a2abf5fb9dea883d', N'IDX_6D16CC679DEA883D', N'INDEX'
        SQL);
        $this->addSql(<<<'SQL'
            EXEC sp_rename N't_ms_Demande.idx_a2abf5fb95a6ee59', N'IDX_6D16CC6795A6EE59', N'INDEX'
        SQL);
        $this->addSql(<<<'SQL'
            EXEC sp_rename N't_ms_Demande.idx_a2abf5fb3b49782d', N'IDX_6D16CC673B49782D', N'INDEX'
        SQL);
        $this->addSql(<<<'SQL'
            EXEC sp_rename N't_ms_Demande.idx_a2abf5fbfe2ad1', N'IDX_6D16CC67FE2AD1', N'INDEX'
        SQL);
        $this->addSql(<<<'SQL'
            EXEC sp_rename N't_ms_Demande.idx_a2abf5fba059bf0e', N'IDX_6D16CC67A059BF0E', N'INDEX'
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
            CREATE TABLE tms_commande (id INT IDENTITY NOT NULL, user_created_id INT NOT NULL, user_updated_id INT, user_valider_id INT, user_generer_id INT, user_annuler_id INT, user_archiver_id INT, type_demande_id INT NOT NULL, p_partenaires_id_id INT, p_entite_id INT, demandeur_id INT NOT NULL, recepteur_id INT, code NVARCHAR(100) COLLATE SQL_Latin1_General_CP1_CI_AS, description VARCHAR(MAX) COLLATE SQL_Latin1_General_CP1_CI_AS, nom_patient NVARCHAR(255) COLLATE SQL_Latin1_General_CP1_CI_AS, dossier_patient NVARCHAR(255) COLLATE SQL_Latin1_General_CP1_CI_AS, position_actuel NVARCHAR(255) COLLATE SQL_Latin1_General_CP1_CI_AS NOT NULL, historique VARCHAR(MAX) COLLATE SQL_Latin1_General_CP1_CI_AS, urgent BIT NOT NULL, date_valider DATETIME2(6), date_generer DATETIME2(6), date_annuler DATETIME2(6), created DATETIME2(6) NOT NULL, updated DATETIME2(6), actif BIT NOT NULL, flag_synchronisation_locale BIT, ipp NVARCHAR(255) COLLATE SQL_Latin1_General_CP1_CI_AS, PRIMARY KEY (id))
        SQL);
        $this->addSql(<<<'SQL'
            CREATE NONCLUSTERED INDEX IDX_7C846EF3F987D8A8 ON tms_commande (user_created_id)
        SQL);
        $this->addSql(<<<'SQL'
            CREATE NONCLUSTERED INDEX IDX_7C846EF3316B011F ON tms_commande (user_updated_id)
        SQL);
        $this->addSql(<<<'SQL'
            CREATE NONCLUSTERED INDEX IDX_7C846EF3F749B324 ON tms_commande (user_valider_id)
        SQL);
        $this->addSql(<<<'SQL'
            CREATE NONCLUSTERED INDEX IDX_7C846EF332C38471 ON tms_commande (user_generer_id)
        SQL);
        $this->addSql(<<<'SQL'
            CREATE NONCLUSTERED INDEX IDX_7C846EF3E38A95CE ON tms_commande (user_annuler_id)
        SQL);
        $this->addSql(<<<'SQL'
            CREATE NONCLUSTERED INDEX IDX_7C846EF3D2B09A9 ON tms_commande (user_archiver_id)
        SQL);
        $this->addSql(<<<'SQL'
            CREATE NONCLUSTERED INDEX IDX_7C846EF39DEA883D ON tms_commande (type_demande_id)
        SQL);
        $this->addSql(<<<'SQL'
            CREATE NONCLUSTERED INDEX IDX_7C846EF395A6EE59 ON tms_commande (demandeur_id)
        SQL);
        $this->addSql(<<<'SQL'
            CREATE NONCLUSTERED INDEX IDX_7C846EF33B49782D ON tms_commande (recepteur_id)
        SQL);
        $this->addSql(<<<'SQL'
            CREATE NONCLUSTERED INDEX IDX_7C846EF3DF648904 ON tms_commande (p_partenaires_id_id)
        SQL);
        $this->addSql(<<<'SQL'
            CREATE NONCLUSTERED INDEX IDX_7C846EF3A059BF0E ON tms_commande (p_entite_id)
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE tms_commande ADD CONSTRAINT FK_7C846EF3F987D8A8 FOREIGN KEY (user_created_id) REFERENCES p_pv000_user (id) ON UPDATE NO ACTION ON DELETE NO ACTION
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE tms_commande ADD CONSTRAINT FK_7C846EF3316B011F FOREIGN KEY (user_updated_id) REFERENCES p_pv000_user (id) ON UPDATE NO ACTION ON DELETE NO ACTION
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE tms_commande ADD CONSTRAINT FK_7C846EF3F749B324 FOREIGN KEY (user_valider_id) REFERENCES p_pv000_user (id) ON UPDATE NO ACTION ON DELETE NO ACTION
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE tms_commande ADD CONSTRAINT FK_7C846EF332C38471 FOREIGN KEY (user_generer_id) REFERENCES p_pv000_user (id) ON UPDATE NO ACTION ON DELETE NO ACTION
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE tms_commande ADD CONSTRAINT FK_7C846EF3E38A95CE FOREIGN KEY (user_annuler_id) REFERENCES p_pv000_user (id) ON UPDATE NO ACTION ON DELETE NO ACTION
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE tms_commande ADD CONSTRAINT FK_7C846EF3D2B09A9 FOREIGN KEY (user_archiver_id) REFERENCES p_pv000_user (id) ON UPDATE NO ACTION ON DELETE NO ACTION
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE tms_commande ADD CONSTRAINT FK_7C846EF39DEA883D FOREIGN KEY (type_demande_id) REFERENCES p_type_oprt (id) ON UPDATE NO ACTION ON DELETE NO ACTION
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE tms_commande ADD CONSTRAINT FK_7C846EF3DF648904 FOREIGN KEY (p_partenaires_id_id) REFERENCES ppartenaires (id) ON UPDATE NO ACTION ON DELETE NO ACTION
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE tms_commande ADD CONSTRAINT FK_7C846EF3A059BF0E FOREIGN KEY (p_entite_id) REFERENCES p_entite (id) ON UPDATE NO ACTION ON DELETE NO ACTION
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE tms_commande ADD CONSTRAINT FK_7C846EF395A6EE59 FOREIGN KEY (demandeur_id) REFERENCES pmagasins (id) ON UPDATE NO ACTION ON DELETE NO ACTION
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE tms_commande ADD CONSTRAINT FK_7C846EF33B49782D FOREIGN KEY (recepteur_id) REFERENCES pmagasins (id) ON UPDATE NO ACTION ON DELETE NO ACTION
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE t_ms_commande DROP CONSTRAINT FK_1BCB87FAF987D8A8
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE t_ms_commande DROP CONSTRAINT FK_1BCB87FA316B011F
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE t_ms_commande DROP CONSTRAINT FK_1BCB87FAF749B324
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE t_ms_commande DROP CONSTRAINT FK_1BCB87FA32C38471
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE t_ms_commande DROP CONSTRAINT FK_1BCB87FAE38A95CE
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE t_ms_commande DROP CONSTRAINT FK_1BCB87FAD2B09A9
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE t_ms_commande DROP CONSTRAINT FK_1BCB87FA9DEA883D
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE t_ms_commande DROP CONSTRAINT FK_1BCB87FA95A6EE59
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE t_ms_commande DROP CONSTRAINT FK_1BCB87FA3B49782D
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE t_ms_commande DROP CONSTRAINT FK_1BCB87FADF648904
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE t_ms_commande DROP CONSTRAINT FK_1BCB87FAA059BF0E
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE t_ms_commande DROP CONSTRAINT FK_1BCB87FAB84235EB
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
            DROP TABLE t_ms_commande
        SQL);
        $this->addSql(<<<'SQL'
            DROP TABLE tms_commandelg
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE t_ms_demandelg ALTER COLUMN actif INT
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE t_ms_demandelg ADD CONSTRAINT DF_E329DC42_8F52502 DEFAULT 1 FOR actif
        SQL);
        $this->addSql(<<<'SQL'
            EXEC sp_rename N't_ms_demande.idx_6d16cc67f987d8a8', N'IDX_A2ABF5FBF987D8A8', N'INDEX'
        SQL);
        $this->addSql(<<<'SQL'
            EXEC sp_rename N't_ms_demande.idx_6d16cc67316b011f', N'IDX_A2ABF5FB316B011F', N'INDEX'
        SQL);
        $this->addSql(<<<'SQL'
            EXEC sp_rename N't_ms_demande.idx_6d16cc67f749b324', N'IDX_A2ABF5FBF749B324', N'INDEX'
        SQL);
        $this->addSql(<<<'SQL'
            EXEC sp_rename N't_ms_demande.idx_6d16cc6732c38471', N'IDX_A2ABF5FB32C38471', N'INDEX'
        SQL);
        $this->addSql(<<<'SQL'
            EXEC sp_rename N't_ms_demande.idx_6d16cc67e38a95ce', N'IDX_A2ABF5FBE38A95CE', N'INDEX'
        SQL);
        $this->addSql(<<<'SQL'
            EXEC sp_rename N't_ms_demande.idx_6d16cc67d2b09a9', N'IDX_A2ABF5FBD2B09A9', N'INDEX'
        SQL);
        $this->addSql(<<<'SQL'
            EXEC sp_rename N't_ms_demande.idx_6d16cc679dea883d', N'IDX_A2ABF5FB9DEA883D', N'INDEX'
        SQL);
        $this->addSql(<<<'SQL'
            EXEC sp_rename N't_ms_demande.idx_6d16cc6795a6ee59', N'IDX_A2ABF5FB95A6EE59', N'INDEX'
        SQL);
        $this->addSql(<<<'SQL'
            EXEC sp_rename N't_ms_demande.idx_6d16cc673b49782d', N'IDX_A2ABF5FB3B49782D', N'INDEX'
        SQL);
        $this->addSql(<<<'SQL'
            EXEC sp_rename N't_ms_demande.idx_6d16cc67fe2ad1', N'IDX_A2ABF5FBFE2AD1', N'INDEX'
        SQL);
        $this->addSql(<<<'SQL'
            EXEC sp_rename N't_ms_demande.idx_6d16cc67a059bf0e', N'IDX_A2ABF5FBA059BF0E', N'INDEX'
        SQL);
    }
}
