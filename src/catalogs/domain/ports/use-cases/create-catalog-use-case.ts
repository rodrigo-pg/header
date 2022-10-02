import { Catalog } from "../../entities/Catalog"

export interface CreateCatalogUseCase {
    execute(catalogData: CreateCatalogUseCase.Input): Promise<Catalog>
}

export namespace CreateCatalogUseCase {
    export type Input = {
        title: string,
        description: string,
        viewLink: string
    }
}