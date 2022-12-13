import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { toppingsDto } from '../dto/toppings-dto.dto';
import { toppingsService } from '../services/toppings.service';


@Controller('toppings')
export class toppingsController {
    constructor(private readonly toppingsService: toppingsService) { }

    @Post()
    async create(@Body() toppingsDto: toppingsDto) {
        const res = this.toppingsService.create(toppingsDto);
        return res;
    }

    @Get()
    async findAll() {
        return this.toppingsService.findAll();
    }

    @Post('/:id')
    update(@Param('id') id: string, @Body() toppingsDto: toppingsDto) {
        return this.toppingsService.update(id, toppingsDto);
    }

    @Delete('/:id')
    delete(@Param('id') id: string) {
        return this.toppingsService.delete(id);
    }
}