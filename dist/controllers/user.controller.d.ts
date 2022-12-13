import { userDto } from '../dto/user-dto.dto';
import { userService } from '../services/user.service';
export declare class userController {
    private readonly userService;
    constructor(userService: userService);
    create(userDto: userDto): Promise<import("../schemas/user.schema").user>;
    findAll(): Promise<import("../schemas/user.schema").user[]>;
    update(id: string, userDto: userDto): Promise<import("../schemas/user.schema").user>;
    delete(id: string): Promise<import("../schemas/user.schema").user>;
}
