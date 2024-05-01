import { ScrollView } from "native-base";
import { Titulo } from "../componentes/Titulo";
import CardDeBusca from "../componentes/CardDeBusca";
import CardConsulta from "../componentes/CardConsulta";

export default function Explorar() {
  return (
    <ScrollView p='5'>
        <Titulo color='blue.500' mb={5}>Explorar especialidade</Titulo>

        <CardDeBusca/>

        <Titulo color='blue.500' mb={5}>Resultado da busca</Titulo>

        <CardConsulta
          especialidade="Angiologista"
          nome="Dra. Ana Lúcia"
          foto=""
        />
        <CardConsulta
          especialidade="Angiologista"
          nome="Dra. Ana Lúcia"
          foto=""
        />
        <CardConsulta
          especialidade="Angiologista"
          nome="Dra. Ana Lúcia"
          foto=""
        />
        <CardConsulta
          especialidade="Angiologista"
          nome="Dra. Ana Lúcia"
          foto=""
        />
        <CardConsulta
          especialidade="Angiologista"
          nome="Dra. Ana Lúcia"
          foto=""
        />

    </ScrollView>
  );
}
