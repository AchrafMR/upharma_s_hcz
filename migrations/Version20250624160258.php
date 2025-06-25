<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20250624160258 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql(<<<'SQL'
            ALTER TABLE p_emplacements ADD magasin_id INT
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE p_emplacements ADD CONSTRAINT FK_21EBB9EE20096AE3 FOREIGN KEY (magasin_id) REFERENCES p_magasins (id)
        SQL);
        $this->addSql(<<<'SQL'
            CREATE INDEX IDX_21EBB9EE20096AE3 ON p_emplacements (magasin_id)
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE p_magasins ADD complementaire BIT
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE t_ms_commande ADD status_id INT
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE t_ms_commande ADD st_position_actuel_id INT
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE t_ms_commande ADD CONSTRAINT FK_1BCB87FA6BF700BD FOREIGN KEY (status_id) REFERENCES p_statut (id)
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE t_ms_commande ADD CONSTRAINT FK_1BCB87FAB588E0EF FOREIGN KEY (st_position_actuel_id) REFERENCES p_statut (id)
        SQL);
        $this->addSql(<<<'SQL'
            CREATE INDEX IDX_1BCB87FA6BF700BD ON t_ms_commande (status_id)
        SQL);
        $this->addSql(<<<'SQL'
            CREATE INDEX IDX_1BCB87FAB588E0EF ON t_ms_commande (st_position_actuel_id)
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE t_ms_demande ADD status_id INT
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE t_ms_demande ADD st_position_actuel_id INT
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE t_ms_demande ADD CONSTRAINT FK_6D16CC676BF700BD FOREIGN KEY (status_id) REFERENCES p_statut (id)
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE t_ms_demande ADD CONSTRAINT FK_6D16CC67B588E0EF FOREIGN KEY (st_position_actuel_id) REFERENCES p_statut (id)
        SQL);
        $this->addSql(<<<'SQL'
            CREATE INDEX IDX_6D16CC676BF700BD ON t_ms_demande (status_id)
        SQL);
        $this->addSql(<<<'SQL'
            CREATE INDEX IDX_6D16CC67B588E0EF ON t_ms_demande (st_position_actuel_id)
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE t_ms_livraison ADD status_id INT
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE t_ms_livraison ADD st_position_actuel_id INT
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE t_ms_livraison ADD type_livraison_id INT
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE t_ms_livraison ADD CONSTRAINT FK_D5A5A8BD6BF700BD FOREIGN KEY (status_id) REFERENCES p_statut (id)
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE t_ms_livraison ADD CONSTRAINT FK_D5A5A8BDB588E0EF FOREIGN KEY (st_position_actuel_id) REFERENCES p_statut (id)
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE t_ms_livraison ADD CONSTRAINT FK_D5A5A8BD9174120 FOREIGN KEY (type_livraison_id) REFERENCES p_type_oprt (id)
        SQL);
        $this->addSql(<<<'SQL'
            CREATE INDEX IDX_D5A5A8BD6BF700BD ON t_ms_livraison (status_id)
        SQL);
        $this->addSql(<<<'SQL'
            CREATE INDEX IDX_D5A5A8BDB588E0EF ON t_ms_livraison (st_position_actuel_id)
        SQL);
        $this->addSql(<<<'SQL'
            CREATE INDEX IDX_D5A5A8BD9174120 ON t_ms_livraison (type_livraison_id)
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE t_ms_livraisonobj ADD tac_reception_obj_id INT
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE t_ms_livraisonobj ADD CONSTRAINT FK_4B82D87C7AFD3D31 FOREIGN KEY (tac_reception_obj_id) REFERENCES t_ac_reception_obj (id)
        SQL);
        $this->addSql(<<<'SQL'
            CREATE INDEX IDX_4B82D87C7AFD3D31 ON t_ms_livraisonobj (tac_reception_obj_id)
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
            ALTER TABLE t_ms_commande DROP CONSTRAINT FK_1BCB87FA6BF700BD
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE t_ms_commande DROP CONSTRAINT FK_1BCB87FAB588E0EF
        SQL);
        $this->addSql(<<<'SQL'
            DROP INDEX IDX_1BCB87FA6BF700BD ON t_ms_commande
        SQL);
        $this->addSql(<<<'SQL'
            DROP INDEX IDX_1BCB87FAB588E0EF ON t_ms_commande
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE t_ms_commande DROP COLUMN status_id
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE t_ms_commande DROP COLUMN st_position_actuel_id
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE t_ms_livraison DROP CONSTRAINT FK_D5A5A8BD6BF700BD
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE t_ms_livraison DROP CONSTRAINT FK_D5A5A8BDB588E0EF
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE t_ms_livraison DROP CONSTRAINT FK_D5A5A8BD9174120
        SQL);
        $this->addSql(<<<'SQL'
            DROP INDEX IDX_D5A5A8BD6BF700BD ON t_ms_livraison
        SQL);
        $this->addSql(<<<'SQL'
            DROP INDEX IDX_D5A5A8BDB588E0EF ON t_ms_livraison
        SQL);
        $this->addSql(<<<'SQL'
            DROP INDEX IDX_D5A5A8BD9174120 ON t_ms_livraison
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE t_ms_livraison DROP COLUMN status_id
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE t_ms_livraison DROP COLUMN st_position_actuel_id
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE t_ms_livraison DROP COLUMN type_livraison_id
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE t_ms_livraisonobj DROP CONSTRAINT FK_4B82D87C7AFD3D31
        SQL);
        $this->addSql(<<<'SQL'
            DROP INDEX IDX_4B82D87C7AFD3D31 ON t_ms_livraisonobj
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE t_ms_livraisonobj DROP COLUMN tac_reception_obj_id
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE p_magasins DROP COLUMN complementaire
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE t_ms_demande DROP CONSTRAINT FK_6D16CC676BF700BD
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE t_ms_demande DROP CONSTRAINT FK_6D16CC67B588E0EF
        SQL);
        $this->addSql(<<<'SQL'
            DROP INDEX IDX_6D16CC676BF700BD ON t_ms_demande
        SQL);
        $this->addSql(<<<'SQL'
            DROP INDEX IDX_6D16CC67B588E0EF ON t_ms_demande
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE t_ms_demande DROP COLUMN status_id
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE t_ms_demande DROP COLUMN st_position_actuel_id
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE p_emplacements DROP CONSTRAINT FK_21EBB9EE20096AE3
        SQL);
        $this->addSql(<<<'SQL'
            DROP INDEX IDX_21EBB9EE20096AE3 ON p_emplacements
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE p_emplacements DROP COLUMN magasin_id
        SQL);
    }
}
