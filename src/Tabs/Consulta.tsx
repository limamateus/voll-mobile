import { Divider, ScrollView, useToast } from "native-base";
import CardConsulta from "../componentes/CardConsulta";
import { Titulo } from "../componentes/Titulo";
import { Botao } from "../componentes/Botao";
import { useEffect, useState } from "react";
import { Consultas} from "../interfaces/Consultas";
import { pegarDadosDaConsultaDoPaciente } from "../servicos/PacienteServicos";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { cancelarConsultas } from "../servicos/ConsultaServico";

export default function Consulta() {
  const [consultaPassadas, setConsultasPassadas] = useState<Consultas[]>([]);
  const [consultaProximas, setConsultasProximas] = useState<Consultas[]>([]);
  const toast = useToast()
  useEffect(() => {  
    buscarConsulta() 
  }, []);
  
  async function buscarConsulta() {
    const pacienteId = await AsyncStorage.getItem("pacienteId");
    if (!pacienteId) return;

    const resultado : Consultas[] = await pegarDadosDaConsultaDoPaciente(pacienteId);

    const agora = new Date();
   
    const proximas = resultado.filter((consulta) => new Date(consulta.data) > agora)

    const passadas = resultado.filter((consulta) => new Date(consulta.data) < agora)

    setConsultasProximas(proximas)
    setConsultasPassadas(passadas)

  }
  async function cancelarConsulta(consultaId:string){
    const resultado = await cancelarConsultas(consultaId)
    console.log("Cancelamento", resultado)
    if(resultado == null){
        toast.show({
          title: "Consulta", // Titulo
          description: "Não foi possivel cancelar sua consulta", // Descrição 
          backgroundColor: "red.500", // cor do toast
        })
    }else{
      buscarConsulta()
    }
  }
  return (
    <ScrollView p="5" mb={2}>
      <Titulo color="blue.500"> Consultas</Titulo>

      <Botao mt={5} mb={4}>
        Agendar outra consulta
      </Botao>

      <Titulo color="blue.500" mb={2} fontSize="lg" alignSelf="flex-start">
        {" "}
        Próximas consultas
      </Titulo>
        {
          consultaProximas?.map((consulta) =>{
            return(
              <CardConsulta
              nome={consulta.especialista.nome}
              foto={consulta.especialista.imagem}
              especialidade={consulta.especialista.especialidade}
              data={consulta.data}
              foiAgendado
              onPress={() => cancelarConsulta(consulta.id)}
            />
            )
          })
        }
      
      <Divider mt={5} h="0.5" />

      <Titulo color="blue.500" mb={2} fontSize="lg" alignSelf="flex-start">
        {" "}
        Consultas passadas
      </Titulo>

      {
          consultaPassadas?.map((consulta) =>{
            return(
              <CardConsulta
              nome={consulta.especialista.nome}
              foto={consulta.especialista.imagem}
              especialidade={consulta.especialista.especialidade}
              data={consulta.data}
              foiAtendido
            />
            )
          })
        }
    </ScrollView>
  );
}
