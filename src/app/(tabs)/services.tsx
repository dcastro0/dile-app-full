import React, { useEffect, useState, useCallback } from "react";
import {
  Text,
  View,
  FlatList,
  ListRenderItemInfo,
  ActivityIndicator,
  RefreshControl,
} from "react-native";
import { Link } from "expo-router";
import { Feather } from "@expo/vector-icons";
import { CardServices } from "@/components/CardServices";
import { CardServicesProps } from "@/interfaces/CardServicesProps";
import { stylesServices } from "@/styles/stylesServices";
import { ScreenProps } from "@/types/ScreenProps";
import { api } from "@/server/api";

const Services: React.FC<ScreenProps> = () => {
  const [dataCompleted, setDataCompleted] = useState<CardServicesProps[]>([]);
  const [refreshing, setRefreshing] = useState(false);
  const [loading, setLoading] = useState(true);

  const fetchData = useCallback(async () => {
    try {
      const response = await api.get("/service");
      setDataCompleted(response.data);
      console.log(response.data);
    } catch (error) {
      console.error("Erro ao buscar os serviços:", error);
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

  const renderItem = ({ item }: ListRenderItemInfo<CardServicesProps>) => {
    return <CardServices onData={item} />;
  };

  return (
    <View style={stylesServices.container}>
      {loading ? (
        <ActivityIndicator size="large" color="#0000ff" />
      ) : dataCompleted.length > 0 ? (
        <FlatList
          keyExtractor={(item) => item.id.toString()} // Converter o id para string
          contentContainerStyle={{ gap: 20 }}
          data={dataCompleted}
          renderItem={renderItem}
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          }
        />
      ) : (
        <Text>Nenhum serviço disponível</Text>
      )}

      <Link href="/servicesForm" style={stylesServices.button}>
        <Feather name="plus" color="#fff" />
        <Text style={stylesServices.textWhite}>Adicionar Serviço</Text>
      </Link>
    </View>
  );
};

export default Services;
