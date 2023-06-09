import { Navigate, Route, Routes } from "react-router-dom";
import LoginPage from "../pages/login";
import DashboardPage from "../pages/dashboard";
import RegisterPage from "../pages/register";
import ProtectedRoutes from "./protectedRoutes";
import { ContactProvider } from "../providers/ContactsProvider";

function RoutesMain() {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="*" element={<Navigate to="/" />} />

      <Route element={<ProtectedRoutes />}>
        <Route
          path="/contacts"
          element={
            <ContactProvider>
              <DashboardPage />
            </ContactProvider>
          }
        />
      </Route>
    </Routes>
  );
}

export default RoutesMain;
