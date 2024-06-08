import { db } from "@/prisma";

export async function GET(request: Request): Promise<Response> {
  try {
    const services = await db.service.findMany({
      where: {
        archived: true,
      },
    });

    return new Response(JSON.stringify(services), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (error) {
    console.error("Error fetching archived services:", error);

    return new Response(JSON.stringify({ error: "Internal Server Error" }), {
      status: 500,
      headers: {
        "Content-Type": "application/json",
      },
    });
  }
}
