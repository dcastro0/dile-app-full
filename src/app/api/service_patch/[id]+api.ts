import { db } from "@/prisma";
import { z } from "zod";

export async function PATCH(
  request: Request,
  { id }: Record<string, string>
): Promise<Response> {
  try {
    const updatedRecord = await db.service.update({
      where: { id: parseInt(id) },
      data: { archived: true },
    });

    return new Response(JSON.stringify(updatedRecord), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return new Response(JSON.stringify({ error: error.errors }), {
        status: 400,
        headers: { "Content-Type": "application/json" },
      });
    } else if (error instanceof Error) {
      return new Response(JSON.stringify({ error: error.message }), {
        status: 500,
        headers: { "Content-Type": "application/json" },
      });
    } else {
      return new Response(JSON.stringify({ error: "Unknown error" }), {
        status: 500,
        headers: { "Content-Type": "application/json" },
      });
    }
  }
}
