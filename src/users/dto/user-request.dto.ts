import { IsNotEmpty, IsString } from 'class-validator';

export class UserRequest {
  @IsNotEmpty()
  @IsString()
  username: string;

  @IsString()
  @IsNotEmpty()
  name: string;
  
  @IsNotEmpty()
  @IsString()
  password: string;
}
