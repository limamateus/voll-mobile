import { Box, VStack } from "native-base";
import { EntradaTexto } from "./EntradaTexto";
import { Botao } from "./Botao";

import { home } from "../utils/CadastroDeEntradaDeTexto";

export default function CardDeBusca() {
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
            />
          );
        })}

        <Botao>Buscar</Botao>
      </Box>
    </VStack>
  );
}
