import { makeDeleteProductController } from "../../../products/main/factories/delete-product";
import type { VercelRequest, VercelResponse } from '@vercel/node';

export default async function handler(request: VercelRequest, response: VercelResponse) {
    const controller = makeDeleteProductController();
    const data = await controller.handle(request);

    response.status(data.statusCode).json({...data.body});
}