import { User } from '../infrastructure';

export interface GetUserParameters {
  id: number;
}

export interface UpdateUserByIdParameters {
  id: number;
  data: Partial<User>;
}
