import { AuthContextData } from "@/interfaces/AuthContextData";
import { AuthData } from "@/interfaces/AuthData";
import { AuthProviderProps } from "@/interfaces/AuthProviderProps";
import { authService } from "@/services/authService";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { createContext, useEffect, useState } from "react";
import { Alert } from "react-native";
import React from "react";

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [authData, setAuthData] = useState<AuthData>();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadFromStorage();
  }, []);

  async function loadFromStorage() {
    const auth = await AsyncStorage.getItem("@AuthData");

    if (auth) {
      setAuthData(JSON.parse(auth) as AuthData);
    }

    setLoading(false);
  }

  async function signIn(username: string, password: string): Promise<void> {
    try {
      const auth = await authService.signIn(username, password);
      setAuthData(auth);
      AsyncStorage.setItem("@AuthData", JSON.stringify(auth));
    } catch (error: any) {
      Alert.alert(error.message, "tente novamente");
    }
  }

  async function signOut(): Promise<void> {
    setAuthData(undefined);
    AsyncStorage.removeItem("@AuthData");
    return;
  }

  return (
    <AuthContext.Provider value={{ authData, loading, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
