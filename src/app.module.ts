import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AuthModule } from './auth/auth.module';
import { User } from './user/entity/user.entity';
import { UserModule } from './user/user.module';
import { ProfileModule } from './profile/profile.module';
import { WordModule } from './word/word.module';
import { Word } from './word/entity/word.entity';
import { AnswerController } from './answer/answer.controller';
import { AnswerService } from './answer/answer.service';
import { AnswerModule } from './answer/answer.module';
import { Answer } from './answer/entity/answer.entity';

@Module({
  controllers: [AppController, AnswerController],
  imports: [
    UserModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: '127.0.0.1',
      port: 3306,
      username: 'root',
      password: null,
      database: 'organic',
      entities: [User, Word, Answer],
      synchronize: true,
    }),
    AuthModule,
    ProfileModule,
    WordModule,
    AnswerModule,
  ]
})
export class AppModule {}
