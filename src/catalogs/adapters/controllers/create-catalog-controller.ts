import { Controller } from ".";
import { CreateCatalogUseCase } from "../../domain/ports/use-cases/create-catalog-use-case";
import { MissingParamError } from "../errors/missing-param-error";
import { badRequest, created, serverError } from "./helpers/http-helper";
import { HttpRequest, HttpResponse } from "./ports/http";

class CreateCatalogController implements Controller {
    
    constructor(
        private createCatalogUseCase: CreateCatalogUseCase
    ) {}

    async handle(request: HttpRequest): Promise<HttpResponse> {
        const { title, description, viewLink } = request.body;

        if (!title.trim()) return badRequest(new MissingParamError("title"));
        if (!description.trim()) return badRequest(new MissingParamError("description"));
        if (!viewLink.trim()) return badRequest(new MissingParamError("view link"));

        try {
            const result = await this.createCatalogUseCase.execute({ title, description, viewLink });

            return created({result});
        } catch (error) {
            console.log(error)
            return serverError("internal");
        }
    }
}

export { CreateCatalogController };