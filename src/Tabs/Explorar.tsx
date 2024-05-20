import { ScrollView } from "native-base";
import { Titulo } from "../componentes/Titulo";
import CardDeBusca from "../componentes/CardDeBusca";
import CardConsulta from "../componentes/CardConsulta";
import { useEffect, useState } from "react";
import { Especialista } from "../interfaces/Especialista";


export default function Explorar({navigation}) {

  const [resultadoBusca,setResultadoBusca] = useState([])
  
  useEffect(()=>{
     
  },resultadoBusca)
  return (
    <ScrollView p='5'>
        <Titulo color='blue.500' mb={5}>Explorar especialidade</Titulo>

        <CardDeBusca
        setResultadoBusca={setResultadoBusca}
        />

        <Titulo color='blue.500' mb={5}>Resultado da busca</Titulo>
        
        {
          resultadoBusca?.map((resultado : Especialista,index) =>{
            return(
              <CardConsulta key={index}
              nome={resultado?.nome}
              especialidade={resultado?.especialidade}
              foto={resultado?.imagem}
              onPress={ () => navigation.navigate('Agendamento',{
                especialistaId: resultado.id
              })}
            />
            )
            
          }) 
        }

    </ScrollView>
  );
}
