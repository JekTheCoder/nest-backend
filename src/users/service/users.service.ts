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

    findOne(user: Partial<User>) {
        const { username, id } = user;
        return this.userRepo.findOneBy({username, id});
    }

    async createOneUser(userReq: UserRequest) {
        const user = this.userRepo.create(userReq);
        return await this.userRepo.save(user);
    }

    deleteOneUser(condition: { id?: number, username?: string }) {
        const { id, username } = condition;
        return this.userRepo.delete({id, username});
    }
}