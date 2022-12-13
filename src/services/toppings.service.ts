import { Injectable } from '@nestjs/common';
import { toppingsRepo } from '../repository/toppings.repo';
import { toppings } from '../schemas/toppings.schema';

@Injectable()
export class toppingsService {
    constructor(
        private readonly toppingsRepo: toppingsRepo
    ) { }

    async findAll(): Promise<toppings[]> {
        return this.toppingsRepo.findAll();
    }

    async create(data): Promise<toppings> {
        data.createddate = new Date();
        return this.toppingsRepo.create(data);
    }

    async update(toppingsId, data): Promise<toppings> {
        return this.toppingsRepo.update(toppingsId, data);
    }

    async delete(toppingsId): Promise<toppings> {
        return this.toppingsRepo.delete(toppingsId);
    }
}