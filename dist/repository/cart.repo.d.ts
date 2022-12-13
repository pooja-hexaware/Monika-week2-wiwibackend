import { Model } from 'mongoose';
import { cart, cartDocument } from 'src/schemas/cart.schema';
export declare class cartRepo {
    private readonly cartModel;
    constructor(cartModel: Model<cartDocument>);
    create(data: any): Promise<cart>;
    findAll(): Promise<cart[]>;
    update(cartId: any, data: any): Promise<cart>;
    delete(cartId: any): Promise<cart>;
}
