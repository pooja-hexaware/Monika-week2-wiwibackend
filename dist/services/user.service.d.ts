import { userRepo } from '../repository/user.repo';
import { user } from '../schemas/user.schema';
export declare class userService {
    private readonly userRepo;
    constructor(userRepo: userRepo);
    findAll(): Promise<user[]>;
    create(data: any): Promise<user>;
    update(userId: any, data: any): Promise<user>;
    delete(userId: any): Promise<user>;
}
