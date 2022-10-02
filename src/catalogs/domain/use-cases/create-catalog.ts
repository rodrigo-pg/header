import { Catalog } from "../entities/Catalog";
import { CatalogsRepository } from "../ports/catalogs-repository";
import { CreateCatalogUseCase } from "../ports/use-cases/create-catalog-use-case";

class CreateCatalog implements CreateCatalogUseCase {

    constructor(
        private catalogsRepository: CatalogsRepository
    ) {}

    async execute(catalogData: CreateCatalogUseCase.Input): Promise<Catalog> {
        const catalog = new Catalog(catalogData.title, catalogData.description, catalogData.viewLink);
        await this.catalogsRepository.add(catalog);
        return catalog;
    }
}

export { CreateCatalog };