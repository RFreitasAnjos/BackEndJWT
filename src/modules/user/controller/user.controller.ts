import { Controller, Delete, Get, Post, Put, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/modules/config/auth/jwt-auth.guard';
import { UserService } from '../service/user.service';

@Controller('user')
export class UserController {
    
    constructor(private readonly userService: UserService) {}

    @Get()
    @UseGuards(JwtAuthGuard)
    findAll() {
        return 'Listando todos os clientes';
    }
    @Get(':id')
    @UseGuards(JwtAuthGuard)
    findOne() {
        return 'Listando um cliente';
    }
    @Post()
    @UseGuards(JwtAuthGuard)
    create() {
        return 'Criando um cliente';
    }
    @Put(':id')
    @UseGuards(JwtAuthGuard)
    update() {
        return 'Atualizando um cliente';
    }
    @Delete(':id')
    @UseGuards(JwtAuthGuard)
    delete() {
        return 'Deletando um cliente';
    }
}
