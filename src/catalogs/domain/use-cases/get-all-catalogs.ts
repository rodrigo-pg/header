import { Catalog } from "../entities/Catalog";
import { CatalogsRepository } from "../ports/catalogs-repository";
import { GetAllCatalogsUseCase } from "../ports/use-cases/get-all-catalogs-use-case";

class GetAllCatalogs implements GetAllCatalogsUseCase {
    
    constructor(
        private catalogsRepository: CatalogsRepository
    ) {}

    async execute(): Promise<Catalog[]> {
        return await this.catalogsRepository.getAll();
    }
}

export { GetAllCatalogs };