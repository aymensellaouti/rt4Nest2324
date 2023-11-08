import { UserRoleEnum } from '../../user/entities/user.entity';

export class JwtPayloadDto {
  username: string;
  email: string;
  role: UserRoleEnum;
}
