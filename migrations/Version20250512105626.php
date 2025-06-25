<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20250512105626 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql(<<<'SQL'
            CREATE TABLE tst_stockdyna (id INT IDENTITY NOT NULL, p_produit_id INT, p_pr_unite_id INT, pemplacements_id INT, userupdate_id INT NOT NULL, qantite DOUBLE PRECISION NOT NULL, dateupdate DATETIME2(6) NOT NULL, flag_synchronisation_locale INT, PRIMARY KEY (id))
        SQL);
        $this->addSql(<<<'SQL'
            CREATE INDEX IDX_F2EEBC92586778F4 ON tst_stockdyna (p_produit_id)
        SQL);
        $this->addSql(<<<'SQL'
            CREATE INDEX IDX_F2EEBC92D372DD48 ON tst_stockdyna (p_pr_unite_id)
        SQL);
        $this->addSql(<<<'SQL'
            CREATE INDEX IDX_F2EEBC921FD77E66 ON tst_stockdyna (pemplacements_id)
        SQL);
        $this->addSql(<<<'SQL'
            CREATE INDEX IDX_F2EEBC921BDB4BD1 ON tst_stockdyna (userupdate_id)
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE tst_stockdyna ADD CONSTRAINT FK_F2EEBC92586778F4 FOREIGN KEY (p_produit_id) REFERENCES p_produits (id)
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE tst_stockdyna ADD CONSTRAINT FK_F2EEBC92D372DD48 FOREIGN KEY (p_pr_unite_id) REFERENCES ppr_unites (id)
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE tst_stockdyna ADD CONSTRAINT FK_F2EEBC921FD77E66 FOREIGN KEY (pemplacements_id) REFERENCES p_emplacements (id)
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE tst_stockdyna ADD CONSTRAINT FK_F2EEBC921BDB4BD1 FOREIGN KEY (userupdate_id) REFERENCES p_pv000_user (id)
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
            ALTER TABLE tst_stockdyna DROP CONSTRAINT FK_F2EEBC92586778F4
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE tst_stockdyna DROP CONSTRAINT FK_F2EEBC92D372DD48
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE tst_stockdyna DROP CONSTRAINT FK_F2EEBC921FD77E66
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE tst_stockdyna DROP CONSTRAINT FK_F2EEBC921BDB4BD1
        SQL);
        $this->addSql(<<<'SQL'
            DROP TABLE tst_stockdyna
        SQL);
    }
}
