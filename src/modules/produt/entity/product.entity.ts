import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { ProductStatus } from "../enums/productStatus.emun";
import { ProductCategory } from "../enums/productCategory.enum";

@Entity('produt')
export class ProductEntity {

    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    nomeProduto: string;

    @Column()
    descricao: string;

    @Column()
    preco: number;

    @Column()
    quantidade: number;

    @Column({
        type: 'enum',
        enum: ProductCategory,
    })
    categoria: string;
    
    @Column()
    imagem: string;

    @Column()
    dataCadastro: Date;

    @Column()
    dataAtualizacao: Date;

    @Column({
        type: 'enum',
        enum: ProductStatus,
        default: ProductStatus.ATIVO,
    })
    ativo: string;

    
}