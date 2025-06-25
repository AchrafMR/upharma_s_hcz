<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20250512110853 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql(<<<'SQL'
            CREATE TABLE t_st_stockstatic (id INT IDENTITY NOT NULL, p_produit_id INT, p_pr_unite_id INT, p_emplacements_id INT, userupdate_id INT, solde DOUBLE PRECISION NOT NULL, dateupdate DATETIME2(6) NOT NULL, flag_synchronisation_locale INT, PRIMARY KEY (id))
        SQL);
        $this->addSql(<<<'SQL'
            CREATE INDEX IDX_623EBF31586778F4 ON t_st_stockstatic (p_produit_id)
        SQL);
        $this->addSql(<<<'SQL'
            CREATE INDEX IDX_623EBF31D372DD48 ON t_st_stockstatic (p_pr_unite_id)
        SQL);
        $this->addSql(<<<'SQL'
            CREATE INDEX IDX_623EBF31C7E216BA ON t_st_stockstatic (p_emplacements_id)
        SQL);
        $this->addSql(<<<'SQL'
            CREATE INDEX IDX_623EBF311BDB4BD1 ON t_st_stockstatic (userupdate_id)
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE t_st_stockstatic ADD CONSTRAINT FK_623EBF31586778F4 FOREIGN KEY (p_produit_id) REFERENCES p_produits (id)
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE t_st_stockstatic ADD CONSTRAINT FK_623EBF31D372DD48 FOREIGN KEY (p_pr_unite_id) REFERENCES ppr_unites (id)
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE t_st_stockstatic ADD CONSTRAINT FK_623EBF31C7E216BA FOREIGN KEY (p_emplacements_id) REFERENCES p_emplacements (id)
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE t_st_stockstatic ADD CONSTRAINT FK_623EBF311BDB4BD1 FOREIGN KEY (userupdate_id) REFERENCES p_pv000_user (id)
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
            ALTER TABLE t_st_stockstatic DROP CONSTRAINT FK_623EBF31586778F4
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE t_st_stockstatic DROP CONSTRAINT FK_623EBF31D372DD48
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE t_st_stockstatic DROP CONSTRAINT FK_623EBF31C7E216BA
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE t_st_stockstatic DROP CONSTRAINT FK_623EBF311BDB4BD1
        SQL);
        $this->addSql(<<<'SQL'
            DROP TABLE t_st_stockstatic
        SQL);
    }
}
