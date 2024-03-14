import {
  IsDate,
  IsInt,
  IsNotEmpty,
  IsPositive,
  Min,
} from 'class-validator';
import { User } from '@prisma/client';

export class UpdateScoreDTO {

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
  @IsPositive()
  time: number;

  @IsNotEmpty()
  userId: string;
}
