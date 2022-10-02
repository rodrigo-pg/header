import { Catalog } from "../../entities/Catalog";

export interface GetCatalogUseCase {
    execute(catalogId: string): Promise<Catalog>
}