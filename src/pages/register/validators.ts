import { z } from "zod";

export const registerSchema = z
  .object({
    name: z.string().nonempty("O nome é obrigatório"),
    email: z.string().email("Deve ser um email válido"),
    password: z
      .string()
      .min(8, "A senha deve ter no mínimo 8 caracteres")
      .regex(/[A-Z]/, "A senha deve conter pelo menos uma letra maiúscula")
      .regex(/[a-z]/, "A senha deve conter pelo menos uma letra minúscula")
      .regex(/\d/, "A senha deve conter pelo menos um número")
      .regex(
        /[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]+/,
        "A senha deve conter pelo menos um caractere especial"
      ),
    confirmPassword: z.string(),
    telephone: z
      .string()
      .min(10, "O telefone deve ter no mínimo 10 caracteres"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "As senhas não coincidem",
    path: ["confirmPassword"],
  });

export type registerData = z.infer<typeof registerSchema>;
