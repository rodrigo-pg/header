import { ProductsRepository } from "../ports/product-repository";
import { DeleteProductUseCase } from "../ports/use-cases/delete-product-use-case";

class DeleteProduct implements DeleteProductUseCase {
    
    constructor(
        private productsRepository: ProductsRepository
    ) {}

    async execute(productId: string): Promise<void> {
        await this.productsRepository.delete(productId);
    }
}

export { DeleteProduct };