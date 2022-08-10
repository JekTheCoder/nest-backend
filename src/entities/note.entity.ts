import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity({ name: 'notes' })
export class Note {
    @PrimaryGeneratedColumn()
    id: number;

    @Column() content: string;
    @Column() userId: number;
    @UpdateDateColumn() updatedAt: Date;
    @CreateDateColumn() createdAt: Date;
}