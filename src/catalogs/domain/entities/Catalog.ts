import { Product } from "./Product";

class Catalog {
    product: Product[];

    constructor(
        private title: string,
        private description: string,
        private viewLink: string
    ) {}

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