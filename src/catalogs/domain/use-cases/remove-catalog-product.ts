import { CatalogsRepository } from "../ports/catalogs-repository";
import { RemoveCatalogProductUseCase } from "../ports/use-cases/remove-catalog-product-use-case";

class RemoveCatalogProduct implements RemoveCatalogProductUseCase {

    constructor(
        private catalogsRepository: CatalogsRepository
    ) {}

    async execute(referenceId: string): Promise<void> {
        await this.catalogsRepository.removeProductCatalog(referenceId);
    }
}

export { RemoveCatalogProduct };