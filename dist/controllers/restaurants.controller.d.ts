import { restaurantsDto } from '../dto/restaurants-dto.dto';
import { restaurantsService } from '../services/restaurants.service';
export declare class restaurantsController {
    private readonly restaurantsService;
    constructor(restaurantsService: restaurantsService);
    create(restaurantsDto: restaurantsDto): Promise<import("../schemas/restaurants.schema").restaurants>;
    findAll(): Promise<import("../schemas/restaurants.schema").restaurants[]>;
    update(id: string, restaurantsDto: restaurantsDto): Promise<import("../schemas/restaurants.schema").restaurants>;
    delete(id: string): Promise<import("../schemas/restaurants.schema").restaurants>;
}
