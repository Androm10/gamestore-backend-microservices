import { IsNumber, IsString } from 'class-validator';

export class EnvironmentVariables {
  @IsNumber()
  GAMESTORE_PORT: number;

  @IsString()
  GAMESTORE_DATABASE_URL: string;

  @IsString()
  GAMESTORE_DATABASE_DIALECT: string;
}
