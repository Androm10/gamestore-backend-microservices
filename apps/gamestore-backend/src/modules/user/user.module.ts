import { Module } from '@nestjs/common';
import { UserService } from './application';
import { UserDomain } from './domain';
import { User, UserRepository } from './infrastructure';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserController } from './presentation';

@Module({
  controllers: [UserController],
  imports: [TypeOrmModule.forFeature([User])],
  providers: [UserService, UserDomain, UserRepository],
  exports: [UserService, UserDomain, UserRepository],
})
export class UserModule {}
