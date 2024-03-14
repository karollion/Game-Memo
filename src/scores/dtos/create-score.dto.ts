import {
  IsInt,
  IsNotEmpty,
  Min,
} from 'class-validator';
import { User } from '@prisma/client';

export class CreateProductDTO {

  @IsNotEmpty()
  @IsInt()
  @Min(0)
  points: number;

  @IsNotEmpty()
  @IsInt()
  @Min(0)
  cards: number;

  @IsNotEmpty()
  @IsInt()
  @Min(0)
  moves: number;

  @IsNotEmpty()
  @IsInt()
  @Min(0)
  time: number;

  @IsNotEmpty()
  user: User;
}
