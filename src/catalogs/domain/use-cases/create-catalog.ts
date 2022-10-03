import { Catalog } from "../entities/Catalog";
import { CatalogDTO } from "../entities/CatalogDTO";
import { CatalogsRepository } from "../ports/catalogs-repository";
import { CreateCatalogUseCase } from "../ports/use-cases/create-catalog-use-case";

class CreateCatalog implements CreateCatalogUseCase {

    constructor(
        private catalogsRepository: CatalogsRepository
    ) {}

    async execute(catalogData: CreateCatalogUseCase.Input): Promise<CatalogDTO> {
        const catalog = new Catalog(catalogData.title, catalogData.description, catalogData.viewLink);
        return await this.catalogsRepository.add(catalog);
    }
}

export { CreateCatalog };
