import { Controller } from "../../adapters/controllers";
import { CreateProductController } from "../../adapters/controllers/create-product-controller";
import { CreateProduct } from "../../domain/use-cases/create-product";
import { productsRepository } from "../../data/repositories/implementations/mongoose-repository";

export const makeCreateProductController = (): Controller => {
    const createProductUseCase = new CreateProduct(productsRepository);
    const createProductController = new CreateProductController(createProductUseCase);
    return createProductController;
}