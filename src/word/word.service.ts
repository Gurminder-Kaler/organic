import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateWordDto } from './dto/create-word.dto';
import { Word } from './entity/word.entity';

@Injectable()
export class WordService {
    constructor(
        @InjectRepository(Word)
        private wordRepository: Repository<Word>,
    ) { }

    getAllWordsServiceFunc(): Promise<Word[]> {
        return this.wordRepository.find();
    }

    createAWordServiceFunc(createWordDto: CreateWordDto) {
        return this.wordRepository.save(createWordDto);
    }
}
