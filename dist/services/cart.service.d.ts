import { cartRepo } from '../repository/cart.repo';
import { cart } from '../schemas/cart.schema';
export declare class cartService {
    private readonly cartRepo;
    constructor(cartRepo: cartRepo);
    findAll(): Promise<cart[]>;
    create(data: any): Promise<cart>;
    update(cartId: any, data: any): Promise<cart>;
    delete(cartId: any): Promise<cart>;
}
