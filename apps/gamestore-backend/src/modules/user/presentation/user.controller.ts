import { Controller, Get, Param, Put, Req } from '@nestjs/common';
import { GetUserInput } from './inputs';
import { UserService } from '../application';
import { UpdateUserByIdInput } from './inputs/update-user-by-id.input';
import { UpdateProfileInput } from './inputs/update-profile.input';
import { Request } from 'express';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get(':id')
  public async getUser(@Param() { id }: GetUserInput) {
    return this.userService.getUser({ id });
  }

  @Put(':id')
  public async updateUserById(@Param() { id, data }: UpdateUserByIdInput) {
    return this.userService.updateUserById({ id, data });
  }

  @Put()
  public async updateProfile(
    @Param() data: UpdateProfileInput,
    @Req() req: Request,
  ) {
    return this.userService.updateProfile({ id: 1, data });
  }
}
