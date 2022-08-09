import { Exclude } from 'class-transformer';
import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'users' })
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column() name: string;
  @Column({ unique: true }) username: string;

  @Exclude()
  @Column() 
  password: string;

  @CreateDateColumn() createdAt: Date;
}
