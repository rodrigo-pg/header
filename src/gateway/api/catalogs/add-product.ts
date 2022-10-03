import { makeAddCatalogProductController } from "../../../catalogs/main/factories/add-product";
import type { VercelRequest, VercelResponse } from '@vercel/node';
import { get } from "../../controllers/catalogs";

export default async function handler(request: VercelRequest, response: VercelResponse) {
    console.log(await get)
    const controller = await makeAddCatalogProductController();
    const data = await controller.handle(request);

    response.status(data.statusCode).json({...data.body});
}