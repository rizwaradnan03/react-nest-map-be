import { NestFactory } from '@nestjs/core';
import { hostname } from 'os';
import { AppModule } from './app.module';
const cors = require('cors');

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.use(cors())

  await app.listen(4000, '0.0.0.0');
}
bootstrap();
