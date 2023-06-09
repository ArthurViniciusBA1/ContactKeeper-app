import { Button, TextField } from "@mui/material";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginData, loginSchema } from "../validators";
import { useForm } from "react-hook-form";
import { useAuthContext } from "../../../providers/AuthProvider";
import { StyledLoginForm } from "./style";

export default function LoginForm() {
  const { signIn } = useAuthContext();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<loginData>({
    mode: "onBlur",
    resolver: zodResolver(loginSchema),
  });

  return (
    <StyledLoginForm onSubmit={handleSubmit(signIn)}>
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

      <Button variant="contained" type="submit">
        Login
      </Button>
    </StyledLoginForm>
  );
}
