import { Button, TextField } from "@mui/material";
import { zodResolver } from "@hookform/resolvers/zod";
import { registerSchema, registerData } from "../validators";
import { useAuth } from "../../../hooks/useAuth";
import { useForm } from "react-hook-form";

export default function RegisterForm() {
  const { signIn } = useAuth();
  const { register, handleSubmit } = useForm<registerData>({
    resolver: zodResolver(registerSchema),
  });

  return (
    <form onSubmit={handleSubmit(signIn)}>
      <TextField
        label="Nome"
        variant="outlined"
        inputProps={{ ...register("name") }}
      />
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
      <TextField
        label="Telefone"
        variant="outlined"
        inputProps={{ ...register("telephone") }}
      />

      <Button variant="contained" type="submit">
        Login
      </Button>
    </form>
  );
}
