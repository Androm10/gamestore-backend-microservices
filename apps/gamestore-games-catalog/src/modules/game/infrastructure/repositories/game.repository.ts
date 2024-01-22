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
  GetGameParameters,
  GetGamesParameters,
} from './game.repository-type';

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

  async create({ description, name, price, releaseDate }: AddGameParameters) {
    const game = this.game.create({
      description,
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
          description: Like(`%${searchText}%`),
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
