import mongoose from "mongoose";
import { Product } from "../../../../../domain/entities/product";
import { ORMWrapper } from "../../../../interfaces/data-sources/wrappers/orm-wrapper";

class MongooseORMWrapper implements ORMWrapper {
    
    constructor(
        private productModel: mongoose.Model<any>
    ) {}

    async insertOne(product: Product): Promise<void> {
        await this.productModel.create(product);
    }

    async find(): Promise<Product[]> {
        return await this.productModel.find();
    }

    async findMany(productsId: string[]): Promise<Product[]> {
        return await this.productModel.find().where("_id").in(productsId).exec();
    }

    async findOne(productId: string): Promise<Product | null> {
        return this.productModel.findById(productId);
    }

    async delete(productId: string): Promise<void> {
        await this.productModel.findByIdAndDelete(productId);
    }

    async update(productId: string, data: Partial<Product>): Promise<void> {
        await this.productModel.findByIdAndUpdate(productId, data);
    }
}

export { MongooseORMWrapper }