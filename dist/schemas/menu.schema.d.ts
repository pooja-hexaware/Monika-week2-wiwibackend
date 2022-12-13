import { Document } from 'mongoose';
export declare type menuDocument = menu & Document;
export declare class menu {
    menuname: string;
    menudesc: string;
    price: number;
    toppings: string[];
    storeid: number;
}
export declare const menuSchema: import("mongoose").Schema<Document<menu, any, any>, import("mongoose").Model<Document<menu, any, any>, any, any>, undefined, {}>;
