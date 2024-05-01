import { Divider, FormControl, IInputProps, Input, Text, VStack } from "native-base";
import { ReactNode } from "react";
import { KeyboardType } from "react-native";


  
export function Depoimento({  
    name, 
    idade, 
    cidade,
    depoimento
}) {
  return (
    <VStack mt={5} mb={5}>
        {depoimento && <Text mb={3}>{depoimento}</Text>}
        {name && <Text fontWeight='bold' textAlign='right'>{name}, {idade}, {cidade}.</Text> }  
        <Divider mt={5} />     
    </VStack>
   
  );
}
