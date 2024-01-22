import { Module } from '@nestjs/common';
import { ModulesModule } from './modules/modules.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { configuration } from './config';
import { validate } from './config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DataSource } from 'typeorm';

@Module({
  imports: [
    ModulesModule,
    ConfigModule.forRoot({ isGlobal: true, load: configuration, validate }),
    TypeOrmModule.forRootAsync({
      useFactory: (configService: ConfigService) => ({
        type: configService.get('database.dialect'),
        url: configService.get('database.url'),
        synchronize: true,
        autoLoadEntities: true,
      }),
      dataSourceFactory: async (options) => {
        const dataSource = await new DataSource(options).initialize();
        return dataSource;
      },
      inject: [ConfigService],
    }),
  ],
})
export class AppModule {}
