import { Body, Controller, Delete, Get, Post, Put, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth/jwt-auth.guard';
import { UserService } from '../service/user.service';
import { CreateUserDto } from '../dto/createUser.dto';

@Controller('user')
export class UserController {
    
    constructor(private readonly userService: UserService) {}

    @Get()
    @UseGuards(JwtAuthGuard)
    findAll() {
        return this.userService.findAll();
    }
    @Get(':id')
    @UseGuards(JwtAuthGuard)
    findOne(@Body() userDto: any) {
        return this.userService.findByName(userDto.nome);
    }
    @Post()
    @UseGuards(JwtAuthGuard)
    create(@Body() createuserdto: CreateUserDto) {
        return this.userService.create(createuserdto);
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
