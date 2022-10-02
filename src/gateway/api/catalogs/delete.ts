import { makeDeleteCatalogController } from "../../../catalogs/main/factories/delete-catalog";
import type { VercelRequest, VercelResponse } from '@vercel/node';

export default async function handler(request: VercelRequest, response: VercelResponse) {
    const controller = makeDeleteCatalogController();
    const data = await controller.handle(request);

    response.status(data.statusCode).json({...data.body});
}