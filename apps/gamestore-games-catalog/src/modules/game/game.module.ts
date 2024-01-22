import { Module } from '@nestjs/common';
import { GameRepository } from './infrastructure/repositories/game.repository';
import { GameService } from './application';
import { GameDomain } from './domain';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Game } from './infrastructure';
import { GameController } from './presentation';
import { CORE_PACKAGE } from '@gamestore/grpc';
import { ConfigService } from '@nestjs/config';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { join } from 'path';
import { Config } from '../../config';

@Module({
  controllers: [GameController],
  imports: [
    TypeOrmModule.forFeature([Game]),
    ClientsModule.registerAsync({
      clients: [
        {
          name: CORE_PACKAGE,
          useFactory: (configService: ConfigService) => {
            const { coreUrl } = configService.get<Config['grpc']>('grpc');
            return {
              transport: Transport.GRPC,
              options: {
                package: CORE_PACKAGE,
                protoPath: join(
                  process.cwd(),
                  'apps/gamestore-games-catalog/src/proto/core/core.proto',
                ),
                url: coreUrl,
              },
            };
          },
          inject: [ConfigService],
        },
      ],
    }),
  ],
  providers: [GameRepository, GameService, GameDomain],
  exports: [GameRepository, GameService, GameDomain],
})
export class GameModule {}
