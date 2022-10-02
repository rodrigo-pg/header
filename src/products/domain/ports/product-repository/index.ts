import { Product } from "../../entities/product";

export interface ProductsRepository {
    add(product: Product): Promise<void>;
    get(productId: string): Promise<Product>;
    getAll(): Promise<Product[]>;
    update(productId: string, data: Partial<Product>): Promise<void>;
    delete(productId: string): Promise<void>;
}