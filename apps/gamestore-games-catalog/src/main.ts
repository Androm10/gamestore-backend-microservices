import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as cookieParser from 'cookie-parser';
import { ConfigService } from '@nestjs/config';
import { Config } from './config';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { join } from 'path';
import { CATALOG_PACKAGE } from '@gamestore/grpc';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const configService = app.get(ConfigService);
  const { port, grpc } =
    configService.get<Config['application']>('application');

  app.use(cookieParser());
  app.useGlobalPipes(new ValidationPipe({}));

  app.connectMicroservice<MicroserviceOptions>({
    transport: Transport.GRPC,
    options: {
      package: CATALOG_PACKAGE,
      protoPath: join(__dirname, 'proto/core/core.proto'),
      url: grpc,
    },
  });

  await app.listen(port);
}
bootstrap();
