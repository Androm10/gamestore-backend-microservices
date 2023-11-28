import { Injectable } from '@nestjs/common';
import {
  GetUserParameters,
  UpdateUserByIdParameters,
} from './user.service-type';
import { UserDomain } from '../domain';

@Injectable()
export class UserService {
  constructor(private readonly userDomain: UserDomain) {}

  public async getUser({ id }: GetUserParameters) {
    return this.userDomain.getUser({ id });
  }

  public async updateUserById({ id, data }: UpdateUserByIdParameters) {
    return this.userDomain.updateUserById({ id, data });
  }

  public async updateProfile({ id, data }: UpdateUserByIdParameters) {
    return this.userDomain.updateUserById({ id, data });
  }
}
