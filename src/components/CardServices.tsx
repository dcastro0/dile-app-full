import { CardServicesProps } from "@/interfaces/CardServicesProps";
import { stylesServices } from "@/styles/stylesServices";
import { Feather } from "@expo/vector-icons";
import { useEffect, useState } from "react";
import { Text, View } from "react-native";

interface CardServicesProp {
  onData: CardServicesProps;
}

const CardServices = ({ onData }: CardServicesProp) => {
  const [date, setDate] = useState("");
  
  useEffect(() => {
    function formatDate() {
      const data = new Date(onData.created_at);
      const day = data.getDay();
      const month = data.getMonth() +1;
      const year = data.getFullYear();

      if (day < 10 && month < 10) {
        return `0${day}/0${month}/${year}`;
      }
      if (day < 10 ){
        return `0${day}/${month}/${year}`;
      }
      if (month < 10 ){
        return `${day}/0${month}/${year}`;
      }
      return `${day}/${month}/${year}`;
    }

    const data = formatDate();

    setDate(data);
  }, []);
  return (
    <View style={stylesServices.containerCard}>
      <Text style={stylesServices.title}>{onData.name}</Text>
      <View style={stylesServices.card}>
        <View style={stylesServices.row}>
          <View style={stylesServices.row}>
            <Feather name="tool" />
            <Text style={stylesServices.text18}>Itens Resolvidos</Text>
          </View>
          <Text style={stylesServices.data}>{date}</Text>
        </View>
        <View>
          {onData.resolved_item?.map((item) => (
            <View style={stylesServices.row} key={item.id}>
              <Feather name="arrow-right" />
              <Text style={stylesServices.text18} >
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
