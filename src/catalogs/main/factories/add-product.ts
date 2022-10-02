import { Controller } from "../../adapters/controllers";
import { AddCatalogProductController } from "../../adapters/controllers/add-catalog-product-controller";
import { AddProductCatalog } from "../../domain/use-cases/add-catalog-product";
import { catalogsRepository } from "../../data/repositories/implementations/type-orm-repository";

export const makeAddCatalogProductController = (): Controller => {
    const addProductCatalogUseCase = new AddProductCatalog(catalogsRepository);
    const addProductCatalogController = new AddCatalogProductController(addProductCatalogUseCase);
    return addProductCatalogController;
}