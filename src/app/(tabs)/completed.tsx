import { CardCompleted } from "@/components/CardCompleted";
import { CardCompletedProps } from "@/interfaces/CardCompletedProps";
import { stylesCompleted } from "@/styles/stylesCompleted";
import { ScreenProps } from "@/types/ScreenProps";
import { useState } from "react";
import { ScrollView, Text, View } from "react-native";


const Completed: React.FC<ScreenProps> = () => {
  const [dataCompleted, setDataCompleted] = useState<CardCompletedProps[]>([]);
  
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
