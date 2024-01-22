import { Controller, Param, Patch, Put, Req } from '@nestjs/common';
import { AddToWishlistInput } from './inputs';
import { GameService } from '../application';

@Controller()
export class GameController {
  constructor(private readonly gameService: GameService) {}

  @Patch(':id')
  public async addToWishlist(
    @Param() { id }: AddToWishlistInput,
    @Req() req: Request,
  ) {
    return this.gameService.addToWishlist({ id, userId: 1 });
  }
}
