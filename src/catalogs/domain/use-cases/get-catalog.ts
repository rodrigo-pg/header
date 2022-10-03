import { Catalog } from "../entities/Catalog";
import { CatalogsRepository } from "../ports/catalogs-repository";
import { GetCatalogUseCase } from "../ports/use-cases/get-catalog-use-case";

class GetCatalog implements GetCatalogUseCase {
    
    constructor(
        private catalogsRepository: CatalogsRepository
    ) {}

    async execute(catalogId: string): Promise<Catalog> {
        return await this.catalogsRepository.get(catalogId);
    }
}

export { GetCatalog };
