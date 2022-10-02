import { Product } from "../../entities/product";

export interface GetProductUseCase {
    execute(productId: string): Promise<Product>;
}