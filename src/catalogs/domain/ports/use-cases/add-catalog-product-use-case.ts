export interface AddProductCatalogUseCase {
    execute(addCatalogProductData: AddProductCatalogUseCase.Input): Promise<void>;
}

export namespace AddProductCatalogUseCase {
    export type Input = {
        catalogId: string;
        productId: string;
    }
}