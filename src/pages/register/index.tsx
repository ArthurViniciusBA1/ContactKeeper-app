import { Link } from "react-router-dom";
import RegisterForm from "./components/form";
import { StyledRegister } from "./style";

export default function RegisterPage() {
  return (
    <StyledRegister>
      <div>
        <h1>Cadastre-se</h1>
        <RegisterForm />
        <div>
          <p>Já tem conta?</p>
          <Link to={"/"}>Faça login</Link>
        </div>
      </div>
    </StyledRegister>
  );
}
