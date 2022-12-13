import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { restaurants, restaurantsDocument } from 'src/schemas/restaurants.schema';

@Injectable()
export class restaurantsRepo {
    constructor(
        @InjectModel(restaurants.name)
        private readonly restaurantsModel: Model<restaurantsDocument>) {}

    async create(data): Promise<restaurants> {
        return new this.restaurantsModel(data).save();
    }

    async findAll(): Promise<restaurants[]> {
        return this.restaurantsModel.find({})
            .exec();
    }

    async update(restaurantsId, data): Promise<restaurants> {
        const filter = { _id: restaurantsId };
        return this.restaurantsModel.findOneAndUpdate(filter, data);
    }

    async delete(restaurantsId): Promise<restaurants> {
        const filter = { _id: restaurantsId };
        return this.restaurantsModel.findByIdAndDelete(restaurantsId);
    }
}