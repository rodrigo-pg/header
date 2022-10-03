import { CatalogDTO } from "../../entities/CatalogDTO"

export interface CreateCatalogUseCase {
    execute(catalogData: CreateCatalogUseCase.Input): Promise<CatalogDTO>
}

export namespace CreateCatalogUseCase {
    export type Input = {
        title: string,
        description: string,
        viewLink: string
    }
}