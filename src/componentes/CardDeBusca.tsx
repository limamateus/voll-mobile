import { Box, VStack } from "native-base";
import { EntradaTexto } from "./EntradaTexto";
import { Botao } from "./Botao";
import { home } from "../utils/CadastroDeEntradaDeTexto";
import { useState } from "react";
import { buscarEspecialistaPorEstado } from "../servicos/EspecialistaServico";

export default function CardDeBusca({setResultadoBusca}) {

  
  const [estado,setEstado] = useState('')
  const [especialidade,setEspecialidade] = useState('')


  async function buscarEspecialista(){
     if(!estado || !especialidade) return null

     const resultado = await buscarEspecialistaPorEstado(estado,especialidade);
     console.log("Card", resultado)
     if(resultado){
      setResultadoBusca(resultado)
      
     }
  }

  return (
    <VStack>
      <Box
        p={5}
        borderRadius="lg"
        bgColor="gray.100"
        alignSelf="center"
        shadow={3}
        w="100%"
        color='white'
      >
        {home.map((entrada) => {
          return (
            <EntradaTexto
              key={entrada.id}
              label={entrada.label}
              placeholder={entrada.placeholder}
              value={entrada.label === 'Especialidade' ? especialidade : estado }
              onChangeText={entrada.label === 'Especialidade' ? setEspecialidade : setEstado}
            />
          );
        })}

        <Botao
        onPress={() => buscarEspecialista()}
        >Buscar</Botao>
      </Box>
    </VStack>
  );
}
