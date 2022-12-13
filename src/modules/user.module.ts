import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { userController } from '../controllers/user.controller';
import { userService } from '../services/user.service';
import { userRepo } from '../repository/user.repo';
import { user, userSchema } from '../schemas/user.schema';

@Module({
    imports: [
        MongooseModule.forFeature([{ name: user.name, schema: userSchema }])
    ],
    controllers: [userController],
    providers: [userService, userRepo],
    exports: [userService, userRepo]
  })
  export class userModule { }