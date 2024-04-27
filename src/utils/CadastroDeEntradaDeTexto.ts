const sessoes = [
    {
        id: 1,
        titulo: "Faça seu Cadastro!",
        entradaDeTexto: [
            {
                id: 1,
                label: "Nome",
                placeholder: "Digite seu nome completo !",
            },
            {
                id: 2,
                label: "Email",
                placeholder: "Insira seu endereço de e-mail !",
                keyboardType:"email-address" 
            },
            {
                id: 3,
                label: "Crie uma senha",
                placeholder: "Digite sua senha",
                secureTextEntry: true,
            },
            {
                id: 4,
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
            },
            {
                id: 2,
                label: "Endereço",
                placeholder: "Insira seu endereço",
            },
            {
                id: 3,
                label: "Número",
                placeholder: "Insira seu número",                
                keyboardType:"numeric"
            },
            {
                id: 4,
                label: "Complemento",
                placeholder: "Insira seu complemento",              
               
            },
            {
                id: 5,
                label: "Telefone",
                placeholder: "(00) 00000-0000",              
                keyboardType:"phone-pad"
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
            {
                id: 9,
                value: "Não tenho plano",
            },

        ],
    },
];


export { sessoes }