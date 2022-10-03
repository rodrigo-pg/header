import { Catalog } from "../../../domain/entities/Catalog";
import { CatalogDTO } from "../../../domain/entities/CatalogDTO";

export interface CatalogDataSource {
    add(product: Catalog): Promise<CatalogDTO>;
    addProductCatalog(catalogId: string, productId: string): Promise<void>;
    removeProductCatalog(catalogId: string, productId: string): Promise<void>;
    get(productId: string): Promise<Catalog>;
    getAll(): Promise<Catalog[]>;
    update(productId: string, data: Partial<Catalog>): Promise<void>;
    delete(productId: string): Promise<void>;
}