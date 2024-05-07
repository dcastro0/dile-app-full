import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootTabParamList } from "./RootTabParamList";

type ScreenNavigationProp = NativeStackNavigationProp<RootTabParamList>;

type ScreenProps = {
  navigation: ScreenNavigationProp;
};

export { ScreenProps };
