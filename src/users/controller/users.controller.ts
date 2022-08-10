import {
  Body,
  ClassSerializerInterceptor,
  Controller,
  Delete,
  Get,
  HttpException,
  HttpStatus,
  Param,
  Post,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { User } from 'src/auth/decorators/user.decorator';
import { JwtAuthGuard } from 'src/auth/service/jwt-auth.guard';
import { User as User_ } from 'src/entities/user.entity';
import { UserRequest } from '../dto/user-request.dto';
import { UsersService } from '../service/users.service';

@UseInterceptors(ClassSerializerInterceptor)
@Controller('users')
export class UsersController {
  constructor(private userService: UsersService) {}

  @Get()
  getAllUsers() {
    return this.userService.findAllUsers();
  }

  @Get(':id')
  async getOneUserById(@Param('id') id: number) {
    const result = await this.userService.findOne({ id });
    if (result === null)
      throw new HttpException('user not found', HttpStatus.NOT_FOUND);
    return result;
  }

  @Post()
  async createOneUser(@Body() user: UserRequest) {
    try {
      await this.userService.createOneUser(user);
    } catch {
      throw new HttpException('User already exists', HttpStatus.BAD_REQUEST);
    }
  }

  @UseGuards(JwtAuthGuard)
  @Delete()
  async deleteUser(@User() user: User_) {
    await this.userService.deleteOneUser(user);
  }
}
