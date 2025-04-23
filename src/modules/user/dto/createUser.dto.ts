import {
    IsEmail,
    IsNotEmpty,
    IsString,
    IsDate,
    IsOptional,
    IsEnum,
  } from 'class-validator';
  import { Type } from 'class-transformer';
  import { TipoUser } from '../enums/TipoUser.enum';
import { PrimaryGeneratedColumn } from 'typeorm';
import { Sexo } from '../enums/sexo.enum';
  
  export class CreateUserDto {

    @PrimaryGeneratedColumn('uuid')
    id: string;

    @IsNotEmpty()
    @IsString()
    nome: string;
  
    @IsNotEmpty()
    @IsString()
    cpf: string;

    @IsNotEmpty()
    @IsString()
    password: string;
  
    @IsNotEmpty()
    @Type(() => Date)
    @IsDate()
    dataNascimento: Date;

    @IsOptional()
    @IsEnum(Sexo)
    sexo?: Sexo;
  
    @IsNotEmpty()
    @IsEmail()
    email: string;
  
    @IsNotEmpty()
    @IsString()
    telefone: string;
  
    @IsNotEmpty()
    @IsString()
    endereco: string;
  
    @IsNotEmpty()
    @IsString()
    cidade: string;
  
    @IsNotEmpty()
    @IsString()
    estado: string;
  
    @IsNotEmpty()
    @IsString()
    cep: string;
  
    @IsOptional()
    @IsEnum(TipoUser)
    tipoUser?: TipoUser;
  }
  