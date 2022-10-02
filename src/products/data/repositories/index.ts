import { Product } from "../../domain/entities/product";
import { ProductsRepository } from "../../domain/ports/product-repository";
import { ProductsDataSource } from "../interfaces/data-sources/product-data-source";

class ProductsRepositoryImpl implements ProductsRepository {

    constructor(
        private productsDataSource: ProductsDataSource
    ) {}

    async add(product: Product): Promise<void> {
        await this.productsDataSource.add(product);
    }

    async get(productId: string): Promise<Product> {
        return await this.productsDataSource.get(productId);
    }

    async getAll(): Promise<Product[]> {
        return await this.productsDataSource.getAll();
    }

    async update(productId: string, data: Partial<Product>): Promise<void> {
        await this.productsDataSource.update(productId, data);
    }

    async delete(productId: string): Promise<void> {
        await this.productsDataSource.delete(productId);
    }
    
}

export { ProductsRepositoryImpl };