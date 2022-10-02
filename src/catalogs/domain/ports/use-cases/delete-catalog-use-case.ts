export interface DeleteCatalogUseCase {
    execute(catalogId: string): Promise<void>;
}