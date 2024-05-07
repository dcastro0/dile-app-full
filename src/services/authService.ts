import { AuthData } from "@/interfaces/AuthData";

function signIn(username: string, password: string): Promise<AuthData> {
  return new Promise((resolve, reject) => {
    if (password === "123456") {
      resolve({
        token: "fake-token",
        username,
        name: username,
      });
    } else {
      reject(new Error("Credenciais inválidas"));
    }
  });
}

export const authService = { signIn };
