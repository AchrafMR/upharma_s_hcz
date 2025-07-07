<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20250707170019 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql(<<<'SQL'
            ALTER TABLE t_ms_preparation DROP CONSTRAINT FK_DD7CA239A6662699
        SQL);
        $this->addSql(<<<'SQL'
            DROP INDEX IDX_DD7CA239A6662699 ON t_ms_preparation
        SQL);
        $this->addSql(<<<'SQL'
            sp_rename 't_ms_preparation.t_ms_commande_id', 't_ms_livraison_id', 'COLUMN'
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE t_ms_preparation ADD CONSTRAINT FK_DD7CA2396BA5C920 FOREIGN KEY (t_ms_livraison_id) REFERENCES t_ms_livraison (id)
        SQL);
        $this->addSql(<<<'SQL'
            CREATE INDEX IDX_DD7CA2396BA5C920 ON t_ms_preparation (t_ms_livraison_id)
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
            ALTER TABLE t_ms_preparation DROP CONSTRAINT FK_DD7CA2396BA5C920
        SQL);
        $this->addSql(<<<'SQL'
            DROP INDEX IDX_DD7CA2396BA5C920 ON t_ms_preparation
        SQL);
        $this->addSql(<<<'SQL'
            sp_rename 't_ms_preparation.t_ms_livraison_id', 't_ms_commande_id', 'COLUMN'
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE t_ms_preparation ADD CONSTRAINT FK_DD7CA239A6662699 FOREIGN KEY (t_ms_commande_id) REFERENCES t_ms_commande (id) ON UPDATE NO ACTION ON DELETE NO ACTION
        SQL);
        $this->addSql(<<<'SQL'
            CREATE NONCLUSTERED INDEX IDX_DD7CA239A6662699 ON t_ms_preparation (t_ms_commande_id)
        SQL);
    }
}
