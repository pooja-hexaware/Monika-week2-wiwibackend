import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { cartController } from '../controllers/cart.controller';
import { cartService } from '../services/cart.service';
import { cartRepo } from '../repository/cart.repo';
import { cart, cartSchema } from '../schemas/cart.schema';

@Module({
    imports: [
        MongooseModule.forFeature([{ name: cart.name, schema: cartSchema }])
    ],
    controllers: [cartController],
    providers: [cartService, cartRepo],
    exports: [cartService, cartRepo]
  })
  export class cartModule { }