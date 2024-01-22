import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';
import { AddGameInput, GetGameInput, GetGamesInput } from './inputs';
import { GameService } from '../application';

@Controller('games')
export class GameController {
  constructor(private readonly gameService: GameService) {}

  @Get(':id')
  public async getGame(@Param() { id }: GetGameInput) {
    return this.gameService.getGame({ id });
  }

  @Post()
  public async addGame(@Body() data: AddGameInput) {
    return this.gameService.addGame(data);
  }

  @Get()
  public async getGames(
    @Query()
    {
      priceLowerBoundary,
      priceUpperBoundary,
      releaseDate,
      searchText,
    }: GetGamesInput,
  ) {
    return this.gameService.getGames({
      priceLowerBoundary,
      priceUpperBoundary,
      searchText,
      releaseDate,
    });
  }
}
