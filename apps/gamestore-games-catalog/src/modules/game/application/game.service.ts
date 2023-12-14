import { Injectable } from '@nestjs/common';
import { GetGameParameters, GetGamesParameters } from './game.service-type';
import { GameDomain } from '../domain';

@Injectable()
export class GameService {
  constructor(private readonly gameDomain: GameDomain) {}

  public async getGame({ id }: GetGameParameters) {
    return this.gameDomain.getGame({ id });
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
