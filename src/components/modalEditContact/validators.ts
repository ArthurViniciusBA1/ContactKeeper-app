import { z } from "zod";

export const editSchema = z.object({
  name: z.string().nonempty("O nome é obrigatório").optional(),
  email: z.string().email("Deve ser um email válido").optional(),
  telephone: z
    .string()
    .min(10, "O telefone deve ter no mínimo 10 caracteres")
    .optional(),
});

export type editData = z.infer<typeof editSchema>;
