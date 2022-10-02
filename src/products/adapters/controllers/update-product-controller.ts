import { Controller } from ".";
import { UpdateProductUseCase } from "../../domain/ports/use-cases/update-product-use-case";
import { MissingParamError } from "../errors/missing-param-error";
import { badRequest, ok, serverError } from "./helpers/http-helper";
import { HttpRequest, HttpResponse } from "./ports/http";

class UpdateProductController implements Controller {

    constructor(
        private updateProductUseCase: UpdateProductUseCase
    ) {}

    async handle(request: HttpRequest): Promise<HttpResponse> {
        const { productId } = request.body;
        const data = {};

        if (!productId) return badRequest(new MissingParamError("product id"));

        if (request.body.name) Object.assign(data, {name: request.body.name});
        if (request.body.description) Object.assign(data, {description: request.body.description});
        if (request.body.price) Object.assign(data, {price: request.body.price});

        try {
            await this.updateProductUseCase.execute(productId, data);

            return ok({result: "Product successfully updated"});
        } catch (error) {
            return serverError("internal")
        }
    }
}

export { UpdateProductController };