import { Box, Image, ScrollView} from "native-base";
import { Titulo } from "../componentes/Titulo";
import { Depoimento } from "../componentes/Depoimento";
import {depoimentos} from '../utils/MockDepoimentos';
import Logo from "../assets/Logo.png"
import CardDeBusca from "../componentes/CardDeBusca";
import { useState } from "react";

export default function Principal() {
  
  const [resultadoBusca,setResultadoBusca] = useState([])
 
  return (
    <ScrollView flex={1} p={5}>
      <Image source={Logo} alt="Logo Voll" alignSelf='center' mt={3} />

      <Titulo color="blue.500" mb={5}> Boas-Vendas!</Titulo>
        <CardDeBusca 
          setResultadoBusca={setResultadoBusca}
        
        />

      <Box p={5}>
        <Titulo color="blue.800">Depoimentos</Titulo>
        {depoimentos.map((depoimento) => {
          return (
            <Depoimento
              key={depoimento.id}
              name={depoimento.nome}
              idade={depoimento.idade}
              cidade={depoimento.cidade}
              depoimento={depoimento.depoimento}
            />
          );
        })}
      </Box>
    </ScrollView>
  );
}
