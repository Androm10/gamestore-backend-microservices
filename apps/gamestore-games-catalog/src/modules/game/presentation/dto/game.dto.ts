import { IsDate, IsNumber, IsString } from 'class-validator';
import { Game } from '../../infrastructure';
import { Type } from 'class-transformer';

export class GameDto extends Game {
  @IsString()
  name: string;

  @IsString()
  description: string;

  @IsDate()
  @Type(() => Date)
  releaseDate: Date;

  @IsNumber()
  price: number;
}
