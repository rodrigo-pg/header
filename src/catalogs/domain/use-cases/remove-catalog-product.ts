import { CatalogsRepository } from "../ports/catalogs-repository";
import { RemoveCatalogProductUseCase } from "../ports/use-cases/remove-catalog-product-use-case";

class RemoveCatalogProduct implements RemoveCatalogProductUseCase {

    constructor(
        private catalogsRepository: CatalogsRepository
    ) {}

    async execute(removeData: RemoveCatalogProductUseCase.Input): Promise<void> {
        await this.catalogsRepository.removeProductCatalog(removeData.catalogId, removeData.productId);
    }
}

export { RemoveCatalogProduct };