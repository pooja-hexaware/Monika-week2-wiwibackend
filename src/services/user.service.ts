import { Injectable } from '@nestjs/common';
import { userRepo } from '../repository/user.repo';
import { user } from '../schemas/user.schema';

@Injectable()
export class userService {
    constructor(
        private readonly userRepo: userRepo
    ) { }

    async findAll(): Promise<user[]> {
        return this.userRepo.findAll();
    }

    async create(data): Promise<user> {
        data.createddate = new Date();
        return this.userRepo.create(data);
    }

    async update(userId, data): Promise<user> {
        return this.userRepo.update(userId, data);
    }

    async delete(userId): Promise<user> {
        return this.userRepo.delete(userId);
    }
}