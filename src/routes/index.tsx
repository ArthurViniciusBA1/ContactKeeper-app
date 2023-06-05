import { Route, Routes } from "react-router-dom";
import LoginPage from "../pages/login";
import DashboardPage from "../pages/dashboard";
import RegisterPage from "../pages/register";
import ProtectedRoutes from "./protectedRoutes";

function RoutesMain() {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route element={<ProtectedRoutes />}>
        <Route path="/contacts" element={<DashboardPage />} />
      </Route>
    </Routes>
  );
}

export default RoutesMain;
