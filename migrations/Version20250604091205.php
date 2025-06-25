<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20250604091205 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql(<<<'SQL'
            ALTER TABLE t_ms_commande DROP CONSTRAINT FK_1BCB87FA9DEA883D
        SQL);
        $this->addSql(<<<'SQL'
            DROP INDEX IDX_1BCB87FA9DEA883D ON t_ms_commande
        SQL);
        $this->addSql(<<<'SQL'
            sp_rename 't_ms_commande.type_demande_id', 'type_commande_id', 'COLUMN'
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE t_ms_commande ADD CONSTRAINT FK_1BCB87FAC9F3F9C5 FOREIGN KEY (type_commande_id) REFERENCES p_type_oprt (id)
        SQL);
        $this->addSql(<<<'SQL'
            CREATE INDEX IDX_1BCB87FAC9F3F9C5 ON t_ms_commande (type_commande_id)
        SQL);
        // $this->addSql(<<<'SQL'
        //     ALTER TABLE t_ms_demandelg DROP CONSTRAINT DF_E329DC42_8F52502
        // SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE t_ms_demandelg ALTER COLUMN actif INT
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
            ALTER TABLE t_ms_commande DROP CONSTRAINT FK_1BCB87FAC9F3F9C5
        SQL);
        $this->addSql(<<<'SQL'
            DROP INDEX IDX_1BCB87FAC9F3F9C5 ON t_ms_commande
        SQL);
        $this->addSql(<<<'SQL'
            sp_rename 't_ms_commande.type_commande_id', 'type_demande_id', 'COLUMN'
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE t_ms_commande ADD CONSTRAINT FK_1BCB87FA9DEA883D FOREIGN KEY (type_demande_id) REFERENCES p_type_oprt (id) ON UPDATE NO ACTION ON DELETE NO ACTION
        SQL);
        $this->addSql(<<<'SQL'
            CREATE NONCLUSTERED INDEX IDX_1BCB87FA9DEA883D ON t_ms_commande (type_demande_id)
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE t_ms_demandelg ALTER COLUMN actif INT
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE t_ms_demandelg ADD CONSTRAINT DF_E329DC42_8F52502 DEFAULT 1 FOR actif
        SQL);
    }
}
