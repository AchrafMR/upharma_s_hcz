<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20250520110608 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql(<<<'SQL'
            ALTER TABLE t_ms_Demande ADD p_entite_id INT
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE t_ms_Demande ADD CONSTRAINT FK_A2ABF5FBA059BF0E FOREIGN KEY (p_entite_id) REFERENCES p_entite (id)
        SQL);
        $this->addSql(<<<'SQL'
            CREATE INDEX IDX_A2ABF5FBA059BF0E ON t_ms_Demande (p_entite_id)
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
            ALTER TABLE t_ms_Demande DROP CONSTRAINT FK_A2ABF5FBA059BF0E
        SQL);
        $this->addSql(<<<'SQL'
            DROP INDEX IDX_A2ABF5FBA059BF0E ON t_ms_Demande
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE t_ms_Demande DROP COLUMN p_entite_id
        SQL);
    }
}
