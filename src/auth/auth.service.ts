import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UserService } from '../user/user.service';
import { CreateUserDto } from '../user/dto/create-user.dto';
import { User } from '../user/entities/user.entity';
import { SigninDto } from './dto/signin.dto';
import * as bcrypt from 'bcrypt';
import { JwtPayloadDto } from './dto/jwtpayload.dto';
import { JwtService } from '@nestjs/jwt';
import { JwtDto } from './dto/jwt.dto';
@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private jwtService: JwtService,
  ) {}
  signup(signupDto: CreateUserDto): Promise<User> {
    return this.userService.create(signupDto);
  }
  async signIn(signinDto: SigninDto): Promise<JwtDto> {
    /* Vérifier est ce que le user existe ou pas */
    const user = await this.userService.findByUserNameOrEmail(
      signinDto.username,
    );
    /* Si oui */
    if (!user)
      throw new UnauthorizedException('Veuillez vérifier vos credentials !');
    const isLoggedIn = await bcrypt.compare(signinDto.password, user.password);
    /* Vérifier le mdp */
    /* Si ok */
    /* On envoi le user */
    if (isLoggedIn) {
      const jwtPayload: JwtPayloadDto = {
        username: user.username,
        email: user.email,
        role: user.role,
      };

      return { jwt: this.jwtService.sign(jwtPayload) };
    }
    throw new UnauthorizedException('Veuillez vérifier vos credentials !');
    /* Si ko */
    /* Erreur de connexion */
    /* Si non */
    /* Erreur de connexion */
  }
}
