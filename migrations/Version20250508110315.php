<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20250508110315 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql(<<<'SQL'
            CREATE TABLE p_type_oprt (id INT IDENTITY NOT NULL, code NVARCHAR(255) NOT NULL, titre NVARCHAR(255) NOT NULL, actif BIT NOT NULL, creation DATETIME2(6) NOT NULL, PRIMARY KEY (id))
        SQL);
        $this->addSql(<<<'SQL'
            CREATE TABLE t_ms_Demande (id INT IDENTITY NOT NULL, user_created_id INT NOT NULL, user_updated_id INT, user_valider_id INT, user_generer_id INT, user_annuler_id INT, user_archiver_id INT, type_demande_id INT, demandeur_id INT NOT NULL, recepteur_id INT NOT NULL, p_partenaires_id INT, code NVARCHAR(100) NOT NULL, description VARCHAR(MAX), nom_patient NVARCHAR(100), dossier_patient NVARCHAR(100), position_actuel NVARCHAR(100) NOT NULL, historique VARCHAR(MAX), urgent BIT NOT NULL, date_valider DATETIME2(6), date_generer DATETIME2(6), date_annuler DATETIME2(6), created DATETIME2(6) NOT NULL, updated DATETIME2(6), actif BIT NOT NULL, flag_synchronisation_locale BIT NOT NULL, ipp INT, PRIMARY KEY (id))
        SQL);
        $this->addSql(<<<'SQL'
            CREATE INDEX IDX_A2ABF5FBF987D8A8 ON t_ms_Demande (user_created_id)
        SQL);
        $this->addSql(<<<'SQL'
            CREATE INDEX IDX_A2ABF5FB316B011F ON t_ms_Demande (user_updated_id)
        SQL);
        $this->addSql(<<<'SQL'
            CREATE INDEX IDX_A2ABF5FBF749B324 ON t_ms_Demande (user_valider_id)
        SQL);
        $this->addSql(<<<'SQL'
            CREATE INDEX IDX_A2ABF5FB32C38471 ON t_ms_Demande (user_generer_id)
        SQL);
        $this->addSql(<<<'SQL'
            CREATE INDEX IDX_A2ABF5FBE38A95CE ON t_ms_Demande (user_annuler_id)
        SQL);
        $this->addSql(<<<'SQL'
            CREATE INDEX IDX_A2ABF5FBD2B09A9 ON t_ms_Demande (user_archiver_id)
        SQL);
        $this->addSql(<<<'SQL'
            CREATE INDEX IDX_A2ABF5FB9DEA883D ON t_ms_Demande (type_demande_id)
        SQL);
        $this->addSql(<<<'SQL'
            CREATE INDEX IDX_A2ABF5FB95A6EE59 ON t_ms_Demande (demandeur_id)
        SQL);
        $this->addSql(<<<'SQL'
            CREATE INDEX IDX_A2ABF5FB3B49782D ON t_ms_Demande (recepteur_id)
        SQL);
        $this->addSql(<<<'SQL'
            CREATE INDEX IDX_A2ABF5FBFE2AD1 ON t_ms_Demande (p_partenaires_id)
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE t_ms_Demande ADD CONSTRAINT FK_A2ABF5FBF987D8A8 FOREIGN KEY (user_created_id) REFERENCES p_pv000_user (id)
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE t_ms_Demande ADD CONSTRAINT FK_A2ABF5FB316B011F FOREIGN KEY (user_updated_id) REFERENCES p_pv000_user (id)
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE t_ms_Demande ADD CONSTRAINT FK_A2ABF5FBF749B324 FOREIGN KEY (user_valider_id) REFERENCES p_pv000_user (id)
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE t_ms_Demande ADD CONSTRAINT FK_A2ABF5FB32C38471 FOREIGN KEY (user_generer_id) REFERENCES p_pv000_user (id)
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE t_ms_Demande ADD CONSTRAINT FK_A2ABF5FBE38A95CE FOREIGN KEY (user_annuler_id) REFERENCES p_pv000_user (id)
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE t_ms_Demande ADD CONSTRAINT FK_A2ABF5FBD2B09A9 FOREIGN KEY (user_archiver_id) REFERENCES p_pv000_user (id)
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE t_ms_Demande ADD CONSTRAINT FK_A2ABF5FB9DEA883D FOREIGN KEY (type_demande_id) REFERENCES p_type_oprt (id)
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE t_ms_Demande ADD CONSTRAINT FK_A2ABF5FB95A6EE59 FOREIGN KEY (demandeur_id) REFERENCES pmagasins (id)
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE t_ms_Demande ADD CONSTRAINT FK_A2ABF5FB3B49782D FOREIGN KEY (recepteur_id) REFERENCES pmagasins (id)
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE t_ms_Demande ADD CONSTRAINT FK_A2ABF5FBFE2AD1 FOREIGN KEY (p_partenaires_id) REFERENCES ppartenaires (id)
        SQL);
        $this->addSql(<<<'SQL'
            CREATE UNIQUE INDEX UNIQ_FE69F173F85E0677 ON p_pv000_user (username) WHERE username IS NOT NULL
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE pproduits ADD image NVARCHAR(255)
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
            ALTER TABLE t_ms_Demande DROP CONSTRAINT FK_A2ABF5FBF987D8A8
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE t_ms_Demande DROP CONSTRAINT FK_A2ABF5FB316B011F
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE t_ms_Demande DROP CONSTRAINT FK_A2ABF5FBF749B324
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE t_ms_Demande DROP CONSTRAINT FK_A2ABF5FB32C38471
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE t_ms_Demande DROP CONSTRAINT FK_A2ABF5FBE38A95CE
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE t_ms_Demande DROP CONSTRAINT FK_A2ABF5FBD2B09A9
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE t_ms_Demande DROP CONSTRAINT FK_A2ABF5FB9DEA883D
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE t_ms_Demande DROP CONSTRAINT FK_A2ABF5FB95A6EE59
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE t_ms_Demande DROP CONSTRAINT FK_A2ABF5FB3B49782D
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE t_ms_Demande DROP CONSTRAINT FK_A2ABF5FBFE2AD1
        SQL);
        $this->addSql(<<<'SQL'
            DROP TABLE p_type_oprt
        SQL);
        $this->addSql(<<<'SQL'
            DROP TABLE t_ms_Demande
        SQL);
        $this->addSql(<<<'SQL'
            DROP INDEX UNIQ_FE69F173F85E0677 ON p_pv000_user
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE pproduits DROP COLUMN image
        SQL);
    }
}
