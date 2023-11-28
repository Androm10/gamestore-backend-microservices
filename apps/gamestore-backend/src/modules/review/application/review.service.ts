import { Injectable } from '@nestjs/common';
import { GetReviewParameters } from './review.service-type';
import { ReviewDomain } from '../domain';

@Injectable()
export class ReviewService {
  constructor(private readonly reviewDomain: ReviewDomain) {}

  public async getReview({ id }: GetReviewParameters) {
    return this.reviewDomain.getReview({ id });
  }
}
