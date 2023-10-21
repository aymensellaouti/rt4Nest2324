import { Module } from '@nestjs/common';
import { FirstController } from './first.controller';
import { FirstService } from './service/first.service';
import { LoggerService } from '../logger/logger.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { First } from './entities/first.entity';

@Module({
  controllers: [FirstController],
  providers: [FirstService],
  imports: [TypeOrmModule.forFeature([First])],
  exports: [],
})
export class FirstModule {}
