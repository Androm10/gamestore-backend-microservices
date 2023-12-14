import { IsInt } from 'class-validator';

export class GetGameInput {
  @IsInt()
  id: number;
}
