import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { restaurantsController } from '../controllers/restaurants.controller';
import { restaurantsService } from '../services/restaurants.service';
import { restaurantsRepo } from '../repository/restaurants.repo';
import { restaurants, restaurantsSchema } from '../schemas/restaurants.schema';

@Module({
    imports: [
        MongooseModule.forFeature([{ name: restaurants.name, schema: restaurantsSchema }])
    ],
    controllers: [restaurantsController],
    providers: [restaurantsService, restaurantsRepo],
    exports: [restaurantsService, restaurantsRepo]
  })
  export class restaurantsModule { }