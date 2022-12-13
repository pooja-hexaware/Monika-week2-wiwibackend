import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { cartDto } from '../dto/cart-dto.dto';
import { cartService } from '../services/cart.service';


@Controller('cart')
export class cartController {
    constructor(private readonly cartService: cartService) { }

    @Post()
    async create(@Body() cartDto: cartDto) {
        const res = this.cartService.create(cartDto);
        return res;
    }

    @Get()
    async findAll() {
        return this.cartService.findAll();
    }

    @Post('/:id')
    update(@Param('id') id: string, @Body() cartDto: cartDto) {
        return this.cartService.update(id, cartDto);
        
    }

    @Delete('/:id')
    delete(@Param('id') id: string) {
        return this.cartService.delete(id);
    }
}