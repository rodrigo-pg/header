import { makeGetAllProductsController } from "../../../products/main/factories/get-all-products";
import type { VercelRequest, VercelResponse } from '@vercel/node';

export default async function handler(request: VercelRequest, response: VercelResponse) {
    const controller = makeGetAllProductsController();
    const data = await controller.handle(request);

    response.status(data.statusCode).json({...data.body});
}