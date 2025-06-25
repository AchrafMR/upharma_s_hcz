<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20250616152725 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql(<<<'SQL'
            ALTER TABLE p_entite ADD type_entite_id INT
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE p_entite ADD nom_dossier NVARCHAR(255)
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE p_entite ADD description VARCHAR(MAX)
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE p_entite ADD adresse VARCHAR(MAX)
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE p_entite ADD ice NVARCHAR(100)
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE p_entite ADD email NVARCHAR(255)
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE p_entite ADD tel2 NVARCHAR(255)
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE p_entite ADD fax NVARCHAR(255)
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE p_entite ADD site NVARCHAR(255)
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE p_entite ADD cpy_o NVARCHAR(255)
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE p_entite ADD cpy0_libelle NVARCHAR(255)
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE p_entite ADD cce_o NVARCHAR(255)
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE p_entite ADD cce0_libelle NVARCHAR(255)
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE p_entite ADD entreprise BIT
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE p_entite ADD immo BIT
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE p_entite ADD id_access INT
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE p_entite ADD id_ugouv INT
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE p_entite ADD CONSTRAINT FK_B7046E232F2CD46A FOREIGN KEY (type_entite_id) REFERENCES p_et_type_entites (id)
        SQL);
        $this->addSql(<<<'SQL'
            CREATE INDEX IDX_B7046E232F2CD46A ON p_entite (type_entite_id)
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
            ALTER TABLE p_entite DROP CONSTRAINT FK_B7046E232F2CD46A
        SQL);
        $this->addSql(<<<'SQL'
            DROP INDEX IDX_B7046E232F2CD46A ON p_entite
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE p_entite DROP COLUMN type_entite_id
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE p_entite DROP COLUMN nom_dossier
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE p_entite DROP COLUMN description
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE p_entite DROP COLUMN adresse
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE p_entite DROP COLUMN ice
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE p_entite DROP COLUMN email
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE p_entite DROP COLUMN tel2
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE p_entite DROP COLUMN fax
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE p_entite DROP COLUMN site
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE p_entite DROP COLUMN cpy_o
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE p_entite DROP COLUMN cpy0_libelle
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE p_entite DROP COLUMN cce_o
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE p_entite DROP COLUMN cce0_libelle
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE p_entite DROP COLUMN entreprise
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE p_entite DROP COLUMN immo
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE p_entite DROP COLUMN id_access
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE p_entite DROP COLUMN id_ugouv
        SQL);
    }
}
