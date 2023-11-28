import { OmitType, PickType } from '@nestjs/swagger';
import { UserDto } from '../dtos/user.dto';

export class UpdateProfileInput extends PickType(UserDto, [
  'username',
  'email',
]) {}
