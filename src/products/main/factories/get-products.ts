import { Controller } from "../../adapters/controllers";
import { GetProductsController } from "../../adapters/controllers/get-products-controller";
import { productsRepository } from "../../data/repositories/implementations/mongoose-repository";
import { GetProducts } from "../../domain/use-cases/get-products";

export const makeGetProductsController = (): Controller => {
    const getProductsUseCase = new GetProducts(productsRepository);
    const getProductsController = new GetProductsController(getProductsUseCase);
    return getProductsController;
}