import { Product } from "../../../../domain/entities/product";

export interface ORMWrapper {
    find(): Promise<Product[]>;
    findOne(productId: string): Promise<Product | null>;
    findMany(productsId: string[]): Promise<Product[]>;
    insertOne(product: Product): Promise<void>;
    update(productId: string, data: Partial<Product>): Promise<void>;
    delete(productId: string): Promise<void>; 
}