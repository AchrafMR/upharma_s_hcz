<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20250603101501 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql(<<<'SQL'
            CREATE TABLE tms_commande (id INT IDENTITY NOT NULL, user_created_id INT NOT NULL, user_updated_id INT, user_valider_id INT, user_generer_id INT, user_annuler_id INT, user_archiver_id INT, type_demande_id INT NOT NULL, demandeur_id_id INT, recepteur_id_id INT, p_partenaires_id_id INT, p_entite_id INT, code NVARCHAR(100), description VARCHAR(MAX), nom_patient NVARCHAR(255), dossier_patient NVARCHAR(255), position_actuel NVARCHAR(255) NOT NULL, historique VARCHAR(MAX), urgent BIT NOT NULL, date_valider DATETIME2(6), date_generer DATETIME2(6), date_annuler DATETIME2(6), created DATETIME2(6) NOT NULL, updated DATETIME2(6), actif BIT NOT NULL, flag_synchronisation_locale BIT, ipp NVARCHAR(255), PRIMARY KEY (id))
        SQL);
        $this->addSql(<<<'SQL'
            CREATE INDEX IDX_7C846EF3F987D8A8 ON tms_commande (user_created_id)
        SQL);
        $this->addSql(<<<'SQL'
            CREATE INDEX IDX_7C846EF3316B011F ON tms_commande (user_updated_id)
        SQL);
        $this->addSql(<<<'SQL'
            CREATE INDEX IDX_7C846EF3F749B324 ON tms_commande (user_valider_id)
        SQL);
        $this->addSql(<<<'SQL'
            CREATE INDEX IDX_7C846EF332C38471 ON tms_commande (user_generer_id)
        SQL);
        $this->addSql(<<<'SQL'
            CREATE INDEX IDX_7C846EF3E38A95CE ON tms_commande (user_annuler_id)
        SQL);
        $this->addSql(<<<'SQL'
            CREATE INDEX IDX_7C846EF3D2B09A9 ON tms_commande (user_archiver_id)
        SQL);
        $this->addSql(<<<'SQL'
            CREATE INDEX IDX_7C846EF39DEA883D ON tms_commande (type_demande_id)
        SQL);
        $this->addSql(<<<'SQL'
            CREATE INDEX IDX_7C846EF3FA640825 ON tms_commande (demandeur_id_id)
        SQL);
        $this->addSql(<<<'SQL'
            CREATE INDEX IDX_7C846EF3BE321A72 ON tms_commande (recepteur_id_id)
        SQL);
        $this->addSql(<<<'SQL'
            CREATE INDEX IDX_7C846EF3DF648904 ON tms_commande (p_partenaires_id_id)
        SQL);
        $this->addSql(<<<'SQL'
            CREATE INDEX IDX_7C846EF3A059BF0E ON tms_commande (p_entite_id)
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE tms_commande ADD CONSTRAINT FK_7C846EF3F987D8A8 FOREIGN KEY (user_created_id) REFERENCES p_pv000_user (id)
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE tms_commande ADD CONSTRAINT FK_7C846EF3316B011F FOREIGN KEY (user_updated_id) REFERENCES p_pv000_user (id)
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE tms_commande ADD CONSTRAINT FK_7C846EF3F749B324 FOREIGN KEY (user_valider_id) REFERENCES p_pv000_user (id)
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE tms_commande ADD CONSTRAINT FK_7C846EF332C38471 FOREIGN KEY (user_generer_id) REFERENCES p_pv000_user (id)
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE tms_commande ADD CONSTRAINT FK_7C846EF3E38A95CE FOREIGN KEY (user_annuler_id) REFERENCES p_pv000_user (id)
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE tms_commande ADD CONSTRAINT FK_7C846EF3D2B09A9 FOREIGN KEY (user_archiver_id) REFERENCES p_pv000_user (id)
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE tms_commande ADD CONSTRAINT FK_7C846EF39DEA883D FOREIGN KEY (type_demande_id) REFERENCES p_type_oprt (id)
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE tms_commande ADD CONSTRAINT FK_7C846EF3FA640825 FOREIGN KEY (demandeur_id_id) REFERENCES pmagasins (id)
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE tms_commande ADD CONSTRAINT FK_7C846EF3BE321A72 FOREIGN KEY (recepteur_id_id) REFERENCES pmagasins (id)
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE tms_commande ADD CONSTRAINT FK_7C846EF3DF648904 FOREIGN KEY (p_partenaires_id_id) REFERENCES ppartenaires (id)
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE tms_commande ADD CONSTRAINT FK_7C846EF3A059BF0E FOREIGN KEY (p_entite_id) REFERENCES p_entite (id)
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
            ALTER TABLE tms_commande DROP CONSTRAINT FK_7C846EF3FA640825
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE tms_commande DROP CONSTRAINT FK_7C846EF3BE321A72
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE tms_commande DROP CONSTRAINT FK_7C846EF3DF648904
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE tms_commande DROP CONSTRAINT FK_7C846EF3A059BF0E
        SQL);
        $this->addSql(<<<'SQL'
            DROP TABLE tms_commande
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE t_ms_demandelg ALTER COLUMN actif INT
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE t_ms_demandelg ADD CONSTRAINT DF_E329DC42_8F52502 DEFAULT 1 FOR actif
        SQL);
    }
}
