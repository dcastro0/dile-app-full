import React, { useEffect, useState } from "react";
import {
  ActivityIndicator,
  RefreshControl,
  ScrollView,
  Text,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { CardCompletedServices } from "@/components/CardCompletedServices";
import { CardInProgress } from "@/components/CardInProgress";
import { CardCanceled } from "@/components/CardsCanceled";
import { DataCompletedProps } from "@/interfaces/DataCompletedProps";
import { api } from "@/server/api";
import { stylesFormService } from "@/styles/styleFormService";
import { stylesHome } from "@/styles/stylesHome";
import { ScreenProps } from "@/types/ScreenProps";

const Home: React.FC<ScreenProps> = () => {
  const [dataCompleted, setDataCompleted] = useState<DataCompletedProps>({
    today: 0,
    week: 0,
    inProgress: 0,
    canceled: 0,
  });
  const [loading, setLoading] = useState<boolean>(true);
  const [refreshing, setRefreshing] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const fetchData = async () => {
    try {
      const response = await api.get("/home");
      setDataCompleted(response.data);
    } catch (error) {
      setErrorMessage("Erro ao carregar os dados. Por favor, tente novamente.");
    } finally {
      setLoading(false);
    }
  };

  const onRefresh = () => {
    setRefreshing(true);
    fetchData();
    setRefreshing(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    let timer: ReturnType<typeof setTimeout> | null = null;
    if (errorMessage) {
      timer = setTimeout(() => {
        setErrorMessage(null);
      }, 2000);
    }
    return () => {
      if (timer) {
        clearTimeout(timer);
      }
    };
  }, [errorMessage]);

  return (
    <SafeAreaView style={stylesHome.container}>
      <ScrollView
        style={{ flex: 1 }}
        contentContainerStyle={{ flexGrow: 1 }}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      >
        <View style={stylesHome.container}>
          <View style={stylesHome.line}></View>
          <View style={stylesHome.cards}>
            {loading ? (
              <ActivityIndicator size="large" color="#0000ff" />
            ) : (
              <>
                <CardCompletedServices onData={dataCompleted} />
                <CardInProgress onData={dataCompleted} />
                <CardCanceled onData={dataCompleted} />
              </>
            )}
          </View>
          <View style={stylesHome.line}></View>
        </View>
      </ScrollView>
      {errorMessage && (
        <Text style={stylesFormService.errorText}>{errorMessage}</Text>
      )}
    </SafeAreaView>
  );
};

export default Home;
