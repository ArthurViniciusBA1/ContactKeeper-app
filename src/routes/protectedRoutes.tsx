import { Outlet } from "react-router-dom";
import { useAuthContext } from "../providers/AuthProvider";

export default function ProtectedRoutes() {
  const { loading } = useAuthContext();

  return loading ? <div>Carregando...</div> : <Outlet />;
}
