import { Sexo } from '../enums/sexo.enum';
import { TipoUser } from '../enums/TipoUser.enum';

export class UserDto {
  id: string;
  nome: string;
  cpf: string;
  password: string;
  dataNascimento: Date;
  sexo: Sexo;
  email: string;
  telefone: string;
  endereco: string;
  cidade: string;
  estado: string;
  cep: string;
  tipoUser: TipoUser;
}
