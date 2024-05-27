import { TextInputProps } from "react-native";

/**
 * Interface que define as propriedades de um componente de entrada de texto.
 */
interface InputProps extends TextInputProps {
  /** Rótulo do campo de entrada de texto a ser focado automaticamente. */
  autoFocusLabel?: string;
}

export { InputProps };
