import { IsEmail, IsString, MinLength, isEmail } from 'class-validator';

export class CreateUserDto {
  @IsString()
  username: string;
  @IsString()
  @IsEmail()
  email: string;
  @IsString()
  @MinLength(4)
  password: string;
}
