import { IsEmail, Length } from 'class-validator';

export class CreateUserDto {
  @Length(3)
  fullName: string;

  @IsEmail()
  email: string;

  @Length(6, 32, { message: 'Пароль должен минимум 6 символов' })
  password?: string;
}
