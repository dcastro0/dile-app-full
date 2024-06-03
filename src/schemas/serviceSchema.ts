import { z } from "zod";

const serviceSchema = z.object({
  id: z.number().nullish(),
  name: z.string().min(1, "Name is required"),
  name_client: z.string().min(1, "Client name is required"),
  phone: z.string().min(1, "Phone is required"),
  price: z.string().min(1, "Price is required"),
  observation: z.string().min(1, "Observation is required"),
  progress: z.number().int().min(1, "Choose progress level"),
  resolved_item: z.array(
    z.object({
      name: z.string().min(1, "Resolved item name is required"),
    })
  ),
});

export default serviceSchema