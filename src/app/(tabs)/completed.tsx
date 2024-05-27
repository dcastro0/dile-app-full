import React, { useEffect, useState, useCallback } from "react";
import { ScrollView, Text, View, RefreshControl } from "react-native";
import axios from "axios";
import { CardCompleted } from "@/components/CardCompleted";
import { CardCompletedProps } from "@/interfaces/CardCompletedProps";
import { stylesCompleted } from "@/styles/stylesCompleted";
import { ScreenProps } from "@/types/ScreenProps";

const Completed: React.FC<ScreenProps> = () => {
  const [dataCompleted, setDataCompleted] = useState<CardCompletedProps[]>([]);
  const [refreshing, setRefreshing] = useState(false);

  const fetchData = async () => {
    try {
      const response = await axios.get("https://cce8-38-183-120-2.ngrok-free.app/api/completed");
      setDataCompleted(response.data);
      console.log(response.data);
    } catch (error) {
      console.error("Erro ao buscar os serviços finalizados:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    fetchData().then(() => setRefreshing(false));
  }, []);

  return (
    <ScrollView
      style={stylesCompleted.scroll}
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }
    >
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
