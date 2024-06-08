import { ResolvedItem } from "@/interfaces/CardServicesProps";
import { api } from "@/server/api";
import { COLORS } from "@/styles/colors";
import { stylesDetails } from "@/styles/stylesDetails";
import { Feather } from "@expo/vector-icons";
import { Link, useLocalSearchParams, useRouter } from "expo-router";
import React from "react";
import { Pressable, Text, View } from "react-native";
import * as Progress from "react-native-progress";

const Details = () => {
  const { data } = useLocalSearchParams();
  const parseData = JSON.parse(data as string);
  const {
    id,
    name,
    name_client,
    phone,
    price,
    observation,
    progress,
    resolved_item,
  } = parseData;

  const archived = async () => {
    try {
      await api.patch(`/service_patch/${id}`);
      console.log("ok");
    } catch (error) {
      console.log(error);
    }
  };
  const saved = async () => {
    try {
      await api.patch(`/service_save/${id}`);
      console.log("ok");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <View style={stylesDetails.container}>
      <View style={stylesDetails.card}>
        <View style={stylesDetails.head}>
          <Text style={stylesDetails.title}>{name}</Text>
          <Link
            href={{ pathname: "updateForm/[onData]", params: { onData: data } }}
          >
            <Feather name="edit" color={COLORS.white} size={28} />
          </Link>
          <Pressable onPress={archived}>
            <Feather name="trash-2" size={28} color={COLORS.red} />
          </Pressable>
          <Pressable onPress={saved}>
            <Feather name="save" size={28} color={COLORS.blue} />
          </Pressable>
        </View>
        <Text style={stylesDetails.text22}>CLIENTE</Text>

        <Text style={stylesDetails.text18}>{name_client}</Text>

        <View style={stylesDetails.row}>
          <Feather name="phone" size={16} />
          <Text style={stylesDetails.text18}>{phone}</Text>
        </View>
        <Text style={stylesDetails.text22}>ITENS RESOLVIDOS</Text>
        {resolved_item && (
          <View>
            {resolved_item.map((item: ResolvedItem) => (
              <View style={stylesDetails.row} key={item.id}>
                <Feather name="arrow-right" size={20} />
                <Text style={stylesDetails.text18}>{item.name}</Text>
              </View>
            ))}
          </View>
        )}
        <Text style={stylesDetails.text22}>OBSERVAÇÃO</Text>
        <Text style={stylesDetails.text18}>{observation}</Text>
        <Text style={stylesDetails.text22}>PROGRESSO</Text>
        <View>
          <Progress.Bar
            progress={progress / 8}
            color={COLORS.blue}
            width={200}
            height={20}
            animationType="timing"
          />
          <Text>{(progress / 8) * 100}%</Text>
        </View>
        <View style={stylesDetails.price}>
          <Text style={stylesDetails.text22}>VALOR: </Text>
          <Text style={stylesDetails.textPrice}>R$ {price}</Text>
        </View>
      </View>
    </View>
  );
};

export default Details;
