import { IsInt } from 'class-validator';

export class GetReviewInput {
  @IsInt()
  id: number;
}
