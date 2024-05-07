import { AuthData } from "@/interfaces/AuthData";
import { stylesProfile } from "@/styles/stylesProfile";
import { Feather } from "@expo/vector-icons";
import { Text, View } from "react-native";


const CardProfile = ({ name }: AuthData) => {
  return (
    <View style={stylesProfile.card}>
      <View>
        <Feather name="user" color="#A5BCDB" size={80} />
        <Text style={stylesProfile.text}>{name}</Text>
      </View>
    </View>
  );
};
export { CardProfile };
