import { Model } from 'mongoose';
import { restaurants, restaurantsDocument } from 'src/schemas/restaurants.schema';
export declare class restaurantsRepo {
    private readonly restaurantsModel;
    constructor(restaurantsModel: Model<restaurantsDocument>);
    create(data: any): Promise<restaurants>;
    findAll(): Promise<restaurants[]>;
    update(restaurantsId: any, data: any): Promise<restaurants>;
    delete(restaurantsId: any): Promise<restaurants>;
}
