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
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserService } from './user.service';
import { messages } from 'src/globals/messages.constant';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) { }

  @Get()
  getAllUsers() {
    try {
      return this.userService.getAllUsersServiceFunc().then((allUsers) => {
        if (allUsers.length == 0) {
          return {
            success: false,
            statusCode: 404,
            message: messages.Failure.User.NotFound,
            data: [],
          };
        }
        return {
          success: true,
          statusCode: 200,
          message: messages.Success.User.GetAllUsers,
          data: allUsers
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
  createAUser(@Body() createUserDto: CreateUserDto) {
    try {
      return this.userService.findByEmail(createUserDto.email).then((exists) => {
        if (exists) {
          return {
            success: false,
            statusCode: 401,
            message: messages.Failure.UserAlreadyTaken
          };
        } else {
          return this.userService.createAUserServiceFunc(createUserDto).then((user) => {
            if (!user) {
              return {
                success: false,
                statusCode: 404,
                message: messages.Failure.User.NotFound,
                data: [],
              };
            }
            return {
              success: true,
              statusCode: 200,
              message: messages.Success.User.Create,
              data: user
            };
          });
        }
      });
    } catch (error) {
      throw new HttpException({
        statusCode: HttpStatus.FORBIDDEN,
        error: 'This is a custom message',
      }, HttpStatus.FORBIDDEN);
    }
  }

  @Patch('/:userId')
  updateAUser(
    @Body() updateUserDto: UpdateUserDto,
    @Param('userId', ParseIntPipe) userId: number,
  ) {
    try {
      let {email} = updateUserDto;
      // console.log('updateUserDto.email', email);
      return this.userService.findByEmail(email).then((exists) => {
        console.log('exists', exists);
        console.log('userId', userId);
        if (exists && userId == exists.id) {
          return this.userService.updateAUserServiceFunc(updateUserDto, userId).then((user) => {
            return {
              success: true,
              statusCode: 200,
              message: messages.Success.User.Update,
              data: user
            };
          });
        } else {
          // return {
          //   success: false,
          //   statusCode: 404,
          //   message: messages.Failure.UserAlreadyTaken,
          // };
        }
      });
    } catch (error) {
      throw new HttpException({
        statusCode: HttpStatus.FORBIDDEN,
        error: 'This is a custom message',
      }, HttpStatus.FORBIDDEN);
    }
  }

  @Get('/:userId')
  getAUserViaId(@Param('userId', ParseIntPipe) userId: number) {
    try {
      return this.userService.getAUserViaIdServiceFunc(userId).then((user) => {
        if (!user) {
          return {
            success: false,
            statusCode: 404,
            message: messages.Failure.User.NotFound,
            data: [],
          };
        }
        return {
          success: true,
          statusCode: 200,
          message: messages.Success.User.Update,
          data: user
        };
      });
    } catch (error) {
      throw new HttpException({
        statusCode: HttpStatus.FORBIDDEN,
        error: 'This is a custom message',
      }, HttpStatus.FORBIDDEN);
    }
  }

  @Delete('/:userId')
  deleteAUser(@Param('userId', ParseIntPipe) userId: number) {
    try {
      return this.userService.deleteAUserServiceFunc(userId).then((user) => {
        if (!user) {
          return {
            success: false,
            statusCode: 404,
            message: messages.Failure.User.NotFound,
            data: [],
          };
        }
        return {
          success: true,
          statusCode: 200,
          message: messages.Success.User.Delete,
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
