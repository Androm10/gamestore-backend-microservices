import { IsEmail, IsOptional, IsString } from 'class-validator';
import { User } from '../../infrastructure';

export class UserDto extends User {
  @IsEmail()
  @IsOptional()
  email: string;

  @IsString()
  @IsOptional()
  username: string;
}
