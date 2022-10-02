import { Product } from "../../entities/product";

export interface GetAllProductsUseCase {
    execute(): Promise<Product[]>;
}