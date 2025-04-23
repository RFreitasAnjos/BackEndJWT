import { Type } from "class-transformer";
import { IsDate, IsNotEmpty, IsNumber, IsString } from "class-validator";
import { PrimaryGeneratedColumn } from "typeorm";
import { ProductStatus } from "../enums/productStatus.emun";
import { ProductCategory } from "../enums/productCategory.enum";

export class ProductDto {
    id: string;
    nomeProduto: string;
    descricao: string;
    preco: number;
    quantidade: number;
    categoria: ProductCategory;
    imagem: string;
    dataCadastro: Date;
    dataAtualizacao: Date;
    ativo: ProductStatus;
    
}