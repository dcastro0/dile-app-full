import { z } from "zod";

const loginSchema = z.object({
  email: z.string().min(1, "E-Mail é obrigatório"),
  password: z.string().min(1, "Senha é obrigatória"),
});

export { loginSchema };
