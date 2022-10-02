import { Controller } from ".";
import { AddProductCatalogUseCase } from "../../domain/ports/use-cases/add-catalog-product-use-case";
import { MissingParamError } from "../errors/missing-param-error";
import { badRequest, ok, serverError } from "./helpers/http-helper";
import { HttpRequest, HttpResponse } from "./ports/http";

class AddCatalogProductController implements Controller {

    constructor(
        private addCatalogProductUseCase: AddProductCatalogUseCase
    ) {}

    async handle(request: HttpRequest): Promise<HttpResponse> {
        const { productId, catalogId } = request.body;

        if (!productId.trim()) return badRequest(new MissingParamError("product id"));
        if (!catalogId.trim()) return badRequest(new MissingParamError("catalog id"));

        try {
            await this.addCatalogProductUseCase.execute({catalogId, productId});

            return ok({result: "Product added successfully"});
        } catch (error) {
            return serverError("internal");
        }
    }
}

export { AddCatalogProductController };