import { Controller, HttpException, HttpStatus, Post, Request, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { messages } from 'src/globals/messages.constant';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) { }

  @UseGuards(AuthGuard('local'))
  @Post('/login')
  async login(@Request() req: any) {
    try {
      return this.authService.login(req.user).then((token) => {
        console.log('token', token);
        if (!token) {
          return {
            success: false,
            statusCode: 404,
            message: messages.Failure.User.NotFound,
            token: "",
          };
        }
        return {
          success: true,
          statusCode: 200,
          message: messages.Success.Auth.Login,
          token: token
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
