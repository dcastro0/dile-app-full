import { CardServices } from "@/components/CardServices";
import { CardServicesProps } from "@/interfaces/CardServicesProps";
import { api } from "@/server/api";
import { stylesFormService } from "@/styles/styleFormService";
import { stylesServices } from "@/styles/stylesServices";
import { Feather } from "@expo/vector-icons";
import { Link } from "expo-router";
import React, { useState, useCallback, useEffect, useMemo } from "react";
import {
  ListRenderItemInfo,
  View,
  ActivityIndicator,
  FlatList,
  RefreshControl,
  Text,
  ScrollView,
} from "react-native";
import { ScreenProps } from "react-native-screens";

const Services: React.FC<ScreenProps> = () => {
  const [dataCompleted, setDataCompleted] = useState<CardServicesProps[]>([]);
  const [refreshing, setRefreshing] = useState(false);
  const [loading, setLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");

  const fetchData = useCallback(async () => {
    try {
      const response = await api.get("/service");
      setDataCompleted(response.data);
    } catch (error) {
      setErrorMessage("Erro ao carregar os dados. Por favor, tente novamente.");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchData();
  }, []);

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    fetchData().then(() => setRefreshing(false));
  }, [fetchData]);

  const renderItem = useMemo(() => {
    return ({ item }: ListRenderItemInfo<CardServicesProps>) => {
      return <CardServices onData={item} />;
    };
  }, []);

  return (
    <View style={stylesServices.container}>
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
