import { Module } from '@nestjs/common';
import { WordService } from './word.service';
import { WordController } from './word.controller';
import { Word } from './entity/word.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  providers: [WordService],
  exports: [WordService],
  imports: [TypeOrmModule.forFeature([Word])],
  controllers: [WordController]
})
export class WordModule {}
