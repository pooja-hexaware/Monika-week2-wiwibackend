import { menuDto } from '../dto/menu-dto.dto';
import { menuService } from '../services/menu.service';
export declare class menuController {
    private readonly menuService;
    constructor(menuService: menuService);
    create(menuDto: menuDto): Promise<import("../schemas/menu.schema").menu>;
    findAll(): Promise<import("../schemas/menu.schema").menu[]>;
    findOne(id: string): Promise<import("../schemas/menu.schema").menu>;
    update(id: string, menuDto: menuDto): Promise<import("../schemas/menu.schema").menu>;
    delete(id: string): Promise<import("../schemas/menu.schema").menu>;
}
