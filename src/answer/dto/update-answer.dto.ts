import { IsNumber, IsString } from 'class-validator';

export class UpdateAnswerDto {
  @IsNumber()
  user_id: number;

  @IsNumber()
  word_id: number;

  @IsString()
  correct: boolean;

  @IsString()
  answer: string;
}
