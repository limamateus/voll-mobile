import {
  VStack,
  Image,
  Text,
  Box,
  FormControl,
  Input,
  Button,
  Link,
} from "native-base";
import Logo from "./assets/Logo.png";
import { TouchableOpacity } from "react-native";
import { Titulo } from "./componentes/Titulo";
import { EntradaTexto } from "./componentes/EntradaTexto";
import { Botao } from "./componentes/Botao";
export default function Cadastro() {
  return (
    <VStack flex={1} alignItems="center" p={5} justifyContent="center">
      <Image source={Logo} alt="Logo Voll" />

      <Titulo>Realize seu cadastro!</Titulo>
      <Box>
      <EntradaTexto
          label="Nome"
          placeholder="Insira seu endereço de e-mail !"
        />

        <EntradaTexto
          label="Email"
          placeholder="Insira seu endereço de e-mail !"
        />
         <EntradaTexto
          label="Crie uma senha"
          placeholder="Digite sua senha"
          secureTextEntry={true}
        />
        <EntradaTexto
          label="Repita a senha"
          placeholder="Digite sua senha"
          secureTextEntry={true}
        />
      </Box>

      <Botao>Avançar</Botao>

      <Link href="" mt={2}>
        Esqueceu sua senha
      </Link>

      <Box w="100%" flexDirection="row" justifyContent="center" mt={8}>
        <Text> Ainda não tem cadastro?</Text>
        <TouchableOpacity>
          <Text color="blue.500" ml={2}>
            Faça seu cadastro!
          </Text>
        </TouchableOpacity>
      </Box>
    </VStack>
  );
}
