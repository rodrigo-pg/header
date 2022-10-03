import { DataSource } from "typeorm";

class TypeORMConnection {
    private connection: DataSource;

    public async getConnection() {
        if (this?.connection?.isInitialized) {
            return this.connection;
        } else {
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
            await connectionSource.initialize();
            this.connection = connectionSource;
            Object.freeze(this.connection);
            return this.connection;
        }
    }
}

const connectionSource = new TypeORMConnection();

export { connectionSource };