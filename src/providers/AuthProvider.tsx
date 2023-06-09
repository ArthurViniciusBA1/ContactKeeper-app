import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import { loginData } from "../pages/login/validators";
import { api } from "../services/api";
import { useNavigate } from "react-router-dom";

interface AuthProviderProps {
  children: ReactNode;
}

interface AuthContextValues {
  signIn: (data: loginData) => void;
  logout: () => void;
  loading: boolean;
  user: any;
}

export const AuthContext = createContext<AuthContextValues>(
  {} as AuthContextValues
);

export function AuthProvider({ children }: AuthProviderProps) {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    const token = localStorage.getItem("contact-keeper:token");

    if (!token) {
      navigate("/");
      return;
    }

    api.defaults.headers.common.authorization = `Bearer ${token}`;
    setLoading(false);

    getUser();
  }, []);

  async function getUser() {
    try {
      const user = await api.get("/users");
      setUser(user.data);
    } catch (error) {
      console.error(error);
      logout();
    }
  }

  async function signIn(data: loginData) {
    try {
      const response = await api.post("/login", data);
      const token = response.data.token;

      api.defaults.headers.common.authorization = `Bearer ${token}`;
      localStorage.setItem("contact-keeper:token", token);

      navigate("/contacts");
      setLoading(false);
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

  function logout() {
    localStorage.removeItem("contact-keeper:token");
    setUser(null);
    navigate("/");
  }

  return (
    <AuthContext.Provider value={{ signIn, logout, loading, user }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuthContext = () => useContext(AuthContext);
