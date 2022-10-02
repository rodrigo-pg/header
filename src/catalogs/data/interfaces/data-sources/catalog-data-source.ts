import { Catalog } from "../../../domain/entities/Catalog";

export interface CatalogDataSource {
    add(product: Catalog): Promise<void>;
    addProductCatalog(catalogId: string, productId: string): Promise<void>;
    removeProductCatalog(referenceId: string): Promise<void>;
    get(productId: string): Promise<Catalog>;
    getAll(): Promise<Catalog[]>;
    update(productId: string, data: Partial<Catalog>): Promise<void>;
    delete(productId: string): Promise<void>;
}