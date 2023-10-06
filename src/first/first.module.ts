import { Module } from '@nestjs/common';
import { FirstController } from './first.controller';
import { FirstService } from './service/first.service';
import { LoggerService } from '../logger/logger.service';

@Module({
  controllers: [FirstController],
  providers: [FirstService],
  exports: [],
})
export class FirstModule {}
