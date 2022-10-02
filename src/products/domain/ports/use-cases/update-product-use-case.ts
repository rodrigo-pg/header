import { Product } from "../../entities/product";

export interface UpdateProductUseCase {
    execute(productId: string, data: Partial<Product>): Promise<void>;
}