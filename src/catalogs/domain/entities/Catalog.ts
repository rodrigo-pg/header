import { Product } from "./Product";

class Catalog {
    private product: Product[];

    constructor(
        private title: string,
        private description: string,
        private viewLink: string
    ) {}

    getProducts(): Product[] {
        return this.product;
    }

    getTitle(): string {
        return this.title;
    }

    getDescription(): string {
        return this.description;
    }

    getViewLink(): string {
        return this.viewLink;
    }

}

export { Catalog };