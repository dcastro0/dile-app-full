import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { Feather } from "@expo/vector-icons";
import { CardCompletedProps } from "@/interfaces/CardCompletedProps";
import { stylesCompleted } from "@/styles/stylesCompleted";
import { COLORS } from "@/styles/colors";
import { router } from "expo-router";

interface CompletedProps {
  onData: CardCompletedProps;
}

const CardArchived: React.FC<CompletedProps> = React.memo(({ onData }) => {
  const { name, data } = onData;

  return (
    <TouchableOpacity
      onPress={() =>
        router.navigate({
          pathname: "/details/[data]",
          params: { data: JSON.stringify(onData) },
        })
      }
      style={stylesCompleted.card}
    >
      <View style={stylesCompleted.row}>
        <Feather
          name="archive"
          color={COLORS.blue}
          size={50}
          accessible
          accessibilityLabel="Archive Icon"
        />
        <Text style={stylesCompleted.title}>{name}</Text>
      </View>
      <View style={[stylesCompleted.row, { alignSelf: "flex-end" }]}>
        <Text style={stylesCompleted.title}>{data}</Text>
        <Feather
          name="folder"
          size={25}
          accessible
          accessibilityLabel="Folder Icon"
        />
      </View>
    </TouchableOpacity>
  );
});

export { CardArchived };
