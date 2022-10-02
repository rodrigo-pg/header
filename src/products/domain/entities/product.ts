class Product {

    constructor(
        private name: string,
        private description: string,
        private price: number
    ) {}

    setName(name: string) {
        this.name = name;
    }

    setDescription(description: string) {
        this.description = description;
    }

    setPrice(price: number) {
        this.price = price;
    }

    getName() {
        return this.name;
    }

    getDescription() {
        return this.description;
    }

    getPrice() {
        return this.price;
    }
}

export { Product };