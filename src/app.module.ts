import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { FirstModule } from './first/first.module';
import { TodoModule } from './todo/todo.module';
import { CommonModule } from './common/common.module';
import { FirstMiddleware } from './middlewares/first/first.middleware';
import { TypeOrmModule } from '@nestjs/typeorm';
import { First } from './first/entities/first.entity';
import { CoursModule } from './cours/cours.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    FirstModule,
    TodoModule,
    CommonModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'rt42324',
      autoLoadEntities: true,
      synchronize: true,
      logging: true,
    }),
    CoursModule,
    AuthModule,
  ],
  controllers: [AppController],
  providers: [],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(FirstMiddleware).forRoutes('**');
  }
}
