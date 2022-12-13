import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type menuDocument = menu & Document;

@Schema()
export class menu {
   
   @Prop()
   menuname: string; 
   
   @Prop()
   menudesc: string; 
   
   @Prop()
   price: number; 

   @Prop()
   toppings : string[];

   @Prop()
   storeid:number;
   
}

export const menuSchema = SchemaFactory.createForClass(menu);