import { Controller } from ".";
import { GetAllProductsUseCase } from "../../domain/ports/use-cases/get-all-products-use-case";
import { ok, serverError } from "./helpers/http-helper";
import { HttpRequest, HttpResponse } from "./ports/http";

class GetAllProductsController implements Controller {

    constructor(
        private getAllProductsUseCase: GetAllProductsUseCase
    ) {}

    async handle(request: HttpRequest): Promise<HttpResponse> {

        try {
            const products = await this.getAllProductsUseCase.execute();

            return ok({result: products});
        } catch (error) {
            return serverError("internal");
        }
    }
}

export { GetAllProductsController };