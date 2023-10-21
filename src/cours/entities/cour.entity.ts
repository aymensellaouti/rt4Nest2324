import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('cours')
export class Cour {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  name: string;
}
