import React from "react";
import { Text, View } from "react-native";
import { Feather } from "@expo/vector-icons";
import { DataCompletedProps } from "@/interfaces/DataCompletedProps";
import { stylesHome } from "@/styles/stylesHome";

interface InProgressProps {
  onData: DataCompletedProps;
}

const CardInProgress: React.FC<InProgressProps> = ({ onData }) => {
  return (
    <View style={stylesHome.cardInProgress}>
      <Feather name="rotate-cw" size={40} color="#fff" accessible accessibilityLabel="In Progress Icon" />
      <Text style={stylesHome.textWhite36}>{onData.inProgress}</Text>
      <Text style={stylesHome.textWhite22}>EM ANDAMENTO</Text>
    </View>
  );
};

export { CardInProgress };
