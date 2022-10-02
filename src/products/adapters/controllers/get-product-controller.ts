import { Controller } from ".";
import { GetProductUseCase } from "../../domain/ports/use-cases/get-product-use-case";
import { MissingParamError } from "../errors/missing-param-error";
import { badRequest, ok, serverError } from "./helpers/http-helper";
import { HttpRequest, HttpResponse } from "./ports/http";

class GetProductController implements Controller {

    constructor(
        private getProductUseCase: GetProductUseCase
    ) {}

    async handle(request: HttpRequest): Promise<HttpResponse> {
        const { id } = request.params;

        if (!id) return badRequest(new MissingParamError("product id"));

        try {
            const product = await this.getProductUseCase.execute(id);
            
            return ok({result: product});
        } catch (error) {
            return serverError("internal");
        }
    }
}

export { GetProductController };