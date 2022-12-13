import { Injectable } from '@nestjs/common';
import { cartRepo } from '../repository/cart.repo';
import { cart } from '../schemas/cart.schema';

@Injectable()
export class cartService {
    constructor(
        private readonly cartRepo: cartRepo
    ) { }

    async findAll(): Promise<cart[]> {
        return this.cartRepo.findAll();
    }

    async create(data): Promise<cart> {
        data.createddate = new Date();
        return this.cartRepo.create(data);
    }

    async update(cartId, data): Promise<cart> {
        return this.cartRepo.update(cartId, data);
    }

    async delete(cartId): Promise<cart> {
        return this.cartRepo.delete(cartId);
    }
}