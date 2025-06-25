<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20250605102928 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql(<<<'SQL'
            CREATE TABLE p_affectation_magasin (id INT IDENTITY NOT NULL, magasin_id INT NOT NULL, userr_id INT NOT NULL, defaut BIT NOT NULL, PRIMARY KEY (id))
        SQL);
        $this->addSql(<<<'SQL'
            CREATE INDEX IDX_8CC07CAB20096AE3 ON p_affectation_magasin (magasin_id)
        SQL);
        $this->addSql(<<<'SQL'
            CREATE INDEX IDX_8CC07CABDF0FD358 ON p_affectation_magasin (userr_id)
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE p_affectation_magasin ADD CONSTRAINT FK_8CC07CAB20096AE3 FOREIGN KEY (magasin_id) REFERENCES pmagasins (id)
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE p_affectation_magasin ADD CONSTRAINT FK_8CC07CABDF0FD358 FOREIGN KEY (userr_id) REFERENCES p_pv000_user (id)
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE paffectation_magasin DROP CONSTRAINT FK_8CBF784220096AE3
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE paffectation_magasin DROP CONSTRAINT FK_8CBF7842DF0FD358
        SQL);
        $this->addSql(<<<'SQL'
            DROP TABLE paffectation_magasin
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
            CREATE TABLE paffectation_magasin (id INT IDENTITY NOT NULL, magasin_id INT NOT NULL, userr_id INT NOT NULL, PRIMARY KEY (id))
        SQL);
        $this->addSql(<<<'SQL'
            CREATE NONCLUSTERED INDEX IDX_8CBF784220096AE3 ON paffectation_magasin (magasin_id)
        SQL);
        $this->addSql(<<<'SQL'
            CREATE NONCLUSTERED INDEX IDX_8CBF7842DF0FD358 ON paffectation_magasin (userr_id)
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE paffectation_magasin ADD CONSTRAINT FK_8CBF784220096AE3 FOREIGN KEY (magasin_id) REFERENCES pmagasins (id) ON UPDATE NO ACTION ON DELETE NO ACTION
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE paffectation_magasin ADD CONSTRAINT FK_8CBF7842DF0FD358 FOREIGN KEY (userr_id) REFERENCES p_pv000_user (id) ON UPDATE NO ACTION ON DELETE NO ACTION
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE p_affectation_magasin DROP CONSTRAINT FK_8CC07CAB20096AE3
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE p_affectation_magasin DROP CONSTRAINT FK_8CC07CABDF0FD358
        SQL);
        $this->addSql(<<<'SQL'
            DROP TABLE p_affectation_magasin
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE t_ms_demandelg ALTER COLUMN actif INT
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE t_ms_demandelg ADD CONSTRAINT DF_E329DC42_8F52502 DEFAULT 1 FOR actif
        SQL);
    }
}
