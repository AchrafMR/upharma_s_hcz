<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20250508161231 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql(<<<'SQL'
            ALTER TABLE tms_demandelg DROP CONSTRAINT FK_9A922B0FB056B331
        SQL);
        $this->addSql(<<<'SQL'
            DROP INDEX IDX_9A922B0FB056B331 ON tms_demandelg
        SQL);
        $this->addSql(<<<'SQL'
            sp_rename 'tms_demandelg.tms_demande_id', 't_ms_demande_id', 'COLUMN'
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE tms_demandelg ADD CONSTRAINT FK_9A922B0FB84235EB FOREIGN KEY (t_ms_demande_id) REFERENCES t_ms_Demande (id)
        SQL);
        $this->addSql(<<<'SQL'
            CREATE INDEX IDX_9A922B0FB84235EB ON tms_demandelg (t_ms_demande_id)
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
            ALTER TABLE tms_demandelg DROP CONSTRAINT FK_9A922B0FB84235EB
        SQL);
        $this->addSql(<<<'SQL'
            DROP INDEX IDX_9A922B0FB84235EB ON tms_demandelg
        SQL);
        $this->addSql(<<<'SQL'
            sp_rename 'tms_demandelg.t_ms_demande_id', 'tms_demande_id', 'COLUMN'
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE tms_demandelg ADD CONSTRAINT FK_9A922B0FB056B331 FOREIGN KEY (tms_demande_id) REFERENCES t_ms_Demande (id) ON UPDATE NO ACTION ON DELETE NO ACTION
        SQL);
        $this->addSql(<<<'SQL'
            CREATE NONCLUSTERED INDEX IDX_9A922B0FB056B331 ON tms_demandelg (tms_demande_id)
        SQL);
    }
}
