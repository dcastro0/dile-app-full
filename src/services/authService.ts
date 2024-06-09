import axios from "axios";
import { SignInProp } from "@/interfaces/AuthContextData";
import { AuthData } from "@/interfaces/AuthData";
import { api } from "@/server/api";

async function signIn(data: SignInProp): Promise<AuthData> {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await api.post("/signin", data);
      resolve({
        token: response.data.token,
        email: response.data.email,
        name: response.data.name,
      });
    } catch (error) {
      if (axios.isAxiosError(error) && error.response) {
        reject(
          new Error(error.response.data.message || "Erro de autenticação")
        );
      } else {
        reject(new Error("Erro desconhecido"));
      }
    }
  });
}

export const authService = { signIn };
