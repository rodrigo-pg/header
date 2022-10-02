import { Product } from "../../../domain/entities/product";
import { ProductsDataSource } from "../../interfaces/data-sources/product-data-source";
import { ORMWrapper } from "../../interfaces/data-sources/wrappers/orm-wrapper";

class ORMDataSource implements ProductsDataSource {

    constructor(
        private db: ORMWrapper
    ) {}

    async add(product: Product): Promise<void> {
        await this.db.insertOne(product)
    }

    async get(productId: string): Promise<Product> {
        return (await this.db.findOne(productId) as Product);
    }

    async getAll(): Promise<Product[]> {
        return await this.db.find();
    }

    async update(productId: string, data: Partial<Product>): Promise<void> {
        await this.db.update(productId, data);
    }

    async delete(productId: string): Promise<void> {
        await this.db.delete(productId);
    }
}

export { ORMDataSource };