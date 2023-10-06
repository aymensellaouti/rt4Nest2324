import { Injectable } from '@nestjs/common';
let x = 0;
@Injectable()
export class LoggerService {
  constructor() {
    console.log(x++);
  }
  logger(message: any) {
    console.log('From APP LOGGER');
    console.log(message);
  }
}
