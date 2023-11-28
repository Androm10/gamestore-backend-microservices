import { IsInt, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';
import { UserDto } from '../dtos/user.dto';
import { PartialType } from '@nestjs/swagger';

export class UpdateUserByIdInput {
  @IsInt()
  id: number;

  @ValidateNested({ each: true })
  @Type(() => PartialType(UserDto))
  data: Partial<UserDto>;
}
