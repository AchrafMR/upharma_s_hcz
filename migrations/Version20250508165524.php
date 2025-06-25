<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20250508165524 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql(<<<'SQL'
            ALTER TABLE tms_demandelg ADD p_produit_id INT
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE tms_demandelg ADD p_pr_unite_id INT
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE tms_demandelg ADD CONSTRAINT FK_9A922B0F586778F4 FOREIGN KEY (p_produit_id) REFERENCES p_Produits (id)
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE tms_demandelg ADD CONSTRAINT FK_9A922B0FD372DD48 FOREIGN KEY (p_pr_unite_id) REFERENCES ppr_unites (id)
        SQL);
        $this->addSql(<<<'SQL'
            CREATE INDEX IDX_9A922B0F586778F4 ON tms_demandelg (p_produit_id)
        SQL);
        $this->addSql(<<<'SQL'
            CREATE INDEX IDX_9A922B0FD372DD48 ON tms_demandelg (p_pr_unite_id)
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
            ALTER TABLE tms_demandelg DROP CONSTRAINT FK_9A922B0F586778F4
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE tms_demandelg DROP CONSTRAINT FK_9A922B0FD372DD48
        SQL);
        $this->addSql(<<<'SQL'
            DROP INDEX IDX_9A922B0F586778F4 ON tms_demandelg
        SQL);
        $this->addSql(<<<'SQL'
            DROP INDEX IDX_9A922B0FD372DD48 ON tms_demandelg
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE tms_demandelg DROP COLUMN p_produit_id
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE tms_demandelg DROP COLUMN p_pr_unite_id
        SQL);
    }
}
