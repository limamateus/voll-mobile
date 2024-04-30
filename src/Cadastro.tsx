import {  
  Image,  
  Box,
  ScrollView,
  Checkbox,
  Text,
} from "native-base";
import Logo from "./assets/Logo.png";
import { Titulo } from "./componentes/Titulo";
import { EntradaTexto } from "./componentes/EntradaTexto";
import { Botao } from "./componentes/Botao";
import { useState } from "react";
import { sessoes } from "./utils/CadastroDeEntradaDeTexto";
export default function Cadastro() {
  const [numSessao, setNumSessao] = useState(0); 

  function mudarSessao() {
    // Essa função permite que eu mude de sessão
    if (numSessao < sessoes.length - 1) {
      // Essa validação garante que não de erro e tente avança para uma sessão maior que minha lista
      setNumSessao(numSessao + 1);
    }
  }

  function voltarSessao() {
    if (numSessao > 0) {
      setNumSessao(numSessao - 1);
    }
  }
  return (
    <ScrollView flex={1}  p={5}>
      <Image source={Logo} alt="Logo Voll" alignSelf="center" />

      <Titulo>{sessoes[numSessao].titulo}</Titulo>
      <Box>
        {sessoes[numSessao]?.entradaDeTexto?.map(entrada => {
          return (
            <EntradaTexto
              label={entrada.label}
              placeholder={entrada.placeholder}
              key={entrada.id}
              secureTextEntry={entrada.secureTextEntry}
              keyboardType={entrada.keyboardType} 
            />
          );
        })}
      </Box>

      <Box>
        {sessoes[numSessao]?.checkbox != null && <Text color="blue.800" fontSize="md"  fontWeight='bold' mb={2} mt={2}>Selecione os planos : </Text>}
        {sessoes[numSessao]?.checkbox?.map(check => {
          return<Checkbox key={check.id} value={check.value} size="md" >
            {check.value}
          </Checkbox>
        })}
      </Box>

      {numSessao > 0 && ( // aqui só vou mostrar o botão de volta caso o numero da sessão for maior que 0
        <Botao bgColor="gray.400" onPress={() => voltarSessao()}>
          Voltar
        </Botao>
      )}
      <Botao mt={4} mb={20} onPress={() => mudarSessao()}>
        Avançar
      </Botao>
    </ScrollView>
  );
}
