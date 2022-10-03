import { makeGetProductController } from "../../../products/main/factories/get-product";
import type { VercelRequest, VercelResponse } from '@vercel/node';

export default async function handler(request: VercelRequest, response: VercelResponse) {
    const controller = makeGetProductController();
    const data = await controller.handle({...request, params: request.query});

    response.status(data.statusCode).json({...data.body});
}