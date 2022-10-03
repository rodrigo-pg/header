import { makeUpdateCatalogController } from "../../../catalogs/main/factories/update-catalog";
import type { VercelRequest, VercelResponse } from '@vercel/node';

export default async function handler(request: VercelRequest, response: VercelResponse) {
    const controller = await makeUpdateCatalogController();
    const data = await controller.handle(request);

    response.status(data.statusCode).json({...data.body});
}