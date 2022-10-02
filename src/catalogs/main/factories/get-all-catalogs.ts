import { Controller } from "../../adapters/controllers";
import { GetAllCatalogsController } from "../../adapters/controllers/get-all-catalogs-controller";
import { catalogsRepository } from "../../data/repositories/implementations/type-orm-repository";
import { GetAllCatalogs } from "../../domain/use-cases/get-all-catalogs";

export const makeGetAllCatalogsController = (): Controller => {
    const getAllCatalogsUseCase = new GetAllCatalogs(catalogsRepository);
    const getAllCatalogsController = new GetAllCatalogsController(getAllCatalogsUseCase);
    return getAllCatalogsController;
}