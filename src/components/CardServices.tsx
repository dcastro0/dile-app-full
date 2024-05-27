import React, { useEffect, useState } from "react";
import { Text, View } from "react-native";
import { Feather } from "@expo/vector-icons";
import { CardServicesProps } from "@/interfaces/CardServicesProps";
import { stylesServices } from "@/styles/stylesServices";

interface CardServicesProp {
  onData: CardServicesProps;
}

const CardServices: React.FC<CardServicesProp> = ({ onData }) => {
  const [date, setDate] = useState<string>("");

  useEffect(() => {
    formatDate();
  }, [onData.created_at]);

  const formatDate = () => {
    const data = new Date(onData.created_at);
    const formattedDate = `${data.getDate().toString().padStart(2, "0")}/${(
      data.getMonth() + 1
    )
      .toString()
      .padStart(2, "0")}/${data.getFullYear()}`;
    setDate(formattedDate);
  };

  return (
    <View style={{ ...stylesServices.containerCard, pointerEvents: "auto" }}>
      <Text style={stylesServices.title}>{onData.name}</Text>
      <View style={stylesServices.card}>
        <View style={stylesServices.row}>
          <View style={stylesServices.row}>
            <Feather name="tool" size={20} />
            <Text style={stylesServices.text18}>Itens Resolvidos</Text>
          </View>
          <Text style={stylesServices.data}>{date}</Text>
        </View>
        {onData.resolved_item && (
          <View>
            {onData.resolved_item.map((item) => (
              <View style={stylesServices.row} key={item.id}>
                <Feather name="arrow-right" size={20} />
                <Text style={stylesServices.text18}>{item.name}</Text>
              </View>
            ))}
          </View>
        )}
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
