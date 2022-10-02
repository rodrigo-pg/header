import { CatalogsRepository } from "../ports/catalogs-repository";
import { DeleteCatalogUseCase } from "../ports/use-cases/delete-catalog-use-case";

class DeleteCatalog implements DeleteCatalogUseCase {

    constructor(
        private catalogsRepository: CatalogsRepository
    ) {}

    async execute(catalogId: string): Promise<void> {
        await this.catalogsRepository.delete(catalogId);
    }
}

export { DeleteCatalog };