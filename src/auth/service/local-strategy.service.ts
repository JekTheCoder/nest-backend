import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-local';
import { LoginAuthDto } from '../dto/login-auth-dto';
import { AuthService } from './auth.service';

@Injectable()
export class LocalStrategyService extends PassportStrategy(Strategy) {
    constructor(private authService: AuthService) { super(); }

    async validate(login: LoginAuthDto) {
        const userResult = await this.authService.validateUser(login);
        if (!userResult) throw new UnauthorizedException();

        return userResult;
    }
}
