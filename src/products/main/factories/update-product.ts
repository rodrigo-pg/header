import { Controller } from "../../adapters/controllers";
import { UpdateProduct } from "../../domain/use-cases/update-product";
import { productsRepository } from "../../data/repositories/implementations/mongoose-repository";
import { UpdateProductController } from "../../adapters/controllers/update-product-controller";

export const makeUpdateProductController = (): Controller => {
    const updateProductUseCase = new UpdateProduct(productsRepository);
    const updateProductController = new UpdateProductController(updateProductUseCase);
    return updateProductController;
}