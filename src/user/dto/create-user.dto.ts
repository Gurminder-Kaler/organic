import { IsEmail, IsString } from 'class-validator';
import { Unique } from 'typeorm';

export class CreateUserDto {
  @IsString()
  firstName: string;

  @IsString()
  lastName: string;

  @IsEmail()
  email: string;

  @IsString()
  password: string;
}
