import { DataCompletedProps } from "@/interfaces/DataCompletedProps";
import { stylesHome } from "@/styles/stylesHome";
import { Feather } from "@expo/vector-icons";
import { useEffect, useState } from "react";
import { Text, View } from "react-native";

interface CanceledServicesProps {
  onData: DataCompletedProps;
}

const CardCanceled = ({ onData }: CanceledServicesProps) => {
  const [canceled, setCanceled] = useState<number>();

  useEffect(() => {
    setCanceled(onData.canceled);
  }, [onData]);

  return (
    <View style={stylesHome.cardCanceled}>
      <Feather name="x" size={40} color="#ff1010" />
      <Text style={stylesHome.textWhite36}>{canceled}</Text>
      <Text style={stylesHome.textWhite22}>CANCELADOS</Text>
    </View>
  );
};

export { CardCanceled };
