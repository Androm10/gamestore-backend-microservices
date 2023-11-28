import { Injectable } from '@nestjs/common';
import { Review } from '../entities';
import { Repository as TypeOrmRepository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { GetReviewParameters } from './review.repository-type';

@Injectable()
export class ReviewRepository {
  constructor(
    @InjectRepository(Review)
    private review: TypeOrmRepository<Review>,
  ) {}

  async get({ id }: GetReviewParameters) {
    const review = await this.review.findOne({
      where: { id },
    });
    return review;
  }
}
