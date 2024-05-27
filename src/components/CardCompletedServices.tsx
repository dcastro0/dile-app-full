import React from "react";
import { Text, View } from "react-native";
import { Feather } from "@expo/vector-icons";
import { DataCompletedProps } from "@/interfaces/DataCompletedProps";
import { stylesHome } from "@/styles/stylesHome";

interface CompletedServicesProps {
  onData: DataCompletedProps;
}

const CardCompletedServices: React.FC<CompletedServicesProps> = ({ onData }) => {
  return (
    <View style={stylesHome.cardCompleted}>
      <View style={stylesHome.cardItem}>
        <Feather name="check" size={40} color="#1aff31" accessible accessibilityLabel="Completed Services Icon" />
        <Text style={stylesHome.textWhite22}>SERVIÇOS CONCLUÍDOS</Text>
      </View>
      <View style={stylesHome.cardItem}>
        <View style={stylesHome.cardItem2}>
          <Text style={stylesHome.textWhite36}>{onData.today}</Text>
          <Text style={stylesHome.textWhite22}>HOJE</Text>
        </View>
        <View style={stylesHome.cardItem2}>
          <Text style={stylesHome.textWhite36}>{onData.week}</Text>
          <Text style={stylesHome.textWhite22}>SEMANA</Text>
        </View>
      </View>
    </View>
  );
};

export { CardCompletedServices };
