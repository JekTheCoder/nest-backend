import { Body, ClassSerializerInterceptor, Controller, Get, HttpException, HttpStatus, Param, Post, UseInterceptors } from '@nestjs/common';
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
    const result = await this.userService.findOneById(id);
    if (result === null) throw new HttpException('user not found', HttpStatus.NOT_FOUND)
    return result;
  }

  @Post()
  createOneUser(@Body() user: UserRequest) {
    console.log(user);

    this.userService.createOneUser(user);
  }
}
