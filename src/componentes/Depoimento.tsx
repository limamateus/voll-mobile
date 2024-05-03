import { Divider, Text, VStack } from "native-base";



  
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
