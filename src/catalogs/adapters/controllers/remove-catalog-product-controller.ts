import { Controller } from ".";
import { RemoveCatalogProductUseCase } from "../../domain/ports/use-cases/remove-catalog-product-use-case";
import { MissingParamError } from "../errors/missing-param-error";
import { badRequest, ok, serverError } from "./helpers/http-helper";
import { HttpRequest, HttpResponse } from "./ports/http";

class RemoveProductCatalogController implements Controller {

    constructor(
        private removeProductCatalogUseCase: RemoveCatalogProductUseCase
    ) {}

    async handle(request: HttpRequest): Promise<HttpResponse> {
        const { productId, catalogId } = request.body;

        if (!productId.trim()) return badRequest(new MissingParamError("product id"));
        if (!catalogId.trim()) return badRequest(new MissingParamError("catalog id"));

        try {
            await this.removeProductCatalogUseCase.execute({productId, catalogId});

            return ok({result: "Product successfully removed"});
        } catch (error) {
            return serverError("internal");
        }
    }
    
}

export { RemoveProductCatalogController };