import { Catalog } from "../../entities/Catalog";

export interface UpdateCatalogUseCase {
    execute(catalogId: string, data: Partial<Catalog>): Promise<void>;
}