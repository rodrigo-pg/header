import { Product } from "../../entities/product";

export interface CreateProductUseCase {
    execute(productData: CreateProductUseCase.Input): Promise<Product>
}

export namespace CreateProductUseCase {
    export type Input = {
        name: string;
        description: string;
        price: number;
    }
}