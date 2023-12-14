import { Module } from '@nestjs/common';
import { GameRepository } from './infrastructure/repositories/game.repository';
import { GameService } from './application';
import { GameDomain } from './domain';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Game } from './infrastructure';
import { GameController } from './presentation';

@Module({
  controllers: [GameController],
  imports: [TypeOrmModule.forFeature([Game])],
  providers: [GameRepository, GameService, GameDomain],
  exports: [GameRepository, GameService, GameDomain],
})
export class GameModule {}
