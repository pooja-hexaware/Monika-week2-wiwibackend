import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { user, userDocument } from 'src/schemas/user.schema';

@Injectable()
export class userRepo {
    constructor(
        @InjectModel(user.name)
        private readonly userModel: Model<userDocument>) {}

    async create(data): Promise<user> {
        return new this.userModel(data).save();
    }

    async findAll(): Promise<user[]> {
        return this.userModel.find({})
            .exec();
    }

    async update(userId, data): Promise<user> {
        const filter = { _id: userId };
        return this.userModel.findOneAndUpdate(filter, data);
    }

    async delete(userId): Promise<user> {
        const filter = { _id: userId };
        return this.userModel.findByIdAndDelete(userId);
    }
}