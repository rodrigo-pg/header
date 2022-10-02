import { RemoveProductCatalogController } from "../../adapters/controllers/remove-catalog-product-controller"
import { RemoveCatalogProduct } from "../../domain/use-cases/remove-catalog-product";
import { catalogsRepository } from "../../data/repositories/implementations/type-orm-repository";
import { Controller } from "../../adapters/controllers";

export const makeRemoveCatalogProductController = (): Controller => {
    const removeCatalogProductUseCase = new RemoveCatalogProduct(catalogsRepository);
    const removeCatalogProductController = new RemoveProductCatalogController(removeCatalogProductUseCase)
    return removeCatalogProductController;
}