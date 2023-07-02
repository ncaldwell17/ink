import {Column, Entity, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn} from "typeorm";

@Entity()
export class User {
    @PrimaryGeneratedColumn("uuid")
    id: string;

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;

    @Column()
    username: string;

    @Column()
    name: string;

    @Column()
    email: string;

    @Column()
    password: string;
}
