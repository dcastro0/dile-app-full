import { db } from "@/prisma";
import { ResolvedItem } from "@prisma/client";

export async function POST(request: Request) {
  try {
    const data = await request.json();

    const { 
      name, 
      name_client, 
      phone, 
      price, 
      observation, 
      progress, 
      resolved_item 
    } = data;

    if (!name || !name_client || !phone || !price || progress === undefined) {
      return new Response(
        JSON.stringify({ error: "All required fields must be provided" }),
        { status: 400 }
      );
    }

   
    const service = await db.service.create({
      data: {
        name,
        name_client,
        phone,
        date_create: new Date().toISOString(), 
        price: parseFloat(price),
        observation,
        progress,
        category_id: 1, 
        resolved_item: {
          create: resolved_item.map((item: ResolvedItem) => ({
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
    console.error("Error creating service:", error);
    return new Response(JSON.stringify({ error: "Internal Server Error" }), { status: 500 });
  }
}
