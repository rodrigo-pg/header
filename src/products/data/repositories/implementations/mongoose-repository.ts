import mongoose from "mongoose";
import { ProductsRepositoryImpl } from "..";
import { ORMDataSource } from "../../data-sources/orm-db/orm-data-source";
import { MongooseORMWrapper } from "../../data-sources/orm-db/wrappers/mongoose";
import { ProductModel } from "../../data-sources/orm-db/wrappers/mongoose/schemas/Product";

mongoose.connect("mongodb://localhost/products");

const mongooseORMWrapper = new MongooseORMWrapper(ProductModel);
const ormDataSource = new ORMDataSource(mongooseORMWrapper);
const productsRepository = new ProductsRepositoryImpl(ormDataSource);

export { productsRepository };