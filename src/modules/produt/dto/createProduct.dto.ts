import { Type } from "class-transformer";
import { IsDate, IsEnum, IsNotEmpty, IsNumber, IsString } from "class-validator";
import { PrimaryGeneratedColumn } from "typeorm";
import { ProductCategory } from "../enums/productCategory.enum";
import { ProductStatus } from "../enums/productStatus.emun";

export class createProductDto {
    
    @PrimaryGeneratedColumn('uuid')
    id: string;
    
    @IsNotEmpty()
    @IsString()
    nomeProduto: string;

    @IsNotEmpty()
    @IsString()
    descricao: string;

    @IsNotEmpty()
    @IsNumber()
    preco: number;
    
    // Fazer Enum
    @IsNotEmpty()
    @IsNumber()
    quantidade: number;

    @IsNotEmpty()
    @IsEnum(ProductCategory)
    categoria?: ProductCategory;


    @IsNotEmpty()
    @IsString()
    imagem: string;

    @IsNotEmpty()
    @Type(() => Date)
    @IsDate()
    dataCadastro: Date;

    @IsNotEmpty()
    @Type(() => Date)
    @IsDate()
    dataAtualizacao: Date;
    
    @IsNotEmpty()
    @IsEnum(ProductStatus)
    ativo?: ProductStatus;
    
}