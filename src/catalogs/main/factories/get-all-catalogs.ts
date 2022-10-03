import { Controller } from "../../adapters/controllers";
import { GetAllCatalogsController } from "../../adapters/controllers/get-all-catalogs-controller";
import { getTypeORMCatalogsRepository } from "../../data/repositories/implementations/type-orm-repository";
import { GetAllCatalogs } from "../../domain/use-cases/get-all-catalogs";

export const makeGetAllCatalogsController = async (): Promise<Controller> => {
    const catalogsRepository = await getTypeORMCatalogsRepository()
    const getAllCatalogsUseCase = new GetAllCatalogs(catalogsRepository);
    const getAllCatalogsController = new GetAllCatalogsController(getAllCatalogsUseCase);
    return getAllCatalogsController;
}