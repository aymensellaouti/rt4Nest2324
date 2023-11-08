import { ConflictException, Injectable } from '@nestjs/common';
import { User } from './entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CrudService } from '../common/crud.service';
import { CreateUserDto } from './dto/create-user.dto';
import * as bcrypt from 'bcrypt';
@Injectable()
export class UserService extends CrudService<User> {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {
    super(userRepository);
  }

  async create(createUserDto: CreateUserDto): Promise<User> {
    const user = this.userRepository.create(createUserDto);
    /* 
      getPassword + hash
    */
    const salt = await bcrypt.genSalt();
    user.password = await bcrypt.hash(user.password, salt);
    try {
      return await this.userRepository.save(user);
    } catch (e) {
      throw new ConflictException(
        'Le username et le email doivent être unique',
      );
    }
  }

  findByUserNameOrEmail(identifier: string): Promise<User> {
    return this.userRepository.findOne({
      where: [{ username: identifier }, { email: identifier }],
    });
  }
}
