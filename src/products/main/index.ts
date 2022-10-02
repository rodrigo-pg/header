import mongoose from "mongoose";
import app from "./config/app";

mongoose.connect("mongodb://localhost/products");

app.listen(5000, () => {
    console.log("Express - Product Service running at http://localhost:3000");
});