import { Catalog } from "../../entities/Catalog";

export interface GetAllCatalogsUseCase {
    execute(): Promise<Catalog[]>;
}