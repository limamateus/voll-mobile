import { Endereco } from "./Endereco"

export interface Paciente {
    cpf: string,
    nome: string,
    email: string,
    estaAtivo: boolean,
    endereco: Endereco,
    senha: string,
    telefone: number,
    possuiPlanoSaude?: boolean,
    planosSaude?: number[],
    
}



