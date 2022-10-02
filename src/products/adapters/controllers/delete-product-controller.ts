import { Controller } from ".";
import { DeleteProductUseCase } from "../../domain/ports/use-cases/delete-product-use-case";
import { MissingParamError } from "../errors/missing-param-error";
import { badRequest, ok, serverError } from "./helpers/http-helper";
import { HttpRequest, HttpResponse } from "./ports/http";

class DeleteProductController implements Controller {
    
    constructor(
        private deleteProductUseCase: DeleteProductUseCase
    ) {}

    async handle(request: HttpRequest): Promise<HttpResponse> {
        const { productId } = request.body;

        if (!productId) return badRequest(new MissingParamError("product id"))

        try {
            await this.deleteProductUseCase.execute(productId);

            return ok({result:"Product deleted successfully"});
        } catch (error) {
            return serverError("internal");
        }
    }
}

export { DeleteProductController };