import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { restaurantsDto } from '../dto/restaurants-dto.dto';
import { restaurantsService } from '../services/restaurants.service';


@Controller('restaurants')
export class restaurantsController {
    constructor(private readonly restaurantsService: restaurantsService) { }

    @Post()
    async create(@Body() restaurantsDto: restaurantsDto) {
        const res = this.restaurantsService.create(restaurantsDto);
        return res;
    }

    @Get()
    async findAll() {
        return this.restaurantsService.findAll();
    }

    @Post('/:id')
    update(@Param('id') id: string, @Body() restaurantsDto: restaurantsDto) {
        return this.restaurantsService.update(id, restaurantsDto);
    }

    @Delete('/:id')
    delete(@Param('id') id: string) {
        return this.restaurantsService.delete(id);
    }
}