import { Body, Controller, Post } from '@nestjs/common';
import { AddTodoDto } from './dto/add-todo.dto';

@Controller('todo')
export class TodoController {
  @Post()
  add(@Body() addTodoDto: AddTodoDto) {
    return addTodoDto;
  }
}
