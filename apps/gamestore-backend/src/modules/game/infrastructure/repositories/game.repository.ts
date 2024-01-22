import { Injectable } from '@nestjs/common';
import { Game } from '../entities';
import {
  Between,
  Like,
  MoreThanOrEqual,
  Repository as TypeOrmRepository,
} from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import {
  AddGameParameters,
  AddToWishlistParameters,
  GetGameParameters,
  GetGamesParameters,
} from './game.repository-type';
import { User } from '../../../user/infrastructure';

@Injectable()
export class GameRepository {
  constructor(
    @InjectRepository(Game)
    private game: TypeOrmRepository<Game>,
  ) {}

  async get({ id }: GetGameParameters) {
    const game = await this.game.findOne({
      where: { id },
    });
    return game;
  }

  async addToWishlist({ id, userId }: AddToWishlistParameters) {
    const game = await this.game.findOne({
      where: {
        id,
      },
      relations: {
        wishlisted: true,
      },
    });

    game.wishlisted.push({ id: userId } as User);
    await game.save();
    return game;
  }

  async create({ gameCatalogId, name, price, releaseDate }: AddGameParameters) {
    const game = this.game.create({
      gameCatalogId,
      name,
      price,
      releaseDate,
    });

    await game.save();

    return game;
  }

  async getByFilter({
    priceLowerBoundary,
    priceUpperBoundary,
    releaseDate,
    searchText,
  }: GetGamesParameters) {
    const games = await this.game.find({
      where: [
        {
          price: Between(priceLowerBoundary, priceUpperBoundary),
          releaseDate: MoreThanOrEqual(releaseDate),
        },
        {
          price: Between(priceLowerBoundary, priceUpperBoundary),
          releaseDate: MoreThanOrEqual(releaseDate),
          name: Like(`%${searchText}%`),
        },
      ],
    });

    return games;
  }
}
