import { Catalog } from "../../../domain/entities/Catalog";
import { CatalogDTO } from "../../../domain/entities/CatalogDTO";
import { CatalogDataSource } from "../../interfaces/data-sources/catalog-data-source";
import { ORMWrapper } from "../../interfaces/data-sources/wrappers/orm-wrapper";

class ORMDataSource implements CatalogDataSource {
    
    constructor(
        private db: ORMWrapper
    ) {}

    async add(catalog: Catalog): Promise<CatalogDTO> {
        return await this.db.insertOne(catalog);
    }

    async addProductCatalog(catalogId: string, productId: string): Promise<void> {
        await this.db.insertProductReference(catalogId, productId);
    }

    async get(catalogId: string): Promise<Catalog> {
        return (await this.db.findOne(catalogId) as Catalog);
    }

    async getAll(): Promise<Catalog[]> {
        return await this.db.find();
    }

    async update(catalogId: string, data: Partial<Catalog>): Promise<void> {
        await this.db.update(catalogId, data);
    }

    async delete(catalogId: string): Promise<void> {
        await this.db.delete(catalogId);
    }

    async removeProductCatalog(catalogId: string, productId: string): Promise<void> {
        await this.db.removeProductReference(catalogId, productId);
    }
}

export { ORMDataSource };