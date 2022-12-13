import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { userDto } from '../dto/user-dto.dto';
import { userService } from '../services/user.service';


@Controller('user')
export class userController {
    constructor(private readonly userService: userService) { }

    @Post()
    async create(@Body() userDto: userDto) {
        const res = this.userService.create(userDto);
        return res;
    }

    @Get()
    async findAll() {
        return this.userService.findAll();
    }

    @Post('/:id')
    update(@Param('id') id: string, @Body() userDto: userDto) {
        return this.userService.update(id, userDto);
    }

    @Delete('/:id')
    delete(@Param('id') id: string) {
        return this.userService.delete(id);
    }
}