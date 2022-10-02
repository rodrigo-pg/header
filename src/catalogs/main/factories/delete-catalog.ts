import { Controller } from "../../adapters/controllers";
import { DeleteCatalogController } from "../../adapters/controllers/delete-catalog-controller";
import { catalogsRepository } from "../../data/repositories/implementations/type-orm-repository";
import { DeleteCatalog } from "../../domain/use-cases/delete-catalog";

export const makeDeleteCatalogController = (): Controller => {
    const deleteCatalogUseCase = new DeleteCatalog(catalogsRepository);
    const deleteCatalogController = new DeleteCatalogController(deleteCatalogUseCase);
    return deleteCatalogController;
}