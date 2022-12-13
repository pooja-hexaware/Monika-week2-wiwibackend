import { Model } from 'mongoose';
import { toppings, toppingsDocument } from 'src/schemas/toppings.schema';
export declare class toppingsRepo {
    private readonly toppingsModel;
    constructor(toppingsModel: Model<toppingsDocument>);
    create(data: any): Promise<toppings>;
    findAll(): Promise<toppings[]>;
    update(toppingsId: any, data: any): Promise<toppings>;
    delete(toppingsId: any): Promise<toppings>;
}
