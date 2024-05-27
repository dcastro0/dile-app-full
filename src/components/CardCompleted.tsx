import { CardCompletedProps } from "@/interfaces/CardCompletedProps";
import { stylesCompleted } from "@/styles/stylesCompleted";
import { Feather } from "@expo/vector-icons";
import React from "react";
import { Text, View } from "react-native";


interface CompletedProps {
  onData: CardCompletedProps
}


const CardCompleted = ({ onData }: CompletedProps) => {
  return (
    <View style={stylesCompleted.card}>
      <View style={stylesCompleted.row}>
        <Feather name="check-circle" color="#41AE76" size={50} />
        <Text style={stylesCompleted.title}>{onData.name}</Text>
      </View>
      <View style={[stylesCompleted.row, { alignSelf: "flex-end" }]}>
        <Text style={stylesCompleted.title}>{onData.data}</Text>
        <Feather name="folder" size={25} />
      </View>
    </View>
  );
};

export { CardCompleted };
