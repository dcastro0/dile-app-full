import { AuthData } from "./AuthData";



interface AuthContextData {
  authData?: AuthData;
  signIn: (username: string, password: string) => Promise<void>;
  signOut: () => Promise<void>;
  loading: boolean;
}

export { AuthContextData };
