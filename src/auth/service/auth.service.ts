import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { compare } from 'bcrypt';
import { User } from 'src/entities/user.entity';
import { UsersService } from 'src/users/service/users.service';
import { LoginAuthDto } from '../dto/login-auth-dto';

@Injectable()
export class AuthService {

    constructor (
        private userService: UsersService,
        private jwtService: JwtService
    ) {}

    async validateUser(login: LoginAuthDto) {
        const userTarget = await this.userService.findOne({ username: login.username });

        if (
            !userTarget || 
            !(await compare(login.password, userTarget.password))
        ) return null;

        return userTarget;
    }

    sign(user: User) {
        const payload = { username: user.username, sub: user.id };

        return this.jwtService.signAsync(payload);
    }
}
