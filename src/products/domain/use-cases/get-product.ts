import { Product } from "../entities/product";
import { ProductsRepository } from "../ports/product-repository";
import { GetProductUseCase } from "../ports/use-cases/get-product-use-case";

class GetProduct implements GetProductUseCase {
    
    constructor(
        private productsRepository: ProductsRepository
    ) {}

    async execute(productId: string): Promise<Product> {
        return await this.productsRepository.get(productId);
    }
}

export { GetProduct };