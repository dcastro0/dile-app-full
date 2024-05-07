import { AuthContext } from "@/contexts/Auth";
import { useContext } from "react";


function useAuth() {
  const context = useContext(AuthContext);
  return context;
}

export { useAuth };
