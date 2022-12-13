import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { toppingsController } from '../controllers/toppings.controller';
import { toppingsService } from '../services/toppings.service';
import { toppingsRepo } from '../repository/toppings.repo';
import { toppings, toppingsSchema } from '../schemas/toppings.schema';

@Module({
    imports: [
        MongooseModule.forFeature([{ name: toppings.name, schema: toppingsSchema }])
    ],
    controllers: [toppingsController],
    providers: [toppingsService, toppingsRepo],
    exports: [toppingsService, toppingsRepo]
  })
  export class toppingsModule { }