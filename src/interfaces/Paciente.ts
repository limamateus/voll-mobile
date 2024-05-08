


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



export interface Endereco{
    cep:string,
    rua: string,
    numero: number,
    complemento: string,
    estado: string,
}