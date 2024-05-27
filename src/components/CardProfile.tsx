import React from "react";
import { Text, View } from "react-native";
import { Feather } from "@expo/vector-icons";
import { AuthData } from "@/interfaces/AuthData";
import { stylesProfile } from "@/styles/stylesProfile";

const CardProfile: React.FC<AuthData> = ({ name }) => {
  return (
    <View style={stylesProfile.card}>
      <View>
        <Feather
          name="user"
          color="#A5BCDB"
          size={80}
          accessible
          accessibilityLabel="User Icon"
        />
        <Text style={stylesProfile.text}>{name}</Text>
      </View>
    </View>
  );
};

export { CardProfile };
