import { makeCreateCatalogController } from "../../../catalogs/main/factories/create-catalog";
import type { VercelRequest, VercelResponse } from '@vercel/node';

export default async function handler(request: VercelRequest, response: VercelResponse) {
    const controller = await makeCreateCatalogController();
    const data = await controller.handle(request);

    response.status(data.statusCode).json({...data.body});
}