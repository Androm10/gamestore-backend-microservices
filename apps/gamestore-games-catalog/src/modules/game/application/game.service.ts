import { Inject, Injectable, OnModuleInit } from '@nestjs/common';
import {
  AddGameParameters,
  GetGameParameters,
  GetGamesParameters,
} from './game.service-type';
import { GameDomain } from '../domain';
import { CORE_PACKAGE, CoreService } from '@gamestore/grpc';
import { ClientGrpc } from '@nestjs/microservices';

@Injectable()
export class GameService implements OnModuleInit {
  private coreService: CoreService;
  constructor(
    private readonly gameDomain: GameDomain,
    @Inject(CORE_PACKAGE) private readonly coreClient: ClientGrpc,
  ) {}

  onModuleInit() {
    this.coreService = this.coreClient.getService<CoreService>('CoreService');
    console.log(this.coreService);
  }

  public async getGame({ id }: GetGameParameters) {
    return this.gameDomain.getGame({ id });
  }

  public async addGame({
    description,
    name,
    price,
    releaseDate,
  }: AddGameParameters) {
    const game = await this.gameDomain.addGame({
      description,
      name,
      price,
      releaseDate,
    });

    const added = this.coreService.addGame({
      ...game,
      releaseDate: game.releaseDate.toString(),
    });

    // added.subscribe({
    //   error: (err) => {
    //     console.log('error', err);
    //   },
    //   next: (value) => {
    //     console.log('success', value);
    //   },
    // });

    return game;
  }

  public async getGames({
    priceLowerBoundary,
    priceUpperBoundary,
    releaseDate,
    searchText,
  }: GetGamesParameters) {
    return this.gameDomain.getGames({
      priceLowerBoundary,
      priceUpperBoundary,
      releaseDate,
      searchText,
    });
  }
}
