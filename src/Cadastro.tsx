import { Image, Box, ScrollView, Checkbox, Text, useToast } from "native-base";
import Logo from "./assets/Logo.png";
import { Titulo } from "./componentes/Titulo";
import { EntradaTexto } from "./componentes/EntradaTexto";
import { Botao } from "./componentes/Botao";
import { useState } from "react";
import { sessoes } from "./utils/CadastroDeEntradaDeTexto";
import { cadastrarPaciente } from "./servicos/PacienteServicos";
export default function Cadastro({navigation}) {
  const [numSessao, setNumSessao] = useState(0);
  const [dados, setDados] = useState({} as any);
  const [planos, setPlanos] = useState([] as number[]);
  const toast = useToast(); // Toast para mostrar uma mensagem para usuario final caso tenha dado algum erro na api
  async function cadastrar() {
    const resultado = await cadastrarPaciente({
      cpf: dados.cpf,
      nome: dados.nome,
      email: dados.email,
      estaAtivo: true,
      endereco: {
        cep: dados.cep,
        rua: dados.rua,
        numero: dados.numero,
        complemento: dados.complemento,
        estado: dados.estado,
      },
      senha: dados.senha,
      telefone: dados.telefone,
      possuiPlanoSaude: planos.length > 0,
      planosSaude: planos      
    });

    console.log(resultado)

    if(resultado){
      toast.show({
        title: "Cadastro", // Titulo
        description: "Cadastro realizado com sucesso", // Descrição 
        backgroundColor: "green.500", // cor do toast
      })

      navigation.replace('Login')
    }else{
      toast.show({
        title: "Cadastro", // Titulo
        description: "Não foi possivel realizar o cadastro!", // Descrição 
        backgroundColor: "red.500", // cor do toast
      })
    }
  }

  function mudarSessao() {
    // Essa função permite que eu mude de sessão
    if (numSessao < sessoes.length - 1) {
      // Essa validação garante que não de erro e tente avança para uma sessão maior que minha lista
      setNumSessao(numSessao + 1);
    } else {
      
      cadastrar();
    }
  }

  function voltarSessao() {
    if (numSessao > 0) {
      setNumSessao(numSessao - 1);
    }
  }

  function atualizarDados(id: string, valor: string) {
    setDados({ ...dados, [id]: valor });
  }
  return (
    <ScrollView flex={1} p={5}>
      <Image source={Logo} alt="Logo Voll" alignSelf="center" />

      <Titulo>{sessoes[numSessao].titulo}</Titulo>
      <Box>
        {sessoes[numSessao]?.entradaDeTexto?.map((entrada) => {
          return (
            <EntradaTexto
              label={entrada.label}
              placeholder={entrada.placeholder}
              key={entrada.id}
              secureTextEntry={entrada.secureTextEntry}
              keyboardType={entrada.keyboardType}
              value={dados[entrada.name]}
              onChangeText={(text) => atualizarDados(entrada.name, text)}
            />
          );
        })}
      </Box>

      <Box>
        {numSessao === 2 && (
          <Text color="blue.800" fontSize="md" fontWeight="bold" mb={2} mt={2}>
            Selecione os planos :{" "}
          </Text>
        )}
        {sessoes[numSessao]?.checkbox?.map((check) => {
          return (
            <Checkbox
              key={check.id}
              value={check.value}
              size="md"
              onChange={() => {
                setPlanos((planosAteriores) => {
                  if (planosAteriores.includes(check.id)) {
                    return planosAteriores.filter((id) => id !== check.id);
                  }
                  return [...planosAteriores, check.id];
                });
              }}
              isChecked={planos.includes(check.id)}
            >
              {check.value}
            </Checkbox>
          );
        })}
      </Box>

      {numSessao > 0 && ( // aqui só vou mostrar o botão de volta caso o numero da sessão for maior que 0
        <Botao bgColor="gray.400" onPress={() => voltarSessao()}>
          Voltar
        </Botao>
      )}
      <Botao mt={4} mb={20} onPress={() => mudarSessao()}>
        {numSessao ==2 ? "Salvar" : "Avança"}
      </Botao>
    </ScrollView>
  );
}
