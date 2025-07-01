<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20250701105432 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql(<<<'SQL'
            ALTER TABLE t_st_stockdyna DROP CONSTRAINT FK_8B554BDF1BDB4BD1
        SQL);
        $this->addSql(<<<'SQL'
            DROP INDEX IDX_8B554BDF1BDB4BD1 ON t_st_stockdyna
        SQL);
        $this->addSql(<<<'SQL'
            sp_rename 't_st_stockdyna.userupdate_id', 'user_created_id', 'COLUMN'
        SQL);
        $this->addSql(<<<'SQL'
            sp_rename 't_st_stockdyna.dateupdate', 'date_create', 'COLUMN'
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE t_st_stockdyna ADD CONSTRAINT FK_8B554BDFF987D8A8 FOREIGN KEY (user_created_id) REFERENCES p_pv000_user (id)
        SQL);
        $this->addSql(<<<'SQL'
            CREATE INDEX IDX_8B554BDFF987D8A8 ON t_st_stockdyna (user_created_id)
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
            ALTER TABLE t_st_stockdyna DROP CONSTRAINT FK_8B554BDFF987D8A8
        SQL);
        $this->addSql(<<<'SQL'
            DROP INDEX IDX_8B554BDFF987D8A8 ON t_st_stockdyna
        SQL);
        $this->addSql(<<<'SQL'
            sp_rename 't_st_stockdyna.user_created_id', 'userupdate_id', 'COLUMN'
        SQL);
        $this->addSql(<<<'SQL'
            sp_rename 't_st_stockdyna.date_create', 'dateupdate', 'COLUMN'
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE t_st_stockdyna ADD CONSTRAINT FK_8B554BDF1BDB4BD1 FOREIGN KEY (userupdate_id) REFERENCES p_pv000_user (id) ON UPDATE NO ACTION ON DELETE NO ACTION
        SQL);
        $this->addSql(<<<'SQL'
            CREATE NONCLUSTERED INDEX IDX_8B554BDF1BDB4BD1 ON t_st_stockdyna (userupdate_id)
        SQL);
    }
}
