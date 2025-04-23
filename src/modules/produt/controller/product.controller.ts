import { Controller, Get, UseGuards } from '@nestjs/common';
import { ProductService } from '../service/product.service';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth/jwt-auth.guard';

@Controller('product')
export class ProductController {

    constructor(private readonly productService: ProductService) {}

    @Get()
    @UseGuards(JwtAuthGuard)
    findAll() {
        return this.productService.findAll();
    }

    


}
