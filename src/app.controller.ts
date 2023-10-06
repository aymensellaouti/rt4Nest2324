import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller({
  path: '',
})
export class AppController {
  constructor() {}
  /* @Get informe que cette méthode doit etre appelé 
    pour une requete http GET 
    il reste l'uri
  */
  @Get()
  getHello(): string {
    return 'Cc Rt4';
  }
  @Post()
  postHello(@Body() user): string {
    return `Welcome ${user.name}`;
  }
}
