import { makeGetCatalogController } from "../../../catalogs/main/factories/get-catalog";
import { makeGetProductsController } from "../../../products/main/factories/get-products";
import type { VercelRequest, VercelResponse } from '@vercel/node';
import { Catalog } from "../../../catalogs/domain/entities/Catalog";

export default async function handler(request: VercelRequest, response: VercelResponse) {
    const controller = await makeGetCatalogController();
    const productsController = makeGetProductsController();

    const catalogResponse = await controller.handle({...request, params: request.query});

    if (catalogResponse.statusCode !== 200) {
        return response.status(catalogResponse.statusCode).json({...catalogResponse.body});
    }

    const catalogData = catalogResponse.body.result as Catalog;
    console.log(catalogData)
    const productsId = catalogData.product.map(product => product.productId);
    const productsResponse = await productsController.handle({body: { productsId }});
    const catalog = {...catalogData, product: productsResponse.body.result};

    response.status(200).json({...catalog});
}