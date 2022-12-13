import { toppingsDto } from '../dto/toppings-dto.dto';
import { toppingsService } from '../services/toppings.service';
export declare class toppingsController {
    private readonly toppingsService;
    constructor(toppingsService: toppingsService);
    create(toppingsDto: toppingsDto): Promise<import("../schemas/toppings.schema").toppings>;
    findAll(): Promise<import("../schemas/toppings.schema").toppings[]>;
    update(id: string, toppingsDto: toppingsDto): Promise<import("../schemas/toppings.schema").toppings>;
    delete(id: string): Promise<import("../schemas/toppings.schema").toppings>;
}
