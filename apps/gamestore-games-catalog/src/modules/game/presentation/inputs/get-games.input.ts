import { IsDate, IsNumber, IsOptional } from 'class-validator';

export class GetGamesInput {
  @IsOptional()
  searchText?: string;

  @IsOptional()
  @IsNumber()
  priceLowerBoundary?: number;

  @IsOptional()
  @IsNumber()
  priceUpperBoundary?: number;

  @IsOptional()
  @IsDate()
  releaseDate?: Date;
}
