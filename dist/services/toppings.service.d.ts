import { toppingsRepo } from '../repository/toppings.repo';
import { toppings } from '../schemas/toppings.schema';
export declare class toppingsService {
    private readonly toppingsRepo;
    constructor(toppingsRepo: toppingsRepo);
    findAll(): Promise<toppings[]>;
    create(data: any): Promise<toppings>;
    update(toppingsId: any, data: any): Promise<toppings>;
    delete(toppingsId: any): Promise<toppings>;
}
