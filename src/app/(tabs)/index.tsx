import { CardCompletedServices } from "@/components/CardCompletedServices";
import { CardInProgress } from "@/components/CardInProgress";
import { CardCanceled } from "@/components/CardsCanceled";
import { MyCard } from "@/components/MyCard";
import { DataCompletedProps } from "@/interfaces/DataCompletedProps";
import { stylesHome } from "@/styles/stylesHome";
import { ScreenProps } from "@/types/ScreenProps";
import { Feather } from "@expo/vector-icons";
import { Link } from "expo-router";
import React, { useEffect, useState } from "react";
import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";


const Home: React.FC<ScreenProps> = () => {
  const [dataCompleted, setDataCompleted] = useState<DataCompletedProps>({
    today: 0,
    week: 0,
    inProgress: 0,
    canceled: 0,
  });

  return (
    <SafeAreaView style={stylesHome.container}>
      <View style={stylesHome.line}></View>
      <View style={stylesHome.cards}>
        <CardCompletedServices onData={dataCompleted} />
        <CardInProgress onData={dataCompleted} />
        <CardCanceled onData={dataCompleted} />
      </View>
      <View style={stylesHome.line}></View>

      <View style={stylesHome.cardsColumn}>
        <Text style={stylesHome.textBlue24}>SERVIÇOS TOTAIS</Text>
        <View style={stylesHome.row}>
          <Feather name="chevron-left" color="#122F61" />
          <Text style={stylesHome.textBlue16}>Janeiro/2024</Text>
          <Feather name="chevron-right" color="#122F61" />
        </View>
        <View style={stylesHome.cards}>
          <MyCard title="CRÍTICO" amount={10} />
          <MyCard title="ALTA" amount={10} />
          <MyCard title="MÉDIA" amount={10} />
        </View>
        
      </View>
    </SafeAreaView>
  );
};

export default Home;
