import { Module } from '@nestjs/common';
import { UserModule } from './user';
import { ReviewModule } from './review';

@Module({
  imports: [UserModule, ReviewModule],
  exports: [UserModule, ReviewModule],
})
export class ModulesModule {}
