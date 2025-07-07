<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20250707142253 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql(<<<'SQL'
            ALTER TABLE t_ms_livraisonobj DROP CONSTRAINT FK_4B82D87C7AFD3D31
        SQL);
        $this->addSql(<<<'SQL'
            CREATE TABLE t_ms_preparation (id INT IDENTITY NOT NULL, t_ms_commande_id INT, user_created_id INT, t_st_stock_obj_id INT, created DATETIME2(6), code NVARCHAR(255), PRIMARY KEY (id))
        SQL);
        $this->addSql(<<<'SQL'
            CREATE INDEX IDX_DD7CA239A6662699 ON t_ms_preparation (t_ms_commande_id)
        SQL);
        $this->addSql(<<<'SQL'
            CREATE INDEX IDX_DD7CA239F987D8A8 ON t_ms_preparation (user_created_id)
        SQL);
        $this->addSql(<<<'SQL'
            CREATE INDEX IDX_DD7CA2398502FE2D ON t_ms_preparation (t_st_stock_obj_id)
        SQL);
        $this->addSql(<<<'SQL'
            CREATE TABLE t_st_stock_obj (id INT IDENTITY NOT NULL, produit_id INT, entite_id INT, t_ac_reception_lot_id INT, parent_transfor_id INT, user_aff_adresse_id INT, user_update_id INT, nature_prix_id INT, adresse_id INT, user_etiqueter_id INT, code NVARCHAR(255), numero_lot NVARCHAR(255), ref_marche NVARCHAR(255), code_barre NVARCHAR(255), date_peremption DATETIME2(6), prix_vente DOUBLE PRECISION, quantite DOUBLE PRECISION, date_aff_adresse DATETIME2(6), source NVARCHAR(255), conformite BIT, date_update DATETIME2(6), date_sys DATETIME2(6), etiqueter BIT, date_etiqueter DATETIME2(6), active SMALLINT, PRIMARY KEY (id))
        SQL);
        $this->addSql(<<<'SQL'
            CREATE INDEX IDX_8FB37D39F347EFB ON t_st_stock_obj (produit_id)
        SQL);
        $this->addSql(<<<'SQL'
            CREATE INDEX IDX_8FB37D399BEA957A ON t_st_stock_obj (entite_id)
        SQL);
        $this->addSql(<<<'SQL'
            CREATE INDEX IDX_8FB37D39E8544089 ON t_st_stock_obj (t_ac_reception_lot_id)
        SQL);
        $this->addSql(<<<'SQL'
            CREATE INDEX IDX_8FB37D3972EC427E ON t_st_stock_obj (parent_transfor_id)
        SQL);
        $this->addSql(<<<'SQL'
            CREATE INDEX IDX_8FB37D3987BE9962 ON t_st_stock_obj (user_aff_adresse_id)
        SQL);
        $this->addSql(<<<'SQL'
            CREATE INDEX IDX_8FB37D39D5766755 ON t_st_stock_obj (user_update_id)
        SQL);
        $this->addSql(<<<'SQL'
            CREATE INDEX IDX_8FB37D398CC46927 ON t_st_stock_obj (nature_prix_id)
        SQL);
        $this->addSql(<<<'SQL'
            CREATE INDEX IDX_8FB37D394DE7DC5C ON t_st_stock_obj (adresse_id)
        SQL);
        $this->addSql(<<<'SQL'
            CREATE INDEX IDX_8FB37D396B504741 ON t_st_stock_obj (user_etiqueter_id)
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE t_ms_preparation ADD CONSTRAINT FK_DD7CA239A6662699 FOREIGN KEY (t_ms_commande_id) REFERENCES t_ms_commande (id)
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE t_ms_preparation ADD CONSTRAINT FK_DD7CA239F987D8A8 FOREIGN KEY (user_created_id) REFERENCES p_pv000_user (id)
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE t_ms_preparation ADD CONSTRAINT FK_DD7CA2398502FE2D FOREIGN KEY (t_st_stock_obj_id) REFERENCES t_st_stock_obj (id)
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE t_st_stock_obj ADD CONSTRAINT FK_8FB37D39F347EFB FOREIGN KEY (produit_id) REFERENCES p_produits (id)
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE t_st_stock_obj ADD CONSTRAINT FK_8FB37D399BEA957A FOREIGN KEY (entite_id) REFERENCES p_entite (id)
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE t_st_stock_obj ADD CONSTRAINT FK_8FB37D39E8544089 FOREIGN KEY (t_ac_reception_lot_id) REFERENCES t_ac_reception_lot (id)
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE t_st_stock_obj ADD CONSTRAINT FK_8FB37D3972EC427E FOREIGN KEY (parent_transfor_id) REFERENCES t_st_stock_obj (id)
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE t_st_stock_obj ADD CONSTRAINT FK_8FB37D3987BE9962 FOREIGN KEY (user_aff_adresse_id) REFERENCES p_pv000_user (id)
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE t_st_stock_obj ADD CONSTRAINT FK_8FB37D39D5766755 FOREIGN KEY (user_update_id) REFERENCES p_pv000_user (id)
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE t_st_stock_obj ADD CONSTRAINT FK_8FB37D398CC46927 FOREIGN KEY (nature_prix_id) REFERENCES p_nature_prix (id)
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE t_st_stock_obj ADD CONSTRAINT FK_8FB37D394DE7DC5C FOREIGN KEY (adresse_id) REFERENCES p_emplacements (id)
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE t_st_stock_obj ADD CONSTRAINT FK_8FB37D396B504741 FOREIGN KEY (user_etiqueter_id) REFERENCES p_pv000_user (id)
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE t_ac_reception_obj DROP CONSTRAINT FK_3B64D1C2F347EFB
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE t_ac_reception_obj DROP CONSTRAINT FK_3B64D1C29BEA957A
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE t_ac_reception_obj DROP CONSTRAINT FK_3B64D1C2A8CBA5F7
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE t_ac_reception_obj DROP CONSTRAINT FK_3B64D1C272EC427E
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE t_ac_reception_obj DROP CONSTRAINT FK_3B64D1C287BE9962
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE t_ac_reception_obj DROP CONSTRAINT FK_3B64D1C2D5766755
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE t_ac_reception_obj DROP CONSTRAINT FK_3B64D1C220096AE3
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE t_ac_reception_obj DROP CONSTRAINT FK_3B64D1C28CC46927
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE t_ac_reception_obj DROP CONSTRAINT FK_3B64D1C24DE7DC5C
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE t_ac_reception_obj DROP CONSTRAINT FK_3B64D1C26B504741
        SQL);
        $this->addSql(<<<'SQL'
            DROP TABLE t_ac_reception_obj
        SQL);
        $this->addSql(<<<'SQL'
            DROP INDEX IDX_4B82D87C7AFD3D31 ON t_ms_livraisonobj
        SQL);
        $this->addSql(<<<'SQL'
            sp_rename 't_ms_livraisonobj.tac_reception_obj_id', 't_st_stock_obj_id', 'COLUMN'
        SQL);
        $this->addSql("DELETE FROM t_ms_livraisonobj WHERE t_st_stock_obj_id IS NOT NULL AND t_st_stock_obj_id NOT IN (SELECT id FROM t_st_stock_obj)");
        $this->addSql(<<<'SQL'
            ALTER TABLE t_ms_livraisonobj ADD CONSTRAINT FK_4B82D87C8502FE2D FOREIGN KEY (t_st_stock_obj_id) REFERENCES t_st_stock_obj (id)
        SQL);
        $this->addSql(<<<'SQL'
            CREATE INDEX IDX_4B82D87C8502FE2D ON t_ms_livraisonobj (t_st_stock_obj_id)
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
            ALTER TABLE t_ms_livraisonobj DROP CONSTRAINT FK_4B82D87C8502FE2D
        SQL);
        $this->addSql(<<<'SQL'
            CREATE TABLE t_ac_reception_obj (id INT IDENTITY NOT NULL, produit_id INT, entite_id INT, lot_id INT, parent_transfor_id INT, user_aff_adresse_id INT, user_update_id INT, magasin_id INT, nature_prix_id INT, adresse_id INT, user_etiqueter_id INT, code NVARCHAR(255) COLLATE SQL_Latin1_General_CP1_CI_AS, numero_lot NVARCHAR(255) COLLATE SQL_Latin1_General_CP1_CI_AS, ref_marche NVARCHAR(255) COLLATE SQL_Latin1_General_CP1_CI_AS, code_barre NVARCHAR(255) COLLATE SQL_Latin1_General_CP1_CI_AS, date_peremption DATETIME2(6), prix_vente DOUBLE PRECISION, quantite DOUBLE PRECISION, date_aff_adresse DATETIME2(6), source NVARCHAR(255) COLLATE SQL_Latin1_General_CP1_CI_AS, active BIT, conformite BIT, reserve BIT, date_update DATETIME2(6), date_sys DATETIME2(6), etiqueter BIT, date_etiqueter DATETIME2(6), PRIMARY KEY (id))
        SQL);
        $this->addSql(<<<'SQL'
            CREATE NONCLUSTERED INDEX IDX_3B64D1C2F347EFB ON t_ac_reception_obj (produit_id)
        SQL);
        $this->addSql(<<<'SQL'
            CREATE NONCLUSTERED INDEX IDX_3B64D1C29BEA957A ON t_ac_reception_obj (entite_id)
        SQL);
        $this->addSql(<<<'SQL'
            CREATE NONCLUSTERED INDEX IDX_3B64D1C2A8CBA5F7 ON t_ac_reception_obj (lot_id)
        SQL);
        $this->addSql(<<<'SQL'
            CREATE NONCLUSTERED INDEX IDX_3B64D1C272EC427E ON t_ac_reception_obj (parent_transfor_id)
        SQL);
        $this->addSql(<<<'SQL'
            CREATE NONCLUSTERED INDEX IDX_3B64D1C287BE9962 ON t_ac_reception_obj (user_aff_adresse_id)
        SQL);
        $this->addSql(<<<'SQL'
            CREATE NONCLUSTERED INDEX IDX_3B64D1C2D5766755 ON t_ac_reception_obj (user_update_id)
        SQL);
        $this->addSql(<<<'SQL'
            CREATE NONCLUSTERED INDEX IDX_3B64D1C220096AE3 ON t_ac_reception_obj (magasin_id)
        SQL);
        $this->addSql(<<<'SQL'
            CREATE NONCLUSTERED INDEX IDX_3B64D1C28CC46927 ON t_ac_reception_obj (nature_prix_id)
        SQL);
        $this->addSql(<<<'SQL'
            CREATE NONCLUSTERED INDEX IDX_3B64D1C24DE7DC5C ON t_ac_reception_obj (adresse_id)
        SQL);
        $this->addSql(<<<'SQL'
            CREATE NONCLUSTERED INDEX IDX_3B64D1C26B504741 ON t_ac_reception_obj (user_etiqueter_id)
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE t_ac_reception_obj ADD CONSTRAINT FK_3B64D1C2F347EFB FOREIGN KEY (produit_id) REFERENCES p_produits (id) ON UPDATE NO ACTION ON DELETE NO ACTION
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE t_ac_reception_obj ADD CONSTRAINT FK_3B64D1C29BEA957A FOREIGN KEY (entite_id) REFERENCES p_entite (id) ON UPDATE NO ACTION ON DELETE NO ACTION
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE t_ac_reception_obj ADD CONSTRAINT FK_3B64D1C2A8CBA5F7 FOREIGN KEY (lot_id) REFERENCES t_ac_reception_lot (id) ON UPDATE NO ACTION ON DELETE NO ACTION
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE t_ac_reception_obj ADD CONSTRAINT FK_3B64D1C272EC427E FOREIGN KEY (parent_transfor_id) REFERENCES t_ac_reception_obj (id) ON UPDATE NO ACTION ON DELETE NO ACTION
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE t_ac_reception_obj ADD CONSTRAINT FK_3B64D1C287BE9962 FOREIGN KEY (user_aff_adresse_id) REFERENCES p_pv000_user (id) ON UPDATE NO ACTION ON DELETE NO ACTION
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE t_ac_reception_obj ADD CONSTRAINT FK_3B64D1C2D5766755 FOREIGN KEY (user_update_id) REFERENCES p_pv000_user (id) ON UPDATE NO ACTION ON DELETE NO ACTION
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE t_ac_reception_obj ADD CONSTRAINT FK_3B64D1C220096AE3 FOREIGN KEY (magasin_id) REFERENCES p_magasins (id) ON UPDATE NO ACTION ON DELETE NO ACTION
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE t_ac_reception_obj ADD CONSTRAINT FK_3B64D1C28CC46927 FOREIGN KEY (nature_prix_id) REFERENCES p_nature_prix (id) ON UPDATE NO ACTION ON DELETE NO ACTION
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE t_ac_reception_obj ADD CONSTRAINT FK_3B64D1C24DE7DC5C FOREIGN KEY (adresse_id) REFERENCES p_emplacements (id) ON UPDATE NO ACTION ON DELETE NO ACTION
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE t_ac_reception_obj ADD CONSTRAINT FK_3B64D1C26B504741 FOREIGN KEY (user_etiqueter_id) REFERENCES p_pv000_user (id) ON UPDATE NO ACTION ON DELETE NO ACTION
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE t_ms_preparation DROP CONSTRAINT FK_DD7CA239A6662699
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE t_ms_preparation DROP CONSTRAINT FK_DD7CA239F987D8A8
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE t_ms_preparation DROP CONSTRAINT FK_DD7CA2398502FE2D
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE t_st_stock_obj DROP CONSTRAINT FK_8FB37D39F347EFB
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE t_st_stock_obj DROP CONSTRAINT FK_8FB37D399BEA957A
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE t_st_stock_obj DROP CONSTRAINT FK_8FB37D39E8544089
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE t_st_stock_obj DROP CONSTRAINT FK_8FB37D3972EC427E
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE t_st_stock_obj DROP CONSTRAINT FK_8FB37D3987BE9962
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE t_st_stock_obj DROP CONSTRAINT FK_8FB37D39D5766755
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE t_st_stock_obj DROP CONSTRAINT FK_8FB37D398CC46927
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE t_st_stock_obj DROP CONSTRAINT FK_8FB37D394DE7DC5C
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE t_st_stock_obj DROP CONSTRAINT FK_8FB37D396B504741
        SQL);
        $this->addSql(<<<'SQL'
            DROP TABLE t_ms_preparation
        SQL);
        $this->addSql(<<<'SQL'
            DROP TABLE t_st_stock_obj
        SQL);
        $this->addSql(<<<'SQL'
            DROP INDEX IDX_4B82D87C8502FE2D ON t_ms_livraisonobj
        SQL);
        $this->addSql(<<<'SQL'
            sp_rename 't_ms_livraisonobj.t_st_stock_obj_id', 'tac_reception_obj_id', 'COLUMN'
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE t_ms_livraisonobj ADD CONSTRAINT FK_4B82D87C7AFD3D31 FOREIGN KEY (tac_reception_obj_id) REFERENCES t_ac_reception_obj (id) ON UPDATE NO ACTION ON DELETE NO ACTION
        SQL);
        $this->addSql(<<<'SQL'
            CREATE NONCLUSTERED INDEX IDX_4B82D87C7AFD3D31 ON t_ms_livraisonobj (tac_reception_obj_id)
        SQL);
    }
}
