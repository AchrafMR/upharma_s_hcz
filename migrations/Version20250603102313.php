<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20250603102313 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        // $this->addSql(<<<'SQL'
        //     ALTER TABLE t_ms_demandelg DROP CONSTRAINT DF_E329DC42_8F52502
        // SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE t_ms_demandelg ALTER COLUMN actif INT
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE tms_commande DROP CONSTRAINT FK_7C846EF3FA640825
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE tms_commande DROP CONSTRAINT FK_7C846EF3BE321A72
        SQL);
        $this->addSql(<<<'SQL'
            DROP INDEX IDX_7C846EF3FA640825 ON tms_commande
        SQL);
        $this->addSql(<<<'SQL'
            DROP INDEX IDX_7C846EF3BE321A72 ON tms_commande
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE tms_commande ADD demandeur_id INT NOT NULL
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE tms_commande ADD recepteur_id INT
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE tms_commande DROP COLUMN demandeur_id_id
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE tms_commande DROP COLUMN recepteur_id_id
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE tms_commande ADD CONSTRAINT FK_7C846EF395A6EE59 FOREIGN KEY (demandeur_id) REFERENCES pmagasins (id)
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE tms_commande ADD CONSTRAINT FK_7C846EF33B49782D FOREIGN KEY (recepteur_id) REFERENCES pmagasins (id)
        SQL);
        $this->addSql(<<<'SQL'
            CREATE INDEX IDX_7C846EF395A6EE59 ON tms_commande (demandeur_id)
        SQL);
        $this->addSql(<<<'SQL'
            CREATE INDEX IDX_7C846EF33B49782D ON tms_commande (recepteur_id)
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
            ALTER TABLE tms_commande DROP CONSTRAINT FK_7C846EF395A6EE59
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE tms_commande DROP CONSTRAINT FK_7C846EF33B49782D
        SQL);
        $this->addSql(<<<'SQL'
            DROP INDEX IDX_7C846EF395A6EE59 ON tms_commande
        SQL);
        $this->addSql(<<<'SQL'
            DROP INDEX IDX_7C846EF33B49782D ON tms_commande
        SQL);
        $this->addSql(<<<'SQL'
            sp_rename 'tms_commande.recepteur_id', 'demandeur_id_id', 'COLUMN'
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE tms_commande ADD recepteur_id_id INT
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE tms_commande DROP COLUMN demandeur_id
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE tms_commande ADD CONSTRAINT FK_7C846EF3FA640825 FOREIGN KEY (demandeur_id_id) REFERENCES pmagasins (id) ON UPDATE NO ACTION ON DELETE NO ACTION
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE tms_commande ADD CONSTRAINT FK_7C846EF3BE321A72 FOREIGN KEY (recepteur_id_id) REFERENCES pmagasins (id) ON UPDATE NO ACTION ON DELETE NO ACTION
        SQL);
        $this->addSql(<<<'SQL'
            CREATE NONCLUSTERED INDEX IDX_7C846EF3FA640825 ON tms_commande (demandeur_id_id)
        SQL);
        $this->addSql(<<<'SQL'
            CREATE NONCLUSTERED INDEX IDX_7C846EF3BE321A72 ON tms_commande (recepteur_id_id)
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE t_ms_demandelg ALTER COLUMN actif INT
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE t_ms_demandelg ADD CONSTRAINT DF_E329DC42_8F52502 DEFAULT 1 FOR actif
        SQL);
    }
}
