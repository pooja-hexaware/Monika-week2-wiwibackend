import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { toppings, toppingsDocument } from 'src/schemas/toppings.schema';

@Injectable()
export class toppingsRepo {
    constructor(
        @InjectModel(toppings.name)
        private readonly toppingsModel: Model<toppingsDocument>) {}

    async create(data): Promise<toppings> {
        return new this.toppingsModel(data).save();
    }

    async findAll(): Promise<toppings[]> {
        return this.toppingsModel.find({})
            .exec();
    }

    async update(toppingsId, data): Promise<toppings> {
        const filter = { _id: toppingsId };
        return this.toppingsModel.findOneAndUpdate(filter, data);
    }

    async delete(toppingsId): Promise<toppings> {
        const filter = { _id: toppingsId };
        return this.toppingsModel.findByIdAndDelete(toppingsId);
    }
}