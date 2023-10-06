import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { FirstModule } from './first/first.module';
import { TodoModule } from './todo/todo.module';
import { CommonModule } from './common/common.module';

@Module({
  imports: [FirstModule, TodoModule, CommonModule],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
