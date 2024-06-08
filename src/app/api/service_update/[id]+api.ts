import { db } from "@/prisma";
import { z } from "zod";

const serviceSchema = z.object({
  id: z.number(),
  name: z.string().min(1, "Name is required"),
  name_client: z.string().min(1, "Client name is required"),
  phone: z.string().min(1, "Phone is required"),
  price: z.string().min(1, "Price is required"),
  observation: z.string().min(1, "Observation is required"),
  progress: z
    .number()
    .int()
    .nonnegative("Progress must be a non-negative integer"),
  resolved_item: z.array(
    z.object({
      name: z.string().min(1, "Resolved item name is required"),
    })
  ),
});

export async function PUT(request: Request): Promise<Response> {
  try {
    const data = await request.json();
    const parsedData = serviceSchema.parse(data);

    const {
      id,
      name,
      name_client,
      phone,
      price,
      observation,
      progress,
      resolved_item,
    } = parsedData;

    const service = await db.service.update({
      where: { id },
      data: {
        name,
        name_client,
        phone,
        price: parseFloat(price),
        observation,
        progress,
        completed: progress === 8,
        resolved_item: {
          deleteMany: {},
          create: resolved_item.map((item) => ({ name: item.name })),
        },
      },
      include: {
        resolved_item: true,
      },
    });

    return new Response(JSON.stringify(service), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (error) {
    if (error instanceof z.ZodError) {
      console.error("Validation error:", error.errors);
      return new Response(
        JSON.stringify({ error: error.errors.map((e) => e.message) }),
        {
          status: 400,
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
    }

    console.error("Error updating service:", error);
    return new Response(JSON.stringify({ error: "Internal Server Error" }), {
      status: 500,
      headers: {
        "Content-Type": "application/json",
      },
    });
  }
}
