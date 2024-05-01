import { Divider, ScrollView, Text, VStack } from "native-base";
import CardConsulta from "../componentes/CardConsulta";
import { Titulo } from "../componentes/Titulo";
import { Botao } from "../componentes/Botao";

export default function Consulta() {
  return (
    <ScrollView p='5' mb={2}>
      <Titulo color='blue.500' > Consultas</Titulo>
      
      <Botao  mt={5} mb={4}>Agendar outra consulta</Botao>

      <Titulo color='blue.500' mb={2} fontSize='lg' alignSelf='flex-start'> Próximas consultas</Titulo>
      <CardConsulta
        nome="Dr. Mateus"
        foto="https://github.com/limamateus.png"
        especialidade="Cardiologista"
        data="03/03/2023"
        foiAgendado        

      />
       <CardConsulta
        nome="Dr. Mateus"
        foto="https://github.com/limamateus.png"
        especialidade="Cardiologista"
        data="03/03/2023"
        foiAgendado        

      />
      <Divider mt={5} h='0.5' />

      <Titulo color='blue.500' mb={2} fontSize='lg' alignSelf='flex-start'> Consultas passadas</Titulo>

      <CardConsulta
        nome="Dr. Mateus"
        foto="https://github.com/limamateus.png"
        especialidade="Cardiologista"
        data="03/03/2023"        
        foiAtendido
      />
        <CardConsulta
        nome="Dr. Mateus"
        foto="https://github.com/limamateus.png"
        especialidade="Cardiologista"
        data="03/03/2023"        
        foiAtendido
      />
        <CardConsulta
        nome="Dr. Mateus"
        foto="https://github.com/limamateus.png"
        especialidade="Cardiologista"
        data="03/03/2023"        
        foiAtendido
      />
        <CardConsulta
        nome="Dr. Mateus"
        foto="https://github.com/limamateus.png"
        especialidade="Cardiologista"
        data="03/03/2023"        
        foiAtendido
      />
    </ScrollView>
  );
}
