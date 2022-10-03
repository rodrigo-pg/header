import { Product } from "../entities/product";
import { ProductsRepository } from "../ports/product-repository";
import { GetProductsUseCase } from "../ports/use-cases/get-products-use-case";

class GetProducts implements GetProductsUseCase {

    constructor(
        private productsRepository: ProductsRepository
    ) {}

    async execute(productsId: string[]): Promise<Product[]> {
        return await this.productsRepository.getMany(productsId);
    }
}

export { GetProducts };