import { makeRemoveCatalogProductController } from "../../../catalogs/main/factories/remove-product";
import type { VercelRequest, VercelResponse } from '@vercel/node';

export default async function handler(request: VercelRequest, response: VercelResponse) {
    const controller = await makeRemoveCatalogProductController();
    const data = await controller.handle(request);

    response.status(data.statusCode).json({...data.body});
}