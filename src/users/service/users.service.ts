import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/entities/user.entity';
import { Repository } from 'typeorm';
import { UserRequest } from '../dto/user-request.dto';

@Injectable()
export class UsersService {
    constructor(@InjectRepository(User) private userRepo: Repository<User>) {}

    findAllUsers() {
        return this.userRepo.find();
    }

    findOneById(id: number) {
        return this.userRepo.findOneBy({ id });
    }

    findOneByUsername(username: string) {
        this.userRepo.findOneBy({ username });
    }

    createOneUser(userReq: UserRequest) {
        this.userRepo.save(userReq);
    }
}