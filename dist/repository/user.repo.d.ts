import { Model } from 'mongoose';
import { user, userDocument } from 'src/schemas/user.schema';
export declare class userRepo {
    private readonly userModel;
    constructor(userModel: Model<userDocument>);
    create(data: any): Promise<user>;
    findAll(): Promise<user[]>;
    update(userId: any, data: any): Promise<user>;
    delete(userId: any): Promise<user>;
}
