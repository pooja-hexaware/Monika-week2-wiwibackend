import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type restaurantsDocument = restaurants & Document;

@Schema()
export class restaurants {
   
   @Prop()
   restuarantname: string; 
   
   @Prop()
   storeId: number; 
   
}

export const restaurantsSchema = SchemaFactory.createForClass(restaurants);