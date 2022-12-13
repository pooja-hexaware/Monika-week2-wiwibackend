import { Document } from 'mongoose';
export declare type restaurantsDocument = restaurants & Document;
export declare class restaurants {
    restuarantname: string;
    storeId: number;
}
export declare const restaurantsSchema: import("mongoose").Schema<Document<restaurants, any, any>, import("mongoose").Model<Document<restaurants, any, any>, any, any>, undefined, {}>;
