import { User } from '../entities';

export interface GetUserParameters {
  id: number;
}

export interface UpdateUserByIdParameters {
  id: number;
  data: Partial<User>;
}
