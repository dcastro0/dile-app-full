import { InputProps } from "@/interfaces/InputProps";
import { stylesLogin } from "@/styles/stylesLogin";
import { useEffect, useRef } from "react";
import { TextInput } from "react-native";

const MyInput = ({ autoFocusLabel, ...rest }: InputProps) => {
  const inputRef = useRef<TextInput>(null);
  useEffect(() => {
    if (autoFocusLabel) {
      inputRef.current?.focus();
    }
  }, [autoFocusLabel]);
  return <TextInput ref={inputRef} style={stylesLogin.input}  {...rest} />;
};



export { MyInput };
