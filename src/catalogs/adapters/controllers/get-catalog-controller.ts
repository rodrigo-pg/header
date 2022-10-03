import { Controller } from ".";
import { GetCatalogUseCase } from "../../domain/ports/use-cases/get-catalog-use-case";
import { MissingParamError } from "../errors/missing-param-error";
import { badRequest, ok, serverError } from "./helpers/http-helper";
import { HttpRequest, HttpResponse } from "./ports/http";

class GetCatalogController implements Controller {
    
    constructor(
        private getCatalogUseCase: GetCatalogUseCase
    ) {}

    async handle(request: HttpRequest): Promise<HttpResponse> {
        const { id } = request.params;

        if (!id) return badRequest(new MissingParamError("catalog id")); 

        try {
            const catalog = await this.getCatalogUseCase.execute(id);

            return ok({result: catalog});
        } catch (error) {
            console.log(error)
            return serverError("internal");
        }
    }
}

export { GetCatalogController };