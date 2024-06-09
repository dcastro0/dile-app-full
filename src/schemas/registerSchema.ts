import { z } from "zod";

const registerSchema = z.object({
  email: z.string().min(1, "E-Mail é obrigatório"),
  password: z.string().min(1, "Senha é obrigatória"),
  name: z.string().min(1, "Nome é obrigatório"),
});

export { registerSchema };
