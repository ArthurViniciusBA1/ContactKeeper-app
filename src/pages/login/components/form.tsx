import { Button, TextField } from "@mui/material";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginData, loginSchema } from "../validators";
import { useAuth } from "../../../hooks/useAuth";
import { useForm } from "react-hook-form";

export default function LoginForm() {
  const { signIn } = useAuth();
  const { register, handleSubmit } = useForm<loginData>({
    resolver: zodResolver(loginSchema),
  });

  return (
    <form onSubmit={handleSubmit(signIn)}>
      <TextField
        label="Email"
        variant="outlined"
        inputProps={{ ...register("email") }}
      />

      <TextField
        label="Senha"
        variant="outlined"
        type="password"
        inputProps={{ ...register("password") }}
      />

      <Button variant="contained" type="submit">
        Login
      </Button>
    </form>
  );
}
