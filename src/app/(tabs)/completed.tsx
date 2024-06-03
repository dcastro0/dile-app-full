import React, { useEffect, useState, useCallback } from "react";
import {
  Text,
  View,
  FlatList,
  ListRenderItemInfo,
  ActivityIndicator,
  RefreshControl,
} from "react-native";
import axios from "axios";
import { CardCompleted } from "@/components/CardCompleted";
import { CardCompletedProps } from "@/interfaces/CardCompletedProps";
import { stylesCompleted } from "@/styles/stylesCompleted";
import { ScreenProps } from "@/types/ScreenProps";
import { api } from "@/server/api";

const Completed: React.FC<ScreenProps> = () => {
  const [dataCompleted, setDataCompleted] = useState<CardCompletedProps[]>([]);
  const [refreshing, setRefreshing] = useState(false);
  const [loading, setLoading] = useState(true);

  const fetchData = useCallback(async () => {
    try {
      const response = await api.get("/completed");
      setDataCompleted(response.data);
      console.log(response.data);
    } catch (error) {
      console.error("Erro ao buscar os serviços finalizados:", error);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    fetchData().then(() => setRefreshing(false));
  }, [fetchData]);

  const renderItem = ({ item }: ListRenderItemInfo<CardCompletedProps>) => {
    return <CardCompleted onData={item} />;
  };

  return (
    <View style={stylesCompleted.container}>
      {loading ? (
        <ActivityIndicator size="large" color="#0000ff" />
      ) : dataCompleted.length > 0 ? (
        <FlatList
          data={dataCompleted}
          keyExtractor={(item) => item.id.toString()}
          contentContainerStyle={{ gap: 20 }}
          renderItem={renderItem}
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          }
        />
      ) : (
        <Text>Nenhum serviço finalizado!</Text>
      )}
    </View>
  );
};

export default Completed;
