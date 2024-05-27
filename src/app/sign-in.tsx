import { MyButton } from "@/components/MyButton";
import { MyInput } from "@/components/MyInput";
import { useAuth } from "@/hooks/useAuth";
import { stylesLogin } from "@/styles/stylesLogin";
import { Feather } from "@expo/vector-icons";
import { SplashScreen, router } from "expo-router";
import { useCallback, useEffect, useState } from "react";
import { Image, Text, View } from "react-native";
import { useFonts, Aldrich_400Regular } from "@expo-google-fonts/aldrich";
import React from "react";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { signIn } = useAuth();
  const [inputSelecionado, setInputSelecionado] = useState(false);
  const [label, setLabel] = useState("");
  const handleFocus = (label: string) => {
    setLabel(label);
    setInputSelecionado(true);
  };

  const handleBlur = () => {
    setInputSelecionado(false);
  };
  const [fontsLoaded, fontError] = useFonts({
    Aldrich_400Regular,
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded || fontError) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);

  if (!fontsLoaded && !fontError) {
    return null;
  }

  

  return (
    <View style={stylesLogin.container}>
      {inputSelecionado ? (
        <View style={stylesLogin.containerInput}>
          <View style={stylesLogin.containerRow}>
            <Feather
              name="chevron-left"
              color="#fff"
              size={40}
              onPress={handleBlur}
            />
            <Text style={stylesLogin.titleWhite}>{label}</Text>
          </View>
          <MyInput
            autoFocusLabel={label}
            onChangeText={label === "USERNAME" ? setUsername : setPassword}
            value={label === "USERNAME" ? username : password}
            onBlur={handleBlur}
            style={stylesLogin.inputSelected}
            secureTextEntry={label === "SENHA"}
            autoFocus
          />
        </View>
      ) : (
        <View style={stylesLogin.container}>
          <View>
            <Image
              source={require("@/assets/caminhao.png")}
              style={stylesLogin.img}
            />
          </View>
          <View>
            <Image source={require("../assets/dile.png")} />
          </View>
          <View>
            <Text style={stylesLogin.title}>AutoMecânica Diesel</Text>
          </View>
          <View style={stylesLogin.form}>
            <View>
              <MyInput
                value={username}
                placeholder="Usuário"
                onFocus={() => handleFocus("USERNAME")}
                onBlur={handleBlur}
              />
            </View>
            <View>
              <MyInput
                placeholder="Senha"
                value={password}
                secureTextEntry
                onFocus={() => handleFocus("SENHA")}
                onBlur={handleBlur}
              />
            </View>
            <View>
              <MyButton
                title="Entrar"
                onPress={() => {
                  signIn(username, password);
                  router.replace("/");
                }}
              />
            </View>
          </View>
        </View>
      )}
    </View>
  );
};

export default Login;
