import { Controller } from ".";
import { DeleteCatalogUseCase } from "../../domain/ports/use-cases/delete-catalog-use-case";
import { MissingParamError } from "../errors/missing-param-error";
import { badRequest, ok, serverError } from "./helpers/http-helper";
import { HttpRequest, HttpResponse } from "./ports/http";

class DeleteCatalogController implements Controller {

    constructor(
        private deleteCatalogUseCase: DeleteCatalogUseCase
    ) {}

    async handle(request: HttpRequest): Promise<HttpResponse> {
        const { catalogId } = request.body;

        if (!catalogId.trim()) return badRequest(new MissingParamError("catalog id"));

        try {
            await this.deleteCatalogUseCase.execute(catalogId);

            return ok({result: "Catalog deleted successfully"})
        } catch (error) {
            return serverError("internal");
        }
    }
}

export { DeleteCatalogController };