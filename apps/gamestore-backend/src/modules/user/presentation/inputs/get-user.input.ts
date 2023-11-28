import { IsInt } from 'class-validator';

export class GetUserInput {
  @IsInt()
  id: number;
}
