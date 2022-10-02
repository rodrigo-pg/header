import { Controller } from ".";
import { UpdateCatalogUseCase } from "../../domain/ports/use-cases/update-catalog-use-case";
import { MissingParamError } from "../errors/missing-param-error";
import { badRequest, ok, serverError } from "./helpers/http-helper";
import { HttpRequest, HttpResponse } from "./ports/http";

class UpdateCatalogController implements Controller {

    constructor(
        private updateCatalogUseCase: UpdateCatalogUseCase
    ) {}

    async handle(request: HttpRequest): Promise<HttpResponse> {
        const { catalogId } = request.body;
        const data = {};

        if (!catalogId) return badRequest(new MissingParamError("catalog id"));

        if (request.body.title) Object.assign(data, {title: request.body.title});
        if (request.body.description) Object.assign(data, {description: request.body.description});
        if (request.body.viewLink) Object.assign(data, {viewLink: request.body.viewLink});

        try {
            await this.updateCatalogUseCase.execute(catalogId, data);

            return ok({result: "Catalog successfully updated"});
        } catch (error) {
            return serverError("internal");
        }
    }
}

export { UpdateCatalogController };