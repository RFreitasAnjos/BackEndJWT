import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { UserDto } from '../dto/user.dto';
import { UserEntity } from '../user.entity';
import { Repository } from 'typeorm';
import { CreateUserDto } from '../dto/createUser.dto';
import { plainToInstance } from 'class-transformer';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class UserService {

    constructor(@InjectRepository(UserEntity) private userRepo: Repository<UserEntity>) {}


    async create(createUserDto: CreateUserDto): Promise<UserDto> {
        const user = this.userRepo.create(createUserDto);
        const saved = await this.userRepo.save(user);   
        return plainToInstance(UserDto, saved);     
    }

    async findAll(): Promise<UserDto[]>{
        const users = await this.userRepo.find();
        return plainToInstance(UserDto, users);
    }

    async findByName(userDto: UserDto): Promise<UserDto> {
        const user = this.userRepo.findOne({ where: { nome: userDto.nome } });
        if (user) {
            return plainToInstance(UserDto, user);
        }
        throw new HttpException(`User with name ${user} not found`, HttpStatus.NOT_FOUND);  
    }



    async findByCpf(userDto: UserDto): Promise<UserDto> {
        const user = this.userRepo.findOne({ where: { cpf: userDto.cpf} })
        if (user){
            return plainToInstance(UserDto, user);
        }
        throw new HttpException(`User with cpf ${user} not found`, HttpStatus.NOT_FOUND);
    }



    async delete(userDto: UserDto): Promise<UserDto> {
        const user = await this.userRepo.findOne({where: { id: userDto.id }});
        if (user) {
            await this.userRepo.remove(user);
            return plainToInstance(UserDto, user);
        }
        throw new HttpException(`User with id ${user} not found`, HttpStatus.NOT_FOUND);  
    }

    async update(id:string, userDto: Partial<CreateUserDto>): Promise<UserDto> {
        const userToUpdate = await this.userRepo.findOne({ where: { id  } });

        if (userToUpdate) {
            delete userDto['id'];
            delete userDto['tipoUser'];

            const updatedUser = await this.userRepo.save({ ...userToUpdate, ...userDto });
            return plainToInstance(UserDto, updatedUser);
        }

        throw new HttpException(`User with id ${userDto.id} not found`, HttpStatus.NOT_FOUND);
    }
 }
