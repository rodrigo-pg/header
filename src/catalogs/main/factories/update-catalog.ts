import { Controller } from "../../adapters/controllers";
import { UpdateCatalogController } from "../../adapters/controllers/update-catalog-controller";
import { UpdateCatalog } from "../../domain/use-cases/update-catalog";
import { catalogsRepository } from "../../data/repositories/implementations/type-orm-repository";

export const makeUpdateCatalogController = (): Controller => {
    const updateCatalogUseCase = new UpdateCatalog(catalogsRepository);
    const updateCatalogController = new UpdateCatalogController(updateCatalogUseCase);
    return updateCatalogController;
}