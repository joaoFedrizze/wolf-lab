import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors({
    origin: [
      'http://localhost:3000',
      'http://127.0.0.1:3000',
      'http://localhost:4200',
      'http://127.0.0.1:4200',
      'http://192.168.15.51:3000',
      'http://192.168.15.51:4200',
    ],
    credentials: true,
  });

  await app.listen(process.env.PORT ?? 8080);
}
bootstrap();
