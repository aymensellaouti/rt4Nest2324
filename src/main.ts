import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { DurationInterceptor } from './interceptors/duration/duration.interceptor';
import { FormatResponseInterceptor } from './interceptors/format-response/format-response.interceptor';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use((req, res, next) => {
    console.log('functionMid');
    next();
  });
  app.useGlobalInterceptors(new DurationInterceptor());
  app.useGlobalInterceptors(new FormatResponseInterceptor());
  app.enableCors({});
  /* En dehors du context DI */
  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
      /* il ne garde que propriété définie et annotés dans le DTO */
      whitelist: true,
      forbidNonWhitelisted: true,
    }),
  );
  await app.listen(3000);
}
bootstrap();
