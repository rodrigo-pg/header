import { Product } from "../../../domain/entities/product";

export interface ProductsDataSource {
    add(product: Product): Promise<void>;
    get(productId: string): Promise<Product>;
    getAll(): Promise<Product[]>;
    update(productId: string, data: Partial<Product>): Promise<void>;
    delete(productId: string): Promise<void>;
}