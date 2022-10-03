import { Repository } from "typeorm";
import { Catalog } from "../../../../../domain/entities/Catalog";
import { CatalogDTO } from "../../../../../domain/entities/CatalogDTO";
import { ORMWrapper } from "../../../../interfaces/data-sources/wrappers/orm-wrapper";
import { Catalog as CatalogModel } from "./models/Catalog";
import { Product } from "./models/Product";

class TypeORMWrapper implements ORMWrapper {
    
    constructor(
        private catalogsRepository: Repository<CatalogModel>,
        private productsRepository: Repository<Product>
    ) {}

    async find(): Promise<Catalog[]> {
        return (await this.catalogsRepository.find({relations: ["product"]}) as any);
    }

    async findOne(catalogId: string): Promise<Catalog> {
        return (await this.catalogsRepository.findOne({relations: ["product"], where: [{id: catalogId}]}) as any);
    }

    async insertOne(catalog: Catalog): Promise<CatalogDTO> {
        const catalogData = {
            title: catalog.getTitle(),
            description: catalog.getDescription(),
            viewLink: catalog.getViewLink()
        }
        const catalogEntry = this.catalogsRepository.create(catalogData);
        return await this.catalogsRepository.save(catalogEntry);
    }

    async insertProductReference(catalogId: string, productId: string): Promise<void> {
        const productReferenceData = {
            catalogId,
            productId
        }
        const entry = this.productsRepository.create(productReferenceData);
        await this.productsRepository.save(entry);
    }

    async removeProductReference(catalogId: string, productId: string): Promise<void> {
        await this.productsRepository.delete({productId, catalogId});
    }

    async delete(catalogId: string): Promise<void> {
        await this.catalogsRepository.delete({id: catalogId});
    }

    async update(catalogId: string, data: Partial<Catalog>): Promise<void> {
        await this.catalogsRepository.update({id: catalogId}, (data as any));
    }

}

export { TypeORMWrapper };