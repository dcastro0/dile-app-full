import React from "react";
import { Text, View } from "react-native";
import { Feather } from "@expo/vector-icons";
import { CardCompletedProps } from "@/interfaces/CardCompletedProps";
import { stylesCompleted } from "@/styles/stylesCompleted";

interface CompletedProps {
  onData: CardCompletedProps;
}

const CardCompleted: React.FC<CompletedProps> = React.memo(({ onData }) => {
  const { name, data } = onData;

  return (
    <View style={stylesCompleted.card}>
      <View style={stylesCompleted.row}>
        <Feather name="check-circle" color="#41AE76" size={50} accessible accessibilityLabel="Completed Icon" />
        <Text style={stylesCompleted.title}>{name}</Text>
      </View>
      <View style={[stylesCompleted.row, { alignSelf: "flex-end" }]}>
        <Text style={stylesCompleted.title}>{data}</Text>
        <Feather name="folder" size={25} accessible accessibilityLabel="Folder Icon" />
      </View>
    </View>
  );
});

export { CardCompleted };
