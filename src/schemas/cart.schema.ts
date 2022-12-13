import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type cartDocument = cart & Document;

@Schema()
export class cart {
   
   @Prop()
   itemname: string; 
   
   @Prop()
   itemquantity: string; 
   
   @Prop()
   itemprice: number; 
   
}

export const cartSchema = SchemaFactory.createForClass(cart);