import { useAuth } from "@/hooks/useAuth";
import { stylesHeader } from "@/styles/stylesHeader";
import { Feather } from "@expo/vector-icons";
import { Redirect, Tabs } from "expo-router";
import React from "react";
import { Image, Text, Pressable, View } from "react-native";

const Layout = () => {
  const { authData, loading } = useAuth();

  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>Carregando aplicativo...</Text>
      </View>
    );
  }
  if (!authData) {
    return <Redirect href="/sign-in" />;
  }

  return (
    <Tabs
      initialRouteName="index"
      screenOptions={{
        tabBarActiveTintColor: "#122F61",
        tabBarInactiveTintColor: "#A6BDDB",
        tabBarShowLabel: false,
        tabBarStyle: { height: 80 },
        headerStyle: {
          backgroundColor: "#6D7F9D",
          height: 100,
        },
        headerTitleAlign: "center",
        headerLeft: () => (
          <Pressable>
            <Image
              source={require("@/assets/logo.png")}
              style={stylesHeader.logo}
            />
          </Pressable>
        ),
        headerRight: () => (
          <Pressable>
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
      <Tabs.Screen
        name="index"
        options={{
          title: "HOME",
          tabBarIcon: ({ color }) => (
            <Feather name="home" size={40} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="services"
        options={{
          title: "SERVICES",
          tabBarIcon: ({ color }) => (
            <Feather name="tool" size={40} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="completed"
        options={{
          title: "COMPLETED",
          tabBarIcon: ({ color }) => (
            <Feather name="check" size={40} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "PROFILE",
          tabBarIcon: ({ color }) => (
            <Feather name="user" size={40} color={color} />
          ),
          headerStyle: {
            backgroundColor: "#E7EAEF",
            height: 100,
          },
        }}
      />
    </Tabs>
  );
};

export default Layout;
