import { Controller } from "../../adapters/controllers";
import { GetProductController } from "../../adapters/controllers/get-product-controller";
import { GetProduct } from "../../domain/use-cases/get-product";
import { productsRepository } from "../../data/repositories/implementations/mongoose-repository";

export const makeGetProductController = (): Controller => {
    const getProductUseCase = new GetProduct(productsRepository);
    const getProductController = new GetProductController(getProductUseCase);
    return getProductController;
}