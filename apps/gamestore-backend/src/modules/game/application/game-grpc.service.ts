import { Controller } from '@nestjs/common';
import { GrpcMethod } from '@nestjs/microservices';
import { GameDomain } from '../domain';
import { GameDto, CoreService } from '@gamestore/grpc';

@Controller()
export class GameGrpcService implements CoreService {
  constructor(private readonly gameDomain: GameDomain) {}

  @GrpcMethod('CoreService', 'AddGame')
  async addGame({ name, id, price, releaseDate }: GameDto) {
    console.log('grpc sent game created', { name, id, price, releaseDate });
    const createdGame = await this.gameDomain.addGame({
      name,
      price,
      releaseDate: new Date(releaseDate),
      gameCatalogId: id,
    });
    console.log('created', createdGame);
    return createdGame;
  }
}
