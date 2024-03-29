import {
  IsNotEmpty,
  IsString,
  Length,
} from 'class-validator';

export class CreateUserDTO {

  @IsNotEmpty()
  @IsString()
  @Length(3, 20)
  name: string;
}
