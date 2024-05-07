import { CardServicesProps } from "@/interfaces/CardServicesProps";
import { stylesServices } from "@/styles/stylesServices";
import { Feather } from "@expo/vector-icons";
import { Text, View } from "react-native";


interface CardServicesProp {
  onData: CardServicesProps;
}

const CardServices = ({ onData }: CardServicesProp) => {
  return (
    <View style={stylesServices.containerCard}>
      <Text style={stylesServices.title}>{onData.name}</Text>
      <View style={stylesServices.card}>
        <View style={stylesServices.row}>
          <View style={stylesServices.row}>
            <Feather name="tool" />
            <Text style={stylesServices.text18}>Itens Resolvidos</Text>
          </View>
          <Text style={stylesServices.data}>{onData.created_at}</Text>
        </View>
        <View>
          {onData.resolvedItems?.map((item) => (
            <View style={stylesServices.row}>
              <Feather name="arrow-right" />
              <Text style={stylesServices.text18} key={item.id}>
                {item.name}
              </Text>
            </View>
          ))}
        </View>
        <View>
          <View style={stylesServices.row}>
            <Feather name="file-text" />
            <Text style={stylesServices.text18}>Descrição</Text>
          </View>
          <Text>{onData.observation}</Text>
        </View>
      </View>
      <View style={stylesServices.valor}>
        <Text style={stylesServices.textGreen}>R$ {onData.price}</Text>
      </View>
    </View>
  );
};
export { CardServices };
