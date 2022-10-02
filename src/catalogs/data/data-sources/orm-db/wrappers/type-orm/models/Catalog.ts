import { Entity, PrimaryColumn, Column, OneToMany } from "typeorm"
import { v4 as uuid } from "uuid"
import { Product } from "./Product";

@Entity("catalogs")
class Catalog {

    @PrimaryColumn()
    readonly id: string;

    @Column()
    title: string;

    @Column()
    description: string;

    @Column({ name: "view_link"})
    viewLink: string;

    @OneToMany(() => Product, product => product.catalog)
    product: Product[];

    constructor() {
        this.id = uuid();
    }
}

export { Catalog }