import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as cookieParser from 'cookie-parser';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { join } from 'path';
import { ConfigService } from '@nestjs/config';
import { Config } from './config';
import { CORE_PACKAGE } from '@gamestore/grpc';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const configService = app.get(ConfigService);

  const { port, grpc } =
    configService.get<Config['application']>('application');
  console.log(configService.get('application'));
  app.use(cookieParser());
  app.connectMicroservice<MicroserviceOptions>({
    transport: Transport.GRPC,
    options: {
      package: CORE_PACKAGE,
      protoPath: join(__dirname, 'proto/core/core.proto'),
      url: grpc,
    },
  });
  await app.startAllMicroservices();

  await app.listen(port);
}
bootstrap();
