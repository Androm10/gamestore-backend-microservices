import { IsNumber, IsString } from 'class-validator';

export class EnvironmentVariables {
  @IsNumber()
  GAMESTORE_GAMES_CATALOG_PORT: number;

  @IsString()
  GAMESTORE_GAMES_CATALOG_DATABASE_URL: string;

  @IsString()
  GAMESTORE_GAMES_CATALOG_DATABASE_DIALECT: string;
}
