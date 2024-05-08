const sessoes = [
    {
        id: 1,
        titulo: "Faça seu Cadastro!",
        entradaDeTexto: [
            {
                id: 1,
                label: "CPF",
                placeholder: "Digite seu CPF completo !",
                name:"cpf"
                
            },
            {
                id: 2,
                label: "Nome",
                placeholder: "Digite seu nome completo !",
                name:"nome"
                
            },
            {
                id: 3,
                label: "Email",
                placeholder: "Insira seu endereço de e-mail !",
                keyboardType:"email-address" ,
                name:"email"
            },
            {
                id: 4,
                label: "Crie uma senha",
                placeholder: "Digite sua senha",
                secureTextEntry: true,
                name: "senha"
            },
            {
                id: 5,
                label: "Repita a senha",
                placeholder: "Digite sua senha",
                secureTextEntry: true,
            }

        ],
    },
    {
        id: 2,
        titulo: "Agora, mais alguns dados sobre você:",
        entradaDeTexto: [
            {
                id: 1,
                label: "CEP",
                placeholder: "Insira seu CEP",
                keyboardType:"numeric",               
                name: "cep"
            },
            {
                id: 2,
                label: "Rua",
                placeholder: "Insira seu endereço",
                name:"rua"
            },
            {
                id: 3,
                label: "Número",
                placeholder: "Insira seu número",                
                keyboardType:"numeric",
                name:"numero"
            },
            {
                id: 4,
                label: "Complemento",
                placeholder: "Insira seu complemento",              
                name:"complemento"
            },
            {
                id: 5,
                label: "Estado",
                placeholder: "Insira seu estado",              
                name:"estado"
            },
            {
                id: 6,
                label: "Telefone",
                placeholder: "(00) 00000-0000",              
                keyboardType:"phone-pad",
                name:"telefone"
            },
        ],
    },
    {
        id: 3,
        titulo: "Agora, mais alguns dados sobre você:",
        entradaDeTexto: [],
        checkbox: [
            {
                id: 1,
                value: "Sulamérica",
            },
            {
                id: 2,
                value: "Unimed",
            },
            {
                id: 3,
                value: "Bradesco",
            },
            {
                id: 4,
                value: "Amil",
            },
            {
                id: 5,
                value: "Biosaúde",
            },
            {
                id: 6,
                value: "Biovida",
            },
            {
                id: 7,
                value: "Outros",
            },            

        ],
    },
];

const home = [
    {
      id: 1,
      label: "Especialidade",
      placeholder: "Digite a especialidade",
    },
    {
      id: 2,
      label: "Localização",
      placeholder: "Digite sua localização",
    },
  ];

export { sessoes,home }