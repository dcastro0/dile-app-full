import { db } from "@/prisma";
import serviceSchema from "@/schemas/serviceSchema";
import { z } from "zod";


export async function POST(request: Request): Promise<Response> {
  try {
    const data = await request.json();

    const parsedData = serviceSchema.parse(data);

    const {
      name,
      name_client,
      phone,
      price,
      observation,
      progress,
      resolved_item,
    } = parsedData;

    const service = await db.service.create({
      data: {
        name,
        name_client,
        phone,
        date_create: new Date().toISOString(),
        price: parseFloat(price),
        observation,
        progress,
        completed: progress === 8? true : false,
        category_id: 1,
        resolved_item: {
          create: resolved_item.map((item) => ({
            name: item.name,
          })),
        },
      },
      include: {
        resolved_item: true,
      },
    });

    return new Response(JSON.stringify(service), { status: 201 });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return new Response(
        JSON.stringify({ error: error.errors.map((e) => e.message) }),
        { status: 400 }
      );
    }
    console.error("Error creating service:", error);
    return new Response(JSON.stringify({ error: "Internal Server Error" }), {
      status: 500,
    });
  }
}
