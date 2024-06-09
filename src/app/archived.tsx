import React, { useEffect, useState, useCallback, useMemo } from "react";
import {
  Text,
  View,
  FlatList,
  ListRenderItemInfo,
  ActivityIndicator,
  RefreshControl,
  Modal,
  Pressable,
  ScrollView,
} from "react-native";

import { CardCompletedProps } from "@/interfaces/CardCompletedProps";
import { stylesCompleted } from "@/styles/stylesCompleted";
import { ScreenProps } from "@/types/ScreenProps";
import { api } from "@/server/api";
import { CardArchived } from "@/components/CardArchived";
import { stylesFormService } from "@/styles/styleFormService";

const Archived: React.FC<ScreenProps> = () => {
  const [dataCompleted, setDataCompleted] = useState<CardCompletedProps[]>([]);
  const [refreshing, setRefreshing] = useState(false);
  const [loading, setLoading] = useState(true);

  const [errorMessage, setErrorMessage] = useState("");

  const fetchData = useCallback(async () => {
    try {
      const response = await api.get("/archived");
      setDataCompleted(response.data);
    } catch (error) {
      setErrorMessage("Erro ao carregar os dados. Por favor, tente novamente.");
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

  const renderItem = useMemo(() => {
    return ({ item }: ListRenderItemInfo<CardCompletedProps>) => {
      return <CardArchived onData={item} />;
    };
  }, []);

  return (
    <View style={stylesCompleted.container}>
      {loading ? (
        <ActivityIndicator size="large" color="#0000ff" />
      ) : errorMessage ? (
        <ScrollView
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          }
        >
          <Text style={stylesFormService.errorText}>{errorMessage}</Text>
        </ScrollView>
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

export default Archived;
