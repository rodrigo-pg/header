import { Controller } from "../../adapters/controllers";
import { UpdateCatalogController } from "../../adapters/controllers/update-catalog-controller";
import { UpdateCatalog } from "../../domain/use-cases/update-catalog";
import { getTypeORMCatalogsRepository } from "../../data/repositories/implementations/type-orm-repository";

export const makeUpdateCatalogController = async (): Promise<Controller> => {
    const catalogsRepository = await getTypeORMCatalogsRepository();
    const updateCatalogUseCase = new UpdateCatalog(catalogsRepository);
    const updateCatalogController = new UpdateCatalogController(updateCatalogUseCase);
    return updateCatalogController;
}