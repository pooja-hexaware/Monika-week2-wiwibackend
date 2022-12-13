import { Model } from 'mongoose';
import { menu, menuDocument } from 'src/schemas/menu.schema';
export declare class menuRepo {
    private readonly menuModel;
    constructor(menuModel: Model<menuDocument>);
    create(data: any): Promise<menu>;
    findOne(id: any): Promise<menu>;
    findAll(): Promise<menu[]>;
    update(menuId: any, data: any): Promise<menu>;
    delete(menuId: any): Promise<menu>;
}
