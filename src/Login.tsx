import { VStack, Image, Text, Box, Link, useToast } from "native-base";
import Logo from "./assets/Logo.png";
import { TouchableOpacity } from "react-native";
import { Titulo } from "./componentes/Titulo";
import { EntradaTexto } from "./componentes/EntradaTexto";
import { Botao } from "./componentes/Botao";
import { useEffect, useState } from "react";
import { fazerLogin } from "./servicos/AutenticacaoServicos";
import { jwtDecode } from "jwt-decode";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function Login({ navigation }) {
  const [email, setEmail] = useState(""); // estado para armazenar ou alterar informações de e-mail do componente EntradaTexto
  const [senha, setSenha] = useState("");// estado para armazenar ou alterar informações de senha do componente EntradaTexto
  const [carregandoTela, setCarregandoTela] = useState(true); // estado não carregar a tela enquanto não validar o login
  const toast = useToast(); // Toast para mostrar uma mensagem para usuario final caso tenha dado algum erro na api

  useEffect(() => { // Esse userEffect irá é responsavel por verificar se existe um login já realizado
    async function verificarLogin() {      
      const token = await AsyncStorage.getItem("token");
      if (token) {
        navigation.navigate("Tabs");
      }
    }

    verificarLogin();

    setCarregandoTela(false);
  }, []);
  async function Login() { // Funcção asyncrono para realizar o login 
    
    const resultado = await fazerLogin(email, senha); // 1 - Realizo a requisição na api passando o e-mail e senha
    
    if (resultado) { // 2 - Coso tenha algum resultado 
      const { token } = resultado; // pego o token 
      AsyncStorage.setItem("token", token); // Armazeno no AsyncStorege
      const decodeToken = jwtDecode(token) as any; // Decodifico o token 
      const pacienteId = decodeToken.id; // Pego o id do paciente
      AsyncStorage.setItem("pacienteId", pacienteId); // Armazeno no AsyncStorage
    } else { // Caso de algum erro
      toast.show({
        title: "Erro no Login", // Titulo
        description: "O e-mail ou senha não conferem", // Descrição 
        backgroundColor: "red.500", // cor do toast
      });
    }
  }

  if (carregandoTela) {
    return null;
  }
  return (
    <VStack flex={1} alignItems="center" p={5} justifyContent="center">
      <Image source={Logo} alt="Logo Voll" />

      <Titulo>Faça login em sua conta!</Titulo>
      <Box>
        <EntradaTexto
          label="Email"
          placeholder="Insira seu endereço de e-mail !"
          keyboardType={"email-address"}
          value={email}
          onChangeText={setEmail}
        />

        <EntradaTexto
          label="Senha"
          placeholder="Digite sua senha"
          secureTextEntry={true}
          value={senha}
          onChangeText={setSenha}
        />
      </Box>

      <Botao onPress={() => Login()}>Entra</Botao>

      <Link href="" mt={2}>
        Esqueceu sua senha
      </Link>

      <Box w="100%" flexDirection="row" justifyContent="center" mt={8}>
        <Text> Ainda não tem cadastro?</Text>
        <TouchableOpacity onPress={() => navigation.navigate("Cadastro")}>
          <Text color="blue.500" ml={2}>
            Faça seu cadastro!
          </Text>
        </TouchableOpacity>
      </Box>
    </VStack>
  );
}
