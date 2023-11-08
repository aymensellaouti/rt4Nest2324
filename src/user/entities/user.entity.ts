import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { Exclude } from 'class-transformer';
import { DateTimeStampEntity } from '../../common/date-time-stamp.entity';

export enum UserRoleEnum {
  admin = 'admin',
  user = 'user',
}

@Entity()
export class User extends DateTimeStampEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;
  @Column({
    unique: true,
  })
  username: string;
  @Column({
    unique: true,
  })
  email: string;
  @Column()
  password: string;

  @Column({
    type: 'enum',
    enum: UserRoleEnum,
    default: UserRoleEnum.user,
  })
  role: UserRoleEnum;
}
