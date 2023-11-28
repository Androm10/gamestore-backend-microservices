import { Injectable } from '@nestjs/common';
import { User } from '../entities';
import { Repository as TypeOrmRepository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import {
  GetUserParameters,
  UpdateUserByIdParameters,
} from './user.repository-type';

@Injectable()
export class UserRepository {
  constructor(
    @InjectRepository(User)
    private user: TypeOrmRepository<User>,
  ) {}

  async get({ id }: GetUserParameters) {
    const user = await this.user.findOne({
      where: { id },
    });
    return user;
  }

  async updateById({ id, data }: UpdateUserByIdParameters) {
    await this.user.update({ id }, data);
    const updated = await this.get({ id });
    return updated;
  }
}
