import { Controller, Post, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { User as User_ } from 'src/entities/user.entity';
import { User } from '../decorators/user.decorator';
import { AuthService } from '../service/auth.service';

@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService) {}

    @UseGuards(AuthGuard('local'))
    @Post('login')
    async loginUser(@User() user: User_) {
        return { token: await this.authService.sign(user) };
    }
}
