import { Module } from '@nestjs/common';
import { AnswerService } from './answer.service';
import { AnswerController } from './answer.controller';
import { Answer } from './entity/answer.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
    providers: [AnswerService],
    exports: [AnswerService],
    imports: [TypeOrmModule.forFeature([Answer])],
    controllers: [AnswerController]
})
export class AnswerModule {}
