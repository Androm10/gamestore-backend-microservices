import { Controller, Get, Param } from '@nestjs/common';
import { GetReviewInput } from './inputs';
import { ReviewService } from '../application';

@Controller('reviews')
export class ReviewController {
  constructor(private readonly reviewService: ReviewService) {}

  @Get(':id')
  public async getReview(@Param() { id }: GetReviewInput) {
    return this.reviewService.getReview({ id });
  }
}
