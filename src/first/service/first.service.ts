import { Inject, Injectable } from '@nestjs/common';
import { LoggerService } from '../../logger/logger.service';

@Injectable()
export class FirstService {
  constructor(private loggerService: LoggerService) {}
  sayHello() {
    this.loggerService.logger('Hello World :D');
  }
}
