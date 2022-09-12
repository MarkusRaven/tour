import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function start() {
  const app = await NestFactory.create(AppModule)
  const PORT = process.env.API_PORT || 3000
  const HOST = process.env.API_HOST
  await app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`)
    console.log(`${HOST}:${PORT}`)
  });
}
start();
