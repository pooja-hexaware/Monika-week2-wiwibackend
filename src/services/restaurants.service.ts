import { Injectable } from '@nestjs/common';
import { restaurantsRepo } from '../repository/restaurants.repo';
import { restaurants } from '../schemas/restaurants.schema';

@Injectable()
export class restaurantsService {
    constructor(
        private readonly restaurantsRepo: restaurantsRepo
    ) { }

    async findAll(): Promise<restaurants[]> {
        return this.restaurantsRepo.findAll();
    }

    async create(data): Promise<restaurants> {
        data.createddate = new Date();
        return this.restaurantsRepo.create(data);
    }

    async update(restaurantsId, data): Promise<restaurants> {
        return this.restaurantsRepo.update(restaurantsId, data);
    }

    async delete(restaurantsId): Promise<restaurants> {
        return this.restaurantsRepo.delete(restaurantsId);
    }
}