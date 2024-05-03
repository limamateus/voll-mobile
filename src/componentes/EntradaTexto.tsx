import { FormControl, IInputProps, Input } from "native-base";
import { KeyboardType } from "react-native";

interface InputProps extends IInputProps {
    label?: string;
    placeholder: string;
    secureTextEntry?: boolean;
  leftIcon?: React.ReactNode;
  keyboardType? : KeyboardType;
  value?: string;
  onChangeText?: (text:string) => void;
  }
  
export function EntradaTexto({  
    label, 
    placeholder, 
    keyboardType = "default",
    secureTextEntry = false, 
    value,
    onChangeText

  
  }: InputProps ) {
  return (
    <FormControl mt={3}>
        {label && <FormControl.Label>{label}</FormControl.Label> }
         <Input
            placeholder={placeholder}
            size="lg"
            w="100%"
            borderRadius="lg"
            bgColor="gray.100"
            secureTextEntry={secureTextEntry}
            shadow={3}
            keyboardType={keyboardType}
            value={value}
            onChangeText={onChangeText}
            />
    </FormControl>
   
  );
}
