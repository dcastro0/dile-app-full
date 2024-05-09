import { CardServices } from "@/components/CardServices";
import { CardServicesProps } from "@/interfaces/CardServicesProps";
import { stylesServices } from "@/styles/stylesServices";
import { ScreenProps } from "@/types/ScreenProps";
import { Feather } from "@expo/vector-icons";
import axios from "axios";
import { useEffect, useState } from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";

const Services: React.FC<ScreenProps> = () => {
  const [dataCompleted, setDataCompleted] = useState<CardServicesProps[]>([]);

  useEffect(() => {
    const fetch = async () => {
      const response = await axios.get("http://localhost:8081/service");
      setDataCompleted(response.data);
      console.log(dataCompleted);
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
        <TouchableOpacity style={stylesServices.button}>
          <Feather name="plus" color="#fff" />
          <Text style={stylesServices.textWhite}>Adicionar Serviço</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default Services;
