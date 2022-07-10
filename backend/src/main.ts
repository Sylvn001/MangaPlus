import { ValidationPipe } from '@nestjs/common';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { createConfigs, validatePipesConfigs } from './options';

const config = new DocumentBuilder()
  .setTitle('My Mangas Read API')
  .setDescription('API to read Anime Mangas!')
  .setVersion('1.0')
  .addTag('Manga')
  .build();

async function bootstrap() {
  const app = await NestFactory.create(AppModule, createConfigs);
  app.useGlobalPipes(new ValidationPipe(validatePipesConfigs));

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  await app.listen(process.env.PORT || 3000);
}
bootstrap();
