import { CardServicesProps } from "@/interfaces/CardServicesProps";
import { stylesServices } from "@/styles/stylesServices";
import { Feather } from "@expo/vector-icons";
import React, { useEffect, useState } from "react";
import { Text, View } from "react-native";

interface CardServicesProp {
  onData: CardServicesProps;
}

const CardServices = ({ onData }: CardServicesProp) => {
  const [date, setDate] = useState("");

  useEffect(() => {
    function formatDate() {
      const data = new Date(onData.created_at);
      const day = data.getDate();
      const month = data.getMonth() + 1;
      const year = data.getFullYear();

      const formattedDay = day < 10 ? `0${day}` : day;
      const formattedMonth = month < 10 ? `0${month}` : month;

      return `${formattedDay}/${formattedMonth}/${year}`;
    }

    const formattedDate = formatDate();
    setDate(formattedDate);
  }, [onData.created_at]);

  return (
    <View style={{ ...stylesServices.containerCard, pointerEvents: 'auto' }}>
      <Text style={stylesServices.title}>{onData.name}</Text>
      <View style={stylesServices.card}>
        <View style={stylesServices.row}>
          <View style={stylesServices.row}>
            <Feather name="tool" size={20} />
            <Text style={stylesServices.text18}>Itens Resolvidos</Text>
          </View>
          <Text style={stylesServices.data}>{date}</Text>
        </View>
        <View>
          {onData.resolved_item?.map((item) => (
            <View style={stylesServices.row} key={item.id}>
              <Feather name="arrow-right" size={20} />
              <Text style={stylesServices.text18}>{item.name}</Text>
            </View>
          ))}
        </View>
        <View>
          <View style={stylesServices.row}>
            <Feather name="file-text" size={20} />
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
