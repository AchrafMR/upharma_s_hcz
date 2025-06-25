<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20250610101722 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql(<<<'SQL'
            DECLARE @ConstraintName NVARCHAR(200);
            SELECT @ConstraintName = d.name
            FROM sys.default_constraints d
            JOIN sys.columns c ON d.parent_object_id = c.object_id AND d.parent_column_id = c.column_id
            WHERE OBJECT_NAME(d.parent_object_id) = 't_ms_demandelg' AND c.name = 'actif';

            IF @ConstraintName IS NOT NULL
                EXEC('ALTER TABLE t_ms_demandelg DROP CONSTRAINT ' + @ConstraintName);
        SQL);

        // Make "actif" column nullable
        $this->addSql(<<<'SQL'
            ALTER TABLE t_ms_demandelg ALTER COLUMN actif INT NULL
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
            ALTER TABLE t_ms_demandelg ALTER COLUMN actif INT NOT NULL
        SQL);

        $this->addSql(<<<'SQL'
            ALTER TABLE t_ms_demandelg ADD CONSTRAINT DF_t_ms_demandelg_actif DEFAULT 1 FOR actif
        SQL);
    
    }
}
