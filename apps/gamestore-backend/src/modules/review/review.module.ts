import { Module } from '@nestjs/common';
import { ReviewService } from './application';
import { ReviewDomain } from './domain';
import { Review, ReviewRepository } from './infrastructure';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ReviewController } from './presentation';

@Module({
  controllers: [ReviewController],
  imports: [TypeOrmModule.forFeature([Review])],
  providers: [ReviewService, ReviewDomain, ReviewRepository],
  exports: [ReviewService, ReviewDomain, ReviewRepository],
})
export class ReviewModule {}
