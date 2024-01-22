import { Injectable } from '@nestjs/common';
import {
  AddGameParameters,
  AddToWishlistParameters,
  GetGameParameters,
  GetGamesParameters,
} from './game.service-type';
import { GameDomain } from '../domain';

@Injectable()
export class GameService {
  constructor(private readonly gameDomain: GameDomain) {}

  public async getGame({ id }: GetGameParameters) {
    return this.gameDomain.getGame({ id });
  }

  public async addToWishlist({ id, userId }: AddToWishlistParameters) {
    return this.gameDomain.addToWishlist({ id, userId });
  }

  public async addGame({
    name,
    price,
    releaseDate,
    gameCatalogId,
  }: AddGameParameters) {
    return this.gameDomain.addGame({
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
    return this.gameDomain.getGames({
      priceLowerBoundary,
      priceUpperBoundary,
      releaseDate,
      searchText,
    });
  }
}
