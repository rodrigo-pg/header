import { Product } from "../entities/product";
import { ProductsRepository } from "../ports/product-repository";
import { GetAllProductsUseCase } from "../ports/use-cases/get-all-products-use-case";


class GetAllProducts implements GetAllProductsUseCase {

    constructor(
        private productsRepository: ProductsRepository
    ) {}

    async execute(): Promise<Product[]> {
        return await this.productsRepository.getAll();
    }
}

export { GetAllProducts };