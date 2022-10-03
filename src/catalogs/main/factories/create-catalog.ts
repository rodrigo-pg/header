import { Controller } from "../../adapters/controllers";
import { CreateCatalogController } from "../../adapters/controllers/create-catalog-controller";
import { getTypeORMCatalogsRepository } from "../../data/repositories/implementations/type-orm-repository";
import { CreateCatalog } from "../../domain/use-cases/create-catalog";

export const makeCreateCatalogController = async (): Promise<Controller> => {
    const catalogsRepository = await getTypeORMCatalogsRepository()
    const createCatalogUseCase = new CreateCatalog(catalogsRepository);
    const createCatalogController = new CreateCatalogController(createCatalogUseCase);
    return createCatalogController;
}