import { CardServices } from "@/components/CardServices";
import { CardServicesProps } from "@/interfaces/CardServicesProps";
import { stylesServices } from "@/styles/stylesServices";
import { ScreenProps } from "@/types/ScreenProps";
import { Feather } from "@expo/vector-icons";
import axios from "axios";
import { Link } from "expo-router";
import React from "react";
import { useEffect, useState } from "react";
import { ScrollView, Text, View } from "react-native";

const Services: React.FC<ScreenProps> = () => {
  const [dataCompleted, setDataCompleted] = useState<CardServicesProps[]>([]);

  useEffect(() => {
    const fetch = async () => {
      const response = await axios.get("http://localhost:8081/api/service");
      setDataCompleted(response.data);
      console.log(response.data);
    };
    fetch();
  }, []);

  return (
    <ScrollView style={stylesServices.scroll}>
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
