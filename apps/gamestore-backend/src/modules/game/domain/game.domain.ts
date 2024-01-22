import { Injectable } from '@nestjs/common';
import { GameRepository } from '../infrastructure';
import {
  AddGameParameters,
  AddToWishlistParameters,
  GetGameParameters,
  GetGamesParameters,
} from './game.domain-type';

@Injectable()
export class GameDomain {
  constructor(private readonly gameRepository: GameRepository) {}

  public async getGame({ id }: GetGameParameters) {
    return this.gameRepository.get({ id });
  }

  public async addToWishlist({ id, userId }: AddToWishlistParameters) {
    return this.gameRepository.addToWishlist({ id, userId });
  }

  public async addGame({
    name,
    price,
    releaseDate,
    gameCatalogId,
  }: AddGameParameters) {
    return this.gameRepository.create({
      name,
      price,
      releaseDate,
      gameCatalogId,
    });
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
