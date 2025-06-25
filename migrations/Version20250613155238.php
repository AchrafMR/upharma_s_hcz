<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20250613155238 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql(<<<'SQL'
            CREATE TABLE p_app_parametrages (id INT IDENTITY NOT NULL, code NVARCHAR(255), designation NVARCHAR(255), value INT, description VARCHAR(MAX), PRIMARY KEY (id))
        SQL);
        $this->addSql(<<<'SQL'
            CREATE TABLE p_messages (id INT IDENTITY NOT NULL, titre NVARCHAR(255), message VARCHAR(MAX), type NVARCHAR(255), route NVARCHAR(255), active BIT, PRIMARY KEY (id))
        SQL);
        $this->addSql(<<<'SQL'
            CREATE TABLE p_nature_prix (id INT IDENTITY NOT NULL, code NVARCHAR(255), titre NVARCHAR(255), active BIT, created DATETIME2(6), PRIMARY KEY (id))
        SQL);
        $this->addSql(<<<'SQL'
            CREATE TABLE p_tarif_fournisseur (id INT IDENTITY NOT NULL, produit_id INT, fournisseur_id INT, prix DOUBLE PRECISION, tva DOUBLE PRECISION, PRIMARY KEY (id))
        SQL);
        $this->addSql(<<<'SQL'
            CREATE INDEX IDX_71B3B597F347EFB ON p_tarif_fournisseur (produit_id)
        SQL);
        $this->addSql(<<<'SQL'
            CREATE INDEX IDX_71B3B597670C757F ON p_tarif_fournisseur (fournisseur_id)
        SQL);
        $this->addSql(<<<'SQL'
            CREATE TABLE t_ac_commande (id INT IDENTITY NOT NULL, devise_id INT, partenaire_id INT, entite_id INT, precommande_id INT, user_created_id INT, user_updated_id INT, user_valider_id INT, user_generer_id INT, user_annuler_id INT, user_archiver_id INT, piece_id INT, status_id INT, st_position_actuel_id INT, code NVARCHAR(100), observation VARCHAR(MAX), autre_information VARCHAR(MAX), remise DOUBLE PRECISION, avoir BIT, date_commande DATETIME2(6), refDocAsso NVARCHAR(255), date_doc_asso DATETIME2(6), date_livr_provisoire DATETIME2(6), created DATETIME2(6), updated DATETIME2(6), date_valider DATETIME2(6), date_generer DATETIME2(6), date_annuler DATETIME2(6), date_archiver DATETIME2(6), position_actuel NVARCHAR(100), historique VARCHAR(MAX), flag_synchronisation_locale INT, montant_ht DOUBLE PRECISION, montant_ttc DOUBLE PRECISION, tva DOUBLE PRECISION, PRIMARY KEY (id))
        SQL);
        $this->addSql(<<<'SQL'
            CREATE INDEX IDX_367F94D5F4445056 ON t_ac_commande (devise_id)
        SQL);
        $this->addSql(<<<'SQL'
            CREATE INDEX IDX_367F94D598DE13AC ON t_ac_commande (partenaire_id)
        SQL);
        $this->addSql(<<<'SQL'
            CREATE INDEX IDX_367F94D59BEA957A ON t_ac_commande (entite_id)
        SQL);
        $this->addSql(<<<'SQL'
            CREATE INDEX IDX_367F94D5B8E087ED ON t_ac_commande (precommande_id)
        SQL);
        $this->addSql(<<<'SQL'
            CREATE INDEX IDX_367F94D5F987D8A8 ON t_ac_commande (user_created_id)
        SQL);
        $this->addSql(<<<'SQL'
            CREATE INDEX IDX_367F94D5316B011F ON t_ac_commande (user_updated_id)
        SQL);
        $this->addSql(<<<'SQL'
            CREATE INDEX IDX_367F94D5F749B324 ON t_ac_commande (user_valider_id)
        SQL);
        $this->addSql(<<<'SQL'
            CREATE INDEX IDX_367F94D532C38471 ON t_ac_commande (user_generer_id)
        SQL);
        $this->addSql(<<<'SQL'
            CREATE INDEX IDX_367F94D5E38A95CE ON t_ac_commande (user_annuler_id)
        SQL);
        $this->addSql(<<<'SQL'
            CREATE INDEX IDX_367F94D5D2B09A9 ON t_ac_commande (user_archiver_id)
        SQL);
        $this->addSql(<<<'SQL'
            CREATE INDEX IDX_367F94D5C40FCFA8 ON t_ac_commande (piece_id)
        SQL);
        $this->addSql(<<<'SQL'
            CREATE INDEX IDX_367F94D56BF700BD ON t_ac_commande (status_id)
        SQL);
        $this->addSql(<<<'SQL'
            CREATE INDEX IDX_367F94D5B588E0EF ON t_ac_commande (st_position_actuel_id)
        SQL);
        $this->addSql(<<<'SQL'
            CREATE TABLE t_ac_commande_lg (id INT IDENTITY NOT NULL, commande_id INT, produit_id INT, unite_id INT, quantite DOUBLE PRECISION, prixunitaire DOUBLE PRECISION, remise DOUBLE PRECISION, tva DOUBLE PRECISION, montant_ht DOUBLE PRECISION, montant_ttc DOUBLE PRECISION, observation VARCHAR(MAX), code_comptable NVARCHAR(255), flag_synchronisation_locale INT, active BIT, total_tva DOUBLE PRECISION, total_remise DOUBLE PRECISION, PRIMARY KEY (id))
        SQL);
        $this->addSql(<<<'SQL'
            CREATE INDEX IDX_DCEAB49182EA2E54 ON t_ac_commande_lg (commande_id)
        SQL);
        $this->addSql(<<<'SQL'
            CREATE INDEX IDX_DCEAB491F347EFB ON t_ac_commande_lg (produit_id)
        SQL);
        $this->addSql(<<<'SQL'
            CREATE INDEX IDX_DCEAB491EC4A74AB ON t_ac_commande_lg (unite_id)
        SQL);
        $this->addSql(<<<'SQL'
            CREATE TABLE t_ac_facture (id INT IDENTITY NOT NULL, partenaire_id INT, entite_id INT, devise_id INT, piece_id INT, user_created_id INT, user_updated_id INT, user_valider_id INT, user_generer_id INT, user_annuler_id INT, user_archiver_id INT, st_position_actuel_id INT, code NVARCHAR(100), montant DOUBLE PRECISION, montant_mad DOUBLE PRECISION, observation VARCHAR(MAX), autre_information VARCHAR(MAX), designation_piece NVARCHAR(255), date_facture DATETIME2(6), refDocAsso NVARCHAR(255), date_doc_asso DATETIME2(6), created DATETIME2(6), updated DATETIME2(6), active BIT, avoir BIT, date_valider DATETIME2(6), date_generer DATETIME2(6), date_annuler DATETIME2(6), date_archiver DATETIME2(6), position_actuel NVARCHAR(100), historique VARCHAR(MAX), source NVARCHAR(255), anneecomptable INT, flag_synchronisation_locale INT, PRIMARY KEY (id))
        SQL);
        $this->addSql(<<<'SQL'
            CREATE INDEX IDX_3F8DD2D98DE13AC ON t_ac_facture (partenaire_id)
        SQL);
        $this->addSql(<<<'SQL'
            CREATE INDEX IDX_3F8DD2D9BEA957A ON t_ac_facture (entite_id)
        SQL);
        $this->addSql(<<<'SQL'
            CREATE INDEX IDX_3F8DD2DF4445056 ON t_ac_facture (devise_id)
        SQL);
        $this->addSql(<<<'SQL'
            CREATE INDEX IDX_3F8DD2DC40FCFA8 ON t_ac_facture (piece_id)
        SQL);
        $this->addSql(<<<'SQL'
            CREATE INDEX IDX_3F8DD2DF987D8A8 ON t_ac_facture (user_created_id)
        SQL);
        $this->addSql(<<<'SQL'
            CREATE INDEX IDX_3F8DD2D316B011F ON t_ac_facture (user_updated_id)
        SQL);
        $this->addSql(<<<'SQL'
            CREATE INDEX IDX_3F8DD2DF749B324 ON t_ac_facture (user_valider_id)
        SQL);
        $this->addSql(<<<'SQL'
            CREATE INDEX IDX_3F8DD2D32C38471 ON t_ac_facture (user_generer_id)
        SQL);
        $this->addSql(<<<'SQL'
            CREATE INDEX IDX_3F8DD2DE38A95CE ON t_ac_facture (user_annuler_id)
        SQL);
        $this->addSql(<<<'SQL'
            CREATE INDEX IDX_3F8DD2DD2B09A9 ON t_ac_facture (user_archiver_id)
        SQL);
        $this->addSql(<<<'SQL'
            CREATE INDEX IDX_3F8DD2DB588E0EF ON t_ac_facture (st_position_actuel_id)
        SQL);
        $this->addSql(<<<'SQL'
            CREATE TABLE t_ac_facture_lg (id INT IDENTITY NOT NULL, facture_id INT, produit_id INT, unite_id INT, quantite DOUBLE PRECISION, prixunitaire DOUBLE PRECISION, remise DOUBLE PRECISION, tba DOUBLE PRECISION, montant_ht DOUBLE PRECISION, sens NVARCHAR(10), montant_ttc DOUBLE PRECISION, montant_mad DOUBLE PRECISION, observation VARCHAR(MAX), plan_comptable_achat NVARCHAR(255), flag_synchronisation_locale INT, PRIMARY KEY (id))
        SQL);
        $this->addSql(<<<'SQL'
            CREATE INDEX IDX_355A74037F2DEE08 ON t_ac_facture_lg (facture_id)
        SQL);
        $this->addSql(<<<'SQL'
            CREATE INDEX IDX_355A7403F347EFB ON t_ac_facture_lg (produit_id)
        SQL);
        $this->addSql(<<<'SQL'
            CREATE INDEX IDX_355A7403EC4A74AB ON t_ac_facture_lg (unite_id)
        SQL);
        $this->addSql(<<<'SQL'
            CREATE TABLE t_ac_marche (id INT IDENTITY NOT NULL, code NVARCHAR(255), PRIMARY KEY (id))
        SQL);
        $this->addSql(<<<'SQL'
            CREATE TABLE t_ac_marche_lg (id INT IDENTITY NOT NULL, marche_id INT, PRIMARY KEY (id))
        SQL);
        $this->addSql(<<<'SQL'
            CREATE INDEX IDX_A26252069E494911 ON t_ac_marche_lg (marche_id)
        SQL);
        $this->addSql(<<<'SQL'
            CREATE TABLE t_ac_precommande (id INT IDENTITY NOT NULL, piece_id INT, marche_id INT, p_entite_id INT, p_devise_id INT, partenaire_fournisseur_id INT, uv_devis_id INT, user_created_id INT, user_updated_id INT, user_valider_id INT, user_generer_id INT, user_annuler_id INT, user_archiver_id INT, status_id INT, st_position_actuel_id INT, code NVARCHAR(255), description NVARCHAR(255), autre_information VARCHAR(MAX), date_demande DATETIME2(6), avoir BIT, refDocAsso NVARCHAR(255), montant DOUBLE PRECISION, remise DOUBLE PRECISION, position_actuel NVARCHAR(100), historique VARCHAR(MAX), source NVARCHAR(255), flag_synchronisation_locale INT, date_valider DATETIME2(6), date_generer DATETIME2(6), date_annuler DATETIME2(6), date_archiver DATETIME2(6), montant_ht DOUBLE PRECISION, montant_ttc DOUBLE PRECISION, tva DOUBLE PRECISION, created DATETIME2(6), updated DATETIME2(6), PRIMARY KEY (id))
        SQL);
        $this->addSql(<<<'SQL'
            CREATE INDEX IDX_C05B347FC40FCFA8 ON t_ac_precommande (piece_id)
        SQL);
        $this->addSql(<<<'SQL'
            CREATE INDEX IDX_C05B347F9E494911 ON t_ac_precommande (marche_id)
        SQL);
        $this->addSql(<<<'SQL'
            CREATE INDEX IDX_C05B347FA059BF0E ON t_ac_precommande (p_entite_id)
        SQL);
        $this->addSql(<<<'SQL'
            CREATE INDEX IDX_C05B347FCFF77A22 ON t_ac_precommande (p_devise_id)
        SQL);
        $this->addSql(<<<'SQL'
            CREATE INDEX IDX_C05B347F5BDE0EF9 ON t_ac_precommande (partenaire_fournisseur_id)
        SQL);
        $this->addSql(<<<'SQL'
            CREATE INDEX IDX_C05B347F96B21196 ON t_ac_precommande (uv_devis_id)
        SQL);
        $this->addSql(<<<'SQL'
            CREATE INDEX IDX_C05B347FF987D8A8 ON t_ac_precommande (user_created_id)
        SQL);
        $this->addSql(<<<'SQL'
            CREATE INDEX IDX_C05B347F316B011F ON t_ac_precommande (user_updated_id)
        SQL);
        $this->addSql(<<<'SQL'
            CREATE INDEX IDX_C05B347FF749B324 ON t_ac_precommande (user_valider_id)
        SQL);
        $this->addSql(<<<'SQL'
            CREATE INDEX IDX_C05B347F32C38471 ON t_ac_precommande (user_generer_id)
        SQL);
        $this->addSql(<<<'SQL'
            CREATE INDEX IDX_C05B347FE38A95CE ON t_ac_precommande (user_annuler_id)
        SQL);
        $this->addSql(<<<'SQL'
            CREATE INDEX IDX_C05B347FD2B09A9 ON t_ac_precommande (user_archiver_id)
        SQL);
        $this->addSql(<<<'SQL'
            CREATE INDEX IDX_C05B347F6BF700BD ON t_ac_precommande (status_id)
        SQL);
        $this->addSql(<<<'SQL'
            CREATE INDEX IDX_C05B347FB588E0EF ON t_ac_precommande (st_position_actuel_id)
        SQL);
        $this->addSql(<<<'SQL'
            CREATE TABLE t_ac_precommande_lg (id INT IDENTITY NOT NULL, precommande_id INT, produit_id INT, unite_id INT, quantite DOUBLE PRECISION, prixunitaire DOUBLE PRECISION, remise DOUBLE PRECISION, tva DOUBLE PRECISION, montant_ht DOUBLE PRECISION, montant_ttc DOUBLE PRECISION, observation VARCHAR(MAX), code_comptable NVARCHAR(255), flag_synchronisation_locale INT, active BIT, total_tva DOUBLE PRECISION, total_remise DOUBLE PRECISION, PRIMARY KEY (id))
        SQL);
        $this->addSql(<<<'SQL'
            CREATE INDEX IDX_9A0134E9B8E087ED ON t_ac_precommande_lg (precommande_id)
        SQL);
        $this->addSql(<<<'SQL'
            CREATE INDEX IDX_9A0134E9F347EFB ON t_ac_precommande_lg (produit_id)
        SQL);
        $this->addSql(<<<'SQL'
            CREATE INDEX IDX_9A0134E9EC4A74AB ON t_ac_precommande_lg (unite_id)
        SQL);
        $this->addSql(<<<'SQL'
            CREATE TABLE t_ac_reception (id INT IDENTITY NOT NULL, commande_id INT, facture_id INT, entite_id INT, devise_id INT, partenaire_id INT, user_created_id INT, user_updated_id INT, user_valider_id INT, user_generer_id INT, user_annuler_id INT, user_encours_id INT, user_archiver_id INT, piece_id INT, status_id INT, st_position_actuel_id INT, code NVARCHAR(100), refDocAsso NVARCHAR(255), date_livraison DATETIME2(6), remise DOUBLE PRECISION, observation VARCHAR(MAX), description VARCHAR(MAX), created DATETIME2(6), updated DATETIME2(6), active BIT, date_valider DATETIME2(6), date_generer DATETIME2(6), date_annuler DATETIME2(6), date_encours DATETIME2(6), date_archiver DATETIME2(6), position_actuel NVARCHAR(100), avoir BIT, cloture BIT, source NVARCHAR(255), flag_synchronisation_locale INT, montant_ht DOUBLE PRECISION, montant_ttc DOUBLE PRECISION, tva DOUBLE PRECISION, PRIMARY KEY (id))
        SQL);
        $this->addSql(<<<'SQL'
            CREATE INDEX IDX_88833BC782EA2E54 ON t_ac_reception (commande_id)
        SQL);
        $this->addSql(<<<'SQL'
            CREATE INDEX IDX_88833BC77F2DEE08 ON t_ac_reception (facture_id)
        SQL);
        $this->addSql(<<<'SQL'
            CREATE INDEX IDX_88833BC79BEA957A ON t_ac_reception (entite_id)
        SQL);
        $this->addSql(<<<'SQL'
            CREATE INDEX IDX_88833BC7F4445056 ON t_ac_reception (devise_id)
        SQL);
        $this->addSql(<<<'SQL'
            CREATE INDEX IDX_88833BC798DE13AC ON t_ac_reception (partenaire_id)
        SQL);
        $this->addSql(<<<'SQL'
            CREATE INDEX IDX_88833BC7F987D8A8 ON t_ac_reception (user_created_id)
        SQL);
        $this->addSql(<<<'SQL'
            CREATE INDEX IDX_88833BC7316B011F ON t_ac_reception (user_updated_id)
        SQL);
        $this->addSql(<<<'SQL'
            CREATE INDEX IDX_88833BC7F749B324 ON t_ac_reception (user_valider_id)
        SQL);
        $this->addSql(<<<'SQL'
            CREATE INDEX IDX_88833BC732C38471 ON t_ac_reception (user_generer_id)
        SQL);
        $this->addSql(<<<'SQL'
            CREATE INDEX IDX_88833BC7E38A95CE ON t_ac_reception (user_annuler_id)
        SQL);
        $this->addSql(<<<'SQL'
            CREATE INDEX IDX_88833BC7FC6F9C41 ON t_ac_reception (user_encours_id)
        SQL);
        $this->addSql(<<<'SQL'
            CREATE INDEX IDX_88833BC7D2B09A9 ON t_ac_reception (user_archiver_id)
        SQL);
        $this->addSql(<<<'SQL'
            CREATE INDEX IDX_88833BC7C40FCFA8 ON t_ac_reception (piece_id)
        SQL);
        $this->addSql(<<<'SQL'
            CREATE INDEX IDX_88833BC76BF700BD ON t_ac_reception (status_id)
        SQL);
        $this->addSql(<<<'SQL'
            CREATE INDEX IDX_88833BC7B588E0EF ON t_ac_reception (st_position_actuel_id)
        SQL);
        $this->addSql(<<<'SQL'
            CREATE TABLE t_ac_reception_lg (id INT IDENTITY NOT NULL, reception_id INT, produit_id INT, unite_id INT, t_ac_commande_lg_id INT, quantite DOUBLE PRECISION, prixunitaire DOUBLE PRECISION, remise DOUBLE PRECISION, tva DOUBLE PRECISION, montant_ht DOUBLE PRECISION, montant_ttc DOUBLE PRECISION NOT NULL, observation VARCHAR(MAX), code_comptable NVARCHAR(255), flag_synchronisation_locale INT, total_tva DOUBLE PRECISION, total_remise DOUBLE PRECISION, PRIMARY KEY (id))
        SQL);
        $this->addSql(<<<'SQL'
            CREATE INDEX IDX_5EDCDD207C14DF52 ON t_ac_reception_lg (reception_id)
        SQL);
        $this->addSql(<<<'SQL'
            CREATE INDEX IDX_5EDCDD20F347EFB ON t_ac_reception_lg (produit_id)
        SQL);
        $this->addSql(<<<'SQL'
            CREATE INDEX IDX_5EDCDD20EC4A74AB ON t_ac_reception_lg (unite_id)
        SQL);
        $this->addSql(<<<'SQL'
            CREATE INDEX IDX_5EDCDD205AE677F1 ON t_ac_reception_lg (t_ac_commande_lg_id)
        SQL);
        $this->addSql(<<<'SQL'
            CREATE TABLE t_ac_reception_lot (id INT IDENTITY NOT NULL, reception_id INT, reception_lg_id INT, produit_id INT, lot NVARCHAR(255), date_peremption DATETIME2(6), quantite INT, prixunitaire_achat_ht DOUBLE PRECISION, tva_achat DOUBLE PRECISION, remise_achat DOUBLE PRECISION, montant_achat_ht DOUBLE PRECISION, montant_achat_ttc DOUBLE PRECISION, prixunitaire_vente_ht DOUBLE PRECISION, tva_vente DOUBLE PRECISION, remise_vente DOUBLE PRECISION, montant_vente_ttc DOUBLE PRECISION, marge DOUBLE PRECISION, date_sys DATETIME2(6), PRIMARY KEY (id))
        SQL);
        $this->addSql(<<<'SQL'
            CREATE INDEX IDX_76832CB57C14DF52 ON t_ac_reception_lot (reception_id)
        SQL);
        $this->addSql(<<<'SQL'
            CREATE INDEX IDX_76832CB5CF5612A1 ON t_ac_reception_lot (reception_lg_id)
        SQL);
        $this->addSql(<<<'SQL'
            CREATE INDEX IDX_76832CB5F347EFB ON t_ac_reception_lot (produit_id)
        SQL);
        $this->addSql(<<<'SQL'
            CREATE TABLE t_ac_reception_obj (id INT IDENTITY NOT NULL, produit_id INT, entite_id INT, lot_id INT, parent_transfor_id INT, user_aff_adresse_id INT, user_update_id INT, magasin_id INT, nature_prix_id INT, adresse_id INT, user_etiqueter_id INT, code NVARCHAR(255), numero_lot NVARCHAR(255), ref_marche NVARCHAR(255), code_barre NVARCHAR(255), date_peremption DATETIME2(6), prix_vente DOUBLE PRECISION, quantite DOUBLE PRECISION, date_aff_adresse DATETIME2(6), source NVARCHAR(255), active BIT, conformite BIT, reserve BIT, date_update DATETIME2(6), date_sys DATETIME2(6), etiqueter BIT, date_etiqueter DATETIME2(6), PRIMARY KEY (id))
        SQL);
        $this->addSql(<<<'SQL'
            CREATE INDEX IDX_3B64D1C2F347EFB ON t_ac_reception_obj (produit_id)
        SQL);
        $this->addSql(<<<'SQL'
            CREATE INDEX IDX_3B64D1C29BEA957A ON t_ac_reception_obj (entite_id)
        SQL);
        $this->addSql(<<<'SQL'
            CREATE INDEX IDX_3B64D1C2A8CBA5F7 ON t_ac_reception_obj (lot_id)
        SQL);
        $this->addSql(<<<'SQL'
            CREATE INDEX IDX_3B64D1C272EC427E ON t_ac_reception_obj (parent_transfor_id)
        SQL);
        $this->addSql(<<<'SQL'
            CREATE INDEX IDX_3B64D1C287BE9962 ON t_ac_reception_obj (user_aff_adresse_id)
        SQL);
        $this->addSql(<<<'SQL'
            CREATE INDEX IDX_3B64D1C2D5766755 ON t_ac_reception_obj (user_update_id)
        SQL);
        $this->addSql(<<<'SQL'
            CREATE INDEX IDX_3B64D1C220096AE3 ON t_ac_reception_obj (magasin_id)
        SQL);
        $this->addSql(<<<'SQL'
            CREATE INDEX IDX_3B64D1C28CC46927 ON t_ac_reception_obj (nature_prix_id)
        SQL);
        $this->addSql(<<<'SQL'
            CREATE INDEX IDX_3B64D1C24DE7DC5C ON t_ac_reception_obj (adresse_id)
        SQL);
        $this->addSql(<<<'SQL'
            CREATE INDEX IDX_3B64D1C26B504741 ON t_ac_reception_obj (user_etiqueter_id)
        SQL);
        $this->addSql(<<<'SQL'
            CREATE TABLE t_vt_devis (id INT IDENTITY NOT NULL, PRIMARY KEY (id))
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE p_tarif_fournisseur ADD CONSTRAINT FK_71B3B597F347EFB FOREIGN KEY (produit_id) REFERENCES p_produits (id)
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE p_tarif_fournisseur ADD CONSTRAINT FK_71B3B597670C757F FOREIGN KEY (fournisseur_id) REFERENCES p_partenaires (id)
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE t_ac_commande ADD CONSTRAINT FK_367F94D5F4445056 FOREIGN KEY (devise_id) REFERENCES p_devise (id)
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE t_ac_commande ADD CONSTRAINT FK_367F94D598DE13AC FOREIGN KEY (partenaire_id) REFERENCES p_partenaires (id)
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE t_ac_commande ADD CONSTRAINT FK_367F94D59BEA957A FOREIGN KEY (entite_id) REFERENCES p_entite (id)
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE t_ac_commande ADD CONSTRAINT FK_367F94D5B8E087ED FOREIGN KEY (precommande_id) REFERENCES t_ac_precommande (id)
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE t_ac_commande ADD CONSTRAINT FK_367F94D5F987D8A8 FOREIGN KEY (user_created_id) REFERENCES p_pv000_user (id)
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE t_ac_commande ADD CONSTRAINT FK_367F94D5316B011F FOREIGN KEY (user_updated_id) REFERENCES p_pv000_user (id)
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE t_ac_commande ADD CONSTRAINT FK_367F94D5F749B324 FOREIGN KEY (user_valider_id) REFERENCES p_pv000_user (id)
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE t_ac_commande ADD CONSTRAINT FK_367F94D532C38471 FOREIGN KEY (user_generer_id) REFERENCES p_pv000_user (id)
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE t_ac_commande ADD CONSTRAINT FK_367F94D5E38A95CE FOREIGN KEY (user_annuler_id) REFERENCES p_pv000_user (id)
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE t_ac_commande ADD CONSTRAINT FK_367F94D5D2B09A9 FOREIGN KEY (user_archiver_id) REFERENCES p_pv000_user (id)
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE t_ac_commande ADD CONSTRAINT FK_367F94D5C40FCFA8 FOREIGN KEY (piece_id) REFERENCES p_type_piece (id)
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE t_ac_commande ADD CONSTRAINT FK_367F94D56BF700BD FOREIGN KEY (status_id) REFERENCES p_statut (id)
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE t_ac_commande ADD CONSTRAINT FK_367F94D5B588E0EF FOREIGN KEY (st_position_actuel_id) REFERENCES p_statut (id)
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE t_ac_commande_lg ADD CONSTRAINT FK_DCEAB49182EA2E54 FOREIGN KEY (commande_id) REFERENCES t_ac_commande (id)
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE t_ac_commande_lg ADD CONSTRAINT FK_DCEAB491F347EFB FOREIGN KEY (produit_id) REFERENCES p_produits (id)
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE t_ac_commande_lg ADD CONSTRAINT FK_DCEAB491EC4A74AB FOREIGN KEY (unite_id) REFERENCES p_pr_unites (id)
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE t_ac_facture ADD CONSTRAINT FK_3F8DD2D98DE13AC FOREIGN KEY (partenaire_id) REFERENCES p_partenaires (id)
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE t_ac_facture ADD CONSTRAINT FK_3F8DD2D9BEA957A FOREIGN KEY (entite_id) REFERENCES p_entite (id)
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE t_ac_facture ADD CONSTRAINT FK_3F8DD2DF4445056 FOREIGN KEY (devise_id) REFERENCES p_devise (id)
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE t_ac_facture ADD CONSTRAINT FK_3F8DD2DC40FCFA8 FOREIGN KEY (piece_id) REFERENCES p_type_piece (id)
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE t_ac_facture ADD CONSTRAINT FK_3F8DD2DF987D8A8 FOREIGN KEY (user_created_id) REFERENCES p_pv000_user (id)
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE t_ac_facture ADD CONSTRAINT FK_3F8DD2D316B011F FOREIGN KEY (user_updated_id) REFERENCES p_pv000_user (id)
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE t_ac_facture ADD CONSTRAINT FK_3F8DD2DF749B324 FOREIGN KEY (user_valider_id) REFERENCES p_pv000_user (id)
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE t_ac_facture ADD CONSTRAINT FK_3F8DD2D32C38471 FOREIGN KEY (user_generer_id) REFERENCES p_pv000_user (id)
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE t_ac_facture ADD CONSTRAINT FK_3F8DD2DE38A95CE FOREIGN KEY (user_annuler_id) REFERENCES p_pv000_user (id)
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE t_ac_facture ADD CONSTRAINT FK_3F8DD2DD2B09A9 FOREIGN KEY (user_archiver_id) REFERENCES p_pv000_user (id)
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE t_ac_facture ADD CONSTRAINT FK_3F8DD2DB588E0EF FOREIGN KEY (st_position_actuel_id) REFERENCES p_statut (id)
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE t_ac_facture_lg ADD CONSTRAINT FK_355A74037F2DEE08 FOREIGN KEY (facture_id) REFERENCES t_ac_facture (id)
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE t_ac_facture_lg ADD CONSTRAINT FK_355A7403F347EFB FOREIGN KEY (produit_id) REFERENCES p_produits (id)
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE t_ac_facture_lg ADD CONSTRAINT FK_355A7403EC4A74AB FOREIGN KEY (unite_id) REFERENCES p_pr_unites (id)
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE t_ac_marche_lg ADD CONSTRAINT FK_A26252069E494911 FOREIGN KEY (marche_id) REFERENCES t_ac_marche (id)
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE t_ac_precommande ADD CONSTRAINT FK_C05B347FC40FCFA8 FOREIGN KEY (piece_id) REFERENCES p_type_piece (id)
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE t_ac_precommande ADD CONSTRAINT FK_C05B347F9E494911 FOREIGN KEY (marche_id) REFERENCES t_ac_marche (id)
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE t_ac_precommande ADD CONSTRAINT FK_C05B347FA059BF0E FOREIGN KEY (p_entite_id) REFERENCES p_entite (id)
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE t_ac_precommande ADD CONSTRAINT FK_C05B347FCFF77A22 FOREIGN KEY (p_devise_id) REFERENCES p_devise (id)
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE t_ac_precommande ADD CONSTRAINT FK_C05B347F5BDE0EF9 FOREIGN KEY (partenaire_fournisseur_id) REFERENCES p_partenaires (id)
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE t_ac_precommande ADD CONSTRAINT FK_C05B347F96B21196 FOREIGN KEY (uv_devis_id) REFERENCES t_vt_devis (id)
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE t_ac_precommande ADD CONSTRAINT FK_C05B347FF987D8A8 FOREIGN KEY (user_created_id) REFERENCES p_pv000_user (id)
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE t_ac_precommande ADD CONSTRAINT FK_C05B347F316B011F FOREIGN KEY (user_updated_id) REFERENCES p_pv000_user (id)
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE t_ac_precommande ADD CONSTRAINT FK_C05B347FF749B324 FOREIGN KEY (user_valider_id) REFERENCES p_pv000_user (id)
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE t_ac_precommande ADD CONSTRAINT FK_C05B347F32C38471 FOREIGN KEY (user_generer_id) REFERENCES p_pv000_user (id)
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE t_ac_precommande ADD CONSTRAINT FK_C05B347FE38A95CE FOREIGN KEY (user_annuler_id) REFERENCES p_pv000_user (id)
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE t_ac_precommande ADD CONSTRAINT FK_C05B347FD2B09A9 FOREIGN KEY (user_archiver_id) REFERENCES p_pv000_user (id)
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE t_ac_precommande ADD CONSTRAINT FK_C05B347F6BF700BD FOREIGN KEY (status_id) REFERENCES p_statut (id)
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE t_ac_precommande ADD CONSTRAINT FK_C05B347FB588E0EF FOREIGN KEY (st_position_actuel_id) REFERENCES p_statut (id)
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE t_ac_precommande_lg ADD CONSTRAINT FK_9A0134E9B8E087ED FOREIGN KEY (precommande_id) REFERENCES t_ac_precommande (id)
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE t_ac_precommande_lg ADD CONSTRAINT FK_9A0134E9F347EFB FOREIGN KEY (produit_id) REFERENCES p_produits (id)
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE t_ac_precommande_lg ADD CONSTRAINT FK_9A0134E9EC4A74AB FOREIGN KEY (unite_id) REFERENCES p_pr_unites (id)
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE t_ac_reception ADD CONSTRAINT FK_88833BC782EA2E54 FOREIGN KEY (commande_id) REFERENCES t_ac_commande (id)
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE t_ac_reception ADD CONSTRAINT FK_88833BC77F2DEE08 FOREIGN KEY (facture_id) REFERENCES t_ac_facture (id)
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE t_ac_reception ADD CONSTRAINT FK_88833BC79BEA957A FOREIGN KEY (entite_id) REFERENCES p_entite (id)
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE t_ac_reception ADD CONSTRAINT FK_88833BC7F4445056 FOREIGN KEY (devise_id) REFERENCES p_devise (id)
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE t_ac_reception ADD CONSTRAINT FK_88833BC798DE13AC FOREIGN KEY (partenaire_id) REFERENCES p_partenaires (id)
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE t_ac_reception ADD CONSTRAINT FK_88833BC7F987D8A8 FOREIGN KEY (user_created_id) REFERENCES p_pv000_user (id)
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE t_ac_reception ADD CONSTRAINT FK_88833BC7316B011F FOREIGN KEY (user_updated_id) REFERENCES p_pv000_user (id)
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE t_ac_reception ADD CONSTRAINT FK_88833BC7F749B324 FOREIGN KEY (user_valider_id) REFERENCES p_pv000_user (id)
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE t_ac_reception ADD CONSTRAINT FK_88833BC732C38471 FOREIGN KEY (user_generer_id) REFERENCES p_pv000_user (id)
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE t_ac_reception ADD CONSTRAINT FK_88833BC7E38A95CE FOREIGN KEY (user_annuler_id) REFERENCES p_pv000_user (id)
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE t_ac_reception ADD CONSTRAINT FK_88833BC7FC6F9C41 FOREIGN KEY (user_encours_id) REFERENCES p_pv000_user (id)
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE t_ac_reception ADD CONSTRAINT FK_88833BC7D2B09A9 FOREIGN KEY (user_archiver_id) REFERENCES p_pv000_user (id)
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE t_ac_reception ADD CONSTRAINT FK_88833BC7C40FCFA8 FOREIGN KEY (piece_id) REFERENCES p_type_piece (id)
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE t_ac_reception ADD CONSTRAINT FK_88833BC76BF700BD FOREIGN KEY (status_id) REFERENCES p_statut (id)
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE t_ac_reception ADD CONSTRAINT FK_88833BC7B588E0EF FOREIGN KEY (st_position_actuel_id) REFERENCES p_statut (id)
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE t_ac_reception_lg ADD CONSTRAINT FK_5EDCDD207C14DF52 FOREIGN KEY (reception_id) REFERENCES t_ac_reception (id)
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE t_ac_reception_lg ADD CONSTRAINT FK_5EDCDD20F347EFB FOREIGN KEY (produit_id) REFERENCES p_produits (id)
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE t_ac_reception_lg ADD CONSTRAINT FK_5EDCDD20EC4A74AB FOREIGN KEY (unite_id) REFERENCES p_pr_unites (id)
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE t_ac_reception_lg ADD CONSTRAINT FK_5EDCDD205AE677F1 FOREIGN KEY (t_ac_commande_lg_id) REFERENCES t_ac_commande_lg (id)
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE t_ac_reception_lot ADD CONSTRAINT FK_76832CB57C14DF52 FOREIGN KEY (reception_id) REFERENCES t_ac_reception (id)
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE t_ac_reception_lot ADD CONSTRAINT FK_76832CB5CF5612A1 FOREIGN KEY (reception_lg_id) REFERENCES t_ac_reception_lg (id)
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE t_ac_reception_lot ADD CONSTRAINT FK_76832CB5F347EFB FOREIGN KEY (produit_id) REFERENCES p_produits (id)
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE t_ac_reception_obj ADD CONSTRAINT FK_3B64D1C2F347EFB FOREIGN KEY (produit_id) REFERENCES p_produits (id)
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE t_ac_reception_obj ADD CONSTRAINT FK_3B64D1C29BEA957A FOREIGN KEY (entite_id) REFERENCES p_entite (id)
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE t_ac_reception_obj ADD CONSTRAINT FK_3B64D1C2A8CBA5F7 FOREIGN KEY (lot_id) REFERENCES t_ac_reception_lot (id)
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE t_ac_reception_obj ADD CONSTRAINT FK_3B64D1C272EC427E FOREIGN KEY (parent_transfor_id) REFERENCES t_ac_reception_obj (id)
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE t_ac_reception_obj ADD CONSTRAINT FK_3B64D1C287BE9962 FOREIGN KEY (user_aff_adresse_id) REFERENCES p_pv000_user (id)
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE t_ac_reception_obj ADD CONSTRAINT FK_3B64D1C2D5766755 FOREIGN KEY (user_update_id) REFERENCES p_pv000_user (id)
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE t_ac_reception_obj ADD CONSTRAINT FK_3B64D1C220096AE3 FOREIGN KEY (magasin_id) REFERENCES p_magasins (id)
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE t_ac_reception_obj ADD CONSTRAINT FK_3B64D1C28CC46927 FOREIGN KEY (nature_prix_id) REFERENCES p_nature_prix (id)
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE t_ac_reception_obj ADD CONSTRAINT FK_3B64D1C24DE7DC5C FOREIGN KEY (adresse_id) REFERENCES p_emplacements (id)
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE t_ac_reception_obj ADD CONSTRAINT FK_3B64D1C26B504741 FOREIGN KEY (user_etiqueter_id) REFERENCES p_pv000_user (id)
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
            ALTER TABLE p_tarif_fournisseur DROP CONSTRAINT FK_71B3B597F347EFB
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE p_tarif_fournisseur DROP CONSTRAINT FK_71B3B597670C757F
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE t_ac_commande DROP CONSTRAINT FK_367F94D5F4445056
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE t_ac_commande DROP CONSTRAINT FK_367F94D598DE13AC
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE t_ac_commande DROP CONSTRAINT FK_367F94D59BEA957A
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE t_ac_commande DROP CONSTRAINT FK_367F94D5B8E087ED
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE t_ac_commande DROP CONSTRAINT FK_367F94D5F987D8A8
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE t_ac_commande DROP CONSTRAINT FK_367F94D5316B011F
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE t_ac_commande DROP CONSTRAINT FK_367F94D5F749B324
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE t_ac_commande DROP CONSTRAINT FK_367F94D532C38471
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE t_ac_commande DROP CONSTRAINT FK_367F94D5E38A95CE
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE t_ac_commande DROP CONSTRAINT FK_367F94D5D2B09A9
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE t_ac_commande DROP CONSTRAINT FK_367F94D5C40FCFA8
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE t_ac_commande DROP CONSTRAINT FK_367F94D56BF700BD
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE t_ac_commande DROP CONSTRAINT FK_367F94D5B588E0EF
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE t_ac_commande_lg DROP CONSTRAINT FK_DCEAB49182EA2E54
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE t_ac_commande_lg DROP CONSTRAINT FK_DCEAB491F347EFB
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE t_ac_commande_lg DROP CONSTRAINT FK_DCEAB491EC4A74AB
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE t_ac_facture DROP CONSTRAINT FK_3F8DD2D98DE13AC
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE t_ac_facture DROP CONSTRAINT FK_3F8DD2D9BEA957A
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE t_ac_facture DROP CONSTRAINT FK_3F8DD2DF4445056
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE t_ac_facture DROP CONSTRAINT FK_3F8DD2DC40FCFA8
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE t_ac_facture DROP CONSTRAINT FK_3F8DD2DF987D8A8
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE t_ac_facture DROP CONSTRAINT FK_3F8DD2D316B011F
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE t_ac_facture DROP CONSTRAINT FK_3F8DD2DF749B324
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE t_ac_facture DROP CONSTRAINT FK_3F8DD2D32C38471
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE t_ac_facture DROP CONSTRAINT FK_3F8DD2DE38A95CE
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE t_ac_facture DROP CONSTRAINT FK_3F8DD2DD2B09A9
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE t_ac_facture DROP CONSTRAINT FK_3F8DD2DB588E0EF
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE t_ac_facture_lg DROP CONSTRAINT FK_355A74037F2DEE08
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE t_ac_facture_lg DROP CONSTRAINT FK_355A7403F347EFB
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE t_ac_facture_lg DROP CONSTRAINT FK_355A7403EC4A74AB
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE t_ac_marche_lg DROP CONSTRAINT FK_A26252069E494911
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE t_ac_precommande DROP CONSTRAINT FK_C05B347FC40FCFA8
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE t_ac_precommande DROP CONSTRAINT FK_C05B347F9E494911
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE t_ac_precommande DROP CONSTRAINT FK_C05B347FA059BF0E
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE t_ac_precommande DROP CONSTRAINT FK_C05B347FCFF77A22
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE t_ac_precommande DROP CONSTRAINT FK_C05B347F5BDE0EF9
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE t_ac_precommande DROP CONSTRAINT FK_C05B347F96B21196
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE t_ac_precommande DROP CONSTRAINT FK_C05B347FF987D8A8
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE t_ac_precommande DROP CONSTRAINT FK_C05B347F316B011F
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE t_ac_precommande DROP CONSTRAINT FK_C05B347FF749B324
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE t_ac_precommande DROP CONSTRAINT FK_C05B347F32C38471
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE t_ac_precommande DROP CONSTRAINT FK_C05B347FE38A95CE
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE t_ac_precommande DROP CONSTRAINT FK_C05B347FD2B09A9
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE t_ac_precommande DROP CONSTRAINT FK_C05B347F6BF700BD
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE t_ac_precommande DROP CONSTRAINT FK_C05B347FB588E0EF
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE t_ac_precommande_lg DROP CONSTRAINT FK_9A0134E9B8E087ED
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE t_ac_precommande_lg DROP CONSTRAINT FK_9A0134E9F347EFB
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE t_ac_precommande_lg DROP CONSTRAINT FK_9A0134E9EC4A74AB
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE t_ac_reception DROP CONSTRAINT FK_88833BC782EA2E54
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE t_ac_reception DROP CONSTRAINT FK_88833BC77F2DEE08
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE t_ac_reception DROP CONSTRAINT FK_88833BC79BEA957A
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE t_ac_reception DROP CONSTRAINT FK_88833BC7F4445056
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE t_ac_reception DROP CONSTRAINT FK_88833BC798DE13AC
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE t_ac_reception DROP CONSTRAINT FK_88833BC7F987D8A8
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE t_ac_reception DROP CONSTRAINT FK_88833BC7316B011F
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE t_ac_reception DROP CONSTRAINT FK_88833BC7F749B324
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE t_ac_reception DROP CONSTRAINT FK_88833BC732C38471
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE t_ac_reception DROP CONSTRAINT FK_88833BC7E38A95CE
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE t_ac_reception DROP CONSTRAINT FK_88833BC7FC6F9C41
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE t_ac_reception DROP CONSTRAINT FK_88833BC7D2B09A9
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE t_ac_reception DROP CONSTRAINT FK_88833BC7C40FCFA8
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE t_ac_reception DROP CONSTRAINT FK_88833BC76BF700BD
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE t_ac_reception DROP CONSTRAINT FK_88833BC7B588E0EF
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE t_ac_reception_lg DROP CONSTRAINT FK_5EDCDD207C14DF52
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE t_ac_reception_lg DROP CONSTRAINT FK_5EDCDD20F347EFB
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE t_ac_reception_lg DROP CONSTRAINT FK_5EDCDD20EC4A74AB
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE t_ac_reception_lg DROP CONSTRAINT FK_5EDCDD205AE677F1
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE t_ac_reception_lot DROP CONSTRAINT FK_76832CB57C14DF52
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE t_ac_reception_lot DROP CONSTRAINT FK_76832CB5CF5612A1
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE t_ac_reception_lot DROP CONSTRAINT FK_76832CB5F347EFB
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
            DROP TABLE p_app_parametrages
        SQL);
        $this->addSql(<<<'SQL'
            DROP TABLE p_messages
        SQL);
        $this->addSql(<<<'SQL'
            DROP TABLE p_nature_prix
        SQL);
        $this->addSql(<<<'SQL'
            DROP TABLE p_tarif_fournisseur
        SQL);
        $this->addSql(<<<'SQL'
            DROP TABLE t_ac_commande
        SQL);
        $this->addSql(<<<'SQL'
            DROP TABLE t_ac_commande_lg
        SQL);
        $this->addSql(<<<'SQL'
            DROP TABLE t_ac_facture
        SQL);
        $this->addSql(<<<'SQL'
            DROP TABLE t_ac_facture_lg
        SQL);
        $this->addSql(<<<'SQL'
            DROP TABLE t_ac_marche
        SQL);
        $this->addSql(<<<'SQL'
            DROP TABLE t_ac_marche_lg
        SQL);
        $this->addSql(<<<'SQL'
            DROP TABLE t_ac_precommande
        SQL);
        $this->addSql(<<<'SQL'
            DROP TABLE t_ac_precommande_lg
        SQL);
        $this->addSql(<<<'SQL'
            DROP TABLE t_ac_reception
        SQL);
        $this->addSql(<<<'SQL'
            DROP TABLE t_ac_reception_lg
        SQL);
        $this->addSql(<<<'SQL'
            DROP TABLE t_ac_reception_lot
        SQL);
        $this->addSql(<<<'SQL'
            DROP TABLE t_ac_reception_obj
        SQL);
        $this->addSql(<<<'SQL'
            DROP TABLE t_vt_devis
        SQL);
    }
}
