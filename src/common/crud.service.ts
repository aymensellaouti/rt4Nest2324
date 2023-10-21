import { Injectable } from '@nestjs/common';
import { DeepPartial, Repository } from 'typeorm';
import { HasIdInterface } from './has-id.interface';

@Injectable()
export class CrudService<T extends HasIdInterface> {
  constructor(private repository: Repository<T>) {}
  create(entity: DeepPartial<T>) {
    return this.repository.save(entity);
  }

  findAll() {
    return this.repository.find();
  }

  findOne(id) {
    return this.repository.findOne({ where: { id } });
  }

  //   update(id: number, updateCourDto: UpdateCourDto) {
  //     return `This action updates a #${id} cour`;
  //   }

  //   remove(id: number) {
  //     return `This action removes a #${id} cour`;
  //   }
}
