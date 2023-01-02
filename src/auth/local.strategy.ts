import { HttpException, HttpStatus, Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-local';
import { messages } from 'src/globals/messages.constant';
import { AuthService } from './auth.service';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private authService: AuthService) {
    super({ usernameField: 'email' });
  }

  async validate(email: string, password: string): Promise<any> {
    try {
      const user = await this.authService.checkIfUserExists(email, password);
      console.log('user', user);
      if (user == null) {
        return {
          success: false,
          status: 404,
          message: messages.Failure.UnAuthorized
        };
      }
      return user;
    } catch (error) {
      throw new HttpException({
        status: HttpStatus.FORBIDDEN,
        error: 'This is a custom message',
      }, HttpStatus.FORBIDDEN);
    }
  }

}
