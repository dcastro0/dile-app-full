import { db } from "@/prisma";
import { z } from "zod";

const idSchema = z.string().regex(/^\d+$/, "ID must be a valid number.");

export async function PATCH(
  request: Request,
  { id }: Record<string, string>
): Promise<Response> {
  try {
    const parsedId = idSchema.parse(id);

    const updatedRecord = await db.service.update({
      where: { id: parseInt(parsedId) },
      data: { archived: true },
    });

    return new Response(JSON.stringify(updatedRecord), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return new Response(JSON.stringify({ error: error.errors }), {
        status: 400,
        headers: {
          "Content-Type": "application/json",
        },
      });
    }

    return new Response(
      JSON.stringify({
        error: "Internal Server Error",
      }),
      {
        status: 400,
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  }
}
