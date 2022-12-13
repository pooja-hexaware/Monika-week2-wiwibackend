import { cartDto } from '../dto/cart-dto.dto';
import { cartService } from '../services/cart.service';
export declare class cartController {
    private readonly cartService;
    constructor(cartService: cartService);
    create(cartDto: cartDto): Promise<import("../schemas/cart.schema").cart>;
    findAll(): Promise<import("../schemas/cart.schema").cart[]>;
    update(id: string, cartDto: cartDto): Promise<import("../schemas/cart.schema").cart>;
    delete(id: string): Promise<import("../schemas/cart.schema").cart>;
}
