import { Injectable } from '@nestjs/common';
import { ReviewRepository } from '../infrastructure';
import { GetReviewParameters } from './review.domain-type';

@Injectable()
export class ReviewDomain {
  constructor(private readonly reviewRepository: ReviewRepository) {}

  public async getReview({ id }: GetReviewParameters) {
    return this.reviewRepository.get({ id });
  }
}
