import { Request, Response } from 'express';
import { Controller } from '../../adapters/controllers';
import { HttpRequest } from '../../adapters/controllers/ports/http';

export const adaptRoute = (controller: Controller) => {
  return async (req: Request, res: Response) => {
    const httpRequest: HttpRequest = {
      body: req.body,
      params: req.params
    }
    const httpResponse = await controller.handle(httpRequest)
    res.status(httpResponse.statusCode).json(httpResponse.body)
  }
}