import {
    Body,
    Controller,
    Delete,
    Get,
    HttpException,
    HttpStatus,
    Param,
    ParseIntPipe,
    Patch,
    Post,
} from '@nestjs/common';
import { messages } from 'src/globals/messages.constant';
import { AnswerService } from './answer.service';
import { CreateAnswerDto } from './dto/create-answer.dto';

@Controller('answer')
export class AnswerController {
    constructor(private answerService: AnswerService) { }

    @Post()
    createAnAnswer(@Body() createAnswerDto: CreateAnswerDto) {
        console.log('controller answer', createAnswerDto);
        try {
            return this.answerService.createAnAnswerServiceFunc(createAnswerDto).then((answer) => {
                if (!answer) {
                    return {
                        success: false,
                        statusCode: 404,
                        message: messages.Failure.Answer.NotFound,
                        data: [],
                    };
                }
                return {
                    success: true,
                    statusCode: 200,
                    message: messages.Success.Answer.Create,
                    data: answer
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
