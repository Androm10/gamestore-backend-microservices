import { UnauthorizedException } from '@nestjs/common';
import { Injectable } from '@nestjs/common/decorators';
import { ConfigService } from '@nestjs/config';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { AuthService } from '../auth.service';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy, 'jwt') {
  constructor(
    private configService: ConfigService,
    private authService: AuthService,
  ) {
    super({
      secretOrKey: configService.get<string>('auth.secret'),
      jwtFromRequest: ExtractJwt.fromExtractors([
        (request) => {
          return request.cookies.Bearer;
        },
      ]),
    });
  }

  async validate(payload: any): Promise<any> {
    const id = payload.userId;
    const user = await this.authService.validateUser(id);
    if (!user) {
      throw new UnauthorizedException();
    }
    return user;
  }
}
