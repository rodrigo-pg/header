import { makeGetAllCatalogsController } from "../../../catalogs/main/factories/get-all-catalogs";
import type { VercelRequest, VercelResponse } from '@vercel/node';

export default async function handler(request: VercelRequest, response: VercelResponse) {
    const controller = await makeGetAllCatalogsController();
    const data = await controller.handle(request);

    response.status(data.statusCode).json({...data.body});
}