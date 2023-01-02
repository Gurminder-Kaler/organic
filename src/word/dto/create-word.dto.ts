import { IsNumber, IsString } from 'class-validator';

export class CreateWordDto {
    @IsString()
    title: string;

    @IsNumber()
    score: number;
}
