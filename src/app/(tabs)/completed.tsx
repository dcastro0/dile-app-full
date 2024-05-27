import { CardCompleted } from "@/components/CardCompleted";
import { CardCompletedProps } from "@/interfaces/CardCompletedProps";
import { stylesCompleted } from "@/styles/stylesCompleted";
import { ScreenProps } from "@/types/ScreenProps";
import axios from "axios";
import React from "react";
import { useEffect, useState } from "react";
import { ScrollView, Text, View } from "react-native";


const Completed: React.FC<ScreenProps> = () => {
  const [dataCompleted, setDataCompleted] = useState<CardCompletedProps[]>([]);
  useEffect(() => {
    const fetch = async () => {
      const response = await axios.get("http://localhost:8081/api/completed");
      setDataCompleted(response.data);
      console.log(response.data);
    };
    fetch();
  }, []);
  
  return (
    <ScrollView style={stylesCompleted.scroll}>
      <View style={stylesCompleted.container}>
        {dataCompleted.length > 0 ? (
          dataCompleted.map((item) => (
            <CardCompleted key={item.id} onData={item} />
          ))
        ) : (
          <Text>Nenhum serviço finalizado!</Text>
        )}
      </View>
    </ScrollView>
  );
};

export default Completed;
