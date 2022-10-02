import { DataSource } from "typeorm";

const connectionSource = new DataSource({
    migrationsTableName: 'migrations',
    type: 'sqlite',
    database: `${__dirname}/../../data/data-sources/orm-db/wrappers/type-orm/database/database.sqlite`,
    logging: false,
    synchronize: false,
    name: 'default',
    entities: [`${__dirname}/../../data/data-sources/orm-db/wrappers/type-orm/models/*.ts`],
    migrations: [`${__dirname}/../../data/data-sources/orm-db/wrappers/type-orm/migrations/*.ts`]
});

export { connectionSource };