<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20250701104426 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql(<<<'SQL'
            CREATE TABLE data_audit (id INT IDENTITY NOT NULL, table_name NVARCHAR(255) NOT NULL, operation NVARCHAR(10) NOT NULL, row_id INT NOT NULL, old_data VARCHAR(MAX) NOT NULL, new_data VARCHAR(MAX), changed_at DATETIME2(6) NOT NULL, PRIMARY KEY (id))
        SQL);
        $this->addSql(<<<'SQL'
            EXEC sp_addextendedproperty N'MS_Description', N'(DC2Type:json)', N'SCHEMA', 'dbo', N'TABLE', 'data_audit', N'COLUMN', 'old_data'
        SQL);
        $this->addSql(<<<'SQL'
            EXEC sp_addextendedproperty N'MS_Description', N'(DC2Type:json)', N'SCHEMA', 'dbo', N'TABLE', 'data_audit', N'COLUMN', 'new_data'
        SQL);
        $this->addSql(<<<'SQL'
            EXEC sp_addextendedproperty N'MS_Description', N'(DC2Type:datetime_immutable)', N'SCHEMA', 'dbo', N'TABLE', 'data_audit', N'COLUMN', 'changed_at'
        SQL);
        $this->addSql(<<<'SQL'
            CREATE TABLE p_affectation_magasin (id INT IDENTITY NOT NULL, magasin_id INT NOT NULL, userr_id INT NOT NULL, defaut BIT NOT NULL, PRIMARY KEY (id))
        SQL);
        $this->addSql(<<<'SQL'
            CREATE INDEX IDX_8CC07CAB20096AE3 ON p_affectation_magasin (magasin_id)
        SQL);
        $this->addSql(<<<'SQL'
            CREATE INDEX IDX_8CC07CABDF0FD358 ON p_affectation_magasin (userr_id)
        SQL);
        $this->addSql(<<<'SQL'
            CREATE TABLE p_app_parametrages (id INT IDENTITY NOT NULL, code NVARCHAR(255), designation NVARCHAR(255), value INT, description VARCHAR(MAX), PRIMARY KEY (id))
        SQL);
        $this->addSql(<<<'SQL'
            CREATE TABLE p_counter (id INT IDENTITY NOT NULL, entite_id INT, type_piece_id INT, piece NVARCHAR(255) NOT NULL, count INT NOT NULL, annee INT, entite_abreviation NVARCHAR(255), PRIMARY KEY (id))
        SQL);
        $this->addSql(<<<'SQL'
            CREATE INDEX IDX_C6E27D179BEA957A ON p_counter (entite_id)
        SQL);
        $this->addSql(<<<'SQL'
            CREATE INDEX IDX_C6E27D179F0E854 ON p_counter (type_piece_id)
        SQL);
        $this->addSql(<<<'SQL'
            CREATE TABLE p_depots (id INT IDENTITY NOT NULL, entite_id INT, user_created_id INT, user_updated_id INT, code NVARCHAR(255), titre NVARCHAR(255), description NVARCHAR(255), adresse NVARCHAR(255), code_postal NVARCHAR(255), ville NVARCHAR(255), pays NVARCHAR(255), active BIT, autre_information VARCHAR(MAX), created DATETIME2(6), defaut BIT, etat BIT, PRIMARY KEY (id))
        SQL);
        $this->addSql(<<<'SQL'
            CREATE INDEX IDX_74B3D2239BEA957A ON p_depots (entite_id)
        SQL);
        $this->addSql(<<<'SQL'
            CREATE INDEX IDX_74B3D223F987D8A8 ON p_depots (user_created_id)
        SQL);
        $this->addSql(<<<'SQL'
            CREATE INDEX IDX_74B3D223316B011F ON p_depots (user_updated_id)
        SQL);
        $this->addSql(<<<'SQL'
            CREATE TABLE p_devise (id INT IDENTITY NOT NULL, code NVARCHAR(255), titre NVARCHAR(255), active BIT, created DATETIME2(6), PRIMARY KEY (id))
        SQL);
        $this->addSql(<<<'SQL'
            CREATE TABLE p_emplacements (id INT IDENTITY NOT NULL, magasin_id INT, position NVARCHAR(255) NOT NULL, reserve BIT NOT NULL, PRIMARY KEY (id))
        SQL);
        $this->addSql(<<<'SQL'
            CREATE INDEX IDX_21EBB9EE20096AE3 ON p_emplacements (magasin_id)
        SQL);
        $this->addSql(<<<'SQL'
            CREATE TABLE p_entite (id INT IDENTITY NOT NULL, parent_id INT, user_created_id INT, organisation_id INT, type_entite_id INT, code NVARCHAR(50), date_created DATETIME2(6), address NVARCHAR(255), tel NVARCHAR(50), active BIT NOT NULL, prefix NVARCHAR(50), title NVARCHAR(255), cce_0_libelle NVARCHAR(255), cce_0 NVARCHAR(50), fcy_0_libelle NVARCHAR(255), fcy_0 NVARCHAR(50), logo NVARCHAR(255), logo_width INT, logo_height INT, ord INT, is_sub_entite BIT NOT NULL, natureentite NVARCHAR(255), niveau INT, nom_dossier NVARCHAR(255), description VARCHAR(MAX), adresse VARCHAR(MAX), ice NVARCHAR(100), email NVARCHAR(255), tel2 NVARCHAR(255), fax NVARCHAR(255), site NVARCHAR(255), cpy_o NVARCHAR(255), cpy0_libelle NVARCHAR(255), cce_o NVARCHAR(255), cce0_libelle NVARCHAR(255), entreprise BIT, immo BIT, id_access INT, id_ugouv INT, PRIMARY KEY (id))
        SQL);
        $this->addSql(<<<'SQL'
            CREATE INDEX IDX_B7046E23727ACA70 ON p_entite (parent_id)
        SQL);
        $this->addSql(<<<'SQL'
            CREATE INDEX IDX_B7046E23F987D8A8 ON p_entite (user_created_id)
        SQL);
        $this->addSql(<<<'SQL'
            CREATE INDEX IDX_B7046E239E6B1585 ON p_entite (organisation_id)
        SQL);
        $this->addSql(<<<'SQL'
            CREATE INDEX IDX_B7046E232F2CD46A ON p_entite (type_entite_id)
        SQL);
        $this->addSql(<<<'SQL'
            CREATE TABLE p_entite_org (id INT IDENTITY NOT NULL, parent_id INT, designation NVARCHAR(255), code NVARCHAR(255), abreviation NVARCHAR(255), active BIT, prefix NVARCHAR(50), ord INT, niveau INT, natureentite NVARCHAR(255), parente NVARCHAR(255), PRIMARY KEY (id))
        SQL);
        $this->addSql(<<<'SQL'
            CREATE INDEX IDX_FED9A6AB727ACA70 ON p_entite_org (parent_id)
        SQL);
        $this->addSql(<<<'SQL'
            CREATE TABLE p_et_type_entites (id INT IDENTITY NOT NULL, code NVARCHAR(255), titre NVARCHAR(255), active BIT, created DATETIME2(6), PRIMARY KEY (id))
        SQL);
        $this->addSql(<<<'SQL'
            CREATE TABLE p_magasins (id INT IDENTITY NOT NULL, depot_id INT, user_created_id INT, user_updated_id INT, code NVARCHAR(255), designation NVARCHAR(255), defaut BIT, created DATETIME2(6), updated DATETIME2(6), dossier_ugouv_id INT, designation_access NVARCHAR(255), access_code NVARCHAR(255), niveau INT, complementaire BIT, PRIMARY KEY (id))
        SQL);
        $this->addSql(<<<'SQL'
            CREATE INDEX IDX_635A691F8510D4DE ON p_magasins (depot_id)
        SQL);
        $this->addSql(<<<'SQL'
            CREATE INDEX IDX_635A691FF987D8A8 ON p_magasins (user_created_id)
        SQL);
        $this->addSql(<<<'SQL'
            CREATE INDEX IDX_635A691F316B011F ON p_magasins (user_updated_id)
        SQL);
        $this->addSql(<<<'SQL'
            CREATE TABLE p_messages (id INT IDENTITY NOT NULL, titre NVARCHAR(255), message VARCHAR(MAX), type NVARCHAR(255), route NVARCHAR(255), active BIT, PRIMARY KEY (id))
        SQL);
        $this->addSql(<<<'SQL'
            CREATE TABLE p_nature_prix (id INT IDENTITY NOT NULL, code NVARCHAR(255), titre NVARCHAR(255), active BIT, created DATETIME2(6), PRIMARY KEY (id))
        SQL);
        $this->addSql(<<<'SQL'
            CREATE TABLE p_partenaires (id INT IDENTITY NOT NULL, type_partenaire_id INT, entite_id INT, user_created_id INT, code NVARCHAR(100), lettrage_adonix NVARCHAR(100), libelle_o NVARCHAR(255), societe NVARCHAR(150), nom NVARCHAR(150), prenom NVARCHAR(150), nom_contact NVARCHAR(255), tel_contact NVARCHAR(255), forme_juridique NVARCHAR(100), adresse VARCHAR(MAX), pays NVARCHAR(100), ville NVARCHAR(100), tel1 NVARCHAR(100), tel2 NVARCHAR(100), fax1 NVARCHAR(100), fax2 NVARCHAR(100), mail1 NVARCHAR(100), mail2 NVARCHAR(100), rib NVARCHAR(100), iban NVARCHAR(255), swift NVARCHAR(255), banque NVARCHAR(100) NOT NULL, active BIT, taxable BIT, tva INT, iff NVARCHAR(100), rc NVARCHAR(100), ice NVARCHAR(100), patente NVARCHAR(100), created DATETIME2(6), PRIMARY KEY (id))
        SQL);
        $this->addSql(<<<'SQL'
            CREATE INDEX IDX_42D85EB9E833A499 ON p_partenaires (type_partenaire_id)
        SQL);
        $this->addSql(<<<'SQL'
            CREATE INDEX IDX_42D85EB99BEA957A ON p_partenaires (entite_id)
        SQL);
        $this->addSql(<<<'SQL'
            CREATE INDEX IDX_42D85EB9F987D8A8 ON p_partenaires (user_created_id)
        SQL);
        $this->addSql(<<<'SQL'
            CREATE TABLE p_pr_dci (id INT IDENTITY NOT NULL, code NVARCHAR(255), titre NVARCHAR(255), description NVARCHAR(255), created DATETIME2(6), active BIT, PRIMARY KEY (id))
        SQL);
        $this->addSql(<<<'SQL'
            CREATE TABLE p_pr_niveau_produits (id INT IDENTITY NOT NULL, parent_id INT, designation NVARCHAR(255), description NVARCHAR(255), niveau INT, active BIT, PRIMARY KEY (id))
        SQL);
        $this->addSql(<<<'SQL'
            CREATE INDEX IDX_3269F823727ACA70 ON p_pr_niveau_produits (parent_id)
        SQL);
        $this->addSql(<<<'SQL'
            CREATE TABLE p_pr_tarifications (id INT IDENTITY NOT NULL, type_tarification_id INT, devise_id INT, produit_id INT, code NVARCHAR(255), titre NVARCHAR(255), prix_achat DOUBLE PRECISION, prix_vente DOUBLE PRECISION, prix_vente_ph DOUBLE PRECISION, prix_vente_ppv DOUBLE PRECISION, active BIT, created DATETIME2(6), PRIMARY KEY (id))
        SQL);
        $this->addSql(<<<'SQL'
            CREATE INDEX IDX_C26D1CE6503D61F4 ON p_pr_tarifications (type_tarification_id)
        SQL);
        $this->addSql(<<<'SQL'
            CREATE INDEX IDX_C26D1CE6F4445056 ON p_pr_tarifications (devise_id)
        SQL);
        $this->addSql(<<<'SQL'
            CREATE INDEX IDX_C26D1CE6F347EFB ON p_pr_tarifications (produit_id)
        SQL);
        $this->addSql(<<<'SQL'
            CREATE TABLE p_pr_type_tarification (id INT IDENTITY NOT NULL, code NVARCHAR(255), titre NVARCHAR(255), active BIT, created DATETIME2(6), PRIMARY KEY (id))
        SQL);
        $this->addSql(<<<'SQL'
            CREATE TABLE p_pr_unites (id INT IDENTITY NOT NULL, code NVARCHAR(255), titre NVARCHAR(255), active BIT, created DATETIME2(6), PRIMARY KEY (id))
        SQL);
        $this->addSql(<<<'SQL'
            CREATE TABLE p_produits (id INT IDENTITY NOT NULL, p_pr_unite_id INT, niveau_id INT, dci_id INT, code NVARCHAR(255), titre NVARCHAR(255), description NVARCHAR(255), code_interne INT, forme NVARCHAR(255), dosage NVARCHAR(255), ean NVARCHAR(255), ean_acess NVARCHAR(255), atc NVARCHAR(255), code_imm NVARCHAR(255), liste NVARCHAR(255), observation NVARCHAR(255), fabricant NVARCHAR(255), dimension_physique NVARCHAR(255), presentation_article NVARCHAR(255), active BIT, created DATETIME2(6), image NVARCHAR(255), ai NVARCHAR(255), qte_stock DOUBLE PRECISION, fon_code NVARCHAR(255), specialite_produit NVARCHAR(255), spe_code NVARCHAR(255), ancien_code NVARCHAR(255), code_cat NVARCHAR(255), categorie NVARCHAR(255) NOT NULL, classe_produit NVARCHAR(255), famille NVARCHAR(255), segments_produit NVARCHAR(255), sous_segments_produit NVARCHAR(255), reference NVARCHAR(255), voie_administration NVARCHAR(255), fournisseur NVARCHAR(255), prix_vente_ph DOUBLE PRECISION, prix_vente_ppv DOUBLE PRECISION, prix_vente_ppc DOUBLE PRECISION, prix_vente DOUBLE PRECISION, statut_commercialisation NVARCHAR(255), code_dci NVARCHAR(255), PRIMARY KEY (id))
        SQL);
        $this->addSql(<<<'SQL'
            CREATE INDEX IDX_632763ACD372DD48 ON p_produits (p_pr_unite_id)
        SQL);
        $this->addSql(<<<'SQL'
            CREATE INDEX IDX_632763ACB3E9C81 ON p_produits (niveau_id)
        SQL);
        $this->addSql(<<<'SQL'
            CREATE INDEX IDX_632763AC231B45D9 ON p_produits (dci_id)
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE p_produits ADD CONSTRAINT DF_632763AC_497DD634 DEFAULT 'UNKNOWN' FOR categorie
        SQL);
        $this->addSql(<<<'SQL'
            CREATE TABLE p_pv000_user (id INT IDENTITY NOT NULL, pprofession_id INT, user_update_id INT, username NVARCHAR(180) NOT NULL, roles VARCHAR(MAX) NOT NULL, password NVARCHAR(255) NOT NULL, name NVARCHAR(255) NOT NULL, is_active BIT NOT NULL, date_update DATETIME2(6), is_deleted BIT, route NVARCHAR(255), PRIMARY KEY (id))
        SQL);
        $this->addSql(<<<'SQL'
            CREATE UNIQUE INDEX UNIQ_FE69F173F85E0677 ON p_pv000_user (username) WHERE username IS NOT NULL
        SQL);
        $this->addSql(<<<'SQL'
            CREATE INDEX IDX_FE69F173C94F0596 ON p_pv000_user (pprofession_id)
        SQL);
        $this->addSql(<<<'SQL'
            CREATE INDEX IDX_FE69F173D5766755 ON p_pv000_user (user_update_id)
        SQL);
        $this->addSql(<<<'SQL'
            EXEC sp_addextendedproperty N'MS_Description', N'(DC2Type:json)', N'SCHEMA', 'dbo', N'TABLE', 'p_pv000_user', N'COLUMN', 'roles'
        SQL);
        $this->addSql(<<<'SQL'
            CREATE TABLE p_pv001_profession (id INT IDENTITY NOT NULL, user_update_id INT, description NVARCHAR(255) NOT NULL, active BIT NOT NULL, date_update DATETIME2(6), PRIMARY KEY (id))
        SQL);
        $this->addSql(<<<'SQL'
            CREATE INDEX IDX_485AB613D5766755 ON p_pv001_profession (user_update_id)
        SQL);
        $this->addSql(<<<'SQL'
            CREATE TABLE p_pv002_action (id INT IDENTITY NOT NULL, p_sous_module_id INT, user_update_id INT, nom NVARCHAR(255) NOT NULL, date_update DATETIME2(6), icon NVARCHAR(255), ord INT, horizontal BIT, class_name NVARCHAR(255), id_name NVARCHAR(255), route NVARCHAR(255), active BIT, principal BIT, modal BIT, modal_name NVARCHAR(255), PRIMARY KEY (id))
        SQL);
        $this->addSql(<<<'SQL'
            CREATE INDEX IDX_854A93078CBCF8FA ON p_pv002_action (p_sous_module_id)
        SQL);
        $this->addSql(<<<'SQL'
            CREATE INDEX IDX_854A9307D5766755 ON p_pv002_action (user_update_id)
        SQL);
        $this->addSql(<<<'SQL'
            CREATE TABLE p_pv003_module (id INT IDENTITY NOT NULL, user_update_id INT, nom NVARCHAR(255) NOT NULL, date_update DATETIME2(6), icon NVARCHAR(255), route NVARCHAR(255), ord INT, active BIT, setting BIT, abreviation NVARCHAR(255), image NVARCHAR(255), PRIMARY KEY (id))
        SQL);
        $this->addSql(<<<'SQL'
            CREATE INDEX IDX_2083923D5766755 ON p_pv003_module (user_update_id)
        SQL);
        $this->addSql(<<<'SQL'
            CREATE TABLE p_pv004_sousmodule (id INT IDENTITY NOT NULL, p_module_id INT, user_update_id INT, nom NVARCHAR(255) NOT NULL, date_update DATETIME2(6), route NVARCHAR(255), ord INT, active BIT, image NVARCHAR(255), PRIMARY KEY (id))
        SQL);
        $this->addSql(<<<'SQL'
            CREATE INDEX IDX_9392063B94719FE5 ON p_pv004_sousmodule (p_module_id)
        SQL);
        $this->addSql(<<<'SQL'
            CREATE INDEX IDX_9392063BD5766755 ON p_pv004_sousmodule (user_update_id)
        SQL);
        $this->addSql(<<<'SQL'
            CREATE TABLE p_pv005_user_entite_action (id INT IDENTITY NOT NULL, userr_id INT, dossier_id INT, action_id INT, PRIMARY KEY (id))
        SQL);
        $this->addSql(<<<'SQL'
            CREATE INDEX IDX_13878A31DF0FD358 ON p_pv005_user_entite_action (userr_id)
        SQL);
        $this->addSql(<<<'SQL'
            CREATE INDEX IDX_13878A31611C0C56 ON p_pv005_user_entite_action (dossier_id)
        SQL);
        $this->addSql(<<<'SQL'
            CREATE INDEX IDX_13878A319D32F035 ON p_pv005_user_entite_action (action_id)
        SQL);
        $this->addSql(<<<'SQL'
            CREATE TABLE p_statut (id INT IDENTITY NOT NULL, designation NVARCHAR(255) NOT NULL, type NVARCHAR(255) NOT NULL, active BIT NOT NULL, PRIMARY KEY (id))
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
            CREATE TABLE p_type_oprt (id INT IDENTITY NOT NULL, code NVARCHAR(255) NOT NULL, titre NVARCHAR(255) NOT NULL, actif BIT NOT NULL, creation DATETIME2(6) NOT NULL, PRIMARY KEY (id))
        SQL);
        $this->addSql(<<<'SQL'
            CREATE TABLE p_type_partenaire (id INT IDENTITY NOT NULL, code NVARCHAR(255), titre NVARCHAR(255), active BIT, created DATETIME2(6), PRIMARY KEY (id))
        SQL);
        $this->addSql(<<<'SQL'
            CREATE TABLE p_type_piece (id INT IDENTITY NOT NULL, code NVARCHAR(255), description NVARCHAR(255), active BIT, PRIMARY KEY (id))
        SQL);
        $this->addSql(<<<'SQL'
            CREATE TABLE t_ac_commande (id INT IDENTITY NOT NULL, devise_id INT, partenaire_id INT, entite_id INT, precommande_id INT, user_created_id INT, user_updated_id INT, user_valider_id INT, user_generer_id INT, user_annuler_id INT, user_archiver_id INT, piece_id INT, status_id INT, st_position_actuel_id INT, code NVARCHAR(100), observation VARCHAR(MAX), autre_information VARCHAR(MAX), remise DOUBLE PRECISION, avoir BIT, date_commande DATETIME2(6), refDocAsso NVARCHAR(255), date_doc_asso DATETIME2(6), date_livr_provisoire DATETIME2(6), created DATETIME2(6), updated DATETIME2(6), date_valider DATETIME2(6), date_generer DATETIME2(6), date_annuler DATETIME2(6), date_archiver DATETIME2(6), position_actuel NVARCHAR(100), historique VARCHAR(MAX), flag_synchronisation_locale INT, montant_ht DOUBLE PRECISION, montant_ttc DOUBLE PRECISION, tva DOUBLE PRECISION, date_prevue_livraison DATETIME2(6), PRIMARY KEY (id))
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
            CREATE TABLE t_ac_precommande_lg (id INT IDENTITY NOT NULL, precommande_id INT, produit_id INT, unite_id INT, quantite DOUBLE PRECISION, prixunitaire DOUBLE PRECISION, remise DOUBLE PRECISION, tva DOUBLE PRECISION, montant_ht DOUBLE PRECISION, montant_ttc DOUBLE PRECISION, observation VARCHAR(MAX), code_comptable NVARCHAR(255), flag_synchronisation_locale INT, active BIT, total_tva DOUBLE PRECISION, total_remise DOUBLE PRECISION, description_complementaire VARCHAR(MAX), PRIMARY KEY (id))
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
            CREATE TABLE t_ms_commande (id INT IDENTITY NOT NULL, user_created_id INT NOT NULL, user_updated_id INT, user_valider_id INT, user_generer_id INT, user_annuler_id INT, user_archiver_id INT, type_commande_id INT NOT NULL, demandeur_id INT NOT NULL, recepteur_id INT, p_partenaires_id_id INT, p_entite_id INT, t_ms_demande_id INT NOT NULL, parent_id INT, status_id INT, st_position_actuel_id INT, code NVARCHAR(100), description VARCHAR(MAX), nom_patient NVARCHAR(255), dossier_patient NVARCHAR(255), position_actuel NVARCHAR(255) NOT NULL, historique VARCHAR(MAX), urgent BIT NOT NULL, date_valider DATETIME2(6), date_generer DATETIME2(6), date_annuler DATETIME2(6), created DATETIME2(6) NOT NULL, updated DATETIME2(6), actif BIT NOT NULL, flag_synchronisation_locale BIT, ipp NVARCHAR(255), PRIMARY KEY (id))
        SQL);
        $this->addSql(<<<'SQL'
            CREATE INDEX IDX_1BCB87FAF987D8A8 ON t_ms_commande (user_created_id)
        SQL);
        $this->addSql(<<<'SQL'
            CREATE INDEX IDX_1BCB87FA316B011F ON t_ms_commande (user_updated_id)
        SQL);
        $this->addSql(<<<'SQL'
            CREATE INDEX IDX_1BCB87FAF749B324 ON t_ms_commande (user_valider_id)
        SQL);
        $this->addSql(<<<'SQL'
            CREATE INDEX IDX_1BCB87FA32C38471 ON t_ms_commande (user_generer_id)
        SQL);
        $this->addSql(<<<'SQL'
            CREATE INDEX IDX_1BCB87FAE38A95CE ON t_ms_commande (user_annuler_id)
        SQL);
        $this->addSql(<<<'SQL'
            CREATE INDEX IDX_1BCB87FAD2B09A9 ON t_ms_commande (user_archiver_id)
        SQL);
        $this->addSql(<<<'SQL'
            CREATE INDEX IDX_1BCB87FAC9F3F9C5 ON t_ms_commande (type_commande_id)
        SQL);
        $this->addSql(<<<'SQL'
            CREATE INDEX IDX_1BCB87FA95A6EE59 ON t_ms_commande (demandeur_id)
        SQL);
        $this->addSql(<<<'SQL'
            CREATE INDEX IDX_1BCB87FA3B49782D ON t_ms_commande (recepteur_id)
        SQL);
        $this->addSql(<<<'SQL'
            CREATE INDEX IDX_1BCB87FADF648904 ON t_ms_commande (p_partenaires_id_id)
        SQL);
        $this->addSql(<<<'SQL'
            CREATE INDEX IDX_1BCB87FAA059BF0E ON t_ms_commande (p_entite_id)
        SQL);
        $this->addSql(<<<'SQL'
            CREATE INDEX IDX_1BCB87FAB84235EB ON t_ms_commande (t_ms_demande_id)
        SQL);
        $this->addSql(<<<'SQL'
            CREATE INDEX IDX_1BCB87FA727ACA70 ON t_ms_commande (parent_id)
        SQL);
        $this->addSql(<<<'SQL'
            CREATE INDEX IDX_1BCB87FA6BF700BD ON t_ms_commande (status_id)
        SQL);
        $this->addSql(<<<'SQL'
            CREATE INDEX IDX_1BCB87FAB588E0EF ON t_ms_commande (st_position_actuel_id)
        SQL);
        $this->addSql(<<<'SQL'
            CREATE TABLE t_ms_commandelg (id INT IDENTITY NOT NULL, t_ms_commande_id INT NOT NULL, p_produit_id INT NOT NULL, p_pr_unite_id INT, quantite_commandee DOUBLE PRECISION NOT NULL, quantite_servie DOUBLE PRECISION, quantite_reste DOUBLE PRECISION, prix_unitaire DOUBLE PRECISION NOT NULL, remise DOUBLE PRECISION, tva DOUBLE PRECISION, montant_ht DOUBLE PRECISION NOT NULL, montant_ttc DOUBLE PRECISION NOT NULL, observation VARCHAR(MAX), code_comptable NVARCHAR(255), flag_synchronisation_locale BIT, actif BIT, PRIMARY KEY (id))
        SQL);
        $this->addSql(<<<'SQL'
            CREATE INDEX IDX_C6C8C6D0A6662699 ON t_ms_commandelg (t_ms_commande_id)
        SQL);
        $this->addSql(<<<'SQL'
            CREATE INDEX IDX_C6C8C6D0586778F4 ON t_ms_commandelg (p_produit_id)
        SQL);
        $this->addSql(<<<'SQL'
            CREATE INDEX IDX_C6C8C6D0D372DD48 ON t_ms_commandelg (p_pr_unite_id)
        SQL);
        $this->addSql(<<<'SQL'
            CREATE TABLE t_ms_demande (id INT IDENTITY NOT NULL, user_created_id INT NOT NULL, user_updated_id INT, user_valider_id INT, user_generer_id INT, user_annuler_id INT, user_archiver_id INT, type_demande_id INT, demandeur_id INT NOT NULL, recepteur_id INT, p_partenaires_id INT, p_entite_id INT, parent_id INT, status_id INT, st_position_actuel_id INT, code NVARCHAR(100), description VARCHAR(MAX), nom_patient NVARCHAR(100), dossier_patient NVARCHAR(100), position_actuel NVARCHAR(100) NOT NULL, historique VARCHAR(MAX), urgent BIT NOT NULL, date_valider DATETIME2(6), date_generer DATETIME2(6), date_annuler DATETIME2(6), created DATETIME2(6) NOT NULL, updated DATETIME2(6), actif BIT NOT NULL, flag_synchronisation_locale BIT NOT NULL, ipp NVARCHAR(50), PRIMARY KEY (id))
        SQL);
        $this->addSql(<<<'SQL'
            CREATE INDEX IDX_6D16CC67F987D8A8 ON t_ms_demande (user_created_id)
        SQL);
        $this->addSql(<<<'SQL'
            CREATE INDEX IDX_6D16CC67316B011F ON t_ms_demande (user_updated_id)
        SQL);
        $this->addSql(<<<'SQL'
            CREATE INDEX IDX_6D16CC67F749B324 ON t_ms_demande (user_valider_id)
        SQL);
        $this->addSql(<<<'SQL'
            CREATE INDEX IDX_6D16CC6732C38471 ON t_ms_demande (user_generer_id)
        SQL);
        $this->addSql(<<<'SQL'
            CREATE INDEX IDX_6D16CC67E38A95CE ON t_ms_demande (user_annuler_id)
        SQL);
        $this->addSql(<<<'SQL'
            CREATE INDEX IDX_6D16CC67D2B09A9 ON t_ms_demande (user_archiver_id)
        SQL);
        $this->addSql(<<<'SQL'
            CREATE INDEX IDX_6D16CC679DEA883D ON t_ms_demande (type_demande_id)
        SQL);
        $this->addSql(<<<'SQL'
            CREATE INDEX IDX_6D16CC6795A6EE59 ON t_ms_demande (demandeur_id)
        SQL);
        $this->addSql(<<<'SQL'
            CREATE INDEX IDX_6D16CC673B49782D ON t_ms_demande (recepteur_id)
        SQL);
        $this->addSql(<<<'SQL'
            CREATE INDEX IDX_6D16CC67FE2AD1 ON t_ms_demande (p_partenaires_id)
        SQL);
        $this->addSql(<<<'SQL'
            CREATE INDEX IDX_6D16CC67A059BF0E ON t_ms_demande (p_entite_id)
        SQL);
        $this->addSql(<<<'SQL'
            CREATE INDEX IDX_6D16CC67727ACA70 ON t_ms_demande (parent_id)
        SQL);
        $this->addSql(<<<'SQL'
            CREATE INDEX IDX_6D16CC676BF700BD ON t_ms_demande (status_id)
        SQL);
        $this->addSql(<<<'SQL'
            CREATE INDEX IDX_6D16CC67B588E0EF ON t_ms_demande (st_position_actuel_id)
        SQL);
        $this->addSql(<<<'SQL'
            CREATE TABLE t_ms_demandelg (id INT IDENTITY NOT NULL, t_ms_demande_id INT NOT NULL, p_produit_id INT, p_pr_unite_id INT, quantite DOUBLE PRECISION NOT NULL, prix_unitaire DOUBLE PRECISION NOT NULL, remise DOUBLE PRECISION, tva DOUBLE PRECISION, montant_ht DOUBLE PRECISION, montant_ttc DOUBLE PRECISION, observation VARCHAR(MAX), code_comptable NVARCHAR(100), flag_synchronisation_locale BIT, actif INT, PRIMARY KEY (id))
        SQL);
        $this->addSql(<<<'SQL'
            CREATE INDEX IDX_E329DC42B84235EB ON t_ms_demandelg (t_ms_demande_id)
        SQL);
        $this->addSql(<<<'SQL'
            CREATE INDEX IDX_E329DC42586778F4 ON t_ms_demandelg (p_produit_id)
        SQL);
        $this->addSql(<<<'SQL'
            CREATE INDEX IDX_E329DC42D372DD48 ON t_ms_demandelg (p_pr_unite_id)
        SQL);
        $this->addSql(<<<'SQL'
            CREATE TABLE t_ms_livraison (id INT IDENTITY NOT NULL, t_ms_commande_id INT NOT NULL, demandeur_id INT NOT NULL, recepteur_id INT, p_partenaires_id INT, p_entite_id INT NOT NULL, status_id INT, st_position_actuel_id INT, type_livraison_id INT, code NVARCHAR(255), multi_recp BIT, ipp INT NOT NULL, nom_patient NVARCHAR(255) NOT NULL, dossier_patient NVARCHAR(255) NOT NULL, urgent BIT, created DATETIME2(6), updated DATETIME2(6), position_actuel NVARCHAR(255), historique NVARCHAR(255), actif BIT, flag_synchronisation_locale BIT, description NVARCHAR(255), PRIMARY KEY (id))
        SQL);
        $this->addSql(<<<'SQL'
            CREATE INDEX IDX_D5A5A8BDA6662699 ON t_ms_livraison (t_ms_commande_id)
        SQL);
        $this->addSql(<<<'SQL'
            CREATE INDEX IDX_D5A5A8BD95A6EE59 ON t_ms_livraison (demandeur_id)
        SQL);
        $this->addSql(<<<'SQL'
            CREATE INDEX IDX_D5A5A8BD3B49782D ON t_ms_livraison (recepteur_id)
        SQL);
        $this->addSql(<<<'SQL'
            CREATE INDEX IDX_D5A5A8BDFE2AD1 ON t_ms_livraison (p_partenaires_id)
        SQL);
        $this->addSql(<<<'SQL'
            CREATE INDEX IDX_D5A5A8BDA059BF0E ON t_ms_livraison (p_entite_id)
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
            CREATE TABLE t_ms_livraisonlg (id INT IDENTITY NOT NULL, t_ms_livraison_id INT NOT NULL, p_produit_id INT NOT NULL, p_pr_unite_id INT, t_ms_commandelg_id INT, num_lot NVARCHAR(255), quantite_livree DOUBLE PRECISION, prixunitaire DOUBLE PRECISION, montant_total DOUBLE PRECISION, observation NVARCHAR(255), flag_synchronisation_locale BIT, PRIMARY KEY (id))
        SQL);
        $this->addSql(<<<'SQL'
            CREATE INDEX IDX_D221EC256BA5C920 ON t_ms_livraisonlg (t_ms_livraison_id)
        SQL);
        $this->addSql(<<<'SQL'
            CREATE INDEX IDX_D221EC25586778F4 ON t_ms_livraisonlg (p_produit_id)
        SQL);
        $this->addSql(<<<'SQL'
            CREATE INDEX IDX_D221EC25D372DD48 ON t_ms_livraisonlg (p_pr_unite_id)
        SQL);
        $this->addSql(<<<'SQL'
            CREATE INDEX IDX_D221EC25E3D7CA8C ON t_ms_livraisonlg (t_ms_commandelg_id)
        SQL);
        $this->addSql(<<<'SQL'
            CREATE TABLE t_ms_livraisonobj (id INT IDENTITY NOT NULL, t_ms_livraisonlg_id INT, tac_reception_obj_id INT, date_peremption DATE, quantitie_livree DOUBLE PRECISION, lot NVARCHAR(255), prix_ttc DOUBLE PRECISION, total_ttc DOUBLE PRECISION, created DATETIME2(6), flag_synchronisation_locale BIT, PRIMARY KEY (id))
        SQL);
        $this->addSql(<<<'SQL'
            CREATE INDEX IDX_4B82D87CE665ED57 ON t_ms_livraisonobj (t_ms_livraisonlg_id)
        SQL);
        $this->addSql(<<<'SQL'
            CREATE INDEX IDX_4B82D87C7AFD3D31 ON t_ms_livraisonobj (tac_reception_obj_id)
        SQL);
        $this->addSql(<<<'SQL'
            CREATE TABLE t_st_stockdyna (id INT IDENTITY NOT NULL, p_produit_id INT, p_pr_unite_id INT, pemplacements_id INT, userupdate_id INT, quantite DOUBLE PRECISION NOT NULL, dateupdate DATETIME2(6) NOT NULL, flag_synchronisation_locale INT, PRIMARY KEY (id))
        SQL);
        $this->addSql(<<<'SQL'
            CREATE INDEX IDX_8B554BDF586778F4 ON t_st_stockdyna (p_produit_id)
        SQL);
        $this->addSql(<<<'SQL'
            CREATE INDEX IDX_8B554BDFD372DD48 ON t_st_stockdyna (p_pr_unite_id)
        SQL);
        $this->addSql(<<<'SQL'
            CREATE INDEX IDX_8B554BDF1FD77E66 ON t_st_stockdyna (pemplacements_id)
        SQL);
        $this->addSql(<<<'SQL'
            CREATE INDEX IDX_8B554BDF1BDB4BD1 ON t_st_stockdyna (userupdate_id)
        SQL);
        $this->addSql(<<<'SQL'
            CREATE TABLE t_st_stockstatic (id INT IDENTITY NOT NULL, p_produit_id INT, p_pr_unite_id INT, p_emplacements_id INT, userupdate_id INT, solde DOUBLE PRECISION NOT NULL, dateupdate DATETIME2(6), flag_synchronisation_locale INT, quantite_reserve DOUBLE PRECISION, PRIMARY KEY (id))
        SQL);
        $this->addSql(<<<'SQL'
            CREATE INDEX IDX_623EBF31586778F4 ON t_st_stockstatic (p_produit_id)
        SQL);
        $this->addSql(<<<'SQL'
            CREATE INDEX IDX_623EBF31D372DD48 ON t_st_stockstatic (p_pr_unite_id)
        SQL);
        $this->addSql(<<<'SQL'
            CREATE INDEX IDX_623EBF31C7E216BA ON t_st_stockstatic (p_emplacements_id)
        SQL);
        $this->addSql(<<<'SQL'
            CREATE INDEX IDX_623EBF311BDB4BD1 ON t_st_stockstatic (userupdate_id)
        SQL);
        $this->addSql(<<<'SQL'
            CREATE TABLE t_vt_devis (id INT IDENTITY NOT NULL, PRIMARY KEY (id))
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE p_affectation_magasin ADD CONSTRAINT FK_8CC07CAB20096AE3 FOREIGN KEY (magasin_id) REFERENCES p_magasins (id)
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE p_affectation_magasin ADD CONSTRAINT FK_8CC07CABDF0FD358 FOREIGN KEY (userr_id) REFERENCES p_pv000_user (id)
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE p_counter ADD CONSTRAINT FK_C6E27D179BEA957A FOREIGN KEY (entite_id) REFERENCES p_entite (id)
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE p_counter ADD CONSTRAINT FK_C6E27D179F0E854 FOREIGN KEY (type_piece_id) REFERENCES p_type_piece (id)
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE p_depots ADD CONSTRAINT FK_74B3D2239BEA957A FOREIGN KEY (entite_id) REFERENCES p_entite (id)
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE p_depots ADD CONSTRAINT FK_74B3D223F987D8A8 FOREIGN KEY (user_created_id) REFERENCES p_pv000_user (id)
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE p_depots ADD CONSTRAINT FK_74B3D223316B011F FOREIGN KEY (user_updated_id) REFERENCES p_pv000_user (id)
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE p_emplacements ADD CONSTRAINT FK_21EBB9EE20096AE3 FOREIGN KEY (magasin_id) REFERENCES p_magasins (id)
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE p_entite ADD CONSTRAINT FK_B7046E23727ACA70 FOREIGN KEY (parent_id) REFERENCES p_entite (id)
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE p_entite ADD CONSTRAINT FK_B7046E23F987D8A8 FOREIGN KEY (user_created_id) REFERENCES p_pv000_user (id)
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE p_entite ADD CONSTRAINT FK_B7046E239E6B1585 FOREIGN KEY (organisation_id) REFERENCES p_entite_org (id)
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE p_entite ADD CONSTRAINT FK_B7046E232F2CD46A FOREIGN KEY (type_entite_id) REFERENCES p_et_type_entites (id)
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE p_entite_org ADD CONSTRAINT FK_FED9A6AB727ACA70 FOREIGN KEY (parent_id) REFERENCES p_entite_org (id)
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE p_magasins ADD CONSTRAINT FK_635A691F8510D4DE FOREIGN KEY (depot_id) REFERENCES p_depots (id)
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE p_magasins ADD CONSTRAINT FK_635A691FF987D8A8 FOREIGN KEY (user_created_id) REFERENCES p_pv000_user (id)
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE p_magasins ADD CONSTRAINT FK_635A691F316B011F FOREIGN KEY (user_updated_id) REFERENCES p_pv000_user (id)
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE p_partenaires ADD CONSTRAINT FK_42D85EB9E833A499 FOREIGN KEY (type_partenaire_id) REFERENCES p_type_partenaire (id)
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE p_partenaires ADD CONSTRAINT FK_42D85EB99BEA957A FOREIGN KEY (entite_id) REFERENCES p_entite (id)
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE p_partenaires ADD CONSTRAINT FK_42D85EB9F987D8A8 FOREIGN KEY (user_created_id) REFERENCES p_pv000_user (id)
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE p_pr_niveau_produits ADD CONSTRAINT FK_3269F823727ACA70 FOREIGN KEY (parent_id) REFERENCES p_pr_niveau_produits (id)
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE p_pr_tarifications ADD CONSTRAINT FK_C26D1CE6503D61F4 FOREIGN KEY (type_tarification_id) REFERENCES p_pr_type_tarification (id)
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE p_pr_tarifications ADD CONSTRAINT FK_C26D1CE6F4445056 FOREIGN KEY (devise_id) REFERENCES p_devise (id)
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE p_pr_tarifications ADD CONSTRAINT FK_C26D1CE6F347EFB FOREIGN KEY (produit_id) REFERENCES p_produits (id)
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE p_produits ADD CONSTRAINT FK_632763ACD372DD48 FOREIGN KEY (p_pr_unite_id) REFERENCES p_pr_unites (id)
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE p_produits ADD CONSTRAINT FK_632763ACB3E9C81 FOREIGN KEY (niveau_id) REFERENCES p_pr_niveau_produits (id)
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE p_produits ADD CONSTRAINT FK_632763AC231B45D9 FOREIGN KEY (dci_id) REFERENCES p_pr_dci (id)
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE p_pv000_user ADD CONSTRAINT FK_FE69F173C94F0596 FOREIGN KEY (pprofession_id) REFERENCES p_pv001_profession (id)
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE p_pv000_user ADD CONSTRAINT FK_FE69F173D5766755 FOREIGN KEY (user_update_id) REFERENCES p_pv000_user (id)
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE p_pv001_profession ADD CONSTRAINT FK_485AB613D5766755 FOREIGN KEY (user_update_id) REFERENCES p_pv000_user (id)
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE p_pv002_action ADD CONSTRAINT FK_854A93078CBCF8FA FOREIGN KEY (p_sous_module_id) REFERENCES p_pv004_sousmodule (id)
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE p_pv002_action ADD CONSTRAINT FK_854A9307D5766755 FOREIGN KEY (user_update_id) REFERENCES p_pv000_user (id)
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE p_pv003_module ADD CONSTRAINT FK_2083923D5766755 FOREIGN KEY (user_update_id) REFERENCES p_pv000_user (id)
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE p_pv004_sousmodule ADD CONSTRAINT FK_9392063B94719FE5 FOREIGN KEY (p_module_id) REFERENCES p_pv003_module (id)
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE p_pv004_sousmodule ADD CONSTRAINT FK_9392063BD5766755 FOREIGN KEY (user_update_id) REFERENCES p_pv000_user (id)
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE p_pv005_user_entite_action ADD CONSTRAINT FK_13878A31DF0FD358 FOREIGN KEY (userr_id) REFERENCES p_pv000_user (id)
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE p_pv005_user_entite_action ADD CONSTRAINT FK_13878A31611C0C56 FOREIGN KEY (dossier_id) REFERENCES p_entite (id)
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE p_pv005_user_entite_action ADD CONSTRAINT FK_13878A319D32F035 FOREIGN KEY (action_id) REFERENCES p_pv002_action (id)
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
        $this->addSql(<<<'SQL'
            ALTER TABLE t_ms_commande ADD CONSTRAINT FK_1BCB87FAF987D8A8 FOREIGN KEY (user_created_id) REFERENCES p_pv000_user (id)
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE t_ms_commande ADD CONSTRAINT FK_1BCB87FA316B011F FOREIGN KEY (user_updated_id) REFERENCES p_pv000_user (id)
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE t_ms_commande ADD CONSTRAINT FK_1BCB87FAF749B324 FOREIGN KEY (user_valider_id) REFERENCES p_pv000_user (id)
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE t_ms_commande ADD CONSTRAINT FK_1BCB87FA32C38471 FOREIGN KEY (user_generer_id) REFERENCES p_pv000_user (id)
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE t_ms_commande ADD CONSTRAINT FK_1BCB87FAE38A95CE FOREIGN KEY (user_annuler_id) REFERENCES p_pv000_user (id)
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE t_ms_commande ADD CONSTRAINT FK_1BCB87FAD2B09A9 FOREIGN KEY (user_archiver_id) REFERENCES p_pv000_user (id)
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE t_ms_commande ADD CONSTRAINT FK_1BCB87FAC9F3F9C5 FOREIGN KEY (type_commande_id) REFERENCES p_type_oprt (id)
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE t_ms_commande ADD CONSTRAINT FK_1BCB87FA95A6EE59 FOREIGN KEY (demandeur_id) REFERENCES p_magasins (id)
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE t_ms_commande ADD CONSTRAINT FK_1BCB87FA3B49782D FOREIGN KEY (recepteur_id) REFERENCES p_magasins (id)
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE t_ms_commande ADD CONSTRAINT FK_1BCB87FADF648904 FOREIGN KEY (p_partenaires_id_id) REFERENCES p_partenaires (id)
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE t_ms_commande ADD CONSTRAINT FK_1BCB87FAA059BF0E FOREIGN KEY (p_entite_id) REFERENCES p_entite (id)
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE t_ms_commande ADD CONSTRAINT FK_1BCB87FAB84235EB FOREIGN KEY (t_ms_demande_id) REFERENCES t_ms_demande (id)
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE t_ms_commande ADD CONSTRAINT FK_1BCB87FA727ACA70 FOREIGN KEY (parent_id) REFERENCES t_ms_commande (id)
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE t_ms_commande ADD CONSTRAINT FK_1BCB87FA6BF700BD FOREIGN KEY (status_id) REFERENCES p_statut (id)
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE t_ms_commande ADD CONSTRAINT FK_1BCB87FAB588E0EF FOREIGN KEY (st_position_actuel_id) REFERENCES p_statut (id)
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE t_ms_commandelg ADD CONSTRAINT FK_C6C8C6D0A6662699 FOREIGN KEY (t_ms_commande_id) REFERENCES t_ms_commande (id)
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE t_ms_commandelg ADD CONSTRAINT FK_C6C8C6D0586778F4 FOREIGN KEY (p_produit_id) REFERENCES p_produits (id)
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE t_ms_commandelg ADD CONSTRAINT FK_C6C8C6D0D372DD48 FOREIGN KEY (p_pr_unite_id) REFERENCES p_pr_unites (id)
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE t_ms_demande ADD CONSTRAINT FK_6D16CC67F987D8A8 FOREIGN KEY (user_created_id) REFERENCES p_pv000_user (id)
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE t_ms_demande ADD CONSTRAINT FK_6D16CC67316B011F FOREIGN KEY (user_updated_id) REFERENCES p_pv000_user (id)
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE t_ms_demande ADD CONSTRAINT FK_6D16CC67F749B324 FOREIGN KEY (user_valider_id) REFERENCES p_pv000_user (id)
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE t_ms_demande ADD CONSTRAINT FK_6D16CC6732C38471 FOREIGN KEY (user_generer_id) REFERENCES p_pv000_user (id)
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE t_ms_demande ADD CONSTRAINT FK_6D16CC67E38A95CE FOREIGN KEY (user_annuler_id) REFERENCES p_pv000_user (id)
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE t_ms_demande ADD CONSTRAINT FK_6D16CC67D2B09A9 FOREIGN KEY (user_archiver_id) REFERENCES p_pv000_user (id)
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE t_ms_demande ADD CONSTRAINT FK_6D16CC679DEA883D FOREIGN KEY (type_demande_id) REFERENCES p_type_oprt (id)
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE t_ms_demande ADD CONSTRAINT FK_6D16CC6795A6EE59 FOREIGN KEY (demandeur_id) REFERENCES p_magasins (id)
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE t_ms_demande ADD CONSTRAINT FK_6D16CC673B49782D FOREIGN KEY (recepteur_id) REFERENCES p_magasins (id)
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE t_ms_demande ADD CONSTRAINT FK_6D16CC67FE2AD1 FOREIGN KEY (p_partenaires_id) REFERENCES p_partenaires (id)
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE t_ms_demande ADD CONSTRAINT FK_6D16CC67A059BF0E FOREIGN KEY (p_entite_id) REFERENCES p_entite (id)
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE t_ms_demande ADD CONSTRAINT FK_6D16CC67727ACA70 FOREIGN KEY (parent_id) REFERENCES t_ms_commande (id)
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE t_ms_demande ADD CONSTRAINT FK_6D16CC676BF700BD FOREIGN KEY (status_id) REFERENCES p_statut (id)
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE t_ms_demande ADD CONSTRAINT FK_6D16CC67B588E0EF FOREIGN KEY (st_position_actuel_id) REFERENCES p_statut (id)
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE t_ms_demandelg ADD CONSTRAINT FK_E329DC42B84235EB FOREIGN KEY (t_ms_demande_id) REFERENCES t_ms_demande (id)
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE t_ms_demandelg ADD CONSTRAINT FK_E329DC42586778F4 FOREIGN KEY (p_produit_id) REFERENCES p_produits (id)
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE t_ms_demandelg ADD CONSTRAINT FK_E329DC42D372DD48 FOREIGN KEY (p_pr_unite_id) REFERENCES p_pr_unites (id)
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE t_ms_livraison ADD CONSTRAINT FK_D5A5A8BDA6662699 FOREIGN KEY (t_ms_commande_id) REFERENCES t_ms_commande (id)
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE t_ms_livraison ADD CONSTRAINT FK_D5A5A8BD95A6EE59 FOREIGN KEY (demandeur_id) REFERENCES p_magasins (id)
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE t_ms_livraison ADD CONSTRAINT FK_D5A5A8BD3B49782D FOREIGN KEY (recepteur_id) REFERENCES p_magasins (id)
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE t_ms_livraison ADD CONSTRAINT FK_D5A5A8BDFE2AD1 FOREIGN KEY (p_partenaires_id) REFERENCES p_partenaires (id)
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE t_ms_livraison ADD CONSTRAINT FK_D5A5A8BDA059BF0E FOREIGN KEY (p_entite_id) REFERENCES p_entite (id)
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
            ALTER TABLE t_ms_livraisonlg ADD CONSTRAINT FK_D221EC256BA5C920 FOREIGN KEY (t_ms_livraison_id) REFERENCES t_ms_livraison (id)
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE t_ms_livraisonlg ADD CONSTRAINT FK_D221EC25586778F4 FOREIGN KEY (p_produit_id) REFERENCES p_produits (id)
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE t_ms_livraisonlg ADD CONSTRAINT FK_D221EC25D372DD48 FOREIGN KEY (p_pr_unite_id) REFERENCES p_pr_unites (id)
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE t_ms_livraisonlg ADD CONSTRAINT FK_D221EC25E3D7CA8C FOREIGN KEY (t_ms_commandelg_id) REFERENCES t_ms_commandelg (id)
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE t_ms_livraisonobj ADD CONSTRAINT FK_4B82D87CE665ED57 FOREIGN KEY (t_ms_livraisonlg_id) REFERENCES t_ms_livraisonlg (id)
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE t_ms_livraisonobj ADD CONSTRAINT FK_4B82D87C7AFD3D31 FOREIGN KEY (tac_reception_obj_id) REFERENCES t_ac_reception_obj (id)
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE t_st_stockdyna ADD CONSTRAINT FK_8B554BDF586778F4 FOREIGN KEY (p_produit_id) REFERENCES p_produits (id)
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE t_st_stockdyna ADD CONSTRAINT FK_8B554BDFD372DD48 FOREIGN KEY (p_pr_unite_id) REFERENCES p_pr_unites (id)
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE t_st_stockdyna ADD CONSTRAINT FK_8B554BDF1FD77E66 FOREIGN KEY (pemplacements_id) REFERENCES p_emplacements (id)
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE t_st_stockdyna ADD CONSTRAINT FK_8B554BDF1BDB4BD1 FOREIGN KEY (userupdate_id) REFERENCES p_pv000_user (id)
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE t_st_stockstatic ADD CONSTRAINT FK_623EBF31586778F4 FOREIGN KEY (p_produit_id) REFERENCES p_produits (id)
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE t_st_stockstatic ADD CONSTRAINT FK_623EBF31D372DD48 FOREIGN KEY (p_pr_unite_id) REFERENCES p_pr_unites (id)
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE t_st_stockstatic ADD CONSTRAINT FK_623EBF31C7E216BA FOREIGN KEY (p_emplacements_id) REFERENCES p_emplacements (id)
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE t_st_stockstatic ADD CONSTRAINT FK_623EBF311BDB4BD1 FOREIGN KEY (userupdate_id) REFERENCES p_pv000_user (id)
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
            ALTER TABLE p_affectation_magasin DROP CONSTRAINT FK_8CC07CAB20096AE3
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE p_affectation_magasin DROP CONSTRAINT FK_8CC07CABDF0FD358
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE p_counter DROP CONSTRAINT FK_C6E27D179BEA957A
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE p_counter DROP CONSTRAINT FK_C6E27D179F0E854
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE p_depots DROP CONSTRAINT FK_74B3D2239BEA957A
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE p_depots DROP CONSTRAINT FK_74B3D223F987D8A8
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE p_depots DROP CONSTRAINT FK_74B3D223316B011F
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE p_emplacements DROP CONSTRAINT FK_21EBB9EE20096AE3
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE p_entite DROP CONSTRAINT FK_B7046E23727ACA70
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE p_entite DROP CONSTRAINT FK_B7046E23F987D8A8
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE p_entite DROP CONSTRAINT FK_B7046E239E6B1585
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE p_entite DROP CONSTRAINT FK_B7046E232F2CD46A
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE p_entite_org DROP CONSTRAINT FK_FED9A6AB727ACA70
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE p_magasins DROP CONSTRAINT FK_635A691F8510D4DE
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE p_magasins DROP CONSTRAINT FK_635A691FF987D8A8
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE p_magasins DROP CONSTRAINT FK_635A691F316B011F
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE p_partenaires DROP CONSTRAINT FK_42D85EB9E833A499
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE p_partenaires DROP CONSTRAINT FK_42D85EB99BEA957A
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE p_partenaires DROP CONSTRAINT FK_42D85EB9F987D8A8
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE p_pr_niveau_produits DROP CONSTRAINT FK_3269F823727ACA70
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE p_pr_tarifications DROP CONSTRAINT FK_C26D1CE6503D61F4
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE p_pr_tarifications DROP CONSTRAINT FK_C26D1CE6F4445056
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE p_pr_tarifications DROP CONSTRAINT FK_C26D1CE6F347EFB
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE p_produits DROP CONSTRAINT FK_632763ACD372DD48
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE p_produits DROP CONSTRAINT FK_632763ACB3E9C81
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE p_produits DROP CONSTRAINT FK_632763AC231B45D9
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE p_pv000_user DROP CONSTRAINT FK_FE69F173C94F0596
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE p_pv000_user DROP CONSTRAINT FK_FE69F173D5766755
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE p_pv001_profession DROP CONSTRAINT FK_485AB613D5766755
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE p_pv002_action DROP CONSTRAINT FK_854A93078CBCF8FA
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE p_pv002_action DROP CONSTRAINT FK_854A9307D5766755
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE p_pv003_module DROP CONSTRAINT FK_2083923D5766755
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE p_pv004_sousmodule DROP CONSTRAINT FK_9392063B94719FE5
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE p_pv004_sousmodule DROP CONSTRAINT FK_9392063BD5766755
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE p_pv005_user_entite_action DROP CONSTRAINT FK_13878A31DF0FD358
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE p_pv005_user_entite_action DROP CONSTRAINT FK_13878A31611C0C56
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE p_pv005_user_entite_action DROP CONSTRAINT FK_13878A319D32F035
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
            ALTER TABLE t_ms_commande DROP CONSTRAINT FK_1BCB87FAF987D8A8
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE t_ms_commande DROP CONSTRAINT FK_1BCB87FA316B011F
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE t_ms_commande DROP CONSTRAINT FK_1BCB87FAF749B324
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE t_ms_commande DROP CONSTRAINT FK_1BCB87FA32C38471
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE t_ms_commande DROP CONSTRAINT FK_1BCB87FAE38A95CE
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE t_ms_commande DROP CONSTRAINT FK_1BCB87FAD2B09A9
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE t_ms_commande DROP CONSTRAINT FK_1BCB87FAC9F3F9C5
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE t_ms_commande DROP CONSTRAINT FK_1BCB87FA95A6EE59
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE t_ms_commande DROP CONSTRAINT FK_1BCB87FA3B49782D
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE t_ms_commande DROP CONSTRAINT FK_1BCB87FADF648904
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE t_ms_commande DROP CONSTRAINT FK_1BCB87FAA059BF0E
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE t_ms_commande DROP CONSTRAINT FK_1BCB87FAB84235EB
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE t_ms_commande DROP CONSTRAINT FK_1BCB87FA727ACA70
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE t_ms_commande DROP CONSTRAINT FK_1BCB87FA6BF700BD
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE t_ms_commande DROP CONSTRAINT FK_1BCB87FAB588E0EF
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE t_ms_commandelg DROP CONSTRAINT FK_C6C8C6D0A6662699
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE t_ms_commandelg DROP CONSTRAINT FK_C6C8C6D0586778F4
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE t_ms_commandelg DROP CONSTRAINT FK_C6C8C6D0D372DD48
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE t_ms_demande DROP CONSTRAINT FK_6D16CC67F987D8A8
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE t_ms_demande DROP CONSTRAINT FK_6D16CC67316B011F
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE t_ms_demande DROP CONSTRAINT FK_6D16CC67F749B324
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE t_ms_demande DROP CONSTRAINT FK_6D16CC6732C38471
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE t_ms_demande DROP CONSTRAINT FK_6D16CC67E38A95CE
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE t_ms_demande DROP CONSTRAINT FK_6D16CC67D2B09A9
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE t_ms_demande DROP CONSTRAINT FK_6D16CC679DEA883D
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE t_ms_demande DROP CONSTRAINT FK_6D16CC6795A6EE59
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE t_ms_demande DROP CONSTRAINT FK_6D16CC673B49782D
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE t_ms_demande DROP CONSTRAINT FK_6D16CC67FE2AD1
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE t_ms_demande DROP CONSTRAINT FK_6D16CC67A059BF0E
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE t_ms_demande DROP CONSTRAINT FK_6D16CC67727ACA70
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE t_ms_demande DROP CONSTRAINT FK_6D16CC676BF700BD
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE t_ms_demande DROP CONSTRAINT FK_6D16CC67B588E0EF
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE t_ms_demandelg DROP CONSTRAINT FK_E329DC42B84235EB
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE t_ms_demandelg DROP CONSTRAINT FK_E329DC42586778F4
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE t_ms_demandelg DROP CONSTRAINT FK_E329DC42D372DD48
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE t_ms_livraison DROP CONSTRAINT FK_D5A5A8BDA6662699
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE t_ms_livraison DROP CONSTRAINT FK_D5A5A8BD95A6EE59
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE t_ms_livraison DROP CONSTRAINT FK_D5A5A8BD3B49782D
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE t_ms_livraison DROP CONSTRAINT FK_D5A5A8BDFE2AD1
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE t_ms_livraison DROP CONSTRAINT FK_D5A5A8BDA059BF0E
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
            ALTER TABLE t_ms_livraisonlg DROP CONSTRAINT FK_D221EC256BA5C920
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE t_ms_livraisonlg DROP CONSTRAINT FK_D221EC25586778F4
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE t_ms_livraisonlg DROP CONSTRAINT FK_D221EC25D372DD48
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE t_ms_livraisonlg DROP CONSTRAINT FK_D221EC25E3D7CA8C
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE t_ms_livraisonobj DROP CONSTRAINT FK_4B82D87CE665ED57
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE t_ms_livraisonobj DROP CONSTRAINT FK_4B82D87C7AFD3D31
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE t_st_stockdyna DROP CONSTRAINT FK_8B554BDF586778F4
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE t_st_stockdyna DROP CONSTRAINT FK_8B554BDFD372DD48
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE t_st_stockdyna DROP CONSTRAINT FK_8B554BDF1FD77E66
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE t_st_stockdyna DROP CONSTRAINT FK_8B554BDF1BDB4BD1
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE t_st_stockstatic DROP CONSTRAINT FK_623EBF31586778F4
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE t_st_stockstatic DROP CONSTRAINT FK_623EBF31D372DD48
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE t_st_stockstatic DROP CONSTRAINT FK_623EBF31C7E216BA
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE t_st_stockstatic DROP CONSTRAINT FK_623EBF311BDB4BD1
        SQL);
        $this->addSql(<<<'SQL'
            DROP TABLE data_audit
        SQL);
        $this->addSql(<<<'SQL'
            DROP TABLE p_affectation_magasin
        SQL);
        $this->addSql(<<<'SQL'
            DROP TABLE p_app_parametrages
        SQL);
        $this->addSql(<<<'SQL'
            DROP TABLE p_counter
        SQL);
        $this->addSql(<<<'SQL'
            DROP TABLE p_depots
        SQL);
        $this->addSql(<<<'SQL'
            DROP TABLE p_devise
        SQL);
        $this->addSql(<<<'SQL'
            DROP TABLE p_emplacements
        SQL);
        $this->addSql(<<<'SQL'
            DROP TABLE p_entite
        SQL);
        $this->addSql(<<<'SQL'
            DROP TABLE p_entite_org
        SQL);
        $this->addSql(<<<'SQL'
            DROP TABLE p_et_type_entites
        SQL);
        $this->addSql(<<<'SQL'
            DROP TABLE p_magasins
        SQL);
        $this->addSql(<<<'SQL'
            DROP TABLE p_messages
        SQL);
        $this->addSql(<<<'SQL'
            DROP TABLE p_nature_prix
        SQL);
        $this->addSql(<<<'SQL'
            DROP TABLE p_partenaires
        SQL);
        $this->addSql(<<<'SQL'
            DROP TABLE p_pr_dci
        SQL);
        $this->addSql(<<<'SQL'
            DROP TABLE p_pr_niveau_produits
        SQL);
        $this->addSql(<<<'SQL'
            DROP TABLE p_pr_tarifications
        SQL);
        $this->addSql(<<<'SQL'
            DROP TABLE p_pr_type_tarification
        SQL);
        $this->addSql(<<<'SQL'
            DROP TABLE p_pr_unites
        SQL);
        $this->addSql(<<<'SQL'
            DROP TABLE p_produits
        SQL);
        $this->addSql(<<<'SQL'
            DROP TABLE p_pv000_user
        SQL);
        $this->addSql(<<<'SQL'
            DROP TABLE p_pv001_profession
        SQL);
        $this->addSql(<<<'SQL'
            DROP TABLE p_pv002_action
        SQL);
        $this->addSql(<<<'SQL'
            DROP TABLE p_pv003_module
        SQL);
        $this->addSql(<<<'SQL'
            DROP TABLE p_pv004_sousmodule
        SQL);
        $this->addSql(<<<'SQL'
            DROP TABLE p_pv005_user_entite_action
        SQL);
        $this->addSql(<<<'SQL'
            DROP TABLE p_statut
        SQL);
        $this->addSql(<<<'SQL'
            DROP TABLE p_tarif_fournisseur
        SQL);
        $this->addSql(<<<'SQL'
            DROP TABLE p_type_oprt
        SQL);
        $this->addSql(<<<'SQL'
            DROP TABLE p_type_partenaire
        SQL);
        $this->addSql(<<<'SQL'
            DROP TABLE p_type_piece
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
            DROP TABLE t_ms_commande
        SQL);
        $this->addSql(<<<'SQL'
            DROP TABLE t_ms_commandelg
        SQL);
        $this->addSql(<<<'SQL'
            DROP TABLE t_ms_demande
        SQL);
        $this->addSql(<<<'SQL'
            DROP TABLE t_ms_demandelg
        SQL);
        $this->addSql(<<<'SQL'
            DROP TABLE t_ms_livraison
        SQL);
        $this->addSql(<<<'SQL'
            DROP TABLE t_ms_livraisonlg
        SQL);
        $this->addSql(<<<'SQL'
            DROP TABLE t_ms_livraisonobj
        SQL);
        $this->addSql(<<<'SQL'
            DROP TABLE t_st_stockdyna
        SQL);
        $this->addSql(<<<'SQL'
            DROP TABLE t_st_stockstatic
        SQL);
        $this->addSql(<<<'SQL'
            DROP TABLE t_vt_devis
        SQL);
    }
}
