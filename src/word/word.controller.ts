import {
    Body,
    Controller,
    HttpException,
    HttpStatus,
    Post,
    Get
} from '@nestjs/common';
import { messages } from 'src/globals/messages.constant';
import { CreateWordDto } from './dto/create-word.dto';
import { WordService } from './word.service';

@Controller('word')
export class WordController {

    constructor(private wordService: WordService) { }

    @Get()
    getAllWords() {
        try {
            return this.wordService.getAllWordsServiceFunc().then((words) => {
                if (words.length == 0) {
                    return {
                        success: false,
                        statusCode: 404,
                        message: messages.Failure.Word.NotFound,
                        data: [],
                    };
                }
                return {
                    success: true,
                    statusCode: 200,
                    message: messages.Success.Word.GetAllWords,
                    data: words
                };
            });
        } catch (error) {
            throw new HttpException({
                statusCode: HttpStatus.FORBIDDEN,
                error: 'This is a custom message',
            }, HttpStatus.FORBIDDEN);
        }
    }

    @Post()
    createAUser(@Body() createWordDto: CreateWordDto) {
        try {
            console.log('BODY', createWordDto);
            return this.wordService.createAWordServiceFunc(createWordDto).then((word) => {
                if (!word) {
                    return {
                        success: false,
                        statusCode: 404,
                        message: messages.Failure.SWW,
                        data: [],
                    };
                }
                return {
                    success: true,
                    statusCode: 200,
                    message: messages.Success.Word.Create,
                    data: word
                };
            });
        } catch (error) {
            throw new HttpException({
                statusCode: HttpStatus.FORBIDDEN,
                error: 'This is a custom message',
            }, HttpStatus.FORBIDDEN);
        }
    }
}
