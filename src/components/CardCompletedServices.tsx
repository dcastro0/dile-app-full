import { DataCompletedProps } from "@/interfaces/DataCompletedProps";
import { stylesHome } from "@/styles/stylesHome";
import { Feather } from "@expo/vector-icons";
import { useEffect, useState } from "react";
import { Text, View } from "react-native";

interface CompletedServicesProps{
 
  onData: DataCompletedProps
}
const CardCompletedServices = ({onData}:CompletedServicesProps) => {
  

  const [dataCompleted, setDataCompleted] = useState<DataCompletedProps | null>(null)
  useEffect(() => {
    
    
    setDataCompleted(onData)
    
    console.log(dataCompleted);
    
    
    
  }, [onData]);
  
  return (
    <View style={stylesHome.cardCompleted}>
      <View style={stylesHome.cardItem}>
        <Feather name="check" size={40} color="#1aff31" />
        <Text style={stylesHome.textWhite22}>SERVIÇOS CONCLUÍDOS</Text>
      </View>
      <View style={stylesHome.cardItem}>
        <View style={stylesHome.cardItem2}>
          <Text style={stylesHome.textWhite36}>{dataCompleted?.today}</Text>
          <Text style={stylesHome.textWhite22}>HOJE</Text>
        </View>
        <View style={stylesHome.cardItem2}>
          <Text style={stylesHome.textWhite36}>{dataCompleted?.week}</Text>
          <Text style={stylesHome.textWhite22}>SEMANA</Text>
        </View>
      </View>
    </View>
  );
};

export { CardCompletedServices };
