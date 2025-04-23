import { Entity, PrimaryGeneratedColumn, Column, PrimaryColumn } from "typeorm";
import { TipoUser } from "../enums/TipoUser.enum";
import { Sexo } from "../enums/sexo.enum";

@Entity('user')
export class UserEntity {
    
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    nome: string;

    @Column({length: 11, unique: true})
    cpf: string;
    
    @Column({length: 11, unique: true, nullable: true, default: null })
    password:string;

    @Column({type: 'date'})
    dataNascimento: Date;

    @Column({
        type: 'enum',
        enum: Sexo,
        default: Sexo.NAO_INFORMADO,
    })
    sexo: Sexo;

    @Column()
    email: string;

    @Column()
    telefone: string;

    @Column()
    endereco: string;

    @Column()
    cidade: string;

    @Column()
    estado: string;

    @Column()
    cep: string;

    @Column({
        type: 'enum',
        enum: TipoUser,
        default: TipoUser.USER,
    })
    tipoUser: TipoUser;
}