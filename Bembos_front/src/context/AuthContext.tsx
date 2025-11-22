import { createContext, useState} from "react";
import type { ReactNode } from "react";
import type { AuthData } from "../interfaces/user";

interface AuthContextType extends AuthData {
  login: (token: string, type: "worker" | "user") => void;
  logout: () => void;
}

export const AuthContext = createContext<AuthContextType>({
  token: null,
  type: null,
  login: () => {},
  logout: () => {},
});

export function AuthProvider({ children }: { children: ReactNode }) {
  const [token, setToken] = useState<string | null>(
    localStorage.getItem("token")
  );
  const [type, setType] = useState<"worker" | "user" | null>(
    localStorage.getItem("type") as any
  );

  function login(token: string, type: "worker" | "user") {
    setToken(token);
    setType(type);

    localStorage.setItem("token", token);
    localStorage.setItem("type", type);
  }

  function logout() {
    setToken(null);
    setType(null);
    localStorage.removeItem("token");
    localStorage.removeItem("type");
  }

  return (
    <AuthContext.Provider value={{ token, type, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}
