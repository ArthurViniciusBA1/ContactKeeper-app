import { Link, useNavigate } from "react-router-dom";
import LoginForm from "./components/form";
import { StyledLogin } from "./style";

export default function LoginPage() {
  const navigate = useNavigate();

  const navigate2Register = () => navigate("/register");

  return (
    <StyledLogin>
      <div>
        <h1>Contact Keeper</h1>
        <LoginForm />
        <div>
          <p>Ainda não tem uma conta?</p>
          <Link to="/register" onClick={navigate2Register}>
            Cadastre-se
          </Link>
        </div>
      </div>
    </StyledLogin>
  );
}
