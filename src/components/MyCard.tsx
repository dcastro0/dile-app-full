import React from "react";
import { Text, View } from "react-native";
import { MyCardProps } from "@/interfaces/MyCardProps";
import { stylesHome } from "@/styles/stylesHome";

const MyCard: React.FC<MyCardProps> = ({ amount, title }) => {
  return (
    <View style={stylesHome.myCard}>
      <Text style={stylesHome.textBlue24}>{amount}</Text>
      <Text style={stylesHome.textBlue16}>{title}</Text>
    </View>
  );
};

export { MyCard };
