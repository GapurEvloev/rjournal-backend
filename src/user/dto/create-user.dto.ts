import { IsEmail, Length } from 'class-validator';
import { UniqueOnDatabase } from '../../auth/validations/UniqueValidation';
import { UserEntity } from '../entities/user.entity';

export class CreateUserDto {
  @Length(3)
  fullName: string;

  @IsEmail(undefined, { message: 'Wrong email' })
  @UniqueOnDatabase(UserEntity, {
    message: 'Such an email already exists. Choose another.',
  })
  email: string;

  @Length(6, 32, { message: 'Password must be at least 6 characters long' })
  password?: string;
}
