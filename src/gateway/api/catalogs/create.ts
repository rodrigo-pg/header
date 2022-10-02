import { makeCreateCatalogController } from "../../../catalogs/main/factories/create-catalog";
import type { VercelRequest, VercelResponse } from '@vercel/node';

let createCatalogController = null;

async function test() {
    if (!createCatalogController) {
        createCatalogController = await makeCreateCatalogController();
    }
    return createCatalogController;
}

export default async function handler(request: VercelRequest, response: VercelResponse) {
    const controller = await test();
    const data = await controller.handle(request);

    response.status(data.statusCode).json({...data.body});
}