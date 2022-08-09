import { IsNotEmpty } from "class-validator";

export class UserRequest {
    @IsNotEmpty()
    username: string;
    @IsNotEmpty()
    name: string;
    @IsNotEmpty()
    password: string;
}