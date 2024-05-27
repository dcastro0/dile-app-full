import React, { useEffect, useState, useCallback } from "react";
import { ScrollView, Text, View, RefreshControl } from "react-native";
import { Link } from "expo-router";
import { Feather } from "@expo/vector-icons";
import axios from "axios";
import { CardServices } from "@/components/CardServices";
import { CardServicesProps } from "@/interfaces/CardServicesProps";
import { stylesServices } from "@/styles/stylesServices";
import { ScreenProps } from "@/types/ScreenProps";

const Services: React.FC<ScreenProps> = () => {
  const [dataCompleted, setDataCompleted] = useState<CardServicesProps[]>([]);
  const [refreshing, setRefreshing] = useState(false);

  const fetchData = async () => {
    try {
      const response = await axios.get("https://cce8-38-183-120-2.ngrok-free.app/api/service");
      setDataCompleted(response.data);
      console.log(response.data);
    } catch (error) {
      console.error("Erro ao buscar os serviços:", error);
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
      style={stylesServices.scroll}
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }
    >
      <View style={stylesServices.container}>
        {dataCompleted.length > 0 ? (
          dataCompleted.map((item) => (
            <CardServices key={item.id} onData={item} />
          ))
        ) : (
          <Text>Nenhum serviço disponível</Text>
        )}

        <Link href="/servicesForm" style={stylesServices.button}>
          <Feather name="plus" color="#fff" />
          <Text style={stylesServices.textWhite}>Adicionar Serviço</Text>
        </Link>
      </View>
    </ScrollView>
  );
};

export default Services;
