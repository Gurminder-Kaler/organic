import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateAnswerDto } from './dto/create-answer.dto';
import { Answer } from './entity/answer.entity';

@Injectable()
export class AnswerService {
    constructor(
        @InjectRepository(Answer)
        private answerRepository: Repository<Answer>,
    ) { }

    createAnAnswerServiceFunc(createAnswerDto: CreateAnswerDto) {
        console.log('service answer', createAnswerDto);
        return this.answerRepository.save(createAnswerDto);
    }
}
