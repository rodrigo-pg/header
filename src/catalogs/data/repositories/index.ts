import { Catalog } from "../../domain/entities/Catalog";
import { CatalogDTO } from "../../domain/entities/CatalogDTO";
import { CatalogsRepository } from "../../domain/ports/catalogs-repository";
import { CatalogDataSource } from "../interfaces/data-sources/catalog-data-source";

class CatalogRepositoryImpl implements CatalogsRepository {

    constructor(
        private catalogDataSource: CatalogDataSource
    ) {}

    async add(catalog: Catalog): Promise<CatalogDTO> {
        return await this.catalogDataSource.add(catalog);
    }

    async addProductCatalog(catalogId: string, productId: string): Promise<void> {
        await this.catalogDataSource.addProductCatalog(catalogId, productId);
    }

    async removeProductCatalog(catalogId: string, productId: string): Promise<void> {
        await this.catalogDataSource.removeProductCatalog(catalogId, productId);
    }

    async get(catalogId: string): Promise<Catalog> {
        return await this.catalogDataSource.get(catalogId);
    }

    async getAll(): Promise<Catalog[]> {
        return await this.catalogDataSource.getAll();
    }

    async update(catalogId: string, data: Partial<Catalog>): Promise<void> {
        await this.catalogDataSource.update(catalogId, data);
    }

    async delete(catalogId: string): Promise<void> {
        await this.catalogDataSource.delete(catalogId);
    }
}

export { CatalogRepositoryImpl };