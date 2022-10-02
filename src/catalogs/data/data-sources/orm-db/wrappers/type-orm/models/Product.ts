import { Entity, PrimaryColumn, Column, ManyToOne, JoinColumn } from "typeorm"
import { v4 as uuid } from "uuid"
import { Catalog } from "./Catalog";

@Entity("products")
class Product {

    @PrimaryColumn()
    readonly id: string;

    @Column({name: "product_id"})
    productId: string;

    @Column({name: "catalog_id"})
    catalogId: string;

    @ManyToOne(() => Catalog, catalog => catalog.product)
    @JoinColumn({name:"catalog_id"})
    catalog: Catalog;

    constructor() {
        this.id = uuid();
    }
}

export { Product }