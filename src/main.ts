import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
//Importamos para documentar
import {DocumentBuilder, SwaggerModule} from  '@nestjs/swagger'

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const options = new DocumentBuilder()
  .setTitle('Encuentros Deportivos')
  .setDescription('Documentación de las entidades, metodos y atributos')
  .setVersion('1.0')
  .build();

  const document = SwaggerModule.createDocument(app, options)

  SwaggerModule.setup('api/rest/EncuentrosDeportivos', app, document)
  //activamos las validaciones 
  app.useGlobalPipes(new ValidationPipe());
  app.enableCors()
  const host = '0.0.0.0';
  const port = process.env.PORT || 8080;
  await app.listen(port) ;
}
bootstrap();
