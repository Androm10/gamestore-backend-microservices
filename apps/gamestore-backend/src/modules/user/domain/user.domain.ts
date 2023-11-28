import { Injectable } from '@nestjs/common';
import { UserRepository } from '../infrastructure';
import {
  GetUserParameters,
  UpdateUserByIdParameters,
} from './user.domain-type';

@Injectable()
export class UserDomain {
  constructor(private readonly userRepository: UserRepository) {}

  public async getUser({ id }: GetUserParameters) {
    return this.userRepository.get({ id });
  }

  public async updateUserById({ id, data }: UpdateUserByIdParameters) {
    return this.userRepository.updateById({ id, data });
  }
}
