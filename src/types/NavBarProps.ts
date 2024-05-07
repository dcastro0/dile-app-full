import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootTabParamList } from "./RootTabParamList";


type NavBarProps = {
  navigation: NativeStackNavigationProp<RootTabParamList>;
  screen: string;
};

export { NavBarProps };
