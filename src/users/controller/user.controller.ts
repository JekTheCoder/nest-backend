import { Body, ClassSerializerInterceptor, Controller, Get, Post, UseInterceptors } from '@nestjs/common';
import { UserRequest, UsersService } from '../service/users.service';

@UseInterceptors(ClassSerializerInterceptor)
@Controller('users')
export class UsersController {

  constructor(private userService: UsersService) {}

  @Get()
  getAllUsers() {
    return this.userService.findAllUsers();
  }

  @Post()
  createOneUser(@Body() user: UserRequest) {
    console.log(user);

    this.userService.createOneUser(user);
  }
}
