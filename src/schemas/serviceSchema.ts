import { z } from "zod";

const serviceSchema = z.object({
  id: z.number().nullish(),
  name: z.string().min(1, "Nome é obrigatório"),
  name_client: z.string().min(1, "Nome do Cliente é obrigatório"),
  phone: z.string().min(1, "Telefone é obrigatório"),
  price: z.string().min(1, "Valor é obrigatório"),
  observation: z.string().min(1, "Observação é obrigatório"),
  progress: z.number().int().min(1, "Escolha o nível de progresso"),
  resolved_item: z.array(
    z.object({
      name: z.string().min(1, "O item resolvido é obrigatório"),
    })
  ),
});

export default serviceSchema;
