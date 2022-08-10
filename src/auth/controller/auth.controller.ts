import { Body, Controller, Post } from '@nestjs/common';
import { LoginAuthDto } from '../dto/login-auth-dto';

@Controller('auth')
export class AuthController {
    @Post('login')
    loginUser(@Body() login: LoginAuthDto) {

    }
}
