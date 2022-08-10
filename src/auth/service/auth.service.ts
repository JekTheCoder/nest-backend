import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectRepository } from '@nestjs/typeorm';
import { compare } from 'bcrypt';
import { User } from 'src/entities/user.entity';
import { Repository } from 'typeorm';
import { LoginAuthDto } from '../dto/login-auth-dto';

@Injectable()
export class AuthService {

    constructor (
        @InjectRepository(User) private userRepo: Repository<User>,
        private jwtService: JwtService
    ) {}

    async validateUser(login: LoginAuthDto) {
        const userTarget = await this.userRepo.findOneBy({ username: login.username });

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
