import { Controller } from ".";
import { GetAllCatalogsUseCase } from "../../domain/ports/use-cases/get-all-catalogs-use-case";
import { ok, serverError } from "./helpers/http-helper";
import { HttpRequest, HttpResponse } from "./ports/http";

class GetAllCatalogsController implements Controller {
    
    constructor(
        private getAllCatalogsUseCase: GetAllCatalogsUseCase
    ) {}

    async handle(request: HttpRequest): Promise<HttpResponse> {

        try {
            const catalogs = await this.getAllCatalogsUseCase.execute();

            return ok({result: catalogs}); 
        } catch (error) {
            return serverError("internal");
        }
    }
}

export { GetAllCatalogsController };