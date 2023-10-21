import { Inject, Injectable } from '@nestjs/common';
import { LoggerService } from '../../logger/logger.service';
import { Repository } from 'typeorm';
import { First } from '../entities/first.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { FirstDto } from '../dto/first.dto';

@Injectable()
export class FirstService {
  constructor(
    @InjectRepository(First)
    private firstRepository: Repository<First>,
    private loggerService: LoggerService,
  ) {}
  sayHello() {
    this.loggerService.logger('Hello World :D');
  }

  add(firstDto: FirstDto): Promise<First> {
    return this.firstRepository.save(firstDto);
  }
}
