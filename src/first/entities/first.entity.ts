import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('person')
export class First {
  @PrimaryGeneratedColumn()
  id: number;
  @Column({})
  name: string;
  @Column()
  age: number;
}
