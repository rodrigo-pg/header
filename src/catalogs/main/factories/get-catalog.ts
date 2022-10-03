import { Controller } from "../../adapters/controllers";
import { GetCatalogController } from "../../adapters/controllers/get-catalog-controller";
import { GetCatalog } from "../../domain/use-cases/get-catalog";
import { getTypeORMCatalogsRepository } from "../../data/repositories/implementations/type-orm-repository";

export const makeGetCatalogController = async (): Promise<Controller> => {
    const catalogsRepository = await getTypeORMCatalogsRepository();
    const getCatalogUseCase = new GetCatalog(catalogsRepository);
    const getCatalogController = new GetCatalogController(getCatalogUseCase);
    return getCatalogController;
}