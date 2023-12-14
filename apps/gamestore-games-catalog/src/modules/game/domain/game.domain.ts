import { Injectable } from '@nestjs/common';
import { GameRepository } from '../infrastructure';
import { GetGameParameters, GetGamesParameters } from './game.domain-type';

@Injectable()
export class GameDomain {
  constructor(private readonly gameRepository: GameRepository) {}

  public async getGame({ id }: GetGameParameters) {
    return this.gameRepository.get({ id });
  }

  public async getGames({
    priceLowerBoundary,
    priceUpperBoundary,
    releaseDate,
    searchText,
  }: GetGamesParameters) {
    return this.gameRepository.getByFilter({
      priceLowerBoundary,
      priceUpperBoundary,
      searchText,
      releaseDate,
    });
  }
}
