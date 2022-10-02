import { Catalog } from "../entities/Catalog";
import { CatalogsRepository } from "../ports/catalogs-repository";
import { UpdateCatalogUseCase } from "../ports/use-cases/update-catalog-use-case";

class UpdateCatalog implements UpdateCatalogUseCase {
    
    constructor(
        private catalogsRepository: CatalogsRepository
    ) {}

    async execute(catalogId: string, data: Partial<Catalog>): Promise<void> {
        await this.catalogsRepository.update(catalogId, data);
    }
}

export { UpdateCatalog };