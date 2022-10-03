import { makeAddCatalogProductController } from "../../../catalogs/main/factories/add-product";

let controllers = null;

const get = (async() => {
    if (controllers === null) controllers = {controller: await makeAddCatalogProductController(), time: Date.now()};
    return controllers;
})();

export { get };