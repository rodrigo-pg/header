import { Router } from "express";
import { adaptRoute } from "../adapters/express-route-adapter";
import { makeAddCatalogProductController } from "../factories/add-product";
import { makeCreateCatalogController } from "../factories/create-catalog";
import { makeDeleteCatalogController } from "../factories/delete-catalog";
import { makeGetAllCatalogsController } from "../factories/get-all-catalogs";
import { makeGetCatalogController } from "../factories/get-catalog";
import { makeRemoveCatalogProductController } from "../factories/remove-product";
import { makeUpdateCatalogController } from "../factories/update-catalog";

export default (router: Router): void => {
    router.post("/create-catalog", adaptRoute(makeCreateCatalogController()));
    router.post("/delete-catalog", adaptRoute(makeDeleteCatalogController()));
    router.get("/catalogs", adaptRoute(makeGetAllCatalogsController()))
    router.get("/catalog/:id", adaptRoute(makeGetCatalogController()));
    router.post("/update-catalog", adaptRoute(makeUpdateCatalogController()));
    router.post("/add-catalog-product", adaptRoute(makeAddCatalogProductController()));
    router.post("/remove-catalog-product", adaptRoute(makeRemoveCatalogProductController()));
}