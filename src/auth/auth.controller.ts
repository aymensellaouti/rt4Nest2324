import { Body, Controller, Post } from '@nestjs/common';
import { SigninDto } from './dto/signin.dto';
import { CreateUserDto } from '../user/dto/create-user.dto';
import { AuthService } from './auth.service';
import { User } from '../user/entities/user.entity';
import { JwtDto } from './dto/jwt.dto';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}
  @Post('signin')
  signin(@Body() signinDto: SigninDto): Promise<JwtDto> {
    return this.authService.signIn(signinDto);
  }

  @Post('signup')
  signup(@Body() signupDto: CreateUserDto): Promise<User> {
    return this.authService.signup(signupDto);
  }
}
