import { Product } from "../entities/product";
import { ProductsRepository } from "../ports/product-repository";
import { UpdateProductUseCase } from "../ports/use-cases/update-product-use-case";

class UpdateProduct implements UpdateProductUseCase {
    
    constructor(
        private productsRepository: ProductsRepository
    ) {}
    
    async execute(productId: string, data: Partial<Product>): Promise<void> {
        await this.productsRepository.update(productId, data);
    }
}

export { UpdateProduct };