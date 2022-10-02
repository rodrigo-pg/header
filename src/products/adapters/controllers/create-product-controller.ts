import { Controller } from ".";
import { CreateProductUseCase } from "../../domain/ports/use-cases/create-product-use-case";
import { MissingParamError } from "../errors/missing-param-error";
import { badRequest, created, serverError } from "./helpers/http-helper";
import { HttpRequest, HttpResponse } from "./ports/http";

class CreateProductController implements Controller {
    
    constructor(
        private createProductUseCase: CreateProductUseCase
    ) {}

    async handle(request: HttpRequest): Promise<HttpResponse> {
        const { name, description, price } = request.body;

        if (!name.trim()) return badRequest(new MissingParamError("name"));
        if (!description.trim()) return badRequest(new MissingParamError("description"));
        if (!price) return badRequest(new MissingParamError("price"));

        const productData = {
            name,
            description,
            price,
        }

        try {
            const product = await this.createProductUseCase.execute(productData);

            return created({result: product});
        } catch (error) {
            console.log(error)
            return serverError("internal");
        }
    }
}

export { CreateProductController };