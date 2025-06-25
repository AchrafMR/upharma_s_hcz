<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20250616105728 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql(<<<'SQL'
            ALTER TABLE p_magasins ADD dossier_ugouv_id INT
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE p_magasins ADD designation_access NVARCHAR(255)
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE p_magasins ADD access_code NVARCHAR(255)
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE p_magasins ADD niveau INT
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
            ALTER TABLE p_magasins DROP COLUMN dossier_ugouv_id
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE p_magasins DROP COLUMN designation_access
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE p_magasins DROP COLUMN access_code
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE p_magasins DROP COLUMN niveau
        SQL);
    }
}
