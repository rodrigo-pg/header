import { Product } from "../entities/product";
import { ProductsRepository } from "../ports/product-repository";
import { CreateProductUseCase } from "../ports/use-cases/create-product-use-case";

class CreateProduct implements CreateProductUseCase {

    constructor(
        private productsRepository: ProductsRepository
    ) {}
    
    async execute(productData: CreateProductUseCase.Input): Promise<Product> {
        const newProduct = new Product(productData.name, productData.description, productData.price);
        await this.productsRepository.add(newProduct);
        
        return newProduct;
    }
}

export { CreateProduct };