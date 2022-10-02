import { Controller } from "../../adapters/controllers";
import { GetCatalogController } from "../../adapters/controllers/get-catalog-controller";
import { GetCatalog } from "../../domain/use-cases/get-catalog";
import { catalogsRepository } from "../../data/repositories/implementations/type-orm-repository";

export const makeGetCatalogController = (): Controller => {
    const getCatalogUseCase = new GetCatalog(catalogsRepository);
    const getCatalogController = new GetCatalogController(getCatalogUseCase);
    return getCatalogController;
}