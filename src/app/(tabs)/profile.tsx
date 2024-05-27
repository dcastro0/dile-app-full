import { CardProfile } from "@/components/CardProfile";
import { useAuth } from "@/hooks/useAuth";
import { stylesProfile } from "@/styles/stylesProfile";
import { ScreenProps } from "@/types/ScreenProps";
import { Feather } from "@expo/vector-icons";
import React from "react";
import { Text, Pressable, View } from "react-native";

const Profile: React.FC<ScreenProps> = () => {
  const { signOut, authData } = useAuth();
  return (
    <View style={stylesProfile.container}>
      <CardProfile name={authData?.name} token={authData?.token ?? ""} />
      <Pressable style={stylesProfile.row}>
        <View style={stylesProfile.circle}>
          <Feather name="settings" size={20} color="#122f61" />
        </View>
        <Text style={stylesProfile.text}>Configurações</Text>
        <Feather name="chevron-right" size={30} color="#122f61" />
      </Pressable>
      <Pressable style={stylesProfile.row}>
        <View style={stylesProfile.circle}>
          <Feather name="lock" size={20} color="#122f61" />
        </View>
        <Text style={stylesProfile.text}>Segurança</Text>
        <Feather name="chevron-right" size={30} color="#122f61" />
      </Pressable>
      <Pressable style={stylesProfile.row}>
        <View style={stylesProfile.circle}>
          <Feather name="folder" size={20} color="#122f61" />
        </View>
        <Text style={stylesProfile.text}>Arquivadas</Text>
        <Feather name="chevron-right" size={30} color="#122f61" />
      </Pressable>
      <Pressable style={stylesProfile.row} onPress={signOut}>
        <View style={stylesProfile.circle}>
          <Feather name="log-out" size={20} color="#122f61" />
        </View>
        <Text style={stylesProfile.text}>Sair</Text>
        <Feather name="chevron-right" size={30} color="#122f61" />
      </Pressable>
    </View>
  );
};

export default Profile;
