import { Controller } from ".";
import { GetProductsUseCase } from "../../domain/ports/use-cases/get-products-use-case";
import { MissingParamError } from "../errors/missing-param-error";
import { badRequest, ok, serverError } from "./helpers/http-helper";
import { HttpRequest, HttpResponse } from "./ports/http";

class GetProductsController implements Controller {

    constructor(
        private getProductsUseCase: GetProductsUseCase
    ) {}

    async handle(request: HttpRequest): Promise<HttpResponse> {
        const { productsId } = request.body;

        if (!productsId) return badRequest(new MissingParamError("products id"));

        try {
            const products = await this.getProductsUseCase.execute(productsId);

            return ok({result: products});
        } catch (error) {
            console.log(error)
            return serverError("internal");
        }
    }
}

export { GetProductsController };