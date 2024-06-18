import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm"
import { ComputerDTO } from "../../../models";
import { Purchase } from "./Purchase";

@Entity()
export class Computer implements ComputerDTO {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    price: number;

    @Column()
    motherboard: string;

    @Column()
    cpu: string;

    @Column()
    cooler: string;

    @Column()
    gpu: string;

    @Column()
    ram: string;

    @Column()
    storage: string;

    @Column()
    case: string;

    @Column()
    powersupply: string;

    @OneToMany(() => Purchase, (purchase) => purchase.computer)
    purchase: Purchase[];

}