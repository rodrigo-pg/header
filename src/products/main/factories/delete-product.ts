import { Controller } from "../../adapters/controllers";
import { DeleteProductController } from "../../adapters/controllers/delete-product-controller";
import { DeleteProduct } from "../../domain/use-cases/delete-product";
import { productsRepository } from "../../data/repositories/implementations/mongoose-repository";

export const makeDeleteProductController = (): Controller => {
    const deleteProductUseCase = new DeleteProduct(productsRepository);
    const deleteProductController = new DeleteProductController(deleteProductUseCase);
    return deleteProductController;
}