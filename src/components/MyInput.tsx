import React, { useEffect, useRef } from "react";
import { TextInput } from "react-native";
import { InputProps } from "@/interfaces/InputProps";
import { stylesLogin } from "@/styles/stylesLogin";

const MyInput: React.FC<InputProps> = ({ autoFocus, ...rest }) => {
  const inputRef = useRef<TextInput>(null);

  useEffect(() => {
    if (autoFocus) {
      inputRef.current?.focus();
    }
  }, [autoFocus]);

  return <TextInput ref={inputRef} style={stylesLogin.input} {...rest} />;
};

export { MyInput };
