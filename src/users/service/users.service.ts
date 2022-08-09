import { Injectable } from '@nestjs/common';
import { User } from 'src/entities/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UsersService {
    constructor(private userRepo: Repository<User>) {}

    findAllUsers() {
        return this.userRepo.find();
    }

    findOneById(id: number) {
        return this.userRepo.findOneBy({ id });
    }

    findOneByUsername(username: string) {
        this.userRepo.findOneBy({ username });
    }
}
