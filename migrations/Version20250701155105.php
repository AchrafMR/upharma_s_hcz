<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20250701155105 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql(<<<'SQL'
            ALTER TABLE tsstockdyna DROP CONSTRAINT FK_EAE5EDB4F987D8A8
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE tsstockstatic DROP CONSTRAINT FK_DB826A30F987D8A8
        SQL);
        $this->addSql(<<<'SQL'
            DROP TABLE tsstockdyna
        SQL);
        $this->addSql(<<<'SQL'
            DROP TABLE tsstockstatic
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE t_st_stockdyna ADD user_created_id INT
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE t_st_stockdyna ADD date_create DATETIME2(6)
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE t_st_stockdyna ADD CONSTRAINT FK_8B554BDFF987D8A8 FOREIGN KEY (user_created_id) REFERENCES p_pv000_user (id)
        SQL);
        $this->addSql(<<<'SQL'
            CREATE INDEX IDX_8B554BDFF987D8A8 ON t_st_stockdyna (user_created_id)
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE t_st_stockstatic ADD user_created_id INT
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE t_st_stockstatic ADD date_create DATETIME2(6)
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE t_st_stockstatic ADD CONSTRAINT FK_623EBF31F987D8A8 FOREIGN KEY (user_created_id) REFERENCES p_pv000_user (id)
        SQL);
        $this->addSql(<<<'SQL'
            CREATE INDEX IDX_623EBF31F987D8A8 ON t_st_stockstatic (user_created_id)
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
            CREATE TABLE tsstockdyna (id INT IDENTITY NOT NULL, user_created_id INT, date_created DATETIME2(6), PRIMARY KEY (id))
        SQL);
        $this->addSql(<<<'SQL'
            CREATE NONCLUSTERED INDEX IDX_EAE5EDB4F987D8A8 ON tsstockdyna (user_created_id)
        SQL);
        $this->addSql(<<<'SQL'
            CREATE TABLE tsstockstatic (id INT IDENTITY NOT NULL, user_created_id INT, date_created DATETIME2(6), PRIMARY KEY (id))
        SQL);
        $this->addSql(<<<'SQL'
            CREATE NONCLUSTERED INDEX IDX_DB826A30F987D8A8 ON tsstockstatic (user_created_id)
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE tsstockdyna ADD CONSTRAINT FK_EAE5EDB4F987D8A8 FOREIGN KEY (user_created_id) REFERENCES p_pv000_user (id) ON UPDATE NO ACTION ON DELETE NO ACTION
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE tsstockstatic ADD CONSTRAINT FK_DB826A30F987D8A8 FOREIGN KEY (user_created_id) REFERENCES p_pv000_user (id) ON UPDATE NO ACTION ON DELETE NO ACTION
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE t_st_stockdyna DROP CONSTRAINT FK_8B554BDFF987D8A8
        SQL);
        $this->addSql(<<<'SQL'
            DROP INDEX IDX_8B554BDFF987D8A8 ON t_st_stockdyna
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE t_st_stockdyna DROP COLUMN user_created_id
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE t_st_stockdyna DROP COLUMN date_create
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE t_st_stockstatic DROP CONSTRAINT FK_623EBF31F987D8A8
        SQL);
        $this->addSql(<<<'SQL'
            DROP INDEX IDX_623EBF31F987D8A8 ON t_st_stockstatic
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE t_st_stockstatic DROP COLUMN user_created_id
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE t_st_stockstatic DROP COLUMN date_create
        SQL);
    }
}
