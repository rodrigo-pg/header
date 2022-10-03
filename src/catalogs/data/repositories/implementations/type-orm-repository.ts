import { CatalogRepositoryImpl } from "..";
import { connectionSource } from "../../../shared/typeorm/connection-source";
import { ORMDataSource } from "../../data-sources/orm-db/orm-data-source";
import { TypeORMWrapper } from "../../data-sources/orm-db/wrappers/type-orm";
import { Catalog } from "../../data-sources/orm-db/wrappers/type-orm/models/Catalog";
import { Product } from "../../data-sources/orm-db/wrappers/type-orm/models/Product";

// let catalogsRepository = null;

async function getTypeORMCatalogsRepository() {

    // if (catalogsRepository) return catalogsRepository;

    // await connectionSource.initialize();
    // console.log("[+] Created TypeORM Connection")
    const source = await connectionSource.getConnection();
    const typeORMWrapper = new TypeORMWrapper(
        source.getRepository(Catalog), 
        source.getRepository(Product)
    );
    const ormDataSource = new ORMDataSource(typeORMWrapper);
    const catalogsRepository = new CatalogRepositoryImpl(ormDataSource);
    return catalogsRepository;
}

export { getTypeORMCatalogsRepository };

