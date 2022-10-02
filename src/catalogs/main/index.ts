import app from "./config/app";
import "reflect-metadata";
import { connectionSource } from "../shared/typeorm/connection-source";

connectionSource
.initialize()
.then(() => {
    app.listen(4000, () => {
        console.log("Express - Catalog Service running at http://localhost:4000");
    });
})
.catch((err) => {
    console.log("An error occurred while initizaling catalogs service", err);
})