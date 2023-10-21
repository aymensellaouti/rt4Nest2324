import { Injectable } from '@nestjs/common';
import { CreateCourDto } from './dto/create-cour.dto';
import { UpdateCourDto } from './dto/update-cour.dto';
import { CrudService } from '../common/crud.service';
import { Repository } from 'typeorm';
import { Cour } from './entities/cour.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class CoursService extends CrudService<Cour> {
  constructor(
    @InjectRepository(Cour)
    private coursRepository: Repository<Cour>,
  ) {
    super(coursRepository);
  }

  update(id: number, updateCourDto: UpdateCourDto) {
    return `This action updates a #${id} cour`;
  }

  remove(id: number) {
    return `This action removes a #${id} cour`;
  }
}
