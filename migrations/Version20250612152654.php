<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20250612152654 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql(<<<'SQL'
            ALTER TABLE p_affectation_magasin ADD CONSTRAINT FK_8CC07CAB20096AE3 FOREIGN KEY (magasin_id) REFERENCES p_magasins (id)
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE p_depots ADD defaut BIT
        SQL);
        $this->addSql(<<<'SQL'
            EXEC sp_rename N'p_depots.idx_19580ad19bea957a', N'IDX_74B3D2239BEA957A', N'INDEX'
        SQL);
        $this->addSql(<<<'SQL'
            EXEC sp_rename N'p_depots.idx_19580ad1f987d8a8', N'IDX_74B3D223F987D8A8', N'INDEX'
        SQL);
        $this->addSql(<<<'SQL'
            EXEC sp_rename N'p_depots.idx_19580ad1316b011f', N'IDX_74B3D223316B011F', N'INDEX'
        SQL);
        $this->addSql(<<<'SQL'
            EXEC sp_rename N'p_magasins.idx_cdd8dd2d8510d4de', N'IDX_635A691F8510D4DE', N'INDEX'
        SQL);
        $this->addSql(<<<'SQL'
            EXEC sp_rename N'p_magasins.idx_cdd8dd2df987d8a8', N'IDX_635A691FF987D8A8', N'INDEX'
        SQL);
        $this->addSql(<<<'SQL'
            EXEC sp_rename N'p_magasins.idx_cdd8dd2d316b011f', N'IDX_635A691F316B011F', N'INDEX'
        SQL);
        $this->addSql(<<<'SQL'
            EXEC sp_rename N'p_partenaires.idx_e628e659e833a499', N'IDX_42D85EB9E833A499', N'INDEX'
        SQL);
        $this->addSql(<<<'SQL'
            EXEC sp_rename N'p_partenaires.idx_e628e6599bea957a', N'IDX_42D85EB99BEA957A', N'INDEX'
        SQL);
        $this->addSql(<<<'SQL'
            EXEC sp_rename N'p_partenaires.idx_e628e659f987d8a8', N'IDX_42D85EB9F987D8A8', N'INDEX'
        SQL);
        $this->addSql(<<<'SQL'
            EXEC sp_rename N'p_pr_niveau_produits.idx_4d6d1123727aca70', N'IDX_3269F823727ACA70', N'INDEX'
        SQL);
        $this->addSql(<<<'SQL'
            EXEC sp_rename N'p_pr_tarifications.idx_4dd0b771503d61f4', N'IDX_C26D1CE6503D61F4', N'INDEX'
        SQL);
        $this->addSql(<<<'SQL'
            EXEC sp_rename N'p_pr_tarifications.idx_4dd0b771f4445056', N'IDX_C26D1CE6F4445056', N'INDEX'
        SQL);
        $this->addSql(<<<'SQL'
            EXEC sp_rename N'p_pr_tarifications.idx_4dd0b771f347efb', N'IDX_C26D1CE6F347EFB', N'INDEX'
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
            ALTER TABLE p_depots DROP COLUMN defaut
        SQL);
        $this->addSql(<<<'SQL'
            EXEC sp_rename N'p_depots.idx_74b3d2239bea957a', N'IDX_19580AD19BEA957A', N'INDEX'
        SQL);
        $this->addSql(<<<'SQL'
            EXEC sp_rename N'p_depots.idx_74b3d223f987d8a8', N'IDX_19580AD1F987D8A8', N'INDEX'
        SQL);
        $this->addSql(<<<'SQL'
            EXEC sp_rename N'p_depots.idx_74b3d223316b011f', N'IDX_19580AD1316B011F', N'INDEX'
        SQL);
        $this->addSql(<<<'SQL'
            EXEC sp_rename N'p_magasins.idx_635a691f8510d4de', N'IDX_CDD8DD2D8510D4DE', N'INDEX'
        SQL);
        $this->addSql(<<<'SQL'
            EXEC sp_rename N'p_magasins.idx_635a691ff987d8a8', N'IDX_CDD8DD2DF987D8A8', N'INDEX'
        SQL);
        $this->addSql(<<<'SQL'
            EXEC sp_rename N'p_magasins.idx_635a691f316b011f', N'IDX_CDD8DD2D316B011F', N'INDEX'
        SQL);
        $this->addSql(<<<'SQL'
            EXEC sp_rename N'p_partenaires.idx_42d85eb9e833a499', N'IDX_E628E659E833A499', N'INDEX'
        SQL);
        $this->addSql(<<<'SQL'
            EXEC sp_rename N'p_partenaires.idx_42d85eb99bea957a', N'IDX_E628E6599BEA957A', N'INDEX'
        SQL);
        $this->addSql(<<<'SQL'
            EXEC sp_rename N'p_partenaires.idx_42d85eb9f987d8a8', N'IDX_E628E659F987D8A8', N'INDEX'
        SQL);
        $this->addSql(<<<'SQL'
            EXEC sp_rename N'p_pr_niveau_produits.idx_3269f823727aca70', N'IDX_4D6D1123727ACA70', N'INDEX'
        SQL);
        $this->addSql(<<<'SQL'
            EXEC sp_rename N'p_pr_tarifications.idx_c26d1ce6503d61f4', N'IDX_4DD0B771503D61F4', N'INDEX'
        SQL);
        $this->addSql(<<<'SQL'
            EXEC sp_rename N'p_pr_tarifications.idx_c26d1ce6f4445056', N'IDX_4DD0B771F4445056', N'INDEX'
        SQL);
        $this->addSql(<<<'SQL'
            EXEC sp_rename N'p_pr_tarifications.idx_c26d1ce6f347efb', N'IDX_4DD0B771F347EFB', N'INDEX'
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE p_affectation_magasin DROP CONSTRAINT FK_8CC07CAB20096AE3
        SQL);
    }
}
