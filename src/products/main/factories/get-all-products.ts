import { Controller } from "../../adapters/controllers";
import { GetAllProductsController } from "../../adapters/controllers/get-all-product-controller";
import { GetAllProducts } from "../../domain/use-cases/get-all-products";
import { productsRepository } from "../../data/repositories/implementations/mongoose-repository";

export const makeGetAllProductsController = (): Controller => {
    const getAllProductsUseCase = new GetAllProducts(productsRepository);
    const getAllProductsController = new GetAllProductsController(getAllProductsUseCase);
    return getAllProductsController;
}