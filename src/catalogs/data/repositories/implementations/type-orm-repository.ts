import { CatalogRepositoryImpl } from "..";
import { connectionSource } from "../../../shared/typeorm/connection-source";
import { ORMDataSource } from "../../data-sources/orm-db/orm-data-source";
import { TypeORMWrapper } from "../../data-sources/orm-db/wrappers/type-orm";
import { Catalog } from "../../data-sources/orm-db/wrappers/type-orm/models/Catalog";
import { Product } from "../../data-sources/orm-db/wrappers/type-orm/models/Product";
        
const typeORMWrapper = new TypeORMWrapper(
    connectionSource.getRepository(Catalog), 
    connectionSource.getRepository(Product)
);
const ormDataSource = new ORMDataSource(typeORMWrapper);
const catalogsRepository = new CatalogRepositoryImpl(ormDataSource);

export { catalogsRepository };

