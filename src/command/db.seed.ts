import { NestFactory } from '@nestjs/core';
import { AppModule } from '../app.module';
import { CoursService } from '../cours/cours.service';
import { Cour } from '../cours/entities/cour.entity';

async function bootstrap() {
  const app = await NestFactory.createApplicationContext(AppModule);
  // Todo :  Do What you want
  const coursService = app.get(CoursService);
  for (let i = 0; i < 20; i++) {
    let cours = new Cour();
    cours.name = `cours${i}`;
    await coursService.create(cours);
  }
  await app.close();
}
bootstrap();
