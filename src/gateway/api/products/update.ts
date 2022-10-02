import { makeUpdateProductController } from "../../../products/main/factories/update-product";
import type { VercelRequest, VercelResponse } from '@vercel/node';

export default async function handler(request: VercelRequest, response: VercelResponse) {
    const controller = makeUpdateProductController();
    const data = await controller.handle(request);

    response.status(data.statusCode).json({...data.body});
}