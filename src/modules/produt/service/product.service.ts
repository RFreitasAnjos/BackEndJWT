import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ProductEntity } from '../entity/product.entity';
import { Repository } from 'typeorm';
import { ProductDto } from '../dto/product.dto';
import { plainToInstance } from 'class-transformer';
import { createProductDto } from '../dto/createProduct.dto';

@Injectable()
export class ProductService {

    constructor(@InjectRepository(ProductEntity) private produtoRepo: Repository<ProductEntity>) {}

    async create(createProdutoDto: createProductDto): Promise<ProductDto> {
        const produto = this.produtoRepo.create(createProdutoDto);
        const saved = await this.produtoRepo.save(produto);
        return plainToInstance(ProductDto, saved);
    }

    async findAll(): Promise<ProductDto[]> {
        const produtos = await this.produtoRepo.find();
        return plainToInstance(ProductDto, produtos);
    }

    async findByName(produtoDto: ProductDto): Promise<ProductDto> {
        const produto = await this.produtoRepo.findOne({ where: { nomeProduto: produtoDto.nomeProduto } });
        if (produto) {
            return plainToInstance(ProductDto, produto);
        }
        throw new HttpException(`Produto with name ${produto} not found`, HttpStatus.NOT_FOUND);
    }

    async findById(produtoDto: ProductDto): Promise<ProductDto> {
        const produto = await this.produtoRepo.findOne({ where: { id: produtoDto.id } });
        if (produto) {
            return plainToInstance(ProductDto, produto);
        }
        throw new HttpException(`Produto with id ${produto} not found`, HttpStatus.NOT_FOUND);
    }


    async delete(produtoDto: ProductDto): Promise<ProductDto> {
        const produto = await this.produtoRepo.findOne({ where: { id: produtoDto.id } });
        if (produto) {
            await this.produtoRepo.remove(produto);
            return plainToInstance(ProductDto, produto);
        }
        throw new HttpException(`Produto with id ${produto} not found`, HttpStatus.NOT_FOUND);
    }

    async update(id: string, produtoDto: Partial<createProductDto>): Promise<ProductDto> {
        const produtoToUpdate = await this.produtoRepo.findOne({ where: { id } });
        if (produtoToUpdate){
            delete produtoDto['id'];
            delete produtoDto['ativo'];

            const updatedProduto = await this.produtoRepo.save({ ...produtoToUpdate, ...produtoDto });
            return plainToInstance(ProductDto, updatedProduto);
        }
        throw new HttpException(`Produto with id ${id} not found`, HttpStatus.NOT_FOUND);
    }
}
