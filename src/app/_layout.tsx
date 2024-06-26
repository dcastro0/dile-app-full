import { AuthProvider } from "@/contexts/Auth";
import { Feather } from "@expo/vector-icons";
import { Stack, router } from "expo-router";
import React from "react";
import { Pressable, TouchableOpacity } from "react-native";

export default function Layout() {
  function back() {
    router.back;
  }
  return (
    <AuthProvider>
      <Stack
        initialRouteName="root"
        screenOptions={{
          headerShown: false,
          headerTitleAlign: "center",
          headerStyle: {
            backgroundColor: "#6D7F9D",
          },
          headerLeft: () => (
            <TouchableOpacity onPress={() => router.back()}>
              <Feather
                name="chevron-left"
                color="#122F61"
                size={40}
                style={{ marginHorizontal: 20 }}
              />
            </TouchableOpacity>
          ),
          headerRight: () => (
            <Pressable onPress={back}>
              <Feather
                name="bell"
                color="#122F61"
                size={30}
                style={{ marginHorizontal: 20 }}
              />
            </Pressable>
          ),
          headerTitleStyle: {
            color: "#122F61",
            fontSize: 30,
          },
        }}
      >
        <Stack.Screen name="root" />
        <Stack.Screen
          name="servicesForm"
          options={{ headerShown: true, title: "SERVIÇOS" }}
        />
        <Stack.Screen
          name="details/[data]"
          options={{ headerShown: true, title: "DETALHES" }}
        />
        <Stack.Screen
          name="updateForm/[onData]"
          options={{ headerShown: true, title: "ATUALIZAR" }}
        />
        <Stack.Screen
          name="archived"
          options={{ headerShown: true, title: "ARQUIVADOS" }}
        />
        <Stack.Screen name="register" />
      </Stack>
    </AuthProvider>
  );
}
