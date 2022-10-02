import { makeCreateProductController } from "../../../products/main/factories/create-product";
import type { VercelRequest, VercelResponse } from '@vercel/node';

export default async function handler(request: VercelRequest, response: VercelResponse) {
    const controller = makeCreateProductController();
    const data = await controller.handle(request);

    response.status(data.statusCode).json({...data.body});
}