import { Controller } from "../../adapters/controllers";
import { CreateCatalogController } from "../../adapters/controllers/create-catalog-controller";
import { catalogsRepository } from "../../data/repositories/implementations/type-orm-repository";
import { CreateCatalog } from "../../domain/use-cases/create-catalog";

export const makeCreateCatalogController = (): Controller => {
    //const repository = await getTypeORMCatalogsRepository();
    const createCatalogUseCase = new CreateCatalog(catalogsRepository);
    const createCatalogController = new CreateCatalogController(createCatalogUseCase);
    return createCatalogController;
}