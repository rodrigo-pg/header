export interface RemoveCatalogProductUseCase {
    execute(referenceId: string): Promise<void>;
}