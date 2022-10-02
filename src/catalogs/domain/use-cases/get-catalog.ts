import { Catalog } from "../entities/Catalog";
import { CatalogsRepository } from "../ports/catalogs-repository";
import { MessagingAdapter } from "../ports/messaging";
import { GetCatalogUseCase } from "../ports/use-cases/get-catalog-use-case";

class GetCatalog implements GetCatalogUseCase {
    
    constructor(
        private catalogsRepository: CatalogsRepository,
        //private messagingAdapter: MessagingAdapter,
    ) {}

    async execute(catalogId: string): Promise<Catalog> {
        const catalog = await this.catalogsRepository.get(catalogId);
        const ids = catalog.getProducts().map(product => product.productId);
        return catalog;
    }
}

export { GetCatalog };