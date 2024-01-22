import { Module } from '@nestjs/common';
import { UserModule } from './user';
import { ReviewModule } from './review';
import { GameModule } from './game';

@Module({
  imports: [UserModule, ReviewModule, GameModule],
  exports: [UserModule, ReviewModule, GameModule],
})
export class ModulesModule {}
