import { ReactNode, createContext, useEffect, useState } from "react";
import { loginData } from "../pages/login/validators";
import { api } from "../services/api";
import { useNavigate } from "react-router-dom";

interface AuthProviderProps {
  children: ReactNode;
}

interface AuthContextValues {
  signIn: (data: loginData) => void;
  loading: boolean;
}

export const AuthContext = createContext<AuthContextValues>(
  {} as AuthContextValues
);

export function AuthProvider({ children }: AuthProviderProps) {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem("contact-keeper:token");

    if (!token) {
      return;
    }

    api.defaults.headers.common.authorization = `Bearer ${token}`;
    setLoading(false);
  }, []);

  async function signIn(data: loginData) {
    try {
      const response = await api.post("/login", data);

      const token = response.data.token;

      api.defaults.headers.common.authorization = `Bearer ${token}`;

      localStorage.setItem("contact-keeper:token", token);

      navigate("/contacts");
    } catch (error) {
      if (error.request.status === 409) {
        console.log("Usuario nao existe");
      }

      if (error.request.status === 401) {
        console.log("Credenciais invalidas");
      }

      console.error(error);
    }
  }

  return (
    <AuthContext.Provider value={{ signIn, loading }}>
      {children}
    </AuthContext.Provider>
  );
}
