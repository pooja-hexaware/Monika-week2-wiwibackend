import { Document } from 'mongoose';
export declare type toppingsDocument = toppings & Document;
export declare class toppings {
    tname: string;
    tdesc: string;
    price: number;
}
export declare const toppingsSchema: import("mongoose").Schema<Document<toppings, any, any>, import("mongoose").Model<Document<toppings, any, any>, any, any>, undefined, {}>;
