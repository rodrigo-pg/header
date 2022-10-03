import { Catalog } from "../../../../domain/entities/Catalog";
import { CatalogDTO } from "../../../../domain/entities/CatalogDTO";

export interface ORMWrapper {
    find(): Promise<Catalog[]>;
    findOne(catalogId: string): Promise<Catalog | null>;
    insertOne(catalog: Catalog): Promise<CatalogDTO>;
    insertProductReference(catalogId: string, productId: string): Promise<void>;
    update(catalogId: string, data: Partial<Catalog>): Promise<void>;
    delete(catalogId: string): Promise<void>; 
    removeProductReference(catalogId: string, productId: string): Promise<void>;
}