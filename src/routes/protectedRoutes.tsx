import { useAuth } from "../hooks/useAuth";
import { Outlet } from "react-router-dom";

export default function ProtectedRoutes() {
  const { loading } = useAuth();

  return loading ? <div>Carregando</div> : <Outlet />;
}
