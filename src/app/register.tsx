import React, { useCallback, useState } from "react";
import { Image, ScrollView, Text, View, Modal, Pressable } from "react-native";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { SplashScreen, router } from "expo-router";
import { useFonts, Aldrich_400Regular } from "@expo-google-fonts/aldrich";
import { MyButton } from "@/components/MyButton";
import { MyController } from "@/components/MyController";
import { stylesLogin } from "@/styles/stylesLogin";
import { stylesFormService } from "@/styles/styleFormService";
import { registerSchema } from "@/schemas/registerSchema";
import { api } from "@/server/api";
import { RegisterProps } from "@/interfaces/RegisterProps";

const Register = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      email: "",
      password: "",
      name: "",
    },
  });

  const [modalVisible, setModalVisible] = useState(false);
  const [modalMessage, setModalMessage] = useState("");

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

  const onSubmit = async (data: RegisterProps) => {
    try {
      await api.post("/register", data);
      setTimeout(() => {
        router.replace("/sign-in");
      }, 2000);
    } catch (error) {
      if (error instanceof Error) {
        setModalMessage(error.message);
      } else {
        setModalMessage("Erro desconhecido");
      }
      setModalVisible(true);
    }
  };

  return (
    <ScrollView style={stylesLogin.scroll}>
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
        <View style={stylesLogin.line}></View>
        <View style={stylesLogin.form}>
          <View>
            <Text style={stylesLogin.titleform}>REGISTRAR NOVA CONTA</Text>
          </View>
          <View>
            <MyController
              placeholder="E-Mail"
              control={control}
              style={stylesLogin.input}
              name="email"
              inputMode="email"
            />
            {errors.email && (
              <Text style={{ color: "red" }}>{errors.email.message}</Text>
            )}
          </View>
          <View>
            <MyController
              placeholder="Nome"
              control={control}
              style={stylesLogin.input}
              name="name"
              inputMode="text"
            />
            {errors.name && (
              <Text style={{ color: "red" }}>{errors.name.message}</Text>
            )}
          </View>
          <View>
            <MyController
              placeholder="Senha"
              control={control}
              style={stylesLogin.input}
              name="password"
              secureTextEntry
            />
            {errors.password && (
              <Text style={{ color: "red" }}>{errors.password.message}</Text>
            )}
          </View>
          <View>
            <MyButton title="Entrar" onPress={handleSubmit(onSubmit)} />
          </View>
          <View>
            <Pressable
              style={stylesLogin.register}
              onPress={() => router.replace("/sign-in")}
            >
              <Text style={stylesLogin.newaccount}>Fazer Login</Text>
            </Pressable>
          </View>
        </View>
        <View style={stylesLogin.line}></View>
      </View>

      <Modal visible={modalVisible} transparent={true} animationType="slide">
        <Pressable
          style={stylesFormService.modalContainer}
          onPress={() => setModalVisible(false)}
        >
          <View style={stylesFormService.modalContent}>
            <Text style={stylesFormService.modalText}>{modalMessage}</Text>
          </View>
        </Pressable>
      </Modal>
    </ScrollView>
  );
};

export default Register;
