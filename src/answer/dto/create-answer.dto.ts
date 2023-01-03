import { IsBoolean, IsNumber, IsString } from 'class-validator';

export class CreateAnswerDto {
  @IsNumber()
  user_id: number;

  @IsNumber()
  word_id: number;

  @IsBoolean()
  correct: boolean;

  @IsString()
  answer: string;
}