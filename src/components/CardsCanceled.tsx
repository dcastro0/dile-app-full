import React from "react";
import { Text, View } from "react-native";
import { Feather } from "@expo/vector-icons";
import { DataCompletedProps } from "@/interfaces/DataCompletedProps";
import { stylesHome } from "@/styles/stylesHome";

interface CanceledServicesProps {
  onData: DataCompletedProps;
}

const CardCanceled: React.FC<CanceledServicesProps> = ({ onData }) => {
  return (
    <View style={stylesHome.cardCanceled}>
      <Feather
        name="x"
        size={40}
        color="#ff1010"
        accessible
        accessibilityLabel="Canceled Services Icon"
      />
      <Text style={stylesHome.textWhite36}>{onData.canceled}</Text>
      <Text style={stylesHome.textWhite22}>CANCELADOS</Text>
    </View>
  );
};

export { CardCanceled };
