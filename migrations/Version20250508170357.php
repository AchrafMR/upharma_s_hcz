<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20250508170357 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql(<<<'SQL'
            EXEC sp_rename N'p_Produits.idx_9a5101fad372dd48', N'IDX_632763ACD372DD48', N'INDEX'
        SQL);
        $this->addSql(<<<'SQL'
            EXEC sp_rename N'p_Produits.idx_9a5101fab3e9c81', N'IDX_632763ACB3E9C81', N'INDEX'
        SQL);
        $this->addSql(<<<'SQL'
            EXEC sp_rename N'p_Produits.idx_9a5101fa231b45d9', N'IDX_632763AC231B45D9', N'INDEX'
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
            EXEC sp_rename N'p_produits.idx_632763acd372dd48', N'IDX_9A5101FAD372DD48', N'INDEX'
        SQL);
        $this->addSql(<<<'SQL'
            EXEC sp_rename N'p_produits.idx_632763acb3e9c81', N'IDX_9A5101FAB3E9C81', N'INDEX'
        SQL);
        $this->addSql(<<<'SQL'
            EXEC sp_rename N'p_produits.idx_632763ac231b45d9', N'IDX_9A5101FA231B45D9', N'INDEX'
        SQL);
    }
}
