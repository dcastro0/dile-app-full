import { PressableProps } from "react-native";

/**
 * Interface que define as propriedades esperadas por um botão personalizado.
 */
interface ButtonProps extends PressableProps {
  /** Texto exibido no botão. */
  title: string;
}

export { ButtonProps };
