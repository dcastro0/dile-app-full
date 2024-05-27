import { NativeStackNavigationProp } from "react-native-screens/lib/typescript/native-stack/types";
import { RootTabParamList } from "./RootTabParamList";

/**
 * Tipo para definir as props de navegação das telas em uma aplicação que usa o React Navigation com um stack navigator nativo.
 */
type NavigationProps = NativeStackNavigationProp<RootTabParamList>;

type ScreenProps = {
  /** Props de navegação. */
  navigation: NavigationProps;
  // Adicione tipagem para outras props, se necessário
};

export { ScreenProps };
