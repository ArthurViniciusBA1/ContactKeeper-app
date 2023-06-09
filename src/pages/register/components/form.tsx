import { Button, TextField } from "@mui/material";
import { zodResolver } from "@hookform/resolvers/zod";
import { registerSchema, registerData } from "../validators";
import { useForm } from "react-hook-form";
import { useAuthContext } from "../../../providers/AuthProvider";
import { StyledRegisterForm } from "./style";

export default function RegisterForm() {
  const { signIn } = useAuthContext();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<registerData>({
    mode: "onBlur",
    resolver: zodResolver(registerSchema),
  });

  return (
    <StyledRegisterForm onSubmit={handleSubmit(signIn)}>
      <TextField
        label="Nome"
        variant="outlined"
        inputProps={{ ...register("name") }}
      />
      {errors.name && <small>{errors.name.message}</small>}

      <TextField
        label="Email"
        variant="outlined"
        inputProps={{ ...register("email") }}
      />
      {errors.email && <small>{errors.email.message}</small>}

      <TextField
        label="Senha"
        variant="outlined"
        type="password"
        inputProps={{ ...register("password") }}
      />
      {errors.password && <small>{errors.password.message}</small>}

      <TextField
        label="Confirme a senha"
        variant="outlined"
        type="password"
        inputProps={{ ...register("confirmPassword") }}
      />
      {errors.confirmPassword && (
        <small>{errors.confirmPassword.message}</small>
      )}

      <TextField
        label="Telefone"
        variant="outlined"
        inputProps={{ ...register("telephone") }}
      />
      {errors.telephone && <small>{errors.telephone.message}</small>}

      <Button variant="contained" type="submit">
        Login
      </Button>
    </StyledRegisterForm>
  );
}
