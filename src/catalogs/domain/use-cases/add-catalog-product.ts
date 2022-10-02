import { CatalogsRepository } from "../ports/catalogs-repository";
import { AddProductCatalogUseCase } from "../ports/use-cases/add-catalog-product-use-case";

class AddProductCatalog implements AddProductCatalogUseCase {

    constructor(
        private catalogsRepository: CatalogsRepository
    ) {}

    async execute(addCatalogProductData: AddProductCatalogUseCase.Input): Promise<void> {
        await this.catalogsRepository.addProductCatalog(addCatalogProductData.catalogId, addCatalogProductData.productId);
    }
}

export { AddProductCatalog };