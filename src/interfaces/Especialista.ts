import { Endereco } from "./Endereco"

export interface  Especialista {
    nome: string;
    crm: string;
    imagem: string;
    estaAtivo: boolean;
    especialidade: string;
    email: string;
    telefone: string;
    possuiPlanoSaude: boolean;
    planosSaude: string[];
    role: string;
    id: string;
    endereco: Endereco;
    avaliacoes: any[];
  }
  
