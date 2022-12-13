import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { cart, cartDocument } from 'src/schemas/cart.schema';

@Injectable()
export class cartRepo {
    constructor(
        @InjectModel(cart.name)
        private readonly cartModel: Model<cartDocument>) {}

    async create(data): Promise<cart> {
        return new this.cartModel(data).save()
    }

    async findAll(): Promise<cart[]> {
        return this.cartModel.find({})
            .exec();
        
    }

    async update(cartId, data): Promise<cart> {
        const filter = { _id: cartId };
        return this.cartModel.findOneAndUpdate(filter, data);
    }

    async delete(cartId): Promise<cart> {
        const filter = { _id: cartId };
        return this.cartModel.findByIdAndDelete(cartId);
    }
}