import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserDto } from 'src/modules/user/dto/user.dto';
import { UserService } from 'src/modules/user/service/user.service';

@Injectable()
export class AuthService {
    constructor(
        private readonly userService: UserService,
        private readonly jwtService: JwtService,
    ) {}

    async validateUser(cpf: string, senha: string): Promise<any> {
        const user = await this.userService.findByCpf({ cpf } as UserDto);

        if (user && user.password === senha) {
            const { password, ...result } = user;
            return result;;
        }
        return null;
    }

    async login(user: any){
        const payload = { sub: user.id, nome: user.nome, tipoUser: user.tipoUser };
        return {
            access_token: this.jwtService.sign(payload),
        };
    }
}
