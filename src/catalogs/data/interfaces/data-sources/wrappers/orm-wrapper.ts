import { Catalog } from "../../../../domain/entities/Catalog";

export interface ORMWrapper {
    find(): Promise<Catalog[]>;
    findOne(catalogId: string): Promise<Catalog | null>;
    insertOne(catalog: Catalog): Promise<void>;
    insertProductReference(catalogId: string, productId: string): Promise<void>;
    update(catalogId: string, data: Partial<Catalog>): Promise<void>;
    delete(catalogId: string): Promise<void>; 
    removeProductReference(referenceId: string): Promise<void>;
}