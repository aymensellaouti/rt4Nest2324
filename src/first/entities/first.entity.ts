import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('first')
export class First {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  name: string;
  @Column()
  age: number;
}
