import { Product } from "../../entities/product";

export interface GetProductsUseCase {
    execute(productsId: string[]): Promise<Product[]>;
}