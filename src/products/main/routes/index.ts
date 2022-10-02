import { Router } from "express";
import { adaptRoute } from "../adapters/express-route-adapter";
import { makeCreateProductController } from "../factories/create-product";
import { makeDeleteProductController } from "../factories/delete-product";
import { makeGetAllProductsController } from "../factories/get-all-products";
import { makeGetProductController } from "../factories/get-product";
import { makeUpdateProductController } from "../factories/update-product";

export default (router: Router): void => {
    router.post("/create-product", adaptRoute(makeCreateProductController()));
    router.get("/product/:id", adaptRoute(makeGetProductController()));
    router.post("/update-product", adaptRoute(makeUpdateProductController()));
    router.post("/delete-product", adaptRoute(makeDeleteProductController()));
    router.get("/products", adaptRoute(makeGetAllProductsController()));
}