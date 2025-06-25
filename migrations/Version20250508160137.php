<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

final class Version20250508160137 extends AbstractMigration
{
    public function getDescription(): string
    {
        return 'Replace pproduits with new p_Produits table and update all foreign keys accordingly';
    }

    public function up(Schema $schema): void
    {
        // Create new p_Produits table
        $this->addSql(<<<'SQL'
            CREATE TABLE p_Produits (
                id INT IDENTITY NOT NULL,
                p_pr_unite_id INT,
                niveau_id INT,
                dci_id INT,
                code NVARCHAR(255),
                titre NVARCHAR(255),
                description NVARCHAR(255),
                code_interne INT,
                forme NVARCHAR(255),
                dosage NVARCHAR(255),
                ean NVARCHAR(255),
                ean_acess NVARCHAR(255),
                atc NVARCHAR(255),
                code_imm NVARCHAR(255),
                liste NVARCHAR(255),
                observation NVARCHAR(255),
                fabricant NVARCHAR(255),
                dimension_physique NVARCHAR(255),
                presentation_article NVARCHAR(255),
                active BIT,
                created DATETIME2(6),
                image NVARCHAR(255),
                PRIMARY KEY (id)
            )
        SQL);

        $this->addSql("CREATE INDEX IDX_9A5101FAD372DD48 ON p_Produits (p_pr_unite_id)");
        $this->addSql("CREATE INDEX IDX_9A5101FAB3E9C81 ON p_Produits (niveau_id)");
        $this->addSql("CREATE INDEX IDX_9A5101FA231B45D9 ON p_Produits (dci_id)");

        // Create tms_demandelg table
        $this->addSql(<<<'SQL'
            CREATE TABLE tms_demandelg (
                id INT IDENTITY NOT NULL,
                tms_demande_id INT NOT NULL,
                quantite DOUBLE PRECISION NOT NULL,
                prix_unitaire DOUBLE PRECISION NOT NULL,
                remise DOUBLE PRECISION,
                tva DOUBLE PRECISION,
                montant_ht DOUBLE PRECISION,
                montant_ttc DOUBLE PRECISION,
                observation VARCHAR(MAX),
                code_comptable NVARCHAR(100),
                flag_synchronisation_locale BIT,
                PRIMARY KEY (id)
            )
        SQL);
        $this->addSql("CREATE INDEX IDX_9A922B0FB056B331 ON tms_demandelg (tms_demande_id)");

        // Add FKs to new tables
        $this->addSql("ALTER TABLE p_Produits ADD CONSTRAINT FK_9A5101FAD372DD48 FOREIGN KEY (p_pr_unite_id) REFERENCES ppr_unites (id)");
        $this->addSql("ALTER TABLE p_Produits ADD CONSTRAINT FK_9A5101FAB3E9C81 FOREIGN KEY (niveau_id) REFERENCES ppr_niveau_produits (id)");
        $this->addSql("ALTER TABLE p_Produits ADD CONSTRAINT FK_9A5101FA231B45D9 FOREIGN KEY (dci_id) REFERENCES ppr_dci (id)");
        $this->addSql("ALTER TABLE tms_demandelg ADD CONSTRAINT FK_9A922B0FB056B331 FOREIGN KEY (tms_demande_id) REFERENCES t_ms_Demande (id)");

        // 💥 Drop FK in ppr_tarifications before dropping pproduits
        $this->addSql("ALTER TABLE ppr_tarifications DROP CONSTRAINT FK_4DD0B771F347EFB");

        // Drop old pproduits safely
        $this->addSql("ALTER TABLE pproduits DROP CONSTRAINT FK_CDA5D79ED372DD48");
        $this->addSql("ALTER TABLE pproduits DROP CONSTRAINT FK_CDA5D79EB3E9C81");
        $this->addSql("ALTER TABLE pproduits DROP CONSTRAINT FK_CDA5D79E231B45D9");
        $this->addSql("DROP TABLE pproduits");

        // Re-assign FK to new table
        $this->addSql("ALTER TABLE ppr_tarifications ADD CONSTRAINT FK_4DD0B771F347EFB FOREIGN KEY (produit_id) REFERENCES p_Produits (id)");
    }

    public function down(Schema $schema): void
    {
        $this->addSql("ALTER TABLE ppr_tarifications DROP CONSTRAINT FK_4DD0B771F347EFB");

        $this->addSql(<<<'SQL'
            CREATE TABLE pproduits (
                id INT IDENTITY NOT NULL,
                p_pr_unite_id INT,
                niveau_id INT,
                dci_id INT,
                code NVARCHAR(255),
                titre NVARCHAR(255),
                description NVARCHAR(255),
                code_interne INT,
                forme NVARCHAR(255),
                dosage NVARCHAR(255),
                ean NVARCHAR(255),
                ean_acess NVARCHAR(255),
                atc NVARCHAR(255),
                code_imm NVARCHAR(255),
                liste NVARCHAR(255),
                observation NVARCHAR(255),
                fabricant NVARCHAR(255),
                dimension_physique NVARCHAR(255),
                presentation_article NVARCHAR(255),
                active BIT,
                created DATETIME2(6),
                image NVARCHAR(255),
                PRIMARY KEY (id)
            )
        SQL);

        $this->addSql("CREATE INDEX IDX_CDA5D79ED372DD48 ON pproduits (p_pr_unite_id)");
        $this->addSql("CREATE INDEX IDX_CDA5D79EB3E9C81 ON pproduits (niveau_id)");
        $this->addSql("CREATE INDEX IDX_CDA5D79E231B45D9 ON pproduits (dci_id)");

        $this->addSql("ALTER TABLE pproduits ADD CONSTRAINT FK_CDA5D79ED372DD48 FOREIGN KEY (p_pr_unite_id) REFERENCES ppr_unites (id)");
        $this->addSql("ALTER TABLE pproduits ADD CONSTRAINT FK_CDA5D79EB3E9C81 FOREIGN KEY (niveau_id) REFERENCES ppr_niveau_produits (id)");
        $this->addSql("ALTER TABLE pproduits ADD CONSTRAINT FK_CDA5D79E231B45D9 FOREIGN KEY (dci_id) REFERENCES ppr_dci (id)");

        $this->addSql("DROP TABLE p_Produits");
        $this->addSql("DROP TABLE tms_demandelg");

        $this->addSql("ALTER TABLE ppr_tarifications ADD CONSTRAINT FK_4DD0B771F347EFB FOREIGN KEY (produit_id) REFERENCES pproduits (id)");
    }
}
