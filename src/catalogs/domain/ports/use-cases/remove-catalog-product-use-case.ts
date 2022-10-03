export interface RemoveCatalogProductUseCase {
    execute(removeData: RemoveCatalogProductUseCase.Input): Promise<void>;
}

export namespace RemoveCatalogProductUseCase {
    export type Input = {
        productId: string;
        catalogId: string;
    }
}