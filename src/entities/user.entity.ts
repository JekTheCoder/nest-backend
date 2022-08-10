import { genSaltSync, hashSync } from 'bcrypt';
import { Exclude } from 'class-transformer';
import { BeforeInsert, Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from 'typeorm';

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

  @BeforeInsert()
  setPassword() {
    console.log('ad')
    const salt = genSaltSync();
    this.password = hashSync(this.password, salt);
  }
}
