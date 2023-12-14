import { Module } from '@nestjs/common';
import { ModulesModule } from './modules/modules.module';
import { ConfigModule } from '@nestjs/config';
import { configuration } from './config';
import { validate } from './config';

@Module({
  imports: [
    ModulesModule,
    ConfigModule.forRoot({ isGlobal: true, load: configuration, validate }),
  ],
})
export class AppModule {}
