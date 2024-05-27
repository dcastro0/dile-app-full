import { DataCompletedProps } from "@/interfaces/DataCompletedProps";
import { stylesHome } from "@/styles/stylesHome";
import { Feather } from "@expo/vector-icons";
import React from "react";
import { useEffect, useState } from "react";
import { Text, View } from "react-native";

interface inProgressProps {
  onData: DataCompletedProps;
}

const CardInProgress = ({ onData }: inProgressProps) => {
  const [inProgress, setInProgress] = useState<number>();

  useEffect(() => {
    setInProgress(onData.inProgress);
  }, [onData]);
  return (
    <View style={stylesHome.cardInProgress}>
      <Feather name="rotate-cw" size={40} color="#fff" />
      <Text style={stylesHome.textWhite36}>{inProgress}</Text>
      <Text style={stylesHome.textWhite22}>EM ANDAMENTO</Text>
    </View>
  );
};

export { CardInProgress };
