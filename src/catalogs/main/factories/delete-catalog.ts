import { Controller } from "../../adapters/controllers";
import { DeleteCatalogController } from "../../adapters/controllers/delete-catalog-controller";
import { getTypeORMCatalogsRepository } from "../../data/repositories/implementations/type-orm-repository";
import { DeleteCatalog } from "../../domain/use-cases/delete-catalog";

export const makeDeleteCatalogController = async (): Promise<Controller> => {
    const catalogsRepository = await getTypeORMCatalogsRepository()
    const deleteCatalogUseCase = new DeleteCatalog(catalogsRepository);
    const deleteCatalogController = new DeleteCatalogController(deleteCatalogUseCase);
    return deleteCatalogController;
}