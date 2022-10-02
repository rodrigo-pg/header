import { makeGetCatalogController } from "../../../catalogs/main/factories/get-catalog";
import type { VercelRequest, VercelResponse } from '@vercel/node';

export default async function handler(request: VercelRequest, response: VercelResponse) {
    const controller = makeGetCatalogController();
    const data = await controller.handle(request);

    response.status(data.statusCode).json({...data.body});
}