import { restaurantsRepo } from '../repository/restaurants.repo';
import { restaurants } from '../schemas/restaurants.schema';
export declare class restaurantsService {
    private readonly restaurantsRepo;
    constructor(restaurantsRepo: restaurantsRepo);
    findAll(): Promise<restaurants[]>;
    create(data: any): Promise<restaurants>;
    update(restaurantsId: any, data: any): Promise<restaurants>;
    delete(restaurantsId: any): Promise<restaurants>;
}
