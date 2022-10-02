import { MigrationInterface, QueryRunner, Table } from "typeorm"

export class CreateProducts1664676624045 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: "products",
            columns: [
                {
                    name: "id",
                    type: "uuid",
                    isPrimary: true,
                    isUnique: true,
                    isGenerated: false
                },
                {
                    name: "catalog_id",
                    type: "uuid"
                },
                {
                    name: "product_id",
                    type: "varchar"
                }
            ],
            foreignKeys:[
                {
                    name: "FKCatalog_id",
                    columnNames: ["catalog_id"],
                    referencedTableName: "catalogs",
                    referencedColumnNames: ["id"],
                    onDelete: "CASCADE",
                    onUpdate: "CASCADE"
                }
            ]
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("products");
    }

}
